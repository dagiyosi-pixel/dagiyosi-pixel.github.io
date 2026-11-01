// ==========================================================================
// THE INTERACTIVE BLUEPRINT CONSTRUCTOR // 0xDagi
// Signature 3D Architectural Assembly & Exploded View Engine (Three.js)
// ==========================================================================

import * as THREE from 'three';
import { sound } from './audio.js';

export class BlueprintConstructor {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = null;
    this.camera = null;
    this.renderer = null;

    // Component Groups for Exploded View & Layer Toggling
    this.rootAssembly = null;
    this.groupGround = null;
    this.groupColumns = null;
    this.groupBeams = null;
    this.groupSlabs = null;
    this.groupCanopy = null;
    this.groupAnnotations = null;

    // Exploded View State
    this.explodedProgress = 0.0;
    this.targetExploded = 0.0;
    this.isExploded = false;

    // Visual Mode: 'blueprint' (cyan on navy) or 'drafting' (navy on paper) or 'rendered'
    this.visualMode = 'blueprint';

    // Layer Visibilities
    this.layers = {
      grid: true,
      columns: true,
      beams: true,
      slabs: true,
      canopy: true,
      annotations: true,
      wireframe: false
    };

    // Orbit & Mouse Interaction
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.rotationVelocity = { x: 0, y: 0.002 };
    this.targetRotation = { x: 0.35, y: -0.6 };

    this.clock = new THREE.Clock();

