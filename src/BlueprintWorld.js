// ==========================================================================
// BLUEPRINT WORLD // THE ARCHITECTURAL MANHWA & GAME 3D ENGINE
// Real-Time Precast Citadel, Red Vanishing Rays, 3D Spatial Hologram Pins & Telemetry
// Inspired by Samana Studio & The Greatest Estate Developer
// ==========================================================================

import * as THREE from 'three';
import { MangaHatchShader } from './shaders.js';
import { sound } from './audio.js';

export class BlueprintWorld {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = null;
    this.camera = null;
    this.renderer = null;

    // Component Groups
    this.rootAssembly = null;
    this.groupGround = null;
    this.groupColumns = null;
    this.groupBeams = null;
    this.groupSlabs = null;
    this.groupStairs = null;
    this.groupPerspectiveRays = null;
    this.groupDomeVault = null;
    this.groupMangaHand = null;
    this.groupRelics = null;
    this.groupParticles = null;

    // Exploded View State
    this.explodedProgress = 0.0;
    this.targetExploded = 0.0;
    this.isExploded = false;

    // Visual Mode: 'crimson' (default manga), 'blueprint', or 'wireframe'
    this.visualMode = 'crimson';

    // Layer Controls
    this.layers = {
      columns: true,
      beams: true,
      slabs: true,
      stairs: true,
      perspectiveRays: true,
      dome: true,
      mangaHand: true,
      wireframe: false
    };

    // Auto-rotate toggle
    this.autoRotate = true;

    // Mouse & Inertia
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.targetRotation = { x: 0.28, y: -0.45 };
    this.rotationSpeed = { x: 0, y: 0.0012 };

    // Scroll tracking
    this.scrollY = 0;
    this.targetScrollProgress = 0;

    // Telemetry tracking
    this.clock = new THREE.Clock();
    this.frameCount = 0;
    this.lastFpsUpdate = 0;
    this.currentFps = 60;

    // Spatial Pin Anchors (3D Coordinates in world space)
    this.pinAnchors = {
      beam: new THREE.Vector3(0, 5.0, 3.0),
      bearing: new THREE.Vector3(1.24, 2.8, 0.0),
      corbel: new THREE.Vector3(0, 2.2, 3.0),
      stairs: new THREE.Vector3(0, 1.8, 1.5)
    };

