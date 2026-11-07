// ==========================================================================
// PROJECT VISUALIZERS // THE BLUEPRINT UNIVERSE
// Real Interactive Graphic Engines for All Projects
// Precast BIM 4-Column Exploded Frame, Dual SFD/BMD Beam Solver, Topo Atlas & SQ3R
// ==========================================================================

import * as THREE from 'three';
import { sound } from './audio.js';

export class ProjectVisualizers {
  constructor() {
    this.initPrecastVisualizer();
    this.initBeamSolverVisualizer();
    this.initAtlasVisualizer();
    this.initSq3rVisualizer();
  }

  // 1. Precast BIM: Full 4-Column Bay Exploded Joint Assembly
  initPrecastVisualizer() {
    const canvas = document.getElementById('canvas-precast-interactive');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(5.2, 4.2, 6.2);
    camera.lookAt(0, 0.9, 0);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const amb = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(amb);
    const dir = new THREE.DirectionalLight(0xffffff, 1.6);
    dir.position.set(6, 10, 6);
    scene.add(dir);

    const rimBlue = new THREE.DirectionalLight(0x0088ff, 2.5);
    rimBlue.position.set(-6, 2, -4);
    scene.add(rimBlue);

    const root = new THREE.Group();
    scene.add(root);

    // Architectural Materials
    const colMat = new THREE.MeshStandardMaterial({ color: 0x181e26, roughness: 0.6, metalness: 0.1 });
    const corbelMat = new THREE.MeshStandardMaterial({ color: 0x222a36, roughness: 0.5, metalness: 0.2 });
    const beamMat = new THREE.MeshStandardMaterial({ color: 0x1f2733, roughness: 0.4, metalness: 0.25 });
    const padMat = new THREE.MeshStandardMaterial({ color: 0x00d4ff, roughness: 0.2, emissive: 0x004488, emissiveIntensity: 0.4 });
    const slabMat = new THREE.MeshStandardMaterial({ color: 0xdce3ed, roughness: 0.35, metalness: 0.15 });
    const edgeCyan = new THREE.LineBasicMaterial({ color: 0x00aaff, transparent: true, opacity: 0.85 });

    function addEdges(mesh, geo, mat = edgeCyan) {
      const e = new THREE.EdgesGeometry(geo);
      const l = new THREE.LineSegments(e, mat);
      mesh.add(l);
    }

    // A. 4 Precast Concrete Columns (400x400mm) with Corbel Brackets
    const colGroup = new THREE.Group();
    const colCoords = [
      { x: -1.7, z: -1.2 },
      { x:  1.7, z: -1.2 },
      { x: -1.7, z:  1.2 },
      { x:  1.7, z:  1.2 }
    ];

    const colGeo = new THREE.BoxGeometry(0.5, 2.8, 0.5);
    const corbelGeo = new THREE.BoxGeometry(0.4, 0.35, 0.45);

    colCoords.forEach(c => {
      const col = new THREE.Mesh(colGeo, colMat);
      col.position.set(c.x, 0.6, c.z);
      addEdges(col, colGeo);
      colGroup.add(col);

      // Corbel pointing inward
      const corbel = new THREE.Mesh(corbelGeo, corbelMat);
      const inwardX = c.x > 0 ? -0.32 : 0.32;
      corbel.position.set(c.x + inwardX, 1.1, c.z);
      addEdges(corbel, corbelGeo);
      colGroup.add(corbel);

      // Neoprene Bearing Pad (10mm thickness)
      const pad = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.05, 0.35), padMat);
      pad.position.set(c.x + inwardX, 1.3, c.z);
      colGroup.add(pad);
    });
    root.add(colGroup);

    // B. Longitudinal Inverted-T Ledge Beams
    const beamGroup = new THREE.Group();
    const beamGeo = new THREE.BoxGeometry(0.65, 0.55, 3.2);

    const beamL = new THREE.Mesh(beamGeo, beamMat);
    beamL.position.set(-1.38, 1.6, 0);
    addEdges(beamL, beamGeo);
    beamGroup.add(beamL);

    const beamR = new THREE.Mesh(beamGeo, beamMat);
    beamR.position.set(1.38, 1.6, 0);
    addEdges(beamR, beamGeo);
    beamGroup.add(beamR);

    root.add(beamGroup);

    // C. 4 Hollow-Core Slab Planks (1200mm width, 90mm bearing)
    const slabGroup = new THREE.Group();
    const slabGeo = new THREE.BoxGeometry(2.65, 0.28, 0.68);

    for (let s = -1.5; s <= 1.5; s += 1.0) {
      const slab = new THREE.Mesh(slabGeo, slabMat);
      slab.position.set(0, 1.88, s * 0.74);
      addEdges(slab, slabGeo);

      // Circular void markers at end face (simulating extruded hollow cores)
      const voidMat = new THREE.MeshBasicMaterial({ color: 0x090b0e });
      for (let v = -0.9; v <= 0.9; v += 0.45) {
        const voidCyl = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.02, 12), voidMat);
        voidCyl.rotation.z = Math.PI / 2;
        voidCyl.position.set(1.33, 0, v * 0.3);
        slab.add(voidCyl);
      }

      slabGroup.add(slab);
    }
    root.add(slabGroup);

    // Orbit State
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let targetRot = { x: 0.25, y: -0.65 };
    let isExploded = false;
    let explodeProgress = 0.0;

    canvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('mouseup', () => { isDragging = false; });
    canvas.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      targetRot.y += dx * 0.01;
      targetRot.x += dy * 0.01;
      prevMouse = { x: e.clientX, y: e.clientY };
    });

    const btnExplode = document.getElementById('btn-precast-explode');
    btnExplode?.addEventListener('click', (e) => {
      e.stopPropagation();
      isExploded = !isExploded;
      sound.playStructuralClack();
      btnExplode.innerHTML = isExploded ? '<span>RESTORE ASSEMBLY</span> <span class="arr">↺</span>' : '<span>EXPLODE 3D ASSEMBLY</span> <span class="arr">→</span>';
    });

    function anim() {
      requestAnimationFrame(anim);
      if (!isDragging) targetRot.y += 0.0025;
      root.rotation.y += (targetRot.y - root.rotation.y) * 0.08;
      root.rotation.x += (targetRot.x - root.rotation.x) * 0.08;

      explodeProgress += ((isExploded ? 1.0 : 0.0) - explodeProgress) * 0.08;

      // Explode choreography: Planks lift high, beams separate outward
      slabGroup.position.y = explodeProgress * 1.25;
      beamL.position.x = -1.38 - explodeProgress * 0.45;
      beamR.position.x =  1.38 + explodeProgress * 0.45;
      beamGroup.position.y = explodeProgress * 0.35;

      renderer.render(scene, camera);
    }
    anim();
  }

  // 2. Theory of Structures: Real-Time Dual SFD & BMD Beam Solver
  initBeamSolverVisualizer() {
    const canvas = document.getElementById('canvas-beam-solver');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const L = 10.0; // 10 meter span
    let a = 4.0; // Load location (meters)
    let P = 50.0; // Load magnitude (kN)
    let isDraggingLoad = false;

    const slider = document.getElementById('beam-load-slider');
    slider?.addEventListener('input', (e) => {
      a = parseFloat(e.target.value);
      draw();
    });

    canvas.addEventListener('mousedown', (e) => {
      isDraggingLoad = true;
      handleLoadMove(e);
    });
    window.addEventListener('mouseup', () => { isDraggingLoad = false; });
    canvas.addEventListener('mousemove', (e) => {
      if (isDraggingLoad) handleLoadMove(e);
    });

    function handleLoadMove(e) {
      const rect = canvas.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width;
      a = Math.max(0.5, Math.min(9.5, normX * L));
      if (slider) slider.value = a.toFixed(1);
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      // Reactions: R_A = P*(L-a)/L, R_B = P*a/L
      const b = L - a;
      const RA = (P * b) / L;
      const RB = (P * a) / L;
      const Mmax = (P * a * b) / L; // kNm

      // Update Formula Text
      const readout = document.getElementById('beam-formula-readout');
      if (readout) {
        readout.innerHTML = `<span>P = ${P.toFixed(0)} kN @ x = ${a.toFixed(1)}m</span> <span>R_A = ${RA.toFixed(1)} kN</span> <span>R_B = ${RB.toFixed(1)} kN</span> <span class="text-accent-blue">M_max = +${Mmax.toFixed(1)} kN·m</span>`;
      }

      const startX = 50;
      const endX = w - 50;
      const spanPx = endX - startX;
      const loadX = startX + (a / L) * spanPx;

      // --- 1. PHYSICAL BEAM & SUPPORTS (y = 60) ---
      const beamY = 55;

      // Baseline beam
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(startX, beamY);
      ctx.lineTo(endX, beamY);
      ctx.stroke();

      // Pin support A
      ctx.fillStyle = '#0088ff';
      ctx.beginPath();
      ctx.moveTo(startX, beamY);
      ctx.lineTo(startX - 10, beamY + 16);
      ctx.lineTo(startX + 10, beamY + 16);
      ctx.closePath();
      ctx.fill();

      // Roller support B
      ctx.beginPath();
      ctx.moveTo(endX, beamY);
      ctx.lineTo(endX - 10, beamY + 12);
      ctx.lineTo(endX + 10, beamY + 12);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.arc(endX - 5, beamY + 16, 2.5, 0, Math.PI * 2);
      ctx.arc(endX + 5, beamY + 16, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Point Load Arrow
      ctx.strokeStyle = '#ff3344';
      ctx.fillStyle = '#ff3344';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(loadX, beamY - 36);
      ctx.lineTo(loadX, beamY - 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(loadX - 5, beamY - 12);
      ctx.lineTo(loadX, beamY - 2);
      ctx.lineTo(loadX + 5, beamY - 12);
      ctx.closePath();
      ctx.fill();

      ctx.font = '600 11px "Fira Code", monospace';
      ctx.fillText(`P = ${P} kN`, loadX - 24, beamY - 42);

      // --- 2. DUAL DIAGRAMS: SFD (LEFT) & BMD (RIGHT) ---
      const splitX = w * 0.48;

      // --- A. SHEAR FORCE DIAGRAM (SFD) ---
      const sfdY = 160;
      const sfdScale = 0.8;
      ctx.strokeStyle = '#1d2430';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(startX, sfdY);
      ctx.lineTo(splitX - 15, sfdY);
      ctx.stroke();

      const sfdSpan = (splitX - 15) - startX;
      const sfdLoadX = startX + (a / L) * sfdSpan;

      // SFD Poly: +RA from start to load, then -RB from load to end
      const raH = RA * sfdScale;
      const rbH = RB * sfdScale;

      ctx.fillStyle = 'rgba(0, 136, 255, 0.2)';
      ctx.strokeStyle = '#0088ff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(startX, sfdY);
      ctx.lineTo(startX, sfdY - raH);
      ctx.lineTo(sfdLoadX, sfdY - raH);
      ctx.lineTo(sfdLoadX, sfdY + rbH);
      ctx.lineTo(splitX - 15, sfdY + rbH);
      ctx.lineTo(splitX - 15, sfdY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.font = '10px "Fira Code", monospace';
      ctx.fillStyle = '#0088ff';
      ctx.fillText(`SFD: +${RA.toFixed(1)} / -${RB.toFixed(1)} kN`, startX, sfdY + 45);

      // --- B. BENDING MOMENT DIAGRAM (BMD) ---
      const bmdStartX = splitX + 15;
      const bmdEndX = endX;
      const bmdSpan = bmdEndX - bmdStartX;
      const bmdLoadX = bmdStartX + (a / L) * bmdSpan;
      const bmdY = 160;
      const bmdH = Math.min(60, (Mmax / 130) * 60);

      ctx.strokeStyle = '#1d2430';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(bmdStartX, bmdY);
      ctx.lineTo(bmdEndX, bmdY);
      ctx.stroke();

      ctx.fillStyle = 'rgba(0, 212, 255, 0.22)';
      ctx.strokeStyle = '#00d4ff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(bmdStartX, bmdY);
      ctx.lineTo(bmdLoadX, bmdY + bmdH);
      ctx.lineTo(bmdEndX, bmdY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#00d4ff';
      ctx.fillText(`BMD: M_max = +${Mmax.toFixed(1)} kN·m`, bmdStartX, bmdY + 45);

      // --- 3. ELASTIC DEFLECTION CURVE v(x) (y = 255) ---
      const defY = 250;
      ctx.strokeStyle = '#ff3344';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.moveTo(startX, defY);

      for (let px = 0; px <= spanPx; px += 4) {
        const x = (px / spanPx) * L;
        let v = 0;
        if (x <= a) {
          v = (P * b * x * (L * L - b * b - x * x)) / (6 * L);
        } else {
          v = (P * a * (L - x) * (2 * L * x - x * x - a * a)) / (6 * L);
        }
        const vy = defY + (v / 85) * 36;
        ctx.lineTo(startX + px, vy);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#ff5566';
      ctx.font = '10px "Fira Code", monospace';
      ctx.fillText('ELASTIC DEFLECTION v(x) [PARABOLIC ENVELOPE]', startX, defY + 32);
    }

    draw();
  }

  // 3. ETHIOPIA//360 Interactive Digital Topographic Atlas
  initAtlasVisualizer() {
    const canvas = document.getElementById('canvas-topo-atlas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const rows = 20;
    const cols = 32;

    function renderTopo() {
      time += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Dark background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
      bgGrad.addColorStop(0, '#090b10');
      bgGrad.addColorStop(1, '#050608');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Draw Topographic Wireframe Grid (Isometric projection)
      const originX = w * 0.5;
      const originY = h * 0.24;
      const stepX = 13;
      const stepY = 6.5;

      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 180, 255, ${0.12 + (r / rows) * 0.28})`;
        ctx.lineWidth = 1;

        for (let c = 0; c < cols; c++) {
          const nx = (c - cols / 2) / 6;
          const ny = (r - rows / 2) / 5;
          const elevation = 
            Math.sin(nx * 1.8 + time * 0.5) * 12 +
            Math.cos(ny * 2.2 + nx * 0.8) * 16 +
            Math.sin(Math.sqrt(nx * nx + ny * ny) * 3 - time) * 10;

          const screenX = originX + (c - r) * stepX;
          const screenY = originY + (c + r) * stepY - elevation;

          if (c === 0) {
            ctx.moveTo(screenX, screenY);
          } else {
            ctx.lineTo(screenX, screenY);
          }
        }
        ctx.stroke();
      }

      // Draw Key Geological Markers
      const markers = [
        { label: 'SIMIEN PEAKS [4,550m]', rx: 0.28, ry: 0.38, pulse: 1.0 },
        { label: 'RIFT VALLEY TRENCH [-120m]', rx: 0.58, ry: 0.62, pulse: 0.7 },
        { label: 'LALIBELA MONOLITH [2,500m]', rx: 0.44, ry: 0.48, pulse: 0.9 }
      ];

      markers.forEach((m, idx) => {
        const mx = w * m.rx;
        const my = h * m.ry + Math.sin(time * 2 + idx) * 3;
        const pulseR = 4 + Math.sin(time * 3 + idx) * 2;

        ctx.beginPath();
        ctx.arc(mx, my, pulseR + 4, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 212, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mx, my, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#00d4ff';
        ctx.fill();

        ctx.font = '9px "Fira Code", monospace';
        ctx.fillStyle = '#a0c4e8';
        ctx.fillText(m.label, mx + 8, my + 3);
      });

      // HUD crosshairs & coordinates
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 0.8;
      ctx.strokeRect(10, 10, w - 20, h - 20);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = '9px "Fira Code", monospace';
      ctx.fillText(`GIS_LAT: 9.1450° N • GIS_LON: 40.4897° E`, 20, 26);
      ctx.fillText(`SRTM_30M_ELEVATION_SURFACE // LIVE WEBGL 2.0`, 20, h - 20);

      requestAnimationFrame(renderTopo);
    }

    renderTopo();
  }

  // 4. SQ3R Examination Simulator
  initSq3rVisualizer() {
    const timerEl = document.getElementById('sq3r-timer');
    if (!timerEl) return;

    let seconds = 3600;
    setInterval(() => {
      seconds--;
      if (seconds < 0) seconds = 3600;
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      timerEl.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }, 1000);
  }
}
