// ==========================================================================
// INK TRAIL // THE BLUEPRINT UNIVERSE
// Organic calligraphy brush trail & ink particle splatter system
// ==========================================================================

export class InkTrail {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.points = [];
    this.splatters = [];
    this.maxPoints = 28;
    this.mouse = { x: 0, y: 0, prevX: 0, prevY: 0, speed: 0 };
    this.active = true;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    window.addEventListener('mousemove', (e) => {
      const dx = e.clientX - this.mouse.prevX;
      const dy = e.clientY - this.mouse.prevY;
      this.mouse.speed = Math.sqrt(dx * dx + dy * dy);

      this.mouse.prevX = e.clientX;
      this.mouse.prevY = e.clientY;
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;

      if (!this.active) return;

      this.points.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.max(2, Math.min(14, this.mouse.speed * 0.35)),
        alpha: 0.65,
        color: this.mouse.speed > 25 ? '#FF2233' : '#173C5B'
      });

      if (this.points.length > this.maxPoints) {
        this.points.shift();
      }

      // Spawn droplet when moving fast
      if (this.mouse.speed > 35 && Math.random() > 0.6) {
        this.spawnSplatter(e.clientX, e.clientY, 3);
      }
    });

    window.addEventListener('mousedown', (e) => {
      this.spawnSplatter(e.clientX, e.clientY, 16);
    });

    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  spawnSplatter(x, y, count = 10) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 2;
      this.splatters.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 4 + 1.5,
        alpha: 0.85,
        decay: Math.random() * 0.03 + 0.015,
        color: Math.random() > 0.4 ? '#FF2233' : '#173C5B'
      });
    }
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 1. Draw smooth brush stroke using quadratic curves
    if (this.points.length > 2) {
      for (let i = 1; i < this.points.length - 1; i++) {
        const p1 = this.points[i];
        const p2 = this.points[i + 1];

        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;

        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);

        this.ctx.strokeStyle = p1.color;
        this.ctx.globalAlpha = p1.alpha;
        this.ctx.lineWidth = p1.size;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.stroke();

        // Decay stroke
        p1.alpha *= 0.92;
        p1.size *= 0.96;
      }
    }

    // Filter dead points
    this.points = this.points.filter(p => p.alpha > 0.05);

    // 2. Draw splatters
    for (let i = this.splatters.length - 1; i >= 0; i--) {
      const s = this.splatters[i];
      s.x += s.vx;
      s.y += s.vy;
      s.vx *= 0.92;
      s.vy *= 0.92;
      s.alpha -= s.decay;

      if (s.alpha <= 0) {
        this.splatters.splice(i, 1);
        continue;
      }

      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = s.color;
      this.ctx.globalAlpha = s.alpha;
      this.ctx.fill();
    }
    this.ctx.globalAlpha = 1.0;
  }
}