    this.init();
  }

  init() {
    // 1. Scene & Camera
    this.scene = new THREE.Scene();

    const aspect = this.canvas.clientWidth / this.canvas.clientHeight || 1;
    this.camera = new THREE.PerspectiveCamera(40, aspect, 0.1, 100);
    this.camera.position.set(10, 8, 12);
    this.camera.lookAt(0, 1.2, 0);

    // 2. Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.resize();

    // 3. Lighting
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(this.ambientLight);

    this.dirLight1 = new THREE.DirectionalLight(0xffffff, 1.0);
    this.dirLight1.position.set(8, 14, 10);
    this.scene.add(this.dirLight1);

    this.blueLight = new THREE.PointLight(0x399dd6, 2.0, 30);
    this.blueLight.position.set(-6, 4, -4);
    this.scene.add(this.blueLight);

    // 4. Build Architectural Assembly
    this.buildAssembly();

    // 5. Event Listeners
    window.addEventListener('resize', () => this.resize());
    this.setupMouseEvents();

    // 6. Start Loop
    this.animate();
  }

  resize() {
    const width = this.canvas.parentElement ? this.canvas.parentElement.clientWidth : window.innerWidth;
    const height = this.canvas.parentElement ? this.canvas.parentElement.clientHeight : window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  setupMouseEvents() {
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

      const deltaX = e.clientX - this.previousMousePosition.x;
      const deltaY = e.clientY - this.previousMousePosition.y;

      this.targetRotation.y += deltaX * 0.008;
      this.targetRotation.x += deltaY * 0.008;
      // Clamp vertical tilt
      this.targetRotation.x = Math.max(-0.2, Math.min(1.2, this.targetRotation.x));

      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    // Touch support for mobile
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
      const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
      const deltaY = e.touches[0].clientY - this.previousMousePosition.y;

      this.targetRotation.y += deltaX * 0.01;
      this.targetRotation.x += deltaY * 0.01;
      this.targetRotation.x = Math.max(-0.2, Math.min(1.2, this.targetRotation.x));

      this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });
  }

  buildAssembly() {
    this.rootAssembly = new THREE.Group();
    this.scene.add(this.rootAssembly);

    // Blueprint materials
    this.matGrid = new THREE.LineBasicMaterial({ color: 0x399dd6, transparent: true, opacity: 0.4 });
    this.matColumn = new THREE.MeshStandardMaterial({ color: 0xe5f4ff, roughness: 0.3, metalness: 0.1 });
    this.matCorbel = new THREE.MeshStandardMaterial({ color: 0x8ccdf2, roughness: 0.4 });
    this.matBeam = new THREE.MeshStandardMaterial({ color: 0x399dd6, roughness: 0.4, metalness: 0.2 });
    this.matSlab = new THREE.MeshStandardMaterial({ color: 0xf7fbff, roughness: 0.2 });
    this.matGlass = new THREE.MeshPhysicalMaterial({ color: 0x8ccdf2, transparent: true, opacity: 0.35, roughness: 0.1, transmission: 0.8 });
    this.matLine = new THREE.LineBasicMaterial({ color: 0x173c5b });
    this.matGold = new THREE.MeshStandardMaterial({ color: 0xe5a93c, roughness: 0.3, metalness: 0.6 });

    // 1. Blueprint Grid & Foundation Base
    this.groupGround = new THREE.Group();
    const gridHelper = new THREE.GridHelper(14, 28, 0x399dd6, 0xc9e9fc);
    gridHelper.position.y = 0;
    this.groupGround.add(gridHelper);

    // Foundation pads
    const padGeo = new THREE.BoxGeometry(1.2, 0.2, 1.2);
    const colCoords = [
      { x: -3, z: -2 }, { x: 0, z: -2 }, { x: 3, z: -2 },
      { x: -3, z: 2 },  { x: 0, z: 2 },  { x: 3, z: 2 }
    ];

    colCoords.forEach(pos => {
      const pad = new THREE.Mesh(padGeo, this.matCorbel);
      pad.position.set(pos.x, 0.1, pos.z);
      this.groupGround.add(pad);
    });
    this.rootAssembly.add(this.groupGround);

    // 2. Precast Columns with Structural Corbels
    this.groupColumns = new THREE.Group();
    const colGeo = new THREE.BoxGeometry(0.5, 4.8, 0.5);
    const corbelGeo = new THREE.BoxGeometry(0.8, 0.35, 0.5);

    this.columnsList = [];
    colCoords.forEach(pos => {
      const colGroup = new THREE.Group();
      colGroup.position.set(pos.x, 2.5, pos.z);

      const colMesh = new THREE.Mesh(colGeo, this.matColumn);
      colGroup.add(colMesh);

      // Mid-height beam corbel (supporting 1st floor)
      const corbel1 = new THREE.Mesh(corbelGeo, this.matCorbel);
      corbel1.position.set(0, -0.4, 0);
      colGroup.add(corbel1);

      // Roof beam corbel
      const corbel2 = new THREE.Mesh(corbelGeo, this.matCorbel);
      corbel2.position.set(0, 1.8, 0);
      colGroup.add(corbel2);

      this.groupColumns.add(colGroup);
      this.columnsList.push(colGroup);
    });
    this.rootAssembly.add(this.groupColumns);

    // 3. Inverted-T & Perimeter Precast Beams
    this.groupBeams = new THREE.Group();
    this.beamsFloor1 = new THREE.Group();
    this.beamsFloor2 = new THREE.Group();

    // Longitudinal Inverted-T Beams
    const beamGeo = new THREE.BoxGeometry(6.6, 0.5, 0.6);
    const beamF1_A = new THREE.Mesh(beamGeo, this.matBeam);
    beamF1_A.position.set(0, 2.2, -2);
    this.beamsFloor1.add(beamF1_A);

    const beamF1_B = new THREE.Mesh(beamGeo, this.matBeam);
    beamF1_B.position.set(0, 2.2, 2);
    this.beamsFloor1.add(beamF1_B);

    const beamF2_A = new THREE.Mesh(beamGeo, this.matBeam);
    beamF2_A.position.set(0, 4.4, -2);
    this.beamsFloor2.add(beamF2_A);

    const beamF2_B = new THREE.Mesh(beamGeo, this.matBeam);
    beamF2_B.position.set(0, 4.4, 2);
    this.beamsFloor2.add(beamF2_B);

    this.groupBeams.add(this.beamsFloor1);
    this.groupBeams.add(this.beamsFloor2);
    this.rootAssembly.add(this.groupBeams);

    // 4. Precast Hollow-Core Floor Slabs
    this.groupSlabs = new THREE.Group();
    this.slabsFloor1 = new THREE.Group();
    this.slabsFloor2 = new THREE.Group();

    // Modular 1.2m wide hollow-core slabs across the 4m span
    const slabWidth = 1.15;
    const slabLength = 3.9;
    const slabThick = 0.25;

    for (let i = -2; i <= 2; i++) {
      const slabGeo = new THREE.BoxGeometry(slabWidth, slabThick, slabLength);
      
      const slab1 = new THREE.Mesh(slabGeo, this.matSlab);
      slab1.position.set(i * 1.22, 2.5, 0);
      this.slabsFloor1.add(slab1);

      const slab2 = new THREE.Mesh(slabGeo, this.matSlab);
      slab2.position.set(i * 1.22, 4.7, 0);
      this.slabsFloor2.add(slab2);
    }

    this.groupSlabs.add(this.slabsFloor1);
    this.groupSlabs.add(this.slabsFloor2);
    this.rootAssembly.add(this.groupSlabs);

    // 5. Architectural Canopy, Glass Railing & Louvers
    this.groupCanopy = new THREE.Group();
    const roofGeo = new THREE.BoxGeometry(7.2, 0.15, 4.8);
    const roof = new THREE.Mesh(roofGeo, this.matCorbel);
    roof.position.set(0, 5.0, 0);
    this.groupCanopy.add(roof);

    // Louvers on roof
    for (let j = -3; j <= 3; j++) {
      const louverGeo = new THREE.BoxGeometry(0.08, 0.4, 4.6);
      const louver = new THREE.Mesh(louverGeo, this.matGold);
      louver.position.set(j * 0.9, 5.3, 0);
      louver.rotation.z = 0.35;
      this.groupCanopy.add(louver);
    }

    // Glass perimeter curtain wall
    const glassGeo = new THREE.BoxGeometry(6.8, 1.0, 4.4);
    const glass = new THREE.Mesh(glassGeo, this.matGlass);
    glass.position.set(0, 3.1, 0);
    this.groupCanopy.add(glass);

    this.rootAssembly.add(this.groupCanopy);

    // 6. Dimension Annotations (3D lines & markers)
    this.groupAnnotations = new THREE.Group();
    this.createDimensionLine(new THREE.Vector3(-3.5, 0, 2.8), new THREE.Vector3(3.5, 0, 2.8), "SPAN: 7200 mm");
    this.createDimensionLine(new THREE.Vector3(-3.8, 0, -2.4), new THREE.Vector3(-3.8, 4.8, -2.4), "HEIGHT: 4800 mm");
    this.rootAssembly.add(this.groupAnnotations);
  }

  createDimensionLine(p1, p2, label) {
    const lineGeo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
    const line = new THREE.Line(lineGeo, new THREE.LineDashedMaterial({ color: 0x399dd6, dashSize: 0.3, gapSize: 0.15 }));
    line.computeLineDistances();
    this.groupAnnotations.add(line);

    // Tick marks at ends
    const tick1 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 0.15), this.matGold);
    tick1.position.copy(p1);
    this.groupAnnotations.add(tick1);

    const tick2 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 0.15), this.matGold);
    tick2.position.copy(p2);
    this.groupAnnotations.add(tick2);
  }

  toggleExploded() {
    this.isExploded = !this.isExploded;
    this.targetExploded = this.isExploded ? 1.0 : 0.0;
    sound.playStructuralClack();
    return this.isExploded;
  }

  setExplodedAmount(val) {
    this.targetExploded = Math.max(0, Math.min(1, val));
    this.isExploded = this.targetExploded > 0.1;
  }

  toggleLayer(layerKey) {
    if (layerKey in this.layers) {
      this.layers[layerKey] = !this.layers[layerKey];
      sound.playCaliperClick();

      // Apply visibility
      if (layerKey === 'grid' && this.groupGround) this.groupGround.visible = this.layers.grid;
      if (layerKey === 'columns' && this.groupColumns) this.groupColumns.visible = this.layers.columns;
      if (layerKey === 'beams' && this.groupBeams) this.groupBeams.visible = this.layers.beams;
      if (layerKey === 'slabs' && this.groupSlabs) this.groupSlabs.visible = this.layers.slabs;
      if (layerKey === 'canopy' && this.groupCanopy) this.groupCanopy.visible = this.layers.canopy;
      if (layerKey === 'annotations' && this.groupAnnotations) this.groupAnnotations.visible = this.layers.annotations;
      if (layerKey === 'wireframe') this.setWireframeMode(this.layers.wireframe);

      return this.layers[layerKey];
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
    const modes = ['blueprint', 'drafting', 'rendered'];
    const idx = (modes.indexOf(this.visualMode) + 1) % modes.length;
    this.visualMode = modes[idx];
    sound.playPencilScratch();

    if (this.visualMode === 'blueprint') {
      this.matColumn.color.setHex(0xe5f4ff);
      this.matBeam.color.setHex(0x399dd6);
      this.matSlab.color.setHex(0xf7fbff);
      this.blueLight.color.setHex(0x399dd6);
    } else if (this.visualMode === 'drafting') {
      this.matColumn.color.setHex(0x173c5b);
      this.matBeam.color.setHex(0x14212d);
      this.matSlab.color.setHex(0x8ccdf2);
      this.blueLight.color.setHex(0x8ccdf2);
    } else {
      // Rendered warm tone
      this.matColumn.color.setHex(0xd1d5db);
      this.matBeam.color.setHex(0x9ca3af);
      this.matSlab.color.setHex(0xf3f4f6);
      this.blueLight.color.setHex(0xe5a93c);
    }

    return this.visualMode;
  }

  resetCamera() {
    this.targetRotation.x = 0.35;
    this.targetRotation.y = -0.6;
    this.camera.position.set(10, 8, 12);
    this.camera.lookAt(0, 1.2, 0);
    this.setExplodedAmount(0.0);
    sound.playBlueprintUnfold();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const delta = this.clock.getDelta();

    // 1. Smooth Orbit Lerp
    if (!this.isDragging) {
      this.targetRotation.y += this.rotationVelocity.y;
    }

    this.rootAssembly.rotation.y += (this.targetRotation.y - this.rootAssembly.rotation.y) * 0.08;
    this.rootAssembly.rotation.x += (this.targetRotation.x - this.rootAssembly.rotation.x) * 0.08;

    // 2. Smooth Exploded View Animation (Lerp)
    this.explodedProgress += (this.targetExploded - this.explodedProgress) * 0.08;

    if (this.groupCanopy) {
      // Roof canopy lifts high into air
      this.groupCanopy.position.y = this.explodedProgress * 3.6;
    }

    if (this.slabsFloor2) {
      // 2nd floor slabs lift moderately
      this.slabsFloor2.position.y = this.explodedProgress * 2.2;
    }

    if (this.beamsFloor2) {
      // 2nd floor beams lift slightly
      this.beamsFloor2.position.y = this.explodedProgress * 1.5;
    }

    if (this.slabsFloor1) {
      // 1st floor slabs lift slightly
      this.slabsFloor1.position.y = this.explodedProgress * 0.9;
    }

    if (this.beamsFloor1) {
      // Beams separate laterally outward
      this.beamsFloor1.position.z = -this.explodedProgress * 0.6;
    }

    // Render
    this.renderer.render(this.scene, this.camera);
  }
}