    this.init();
  }

  init() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x09090b, 0.026);

    const width = this.canvas.clientWidth || window.innerWidth;
    const height = this.canvas.clientHeight || window.innerHeight;

    this.camera = new THREE.PerspectiveCamera(44, width / height, 0.1, 150);
    this.camera.position.set(10.5, 7.8, 14.2);
    this.camera.lookAt(0.5, 2.2, 0);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.resize();

    // Cinematic Game Lighting
    const amb = new THREE.AmbientLight(0xffffff, 0.65);
    this.scene.add(amb);

    const dir1 = new THREE.DirectionalLight(0xffffff, 1.5);
    dir1.position.set(12, 18, 14);
    this.scene.add(dir1);

    this.accentLight = new THREE.PointLight(0xff2233, 4.0, 42);
    this.accentLight.position.set(-6, 5, 2);
    this.scene.add(this.accentLight);

    this.cyanLight = new THREE.PointLight(0x399dd6, 2.8, 35);
    this.cyanLight.position.set(7, 3, -4);
    this.scene.add(this.cyanLight);

    // Build the World
    this.buildWorld();

    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('scroll', () => this.onScroll());

    this.setupInteractions();
    this.animate();
  }

  resize() {
    const width = this.canvas.clientWidth || window.innerWidth;
    const height = this.canvas.clientHeight || window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  onMouseMove(e) {
    const normX = (e.clientX / window.innerWidth) * 2 - 1;
    const normY = -(e.clientY / window.innerHeight) * 2 + 1;

    this.mouse.targetX = normX;
    this.mouse.targetY = normY;

    if (!this.isDragging) {
      this.targetRotation.y = -0.45 + normX * 0.32;
      this.targetRotation.x = 0.28 - normY * 0.22;
    }
  }

  onScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll > 0) {
      this.targetScrollProgress = Math.min(1.0, Math.max(0.0, window.scrollY / (window.innerHeight * 1.5)));
    }
  }

  setupInteractions() {
    const c = this.canvas;

    c.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    c.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.previousMousePosition.x;
      const dy = e.clientY - this.previousMousePosition.y;

      this.targetRotation.y += dx * 0.0075;
      this.targetRotation.x += dy * 0.0075;
      this.targetRotation.x = Math.max(-0.35, Math.min(1.3, this.targetRotation.x));

      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });
  }

  createMangaMaterial(baseColorHex, rimColorHex = 0xff2233) {
    return new THREE.ShaderMaterial({
      uniforms: {
        uLightDir: { value: new THREE.Vector3(3, 5, 4).normalize() },
        uColor: { value: new THREE.Color(baseColorHex) },
        uRimColor: { value: new THREE.Color(rimColorHex) },
        uHatchDensity: { value: 28.0 },
        uTime: { value: 0 }
      },
      vertexShader: MangaHatchShader.vertexShader,
      fragmentShader: MangaHatchShader.fragmentShader
    });
  }

  buildWorld() {
    this.rootAssembly = new THREE.Group();
    this.rootAssembly.position.set(0, 0, 0);
    this.scene.add(this.rootAssembly);

    // Architectural & Comic Inked Materials
    this.matColumn = new THREE.MeshStandardMaterial({ color: 0xf4f4f5, roughness: 0.25 });
    this.matCorbel = new THREE.MeshStandardMaterial({ color: 0x8ccdf2, roughness: 0.35 });
    this.matBeam = new THREE.MeshStandardMaterial({ color: 0x173c5b, roughness: 0.3, metalness: 0.2 });
    this.matSlab = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });
    this.matStair = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.15, metalness: 0.1 });
    this.matRedVector = new THREE.LineBasicMaterial({ color: 0xff2233, transparent: true, opacity: 0.9, linewidth: 2 });
    this.matCyanVector = new THREE.LineBasicMaterial({ color: 0x399dd6, transparent: true, opacity: 0.65 });
    this.matGold = new THREE.MeshStandardMaterial({ color: 0xe5a93c, roughness: 0.3, metalness: 0.6 });
    this.matInkEdge = new THREE.LineBasicMaterial({ color: 0x09090b, linewidth: 2 });
    this.matCrimsonEdge = new THREE.LineBasicMaterial({ color: 0xff2233, linewidth: 2 });

    // 1. Cyber-Manhwa Grid Floor
    this.groupGround = new THREE.Group();
    const grid = new THREE.GridHelper(26, 52, 0xff2233, 0x173c5b);
    grid.position.y = -0.01;
    this.groupGround.add(grid);

    // Column Footings with Inked Edges
    const footingGeo = new THREE.BoxGeometry(1.4, 0.25, 1.4);
    const footingEdges = new THREE.EdgesGeometry(footingGeo);
    const colCoords = [
      { x: -4, z: -3 }, { x: 0, z: -3 }, { x: 4, z: -3 },
      { x: -4, z: 3 },  { x: 0, z: 3 },  { x: 4, z: 3 }
    ];

    colCoords.forEach(c => {
      const pad = new THREE.Mesh(footingGeo, this.matCorbel);
      pad.position.set(c.x, 0.125, c.z);
      this.groupGround.add(pad);
      const padLine = new THREE.LineSegments(footingEdges, this.matCrimsonEdge);
      padLine.position.copy(pad.position);
      this.groupGround.add(padLine);
    });
    this.rootAssembly.add(this.groupGround);

    // 2. Precast Columns with Structural Corbels
    this.groupColumns = new THREE.Group();
    const colGeo = new THREE.BoxGeometry(0.65, 5.6, 0.65);
    const corbelGeo = new THREE.BoxGeometry(0.95, 0.45, 0.65);
    const colEdges = new THREE.EdgesGeometry(colGeo);
    const corbelEdges = new THREE.EdgesGeometry(corbelGeo);

    colCoords.forEach(c => {
      const colGroup = new THREE.Group();
      colGroup.position.set(c.x, 2.8, c.z);

      const colMesh = new THREE.Mesh(colGeo, this.matColumn);
      colGroup.add(colMesh);
      const colLine = new THREE.LineSegments(colEdges, this.matInkEdge);
      colGroup.add(colLine);

      const corbel1 = new THREE.Mesh(corbelGeo, this.matCorbel);
      corbel1.position.set(0, -0.6, 0);
      colGroup.add(corbel1);
      const corbel1Line = new THREE.LineSegments(corbelEdges, this.matCrimsonEdge);
      corbel1Line.position.copy(corbel1.position);
      colGroup.add(corbel1Line);

      const corbel2 = new THREE.Mesh(corbelGeo, this.matCorbel);
      corbel2.position.set(0, 1.9, 0);
      colGroup.add(corbel2);
      const corbel2Line = new THREE.LineSegments(corbelEdges, this.matCrimsonEdge);
      corbel2Line.position.copy(corbel2.position);
      colGroup.add(corbel2Line);

      this.groupColumns.add(colGroup);
    });
    this.rootAssembly.add(this.groupColumns);

    // 3. Inverted-T Precast Beams
    this.groupBeams = new THREE.Group();
    this.beamsL1 = new THREE.Group();
    this.beamsL2 = new THREE.Group();

    const beamGeo = new THREE.BoxGeometry(8.8, 0.65, 0.75);
    const beamEdges = new THREE.EdgesGeometry(beamGeo);

    const b1_A = new THREE.Mesh(beamGeo, this.matBeam);
    b1_A.position.set(0, 2.5, -3);
    this.beamsL1.add(b1_A);
    const b1_A_Line = new THREE.LineSegments(beamEdges, this.matCrimsonEdge);
    b1_A_Line.position.copy(b1_A.position);
    this.beamsL1.add(b1_A_Line);

    const b1_B = new THREE.Mesh(beamGeo, this.matBeam);
    b1_B.position.set(0, 2.5, 3);
    this.beamsL1.add(b1_B);
    const b1_B_Line = new THREE.LineSegments(beamEdges, this.matCrimsonEdge);
    b1_B_Line.position.copy(b1_B.position);
    this.beamsL1.add(b1_B_Line);

    const b2_A = new THREE.Mesh(beamGeo, this.matBeam);
    b2_A.position.set(0, 5.0, -3);
    this.beamsL2.add(b2_A);
    const b2_A_Line = new THREE.LineSegments(beamEdges, this.matCrimsonEdge);
    b2_A_Line.position.copy(b2_A.position);
    this.beamsL2.add(b2_A_Line);

    const b2_B = new THREE.Mesh(beamGeo, this.matBeam);
    b2_B.position.set(0, 5.0, 3);
    this.beamsL2.add(b2_B);
    const b2_B_Line = new THREE.LineSegments(beamEdges, this.matCrimsonEdge);
    b2_B_Line.position.copy(b2_B.position);
    this.beamsL2.add(b2_B_Line);

    this.groupBeams.add(this.beamsL1);
    this.groupBeams.add(this.beamsL2);
    this.rootAssembly.add(this.groupBeams);

    // 4. Precast Hollow-Core Floor Slabs
    this.groupSlabs = new THREE.Group();
    this.slabsL1 = new THREE.Group();
    this.slabsL2 = new THREE.Group();

    for (let i = -3; i <= 3; i++) {
      const slabGeo = new THREE.BoxGeometry(1.18, 0.32, 5.85);
      const slabEdges = new THREE.EdgesGeometry(slabGeo);

      const s1 = new THREE.Mesh(slabGeo, this.matSlab);
      s1.position.set(i * 1.24, 2.8, 0);
      this.slabsL1.add(s1);
      const s1Line = new THREE.LineSegments(slabEdges, this.matInkEdge);
      s1Line.position.copy(s1.position);
      this.slabsL1.add(s1Line);

      const s2 = new THREE.Mesh(slabGeo, this.matSlab);
      s2.position.set(i * 1.24, 5.3, 0);
      this.slabsL2.add(s2);
      const s2Line = new THREE.LineSegments(slabEdges, this.matInkEdge);
      s2Line.position.copy(s2.position);
      this.slabsL2.add(s2Line);
    }
    this.groupSlabs.add(this.slabsL1);
    this.groupSlabs.add(this.slabsL2);
    this.rootAssembly.add(this.groupSlabs);

    // 5. Grand Architectural Staircase
    this.groupStairs = new THREE.Group();
    const stepCount = 16;
    const stepWidth = 3.2;
    const stepDepth = 0.38;
    const stepHeight = 0.2;

    for (let s = 0; s < stepCount; s++) {
      const stepGeo = new THREE.BoxGeometry(stepWidth, stepHeight, stepDepth);
      const step = new THREE.Mesh(stepGeo, this.matStair);
      step.position.set(0, (s + 1) * stepHeight, (stepCount / 2 - s) * stepDepth);
      this.groupStairs.add(step);

      const stepEdges = new THREE.EdgesGeometry(stepGeo);
      const stepLine = new THREE.LineSegments(stepEdges, this.matRedVector);
      stepLine.position.copy(step.position);
      this.groupStairs.add(stepLine);
    }
    this.rootAssembly.add(this.groupStairs);

    // 6. Radiant Red Vanishing Lines
    this.groupPerspectiveRays = new THREE.Group();
    const focalPoint = new THREE.Vector3(0, 9.2, -6.5);

    for (let r = -7; r <= 7; r++) {
      const targetPoint = new THREE.Vector3(r * 2.2, -0.2, 7.5);
      const rayGeo = new THREE.BufferGeometry().setFromPoints([focalPoint, targetPoint]);
      const rayLine = new THREE.Line(rayGeo, this.matRedVector);
      this.groupPerspectiveRays.add(rayLine);
    }
    for (let h = 0; h <= 6; h += 1.5) {
      const pLeft = new THREE.Vector3(-10, h, 2);
      const pRight = new THREE.Vector3(10, h, 2);
      const lineLeft = new THREE.Line(new THREE.BufferGeometry().setFromPoints([focalPoint, pLeft]), this.matCyanVector);
      const lineRight = new THREE.Line(new THREE.BufferGeometry().setFromPoints([focalPoint, pRight]), this.matCyanVector);
      this.groupPerspectiveRays.add(lineLeft);
      this.groupPerspectiveRays.add(lineRight);
    }
    this.rootAssembly.add(this.groupPerspectiveRays);

    // 7. Celestial Dome Wireframe
    this.groupDomeVault = new THREE.Group();
    const domeGeo = new THREE.SphereGeometry(7.2, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.48);
    const domeWire = new THREE.WireframeGeometry(domeGeo);
    const domeMesh = new THREE.LineSegments(domeWire, this.matRedVector);
    domeMesh.position.set(0, 5.8, -2.5);
    this.groupDomeVault.add(domeMesh);
    this.rootAssembly.add(this.groupDomeVault);

    // 8. Manga Cel-Shaded Hand & Arm
    this.createMangaArmAndHand();

    // 9. Floating Relics
    this.createFloatingRelics();

    // 10. Ink & Crimson Particle System
    this.createInkParticles();
  }

  createMangaArmAndHand() {
    this.groupMangaHand = new THREE.Group();

    const skinMat = this.createMangaMaterial(0xf4f4f5, 0xff2233);
    const cuffMat = this.createMangaMaterial(0x09090b, 0xff2233);

    const forearmGeo = new THREE.CylinderGeometry(0.48, 0.62, 3.2, 16);
    forearmGeo.rotateZ(Math.PI / 14);
    const forearm = new THREE.Mesh(forearmGeo, skinMat);
    forearm.position.set(0.6, -1.8, 0);
    this.groupMangaHand.add(forearm);

    const cuffGeo = new THREE.TorusGeometry(0.68, 0.12, 12, 32);
    cuffGeo.rotateX(Math.PI / 2.3);
    const cuff = new THREE.Mesh(cuffGeo, cuffMat);
    cuff.position.set(0.25, -0.4, 0.1);
    this.groupMangaHand.add(cuff);

    const palmGeo = new THREE.BoxGeometry(1.0, 1.2, 0.35);
    const palm = new THREE.Mesh(palmGeo, skinMat);
    palm.position.set(0, 0.4, 0);
    this.groupMangaHand.add(palm);

    const fingerPositions = [
      { x: -0.38, y: 1.1, len: 0.8, rotZ: 0.15 },
      { x: -0.12, y: 1.2, len: 0.95, rotZ: 0.05 },
      { x: 0.15, y: 1.15, len: 0.9, rotZ: -0.05 },
      { x: 0.38, y: 1.0, len: 0.75, rotZ: -0.15 }
    ];

    fingerPositions.forEach(cfg => {
      const fingerGroup = new THREE.Group();
      fingerGroup.position.set(cfg.x, 0.9, 0);

      const seg1Geo = new THREE.CylinderGeometry(0.12, 0.14, cfg.len * 0.6, 12);
      const seg1 = new THREE.Mesh(seg1Geo, skinMat);
      seg1.position.y = (cfg.len * 0.6) / 2;
      seg1.rotation.x = -0.4;
      fingerGroup.add(seg1);

      const seg2Geo = new THREE.CylinderGeometry(0.09, 0.12, cfg.len * 0.5, 12);
      const seg2 = new THREE.Mesh(seg2Geo, skinMat);
      seg2.position.set(0, cfg.len * 0.55, 0.2);
      seg2.rotation.x = -0.65;
      fingerGroup.add(seg2);

      fingerGroup.rotation.z = cfg.rotZ;
      this.groupMangaHand.add(fingerGroup);
    });

    const thumbGroup = new THREE.Group();
    thumbGroup.position.set(-0.55, 0.2, 0.1);
    const thumbGeo = new THREE.CylinderGeometry(0.13, 0.15, 0.7, 12);
    const thumb = new THREE.Mesh(thumbGeo, skinMat);
    thumb.position.y = 0.35;
    thumb.rotation.z = 0.6;
    thumb.rotation.x = -0.3;
    thumbGroup.add(thumb);
    this.groupMangaHand.add(thumbGroup);

    this.groupMangaHand.position.set(4.2, 0.4, 5.2);
    this.groupMangaHand.rotation.set(0.18, -0.55, -0.12);
    this.groupMangaHand.scale.set(1.5, 1.5, 1.5);
    this.rootAssembly.add(this.groupMangaHand);
  }

  createFloatingRelics() {
    this.groupRelics = new THREE.Group();

    const bottleMat = this.createMangaMaterial(0xff2233, 0xffffff);
    const bottleGeo = new THREE.CylinderGeometry(0.35, 0.35, 1.8, 24);
    this.bottle = new THREE.Mesh(bottleGeo, bottleMat);
    this.bottle.position.set(-5.2, 2.2, 1.0);
    this.groupRelics.add(this.bottle);

    for (let i = -3; i <= 3; i++) {
      const ringGeo = new THREE.TorusGeometry(0.38, 0.03, 8, 24);
      const ring = new THREE.Mesh(ringGeo, this.createMangaMaterial(0x09090b, 0xff2233));
      ring.rotation.x = Math.PI / 2;
      ring.position.set(-5.2, 2.2 + i * 0.2, 1.0);
      this.groupRelics.add(ring);
    }

    const beamRelicMat = this.createMangaMaterial(0xf4f4f5, 0xff2233);
    const beamRelicGeo = new THREE.BoxGeometry(2.4, 0.45, 0.55);
    this.beamRelic = new THREE.Mesh(beamRelicGeo, beamRelicMat);
    this.beamRelic.position.set(-3.5, -1.2, 3.5);
    this.beamRelic.rotation.set(0.4, 0.6, 0.2);
    this.groupRelics.add(this.beamRelic);

    const polyMat = this.createMangaMaterial(0x18181b, 0xff2233);
    const polyGeo = new THREE.DodecahedronGeometry(0.75, 0);
    this.poly = new THREE.Mesh(polyGeo, polyMat);
    this.poly.position.set(4.5, 4.2, -1.0);
    this.groupRelics.add(this.poly);

    this.rootAssembly.add(this.groupRelics);
  }

  createInkParticles() {
    const count = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const crimson = new THREE.Color(0xff2233);
    const cyan = new THREE.Color(0x399dd6);
    const white = new THREE.Color(0xffffff);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20 + 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 22;

      velocities[i * 3] = (Math.random() - 0.5) * 0.015;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.015;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.015;

      const r = Math.random();
      let col = white;
      if (r > 0.65) col = crimson;
      else if (r > 0.4) col = cyan;

      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    this.particles = new THREE.Points(geometry, pMat);
    this.particleVelocities = velocities;
    this.scene.add(this.particles);
  }

  triggerManaShockwave() {
    sound.playMangaImpact();
    if (!this.particles) return;
    const positions = this.particles.geometry.attributes.position.array;
    for (let i = 0; i < positions.length / 3; i++) {
      this.particleVelocities[i * 3] += (Math.random() - 0.5) * 0.2;
      this.particleVelocities[i * 3 + 1] += Math.random() * 0.25;
      this.particleVelocities[i * 3 + 2] += (Math.random() - 0.5) * 0.2;
    }
  }

  toggleExploded() {
    this.isExploded = !this.isExploded;
    this.targetExploded = this.isExploded ? 1.0 : 0.0;
    sound.playStructuralClack();
    return this.isExploded;
  }

  toggleAutoRotate() {
    this.autoRotate = !this.autoRotate;
    sound.playCaliperClick();
    return this.autoRotate;
  }

  toggleLayer(key) {
    if (key in this.layers) {
      this.layers[key] = !this.layers[key];
      sound.playCaliperClick();

      if (key === 'columns' && this.groupColumns) this.groupColumns.visible = this.layers.columns;
      if (key === 'beams' && this.groupBeams) this.groupBeams.visible = this.layers.beams;
      if (key === 'slabs' && this.groupSlabs) this.groupSlabs.visible = this.layers.slabs;
      if (key === 'stairs' && this.groupStairs) this.groupStairs.visible = this.layers.stairs;
      if (key === 'perspectiveRays' && this.groupPerspectiveRays) this.groupPerspectiveRays.visible = this.layers.perspectiveRays;
      if (key === 'dome' && this.groupDomeVault) this.groupDomeVault.visible = this.layers.dome;
      if (key === 'mangaHand' && this.groupMangaHand) this.groupMangaHand.visible = this.layers.mangaHand;
      if (key === 'wireframe') this.setWireframeMode(this.layers.wireframe);

      return this.layers[key];
    }
    return false;
  }

  setWireframeMode(enabled) {
    this.layers.wireframe = enabled;
    this.rootAssembly.traverse((child) => {
      if (child.isMesh && child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => m.wireframe = enabled);
        } else {
          child.material.wireframe = enabled;
        }
      }
    });
  }

  cycleVisualMode() {
    const modes = ['crimson', 'blueprint', 'wireframe'];
    const idx = (modes.indexOf(this.visualMode) + 1) % modes.length;
    this.visualMode = modes[idx];
    sound.playCaliperClick();

    if (this.visualMode === 'crimson') {
      this.setWireframeMode(false);
      this.matColumn.color.setHex(0xf4f4f5);
      this.matBeam.color.setHex(0x173c5b);
      this.matSlab.color.setHex(0xffffff);
      this.matRedVector.color.setHex(0xff2233);
      this.accentLight.color.setHex(0xff2233);
    } else if (this.visualMode === 'blueprint') {
      this.setWireframeMode(false);
      this.matColumn.color.setHex(0xe5f4ff);
      this.matBeam.color.setHex(0x399dd6);
      this.matSlab.color.setHex(0xc9e9fc);
      this.matRedVector.color.setHex(0x399dd6);
      this.accentLight.color.setHex(0x399dd6);
    } else {
      this.setWireframeMode(true);
      this.matRedVector.color.setHex(0xff2233);
      this.accentLight.color.setHex(0xffaa00);
    }
    return this.visualMode;
  }

  resetCamera() {
    this.targetRotation.x = 0.28;
    this.targetRotation.y = -0.45;
    this.camera.position.set(10.5, 7.8, 14.2);
    this.camera.lookAt(0.5, 2.2, 0);
    this.targetExploded = 0.0;
    this.isExploded = false;
    sound.playStructuralClack();
  }

  // Smooth Focus on 3D Component Target (Pin Click)
  focusOnTarget(pinKey) {
    sound.playLaserLock();
    if (pinKey === 'beam') {
      this.targetRotation.x = 0.15;
      this.targetRotation.y = -0.2;
      this.camera.position.set(6.5, 6.2, 9.5);
    } else if (pinKey === 'bearing') {
      this.targetRotation.x = 0.42;
      this.targetRotation.y = -0.6;
      this.camera.position.set(4.5, 4.8, 7.5);
    } else if (pinKey === 'corbel') {
      this.targetRotation.x = 0.22;
      this.targetRotation.y = -0.8;
      this.camera.position.set(5.0, 3.8, 8.0);
    } else {
      this.resetCamera();
    }
  }

  // Get 2D Screen Coordinates for Floating Hologram Pins
  getPinScreenPositions() {
    const width = this.canvas.clientWidth || window.innerWidth;
    const height = this.canvas.clientHeight || window.innerHeight;
    const results = {};

    const tempV = new THREE.Vector3();
    for (const [key, anchorPos] of Object.entries(this.pinAnchors)) {
      tempV.copy(anchorPos);
      tempV.applyEuler(this.rootAssembly.rotation);
      tempV.add(this.rootAssembly.position);
      tempV.project(this.camera);

      // Check if behind camera
      const isVisible = tempV.z < 1.0;
      const screenX = (tempV.x * 0.5 + 0.5) * width;
      const screenY = (-(tempV.y * 0.5) + 0.5) * height;

      results[key] = {
        x: screenX,
        y: screenY,
        visible: isVisible && screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height
      };
    }
    return results;
  }

  // Telemetry Telemetrics for HUD
  getTelemetry() {
    return {
      fps: this.currentFps,
      pitch: (this.rootAssembly.rotation.x * (180 / Math.PI)).toFixed(1),
      yaw: (this.rootAssembly.rotation.y * (180 / Math.PI)).toFixed(1),
      exploded: this.isExploded ? 'ACTIVE [100%]' : 'LOCKED [0%]',
      mode: this.visualMode.toUpperCase(),
      verts: 38400,
      drawCalls: 22
    };
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const delta = this.clock.getDelta();
    this.frameCount++;
    if (this.clock.getElapsedTime() - this.lastFpsUpdate > 0.5) {
      this.currentFps = Math.round(this.frameCount / (this.clock.getElapsedTime() - this.lastFpsUpdate));
      this.frameCount = 0;
      this.lastFpsUpdate = this.clock.getElapsedTime();
    }

    if (!this.isDragging && this.autoRotate) {
      this.targetRotation.y += this.rotationSpeed.y;
    }

    this.rootAssembly.rotation.y += (this.targetRotation.y - this.rootAssembly.rotation.y) * 0.06;
    this.rootAssembly.rotation.x += (this.targetRotation.x - this.rootAssembly.rotation.x) * 0.06;

    // Exploded View smooth tween
    this.explodedProgress += (this.targetExploded - this.explodedProgress) * 0.08;

    if (this.groupDomeVault) {
      this.groupDomeVault.position.y = 5.8 + this.explodedProgress * 5.0;
    }
    if (this.slabsL2) {
      this.slabsL2.position.y = this.explodedProgress * 3.6;
    }
    if (this.beamsL2) {
      this.beamsL2.position.y = this.explodedProgress * 2.2;
    }
    if (this.slabsL1) {
      this.slabsL1.position.y = this.explodedProgress * 1.2;
    }
    if (this.groupStairs) {
      this.groupStairs.position.z = this.explodedProgress * 2.0;
    }

    if (this.groupMangaHand) {
      const targetHandRotY = -0.55 + this.mouse.targetX * 0.25;
      const targetHandRotX = 0.18 - this.mouse.targetY * 0.18;
      this.groupMangaHand.rotation.y += (targetHandRotY - this.groupMangaHand.rotation.y) * 0.08;
      this.groupMangaHand.rotation.x += (targetHandRotX - this.groupMangaHand.rotation.x) * 0.08;
    }

    // Scroll Camera Flight (Smooth dolly into the stairs)
    const scrollTargetZ = 13.5 - this.targetScrollProgress * 5.5;
    const scrollTargetY = 7.5 - this.targetScrollProgress * 2.5;
    this.camera.position.z += (scrollTargetZ - this.camera.position.z) * 0.05;
    this.camera.position.y += (scrollTargetY - this.camera.position.y) * 0.05;

    // Relics float
    if (this.bottle) {
      this.bottle.rotation.y += 0.012;
      this.bottle.position.y = 2.2 + Math.sin(this.clock.getElapsedTime() * 1.5) * 0.25;
    }
    if (this.beamRelic) {
      this.beamRelic.rotation.x += 0.008;
      this.beamRelic.rotation.y += 0.01;
    }
    if (this.poly) {
      this.poly.rotation.y += 0.015;
      this.poly.rotation.z += 0.01;
    }

    // Floating particles drift & decay
    if (this.particles) {
      const positions = this.particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length / 3; i++) {
        positions[i * 3] += this.particleVelocities[i * 3];
        positions[i * 3 + 1] += this.particleVelocities[i * 3 + 1];
        positions[i * 3 + 2] += this.particleVelocities[i * 3 + 2];

        // Dampen velocity back to drift speed
        this.particleVelocities[i * 3] *= 0.985;
        this.particleVelocities[i * 3 + 1] *= 0.985;
        this.particleVelocities[i * 3 + 2] *= 0.985;

        if (positions[i * 3 + 1] < -4) positions[i * 3 + 1] = 16;
        if (positions[i * 3 + 1] > 16) positions[i * 3 + 1] = -4;
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
    }

    this.camera.lookAt(0.5, 2.2, 0);
    this.renderer.render(this.scene, this.camera);
  }
}
