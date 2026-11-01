// ==========================================================================
// PROJECT VISUALIZERS // THE BLUEPRINT UNIVERSE
// Real Interactive Graphic Engines for All 6 Chronicles (Exploded Precast, Beam Mechanics, Topo Map, etc.)
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

  // 1. Precast BIM: Interactive 3D Exploded Joint Assembly
  initPrecastVisualizer() {
    const canvas = document.getElementById('canvas-precast-interactive');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(4.5, 3.8, 5.5);
    camera.lookAt(0, 0.8, 0);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const amb = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(amb);
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(5, 8, 5);
    scene.add(dir);

    const root = new THREE.Group();
    scene.add(root);

    // Column + Corbel
    const colMat = new THREE.MeshStandardMaterial({ color: 0x14212D, roughness: 0.3 });
    const col = new THREE.Mesh(new THREE.BoxGeometry(0.8, 4.0, 0.8), colMat);
    col.position.y = 1.0;
    root.add(col);

    const corbelMat = new THREE.MeshStandardMaterial({ color: 0xff2233, roughness: 0.3 });
    const corbel = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.5, 0.8), corbelMat);
    corbel.position.set(0.2, 1.2, 0);
    root.add(corbel);

    // Inverted-T Beam resting on Corbel
    const beamMat = new THREE.MeshStandardMaterial({ color: 0x173C5B, roughness: 0.3 });
    const beam = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.8, 3.4), beamMat);
    beam.position.set(0.7, 1.85, 0);
    root.add(beam);

    // Neoprene Pad (10mm)
    const padMat = new THREE.MeshStandardMaterial({ color: 0xff2233, roughness: 0.1 });
    const pad = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.08, 0.7), padMat);
    pad.position.set(0.45, 1.48, 0);
    root.add(pad);

    // Hollow-Core Slab Planks
    const slabGroup = new THREE.Group();
    const slabMat = new THREE.MeshStandardMaterial({ color: 0xF7FBFF, roughness: 0.2 });

    for (let s = -1; s <= 1; s++) {
      const slab = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.35, 0.95), slabMat);
      slab.position.set(1.9, 2.1, s * 1.05);
      slabGroup.add(slab);
    }
    root.add(slabGroup);

    // Wireframe Edges
    const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.8, 0.35, 3.2));
    const edgeLines = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x399dd6 }));
    edgeLines.position.set(1.9, 2.1, 0);
    slabGroup.add(edgeLines);

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
      btnExplode.textContent = isExploded ? '🔄 RESTORE ASSEMBLY' : '💥 EXPLODE SLABS';
    });

    function anim() {
      requestAnimationFrame(anim);
      if (!isDragging) targetRot.y += 0.003;
      root.rotation.y += (targetRot.y - root.rotation.y) * 0.08;
      root.rotation.x += (targetRot.x - root.rotation.x) * 0.08;

      explodeProgress += ((isExploded ? 1.0 : 0.0) - explodeProgress) * 0.08;
      slabGroup.position.y = explodeProgress * 1.4;
      slabGroup.position.x = explodeProgress * 0.6;
      beam.position.y = 1.85 + explodeProgress * 0.5;

      renderer.render(scene, camera);
    }
    anim();
  }

  // 2. Theory of Structures: Real-Time Interactive Beam Mechanics Solver
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

      // Update KaTeX / DOM formula text
      const readout = document.getElementById('beam-formula-readout');
      if (readout) {
        readout.innerHTML = `P = ${P.toFixed(0)} kN @ x = ${a.toFixed(1)}m | R_A = ${RA.toFixed(1)} kN | R_B = ${RB.toFixed(1)} kN | <strong>M_max = ${Mmax.toFixed(1)} kN·m</strong>`;
      }

      // 1. Draw Beam Baseline (y = 80)
      const beamY = 75;
      const startX = 60;
      const endX = w - 60;
      const spanPx = endX - startX;

      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(startX, beamY);
      ctx.lineTo(endX, beamY);
      ctx.stroke();

      // Supports (Pin at A, Roller at B)
      ctx.fillStyle = '#399DD6';
      // Triangle pin A
      ctx.beginPath();
      ctx.moveTo(startX, beamY);
      ctx.lineTo(startX - 12, beamY + 20);
      ctx.lineTo(startX + 12, beamY + 20);
      ctx.closePath();
      ctx.fill();

      // Triangle roller B
      ctx.beginPath();
      ctx.moveTo(endX, beamY);
      ctx.lineTo(endX - 12, beamY + 16);
      ctx.lineTo(endX + 12, beamY + 16);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.arc(endX - 6, beamY + 20, 3, 0, Math.PI * 2);
      ctx.arc(endX + 6, beamY + 20, 3, 0, Math.PI * 2);
      ctx.fill();

      // Point Load Arrow at x = a
      const loadX = startX + (a / L) * spanPx;
      ctx.strokeStyle = '#FF2233';
      ctx.fillStyle = '#FF2233';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(loadX, beamY - 45);
      ctx.lineTo(loadX, beamY - 4);
      ctx.stroke();
      // Arrowhead
      ctx.beginPath();
      ctx.moveTo(loadX - 6, beamY - 14);
      ctx.lineTo(loadX, beamY - 2);
      ctx.lineTo(loadX + 6, beamY - 14);
      ctx.closePath();
      ctx.fill();

      ctx.font = 'bold 12px "Fira Code", monospace';
      ctx.fillText(`P = ${P}kN`, loadX - 25, beamY - 50);

      // 2. Draw Bending Moment Diagram (BMD) at y = 175
      const bmdY = 160;
      ctx.strokeStyle = '#399DD6';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(startX, bmdY);
      ctx.lineTo(endX, bmdY);
      ctx.stroke();

      // Triangle Moment Peak
      const peakMomentH = Math.min(65, (Mmax / 130) * 65);
      ctx.fillStyle = 'rgba(57, 157, 214, 0.25)';
      ctx.strokeStyle = '#399DD6';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(startX, bmdY);
      ctx.lineTo(loadX, bmdY + peakMomentH);
      ctx.lineTo(endX, bmdY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#399DD6';
      ctx.fillText(`BMD: M_max = +${Mmax.toFixed(1)} kN·m`, loadX + 10, bmdY + peakMomentH);

      // 3. Draw Deflected Elastic Curve v(x) at y = 250
      const defY = 240;
      ctx.strokeStyle = '#FF2233';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([4, 2]);
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
        const vy = defY + (v / 80) * 45;
        ctx.lineTo(startX + px, vy);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#FF2233';
      ctx.fillText('ELASTIC DEFLECTION v(x)', startX + 10, defY + 35);
    }

    draw();
  }

  // 3. ETHIOPIA//360 Interactive Topographic SVG Atlas
  initAtlasVisualizer() {
    const pins = document.querySelectorAll('.atlas-node');
    const readout = document.getElementById('atlas-coord-readout');

    pins.forEach(pin => {
      pin.addEventListener('mouseenter', () => {
        sound.playPencilScratch();
        const city = pin.getAttribute('data-city');
        const elev = pin.getAttribute('data-elev');
        const coord = pin.getAttribute('data-coord');
        if (readout) {
          readout.innerHTML = `SELECTED NODE: <strong class="text-crimson">${city}</strong> | ELEVATION: ${elev} | COORDINATES: ${coord}`;
        }
      });
    });
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
