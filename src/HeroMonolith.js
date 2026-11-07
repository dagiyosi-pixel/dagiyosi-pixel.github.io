// ==========================================================================
// HERO MONOLITH // ARCHITECTURAL GENERATIVE 3D SCULPTURE
// Interlocking cantilevered concrete slabs, swept brutalist canopy shell,
// brushed titanium plates, glowing cobalt crystalline blade & orbital rings.
// Inspired by Dagmawi Yosef's architectural master reference.
// ==========================================================================

import * as THREE from 'three';

export class HeroMonolith {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.root = null;

    // Component groups for parallax & motion
    this.groupSlabs = null;
    this.groupPlates = null;
    this.groupGlass = null;
    this.groupRings = null;
    this.groupShell = null;
    this.groupMarkers = null;

    // Interaction state
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.targetRot = { x: 0.12, y: -0.38 };
    this.isDragging = false;
    this.prevMouse = { x: 0, y: 0 };
    this.scrollProgress = 0;

    this.clock = new THREE.Clock();

    this.init();
  }

  init() {
    this.scene = new THREE.Scene();

    const width = this.canvas.clientWidth || window.innerWidth;
    const height = this.canvas.clientHeight || window.innerHeight;

    this.camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    this.camera.position.set(5.6, 3.6, 10.2);
    this.camera.lookAt(0.3, 0.5, 0);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.resize();

    // Architectural Lighting
    const ambLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(9, 13, 11);
    this.scene.add(keyLight);

    const rimLightBlue = new THREE.DirectionalLight(0x0088ff, 3.8);
    rimLightBlue.position.set(-9, 5, -5);
    this.scene.add(rimLightBlue);

    const fillCyan = new THREE.PointLight(0x00d4ff, 3.2, 22);
    fillCyan.position.set(2, -1, 3.5);
    this.scene.add(fillCyan);

    // Build the Brutalist Architectural Monolith
    this.buildMonolith();

    // Events
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
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = -(e.clientY / window.innerHeight) * 2 + 1;
    this.mouse.targetX = nx;
    this.mouse.targetY = ny;

    if (!this.isDragging) {
      this.targetRot.y = -0.38 + nx * 0.32;
      this.targetRot.x = 0.12 - ny * 0.22;
    }
  }

  onScroll() {
    const maxScroll = window.innerHeight * 1.5;
    this.scrollProgress = Math.min(1.0, Math.max(0.0, window.scrollY / maxScroll));
  }

  setupInteractions() {
    const c = this.canvas;
    c.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.prevMouse = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('mouseup', () => { this.isDragging = false; });
    c.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.prevMouse.x;
      const dy = e.clientY - this.prevMouse.y;
      this.targetRot.y += dx * 0.008;
      this.targetRot.x += dy * 0.008;
      this.targetRot.x = Math.max(-0.4, Math.min(0.8, this.targetRot.x));
      this.prevMouse = { x: e.clientX, y: e.clientY };
    });
  }

  createConcreteTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 256, 256);
    const imgData = ctx.getImageData(0, 0, 256, 256);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 55;
      const v = Math.min(255, Math.max(0, 128 + noise));
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
    }
    ctx.putImageData(imgData, 0, 0);
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(3, 3);
    return tex;
  }

  buildMonolith() {
    this.root = new THREE.Group();
    this.root.position.set(0.6, 0.2, 0);
    this.scene.add(this.root);

    const concreteBump = this.createConcreteTexture();

    // 1. Dark Cast Architectural Concrete
    this.matConcrete = new THREE.MeshStandardMaterial({
      color: 0x1f232b,
      roughness: 0.82,
      metalness: 0.12,
      bumpMap: concreteBump,
      bumpScale: 0.035
    });

    // 2. Brushed Charcoal Titanium
    this.matTitanium = new THREE.MeshStandardMaterial({
      color: 0x11141a,
      roughness: 0.32,
      metalness: 0.88
    });

    // 3. Electric Blue Glass Facet (Crystalline core blade)
    this.matGlassBlue = new THREE.MeshPhysicalMaterial({
      color: 0x0088ff,
      emissive: 0x0044aa,
      emissiveIntensity: 0.55,
      roughness: 0.08,
      metalness: 0.15,
      transmission: 0.82,
      transparent: true,
      opacity: 0.92,
      ior: 1.54
    });

    // 4. Luminous Blue Light Edge Seams
    this.matEdgeCyan = new THREE.LineBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.95
    });

    // 5. Fine Architectural Blueprint Wireframe
    this.matWireSubtle = new THREE.LineBasicMaterial({
      color: 0x253648,
      transparent: true,
      opacity: 0.65
    });

    // --- A. Interlocking Brutalist Concrete Cantilevers ---
    this.groupSlabs = new THREE.Group();

    // Primary cantilever slab
    const s1Geo = new THREE.BoxGeometry(4.4, 0.48, 2.5);
    const s1 = new THREE.Mesh(s1Geo, this.matConcrete);
    s1.position.set(0, 0.8, 0);
    this.groupSlabs.add(s1);
    this.addWireEdges(s1, s1Geo, this.matEdgeCyan);

    // Secondary stepped slab
    const s2Geo = new THREE.BoxGeometry(3.8, 0.40, 2.3);
    const s2 = new THREE.Mesh(s2Geo, this.matTitanium);
    s2.position.set(0.5, 0.1, -0.2);
    s2.rotation.y = 0.08;
    this.groupSlabs.add(s2);
    this.addWireEdges(s2, s2Geo, this.matEdgeCyan);

    // Vertical monolithic pillar
    const s3Geo = new THREE.BoxGeometry(0.85, 4.0, 1.25);
    const s3 = new THREE.Mesh(s3Geo, this.matConcrete);
    s3.position.set(-1.4, 0.6, 0.3);
    this.groupSlabs.add(s3);
    this.addWireEdges(s3, s3Geo, this.matWireSubtle);

    // Lower suspended slab
    const s4Geo = new THREE.BoxGeometry(4.0, 0.34, 1.9);
    const s4 = new THREE.Mesh(s4Geo, this.matTitanium);
    s4.position.set(0.2, -0.65, 0.4);
    s4.rotation.y = -0.05;
    this.groupSlabs.add(s4);
    this.addWireEdges(s4, s4Geo, this.matWireSubtle);

    // Top cantilever crown slab
    const s5Geo = new THREE.BoxGeometry(3.0, 0.30, 2.0);
    const s5 = new THREE.Mesh(s5Geo, this.matConcrete);
    s5.position.set(0.7, 1.55, -0.3);
    s5.rotation.y = 0.12;
    this.groupSlabs.add(s5);
    this.addWireEdges(s5, s5Geo, this.matEdgeCyan);

    // Base podium anchor block
    const s6Geo = new THREE.BoxGeometry(4.8, 0.5, 3.2);
    const s6 = new THREE.Mesh(s6Geo, this.matTitanium);
    s6.position.set(0.4, -1.25, 0.1);
    this.groupSlabs.add(s6);
    this.addWireEdges(s6, s6Geo, this.matWireSubtle);

    this.root.add(this.groupSlabs);

    // --- B. Brutalist Swept Canopy Shell (matching reference curve) ---
    this.groupShell = new THREE.Group();
    // Swept curved concrete canopy segment
    const shellGeo = new THREE.CylinderGeometry(2.8, 3.2, 1.2, 32, 1, true, -Math.PI * 0.4, Math.PI * 0.65);
    const shellMesh = new THREE.Mesh(shellGeo, this.matConcrete);
    shellMesh.rotation.z = Math.PI * 0.42;
    shellMesh.rotation.y = -0.35;
    shellMesh.position.set(-0.8, 1.6, -0.4);
    this.groupShell.add(shellMesh);

    const shellEdges = new THREE.WireframeGeometry(shellGeo);
    const shellLines = new THREE.LineSegments(shellEdges, this.matWireSubtle);
    shellLines.position.copy(shellMesh.position);
    shellLines.rotation.copy(shellMesh.rotation);
    this.groupShell.add(shellLines);

    this.root.add(this.groupShell);

    // --- C. Glowing Cobalt Blue Glass Crystalline Blades ---
    this.groupGlass = new THREE.Group();

    // Vertical crystalline spine blade slicing through
    const g1Geo = new THREE.BoxGeometry(0.24, 3.6, 1.8);
    const g1 = new THREE.Mesh(g1Geo, this.matGlassBlue);
    g1.position.set(0.3, 0.6, 0.15);
    g1.rotation.y = -0.15;
    this.groupGlass.add(g1);
    this.addWireEdges(g1, g1Geo, this.matEdgeCyan);

    // Horizontal illuminated light shelf
    const g2Geo = new THREE.BoxGeometry(2.4, 0.12, 1.6);
    const g2 = new THREE.Mesh(g2Geo, this.matGlassBlue);
    g2.position.set(-0.4, -0.2, 0.35);
    this.groupGlass.add(g2);

    this.root.add(this.groupGlass);

    // --- D. Orbital Blueprint Radar Rings with Calibrated Ticks ---
    this.groupRings = new THREE.Group();

    const ring1Geo = new THREE.RingGeometry(3.5, 3.53, 96);
    const ring1 = new THREE.LineSegments(new THREE.WireframeGeometry(ring1Geo), this.matEdgeCyan);
    ring1.rotation.x = Math.PI / 2.3;
    ring1.position.set(0, -0.3, 0);
    this.groupRings.add(ring1);

    const ring2Geo = new THREE.RingGeometry(4.3, 4.32, 96);
    const ring2 = new THREE.LineSegments(new THREE.WireframeGeometry(ring2Geo), this.matWireSubtle);
    ring2.rotation.x = Math.PI / 2.5;
    ring2.rotation.y = 0.15;
    ring2.position.set(0, 0.2, 0);
    this.groupRings.add(ring2);

    // Tick lines on ring 1
    const tickGeo = new THREE.BufferGeometry();
    const tickPositions = [];
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 16) {
      const x1 = Math.cos(a) * 3.4;
      const z1 = Math.sin(a) * 3.4;
      const x2 = Math.cos(a) * 3.65;
      const z2 = Math.sin(a) * 3.65;
      tickPositions.push(x1, 0, z1, x2, 0, z2);
    }
    tickGeo.setAttribute('position', new THREE.Float32BufferAttribute(tickPositions, 3));
    const tickLines = new THREE.LineSegments(tickGeo, this.matWireSubtle);
    tickLines.rotation.x = Math.PI / 2.3;
    tickLines.position.set(0, -0.3, 0);
    this.groupRings.add(tickLines);

    this.root.add(this.groupRings);

    // --- E. Floating Geometric Coordinate Markers ---
    this.groupMarkers = new THREE.Group();
    const markerGeo = new THREE.OctahedronGeometry(0.09, 0);
    const markerMat = new THREE.MeshBasicMaterial({ color: 0x00e1ff });

    const markerCoords = [
      { x: -1.8, y: 2.2, z: 0.8 },
      { x: 2.2, y: 1.8, z: -0.6 },
      { x: 1.4, y: -0.9, z: 1.2 },
      { x: -0.8, y: -1.1, z: -0.8 }
    ];

    markerCoords.forEach(c => {
      const m = new THREE.Mesh(markerGeo, markerMat);
      m.position.set(c.x, c.y, c.z);
      this.groupMarkers.add(m);
    });
    this.root.add(this.groupMarkers);
  }

  addWireEdges(parentMesh, geometry, lineMaterial) {
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(edges, lineMaterial);
    line.position.copy(parentMesh.position);
    line.rotation.copy(parentMesh.rotation);
    this.groupSlabs.add(line);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const t = this.clock.getElapsedTime();

    // Smooth rotation towards target
    if (!this.isDragging) {
      this.targetRot.y += 0.001; // subtle continuous idle drift
    }
    this.root.rotation.y += (this.targetRot.y - this.root.rotation.y) * 0.05;
    this.root.rotation.x += (this.targetRot.x - this.root.rotation.x) * 0.05;

    // Slow orbital ring counter-rotation
    if (this.groupRings) {
      this.groupRings.children[0].rotation.z = t * 0.07;
      this.groupRings.children[1].rotation.z = -t * 0.04;
    }

    // Floating breathing motion
    this.root.position.y = 0.2 + Math.sin(t * 0.8) * 0.08;

    // Scroll-driven parallax & translation (morphing into section 01)
    const scrollYShift = -this.scrollProgress * 2.5;
    const scrollScale = 1.0 - this.scrollProgress * 0.25;
    const scrollRotZ = this.scrollProgress * 0.15;

    this.root.position.y += scrollYShift * 0.05;
    this.root.scale.set(scrollScale, scrollScale, scrollScale);
    this.root.rotation.z = scrollRotZ;

    this.renderer.render(this.scene, this.camera);
  }
}
