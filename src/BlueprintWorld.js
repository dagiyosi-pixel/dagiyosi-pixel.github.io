// ==========================================================================
// BLUEPRINT WORLD // THE ARCHITECTURAL MANHWA UNIVERSE
// Fullscreen & Section 3D Architectural Engine with Red Perspective Rays & Exploded Assembly
// ==========================================================================

import * as THREE from 'three';
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
    this.groupAnnotations = null;

    // Exploded View State
    this.explodedProgress = 0.0;
    this.targetExploded = 0.0;
    this.isExploded = false;

    // Visual Mode: 'blueprint', 'drafting', or 'crimson'
    this.visualMode = 'blueprint';

    // Layer Controls
    this.layers = {
      grid: true,
      columns: true,
      beams: true,
      slabs: true,
      stairs: true,
      perspectiveRays: true,
      dome: true,
      annotations: true,
      wireframe: false
    };

    // Orbit & Inertia
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.targetRotation = { x: 0.35, y: -0.6 };
    this.rotationSpeed = { x: 0, y: 0.0018 };

    this.clock = new THREE.Clock();

    this.init();
  }

  init() {
    this.scene = new THREE.Scene();

    const width = this.canvas.clientWidth || window.innerWidth;
    const height = this.canvas.clientHeight || window.innerHeight;

    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 120);
    this.camera.position.set(12, 9, 14);
    this.camera.lookAt(0, 2.0, 0);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.resize();

    // Lighting
    const amb = new THREE.AmbientLight(0xffffff, 0.65);
    this.scene.add(amb);

    const dir1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dir1.position.set(10, 16, 12);
    this.scene.add(dir1);

    this.accentLight = new THREE.PointLight(0x399dd6, 2.5, 35);
    this.accentLight.position.set(-6, 6, -4);
    this.scene.add(this.accentLight);

    // Build the Grand Architectural Assembly
    this.buildWorld();

    window.addEventListener('resize', () => this.resize());
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

      this.targetRotation.y += dx * 0.007;
      this.targetRotation.x += dy * 0.007;
      this.targetRotation.x = Math.max(-0.25, Math.min(1.2, this.targetRotation.x));

      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    // Touch controls
    c.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    c.addEventListener('touchmove', (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - this.previousMousePosition.x;
      const dy = e.touches[0].clientY - this.previousMousePosition.y;

      this.targetRotation.y += dx * 0.009;
      this.targetRotation.x += dy * 0.009;
      this.targetRotation.x = Math.max(-0.25, Math.min(1.2, this.targetRotation.x));

      this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });
  }

  buildWorld() {
    this.rootAssembly = new THREE.Group();
    this.scene.add(this.rootAssembly);

    // Architectural Materials
    this.matColumn = new THREE.MeshStandardMaterial({ color: 0xe5f4ff, roughness: 0.25 });
    this.matCorbel = new THREE.MeshStandardMaterial({ color: 0x8ccdf2, roughness: 0.35 });
    this.matBeam = new THREE.MeshStandardMaterial({ color: 0x399dd6, roughness: 0.3, metalness: 0.2 });
    this.matSlab = new THREE.MeshStandardMaterial({ color: 0xf7fbff, roughness: 0.2 });
    this.matStair = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.1 });
    this.matRedVector = new THREE.LineBasicMaterial({ color: 0xff2233, transparent: true, opacity: 0.85, linewidth: 2 });
    this.matCyanVector = new THREE.LineBasicMaterial({ color: 0x399dd6, transparent: true, opacity: 0.5 });
    this.matGold = new THREE.MeshStandardMaterial({ color: 0xe5a93c, roughness: 0.3, metalness: 0.6 });

    // 1. Blueprint Grid & Ground
    this.groupGround = new THREE.Group();
    const grid = new THREE.GridHelper(18, 36, 0x399dd6, 0xc9e9fc);
    this.groupGround.add(grid);

    // Column Footings
    const footingGeo = new THREE.BoxGeometry(1.4, 0.25, 1.4);
    const colCoords = [
      { x: -4, z: -3 }, { x: 0, z: -3 }, { x: 4, z: -3 },
      { x: -4, z: 3 },  { x: 0, z: 3 },  { x: 4, z: 3 }
    ];

    colCoords.forEach(c => {
      const pad = new THREE.Mesh(footingGeo, this.matCorbel);
      pad.position.set(c.x, 0.125, c.z);
      this.groupGround.add(pad);
    });
    this.rootAssembly.add(this.groupGround);

    // 2. Precast Columns with Structural Corbels
    this.groupColumns = new THREE.Group();
    const colGeo = new THREE.BoxGeometry(0.6, 5.4, 0.6);
    const corbelGeo = new THREE.BoxGeometry(0.9, 0.4, 0.6);

    colCoords.forEach(c => {
      const colGroup = new THREE.Group();
      colGroup.position.set(c.x, 2.8, c.z);

      const colMesh = new THREE.Mesh(colGeo, this.matColumn);
      colGroup.add(colMesh);

      const corbel1 = new THREE.Mesh(corbelGeo, this.matCorbel);
      corbel1.position.set(0, -0.6, 0);
      colGroup.add(corbel1);

      const corbel2 = new THREE.Mesh(corbelGeo, this.matCorbel);
      corbel2.position.set(0, 1.9, 0);
      colGroup.add(corbel2);

      this.groupColumns.add(colGroup);
    });
    this.rootAssembly.add(this.groupColumns);

    // 3. Inverted-T Precast Beams
    this.groupBeams = new THREE.Group();
    this.beamsL1 = new THREE.Group();
    this.beamsL2 = new THREE.Group();

    const beamGeo = new THREE.BoxGeometry(8.6, 0.6, 0.7);

    const b1_A = new THREE.Mesh(beamGeo, this.matBeam);
    b1_A.position.set(0, 2.5, -3);
    this.beamsL1.add(b1_A);

    const b1_B = new THREE.Mesh(beamGeo, this.matBeam);
    b1_B.position.set(0, 2.5, 3);
    this.beamsL1.add(b1_B);

    const b2_A = new THREE.Mesh(beamGeo, this.matBeam);
    b2_A.position.set(0, 5.0, -3);
    this.beamsL2.add(b2_A);

    const b2_B = new THREE.Mesh(beamGeo, this.matBeam);
    b2_B.position.set(0, 5.0, 3);
    this.beamsL2.add(b2_B);

    this.groupBeams.add(this.beamsL1);
    this.groupBeams.add(this.beamsL2);
    this.rootAssembly.add(this.groupBeams);

    // 4. Precast Hollow-Core Floor Slabs
    this.groupSlabs = new THREE.Group();
    this.slabsL1 = new THREE.Group();
    this.slabsL2 = new THREE.Group();

    for (let i = -3; i <= 3; i++) {
      const slabGeo = new THREE.BoxGeometry(1.15, 0.3, 5.8);
      
      const s1 = new THREE.Mesh(slabGeo, this.matSlab);
      s1.position.set(i * 1.22, 2.8, 0);
      this.slabsL1.add(s1);

      const s2 = new THREE.Mesh(slabGeo, this.matSlab);
      s2.position.set(i * 1.22, 5.3, 0);
      this.slabsL2.add(s2);
    }
    this.groupSlabs.add(this.slabsL1);
    this.groupSlabs.add(this.slabsL2);
    this.rootAssembly.add(this.groupSlabs);

    // 5. Grand Architectural Staircase (Inspired by uploaded image 2!)
    this.groupStairs = new THREE.Group();
    const stepCount = 14;
    const stepWidth = 2.4;
    const stepDepth = 0.35;
    const stepHeight = 0.18;

    for (let s = 0; s < stepCount; s++) {
      const stepGeo = new THREE.BoxGeometry(stepWidth, stepHeight, stepDepth);
      const step = new THREE.Mesh(stepGeo, this.matStair);
      step.position.set(0, (s + 1) * stepHeight, (stepCount / 2 - s) * stepDepth);
      this.groupStairs.add(step);
    }
    this.rootAssembly.add(this.groupStairs);

    // 6. Red Perspective Vanishing Lines (Direct homage to uploaded artwork!)
    this.groupPerspectiveRays = new THREE.Group();
    const focalPoint = new THREE.Vector3(0, 8.5, -6);

    // Draw radiant red construction lines to staircase steps and columns
    for (let r = -5; r <= 5; r++) {
      const targetPoint = new THREE.Vector3(r * 1.8, 0, 5);
      const rayGeo = new THREE.BufferGeometry().setFromPoints([focalPoint, targetPoint]);
      const rayLine = new THREE.Line(rayGeo, this.matRedVector);
      this.groupPerspectiveRays.add(rayLine);
    }
    this.rootAssembly.add(this.groupPerspectiveRays);

    // 7. Dome Vault Radial Wireframe
    this.groupDomeVault = new THREE.Group();
    const domeGeo = new THREE.SphereGeometry(6.5, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.45);
    const domeWire = new THREE.WireframeGeometry(domeGeo);
    const domeMesh = new THREE.LineSegments(domeWire, this.matRedVector);
    domeMesh.position.set(0, 5.5, -2);
    this.groupDomeVault.add(domeMesh);
    this.rootAssembly.add(this.groupDomeVault);

    // 8. Dimension Callouts
    this.groupAnnotations = new THREE.Group();
    this.createDimCallout(new THREE.Vector3(-4.5, 0, 3.6), new THREE.Vector3(4.5, 0, 3.6), "BAY: 9000 mm");
    this.createDimCallout(new THREE.Vector3(-4.8, 0, -3.2), new THREE.Vector3(-4.8, 5.4, -3.2), "HEIGHT: 5400 mm");
    this.rootAssembly.add(this.groupAnnotations);
  }

  createDimCallout(p1, p2, text) {
    const geo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
    const line = new THREE.Line(geo, new THREE.LineDashedMaterial({ color: 0x399dd6, dashSize: 0.4, gapSize: 0.2 }));
    line.computeLineDistances();
    this.groupAnnotations.add(line);

    const tick1 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.18), this.matGold);
    tick1.position.copy(p1);
    this.groupAnnotations.add(tick1);

    const tick2 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.18), this.matGold);
    tick2.position.copy(p2);
    this.groupAnnotations.add(tick2);
  }

  toggleExploded() {
    this.isExploded = !this.isExploded;
    this.targetExploded = this.isExploded ? 1.0 : 0.0;
    sound.playStructuralClack();
    return this.isExploded;
  }

  toggleLayer(key) {
    if (key in this.layers) {
      this.layers[key] = !this.layers[key];
      sound.playCaliperClick();

      if (key === 'grid' && this.groupGround) this.groupGround.visible = this.layers.grid;
      if (key === 'columns' && this.groupColumns) this.groupColumns.visible = this.layers.columns;
      if (key === 'beams' && this.groupBeams) this.groupBeams.visible = this.layers.beams;
      if (key === 'slabs' && this.groupSlabs) this.groupSlabs.visible = this.layers.slabs;
      if (key === 'stairs' && this.groupStairs) this.groupStairs.visible = this.layers.stairs;
      if (key === 'perspectiveRays' && this.groupPerspectiveRays) this.groupPerspectiveRays.visible = this.layers.perspectiveRays;
      if (key === 'dome' && this.groupDomeVault) this.groupDomeVault.visible = this.layers.dome;
      if (key === 'annotations' && this.groupAnnotations) this.groupAnnotations.visible = this.layers.annotations;
      if (key === 'wireframe') this.setWireframeMode(this.layers.wireframe);

      return this.layers[key];
    }
    return false;
  }

  setWireframeMode(enabled) {
    this.layers.wireframe = enabled;
    this.rootAssembly.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = enabled;
      }
    });
  }

  cycleVisualMode() {
    const modes = ['blueprint', 'drafting', 'crimson'];
    const idx = (modes.indexOf(this.visualMode) + 1) % modes.length;
    this.visualMode = modes[idx];
    sound.playPencilScratch();

    if (this.visualMode === 'blueprint') {
      this.matColumn.color.setHex(0xe5f4ff);
      this.matBeam.color.setHex(0x399dd6);
      this.matSlab.color.setHex(0xf7fbff);
      this.matRedVector.color.setHex(0xff2233);
      this.accentLight.color.setHex(0x399dd6);
    } else if (this.visualMode === 'drafting') {
      this.matColumn.color.setHex(0x173c5b);
      this.matBeam.color.setHex(0x14212d);
      this.matSlab.color.setHex(0x8ccdf2);
      this.matRedVector.color.setHex(0x399dd6);
      this.accentLight.color.setHex(0x8ccdf2);
    } else {
      // Crimson Manga Perspective (Stark Black, White, Red slashes!)
      this.matColumn.color.setHex(0x14212d);
      this.matBeam.color.setHex(0xff2233);
      this.matSlab.color.setHex(0xffffff);
      this.matRedVector.color.setHex(0xff2233);
      this.accentLight.color.setHex(0xff2233);
    }
    return this.visualMode;
  }

  resetCamera() {
    this.targetRotation.x = 0.35;
    this.targetRotation.y = -0.6;
    this.camera.position.set(12, 9, 14);
    this.camera.lookAt(0, 2.0, 0);
    this.targetExploded = 0.0;
    this.isExploded = false;
    sound.playBlueprintUnfold();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const delta = this.clock.getDelta();

    if (!this.isDragging) {
      this.targetRotation.y += this.rotationSpeed.y;
    }

    this.rootAssembly.rotation.y += (this.targetRotation.y - this.rootAssembly.rotation.y) * 0.08;
    this.rootAssembly.rotation.x += (this.targetRotation.x - this.rootAssembly.rotation.x) * 0.08;

    // Smooth Exploded Separation
    this.explodedProgress += (this.targetExploded - this.explodedProgress) * 0.08;

    if (this.groupDomeVault) {
      this.groupDomeVault.position.y = 5.5 + this.explodedProgress * 4.2;
    }
    if (this.slabsL2) {
      this.slabsL2.position.y = this.explodedProgress * 2.8;
    }
    if (this.beamsL2) {
      this.beamsL2.position.y = this.explodedProgress * 1.8;
    }
    if (this.slabsL1) {
      this.slabsL1.position.y = this.explodedProgress * 1.0;
    }
    if (this.groupStairs) {
      this.groupStairs.position.z = this.explodedProgress * 1.6;
    }

    this.renderer.render(this.scene, this.camera);
  }
}
