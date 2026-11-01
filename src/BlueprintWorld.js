// ==========================================================================
// MANGA ARCHITECT UNIVERSE // THE BLUEPRINT UNIVERSE 3D ENGINE
// Fullscreen EffectComposer Post-Processing Pipeline + 6-Stage Spatial Choreography
// ==========================================================================

import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { MangaHatchShader, MangaPostShader } from './shaders.js';
import { sound } from './audio.js';

export class BlueprintWorld {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.composer = null;
    this.postPass = null;

    // 6-Stage Scene Groups
    this.rootAssembly = null;
    this.stage1Group = null; // Close-up Hand & Miniature Pavilion
    this.stage2Group = null; // Celestial Circular Aperture & Silhouette
    this.stage3Group = null; // Saturated Red Monumental Corridor
    this.stage4Group = null; // Drafting Studio & 3D Architect
    this.stage5Group = null; // Artifact Cluster
    this.stage6Group = null; // Ink Shatter Portal

    // Articulated Hand & Fingers
    this.handGroup = null;
    this.fingers = [];
    this.miniPavilion = null;

    // Exploded View State
    this.explodedProgress = 0.0;
    this.targetExploded = 0.0;
    this.isExploded = false;

    // Scroll Progress [0.0 to 1.0]
    this.scrollProgress = 0.0;
    this.targetScrollProgress = 0.0;

    // Mouse & Inertia
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0, velX: 0, velY: 0, prevX: 0, prevY: 0 };
    this.isDragging = false;
    this.previousDragPos = { x: 0, y: 0 };
    this.dragRotation = { x: 0, y: 0 };

    // Click Explosion State
    this.explosionProgress = 0.0;
    this.explosionCenter = new THREE.Vector2(0.5, 0.5);

    // Visual Mode: 'crimson' (default), 'blueprint', 'wireframe'
    this.visualMode = 'crimson';

    // Layer Controls
    this.layers = {
      hand: true,
      aperture: true,
      corridor: true,
      studio: true,
      perspectiveRays: true,
      wireframe: false
    };

    this.clock = new THREE.Clock();

    this.init();
  }

  init() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x09090b, 0.024);

    const width = this.canvas.clientWidth || window.innerWidth;
    const height = this.canvas.clientHeight || window.innerHeight;

    this.camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 200);
    // Initial Camera: Close-up on Stage 1 (Hand & Miniature Pavilion)
    this.camera.position.set(1.2, 1.4, 3.8);
    this.camera.lookAt(0.2, 0.7, 0.6);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Post-Processing EffectComposer Pipeline
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    this.postPass = new ShaderPass(MangaPostShader);
    this.postPass.uniforms.uResolution.value.set(width, height);
    this.composer.addPass(this.postPass);

    // Scene Lighting
    const ambLight = new THREE.AmbientLight(0xffffff, 0.65);
    this.scene.add(ambLight);

    this.dirLight = new THREE.DirectionalLight(0xffffff, 1.4);
    this.dirLight.position.set(8, 16, 10);
    this.scene.add(this.dirLight);

    this.crimsonLight = new THREE.PointLight(0xff2233, 4.0, 45);
    this.crimsonLight.position.set(-2, 4, 3);
    this.scene.add(this.crimsonLight);

    this.cyanLight = new THREE.PointLight(0x399dd6, 2.5, 35);
    this.cyanLight.position.set(4, 2, -10);
    this.scene.add(this.cyanLight);

    // Build the 6 Spatial Stages
    this.buildUniverse();

    // Event Listeners
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('mousedown', (e) => this.onMouseDown(e));
    window.addEventListener('mouseup', () => { this.isDragging = false; });

    this.animate();
  }

  resize() {
    const width = this.canvas.clientWidth || window.innerWidth;
    const height = this.canvas.clientHeight || window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.composer.setSize(width, height);
    if (this.postPass) {
      this.postPass.uniforms.uResolution.value.set(width, height);
    }
  }

  onMouseMove(e) {
    const normX = (e.clientX / window.innerWidth) * 2 - 1;
    const normY = -(e.clientY / window.innerHeight) * 2 + 1;

    this.mouse.velX = Math.abs(e.clientX - this.mouse.prevX) / window.innerWidth;
    this.mouse.velY = Math.abs(e.clientY - this.mouse.prevY) / window.innerHeight;
    this.mouse.prevX = e.clientX;
    this.mouse.prevY = e.clientY;

    this.mouse.targetX = normX;
    this.mouse.targetY = normY;

    if (this.postPass) {
      this.postPass.uniforms.uMouse.value.set(e.clientX / window.innerWidth, 1.0 - e.clientY / window.innerHeight);
      this.postPass.uniforms.uVelocity.value = this.mouse.velX + this.mouse.velY;
    }

    if (this.isDragging) {
      const dx = e.clientX - this.previousDragPos.x;
      const dy = e.clientY - this.previousDragPos.y;
      this.dragRotation.y += dx * 0.006;
      this.dragRotation.x += dy * 0.006;
      this.previousDragPos = { x: e.clientX, y: e.clientY };
    }
  }

  onMouseDown(e) {
    this.isDragging = true;
    this.previousDragPos = { x: e.clientX, y: e.clientY };

    // Trigger Click Ink Shockwave Explosion
    this.triggerExplosion(e.clientX / window.innerWidth, 1.0 - e.clientY / window.innerHeight);
    sound.playStructuralClack();
  }

  triggerExplosion(x = 0.5, y = 0.5) {
    this.explosionProgress = 0.01;
    this.explosionCenter.set(x, y);
    if (this.postPass) {
      this.postPass.uniforms.uExplosionCenter.value.copy(this.explosionCenter);
    }
    // Spawn radial particle burst
    if (this.particleVelocities) {
      for (let i = 0; i < 60; i++) {
        const idx = Math.floor(Math.random() * (this.particleVelocities.length / 3));
        this.particleVelocities[idx * 3] += (Math.random() - 0.5) * 0.4;
        this.particleVelocities[idx * 3 + 1] += (Math.random() - 0.5) * 0.4;
        this.particleVelocities[idx * 3 + 2] += (Math.random() - 0.5) * 0.4;
      }
    }
  }

  createMangaMaterial(baseHex, rimHex = 0xff2233) {
    return new THREE.ShaderMaterial({
      uniforms: {
        uLightDir: { value: new THREE.Vector3(3, 5, 4).normalize() },
        uColor: { value: new THREE.Color(baseHex) },
        uRimColor: { value: new THREE.Color(rimHex) },
        uHatchDensity: { value: 26.0 },
        uTime: { value: 0 }
      },
      vertexShader: MangaHatchShader.vertexShader,
      fragmentShader: MangaHatchShader.fragmentShader
    });
  }

  buildUniverse() {
    this.rootAssembly = new THREE.Group();
    this.scene.add(this.rootAssembly);

    // Shared Materials
    this.matPaper = new THREE.MeshStandardMaterial({ color: 0xf7fbff, roughness: 0.2 });
    this.matInkDark = new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.3 });
    this.matCrimson = new THREE.MeshStandardMaterial({ color: 0xff2233, roughness: 0.25, metalness: 0.1 });
    this.matRedVector = new THREE.LineBasicMaterial({ color: 0xff2233, transparent: true, opacity: 0.9, linewidth: 2 });
    this.matCyanVector = new THREE.LineBasicMaterial({ color: 0x399dd6, transparent: true, opacity: 0.7 });
    this.matGold = new THREE.MeshStandardMaterial({ color: 0xe5a93c, roughness: 0.3, metalness: 0.6 });

    // ==========================================
    // STAGE 1: CLOSE-UP ARTICULATED HAND & MINIATURE PAVILION
    // ==========================================
    this.stage1Group = new THREE.Group();
    this.stage1Group.position.set(0, 0, 0);

    // Miniature Architectural Pavilion Artifact
    this.miniPavilion = new THREE.Group();
    this.miniPavilion.position.set(0.2, 0.45, 0.6);

    // 1. Stepped Pedestal
    for (let i = 0; i < 3; i++) {
      const pedGeo = new THREE.BoxGeometry(0.8 - i * 0.15, 0.08, 0.8 - i * 0.15);
      const pedMesh = new THREE.Mesh(pedGeo, this.matPaper);
      pedMesh.position.y = i * 0.08;
      this.miniPavilion.add(pedMesh);
    }
    // 2. Four Micro-Columns with Structural Corbels
    const microColCoords = [
      { x: -0.22, z: -0.22 }, { x: 0.22, z: -0.22 },
      { x: -0.22, z: 0.22 },  { x: 0.22, z: 0.22 }
    ];
    microColCoords.forEach(c => {
      const colGeo = new THREE.BoxGeometry(0.08, 0.45, 0.08);
      const col = new THREE.Mesh(colGeo, this.matInkDark);
      col.position.set(c.x, 0.45, c.z);
      this.miniPavilion.add(col);

      const corbGeo = new THREE.BoxGeometry(0.12, 0.06, 0.08);
      const corb = new THREE.Mesh(corbGeo, this.matCrimson);
      corb.position.set(c.x, 0.55, c.z);
      this.miniPavilion.add(corb);
    });
    // 3. Pavilion Beam & Ledge Slab Roof
    const roofBeam = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.08, 0.68), this.matPaper);
    roofBeam.position.set(0, 0.72, 0);
    this.miniPavilion.add(roofBeam);

    // 4. Glowing Red Holographic Core Inside Pavilion
    const coreGeo = new THREE.OctahedronGeometry(0.12, 0);
    this.pavilionCore = new THREE.Mesh(coreGeo, this.createMangaMaterial(0xff2233, 0xffffff));
    this.pavilionCore.position.set(0, 0.46, 0);
    this.miniPavilion.add(this.pavilionCore);

    this.stage1Group.add(this.miniPavilion);

    // Articulated Manga Hand Reaching Over Pavilion
    this.buildArticulatedHand();
    this.stage1Group.add(this.handGroup);

    this.rootAssembly.add(this.stage1Group);

    // ==========================================
    // STAGE 2: CELESTIAL CIRCULAR APERTURE & SILHOUETTE
    // ==========================================
    this.stage2Group = new THREE.Group();
    this.stage2Group.position.set(0, 3.2, -6.5);

    // Monolithic Wall with Circular Aperture (Outer Box with subtracted circular opening)
    const wallShape = new THREE.Shape();
    wallShape.moveTo(-12, -6);
    wallShape.lineTo(12, -6);
    wallShape.lineTo(12, 10);
    wallShape.lineTo(-12, 10);
    wallShape.closePath();

    // Circular Opening Hole (radius 3.8)
    const holePath = new THREE.Path();
    holePath.absarc(0, 1.8, 3.8, 0, Math.PI * 2, true);
    wallShape.holes.push(holePath);

    const wallGeo = new THREE.ShapeGeometry(wallShape);
    const wallMesh = new THREE.Mesh(wallGeo, this.matInkDark);
    this.stage2Group.add(wallMesh);

    // Glowing Saturated Red Rim Ring Around Aperture
    const ringGeo = new THREE.TorusGeometry(3.85, 0.09, 16, 64);
    const ringMesh = new THREE.Mesh(ringGeo, this.matCrimson);
    ringMesh.position.set(0, 1.8, 0.05);
    this.stage2Group.add(ringMesh);

    // Concentric Perspective Coordinate Rings
    for (let r = 1; r <= 3; r++) {
      const cRingGeo = new THREE.RingGeometry(r * 1.1, r * 1.1 + 0.03, 48);
      const cRing = new THREE.Mesh(cRingGeo, this.matCyanVector);
      cRing.position.set(0, 1.8, -0.2);
      this.stage2Group.add(cRing);
    }

    // Stylized Architect Silhouette Standing at Aperture Center
    const silhGroup = new THREE.Group();
    silhGroup.position.set(0, -0.6, -2.5);

    // Figure Torso & Long Coat (Cape silhouette from manhwa)
    const coatGeo = new THREE.ConeGeometry(0.8, 2.4, 12);
    const coat = new THREE.Mesh(coatGeo, this.matInkDark);
    coat.position.y = 1.2;
    silhGroup.add(coat);

    // Head with Spiky Manga Silhouette
    const headGeo = new THREE.SphereGeometry(0.28, 12, 12);
    const head = new THREE.Mesh(headGeo, this.matInkDark);
    head.position.y = 2.6;
    silhGroup.add(head);

    // Glowing Crimson Architect Visor / Gaze
    const visorGeo = new THREE.BoxGeometry(0.24, 0.06, 0.15);
    const visor = new THREE.Mesh(visorGeo, this.matCrimson);
    visor.position.set(0, 2.6, 0.22);
    silhGroup.add(visor);

    this.stage2Group.add(silhGroup);
    this.rootAssembly.add(this.stage2Group);

    // ==========================================
    // STAGE 3: SATURATED RED MONUMENTAL CORRIDOR
    // ==========================================
    this.stage3Group = new THREE.Group();
    this.stage3Group.position.set(0, 0, -14.0);

    // Grand Monumental Colonnade (Precast Frames)
    const bayZ = [-4, 0, 4, 8];
    bayZ.forEach(bz => {
      // Left Column + Corbel
      const colL = new THREE.Mesh(new THREE.BoxGeometry(0.7, 6.0, 0.7), this.matPaper);
      colL.position.set(-4.5, 3.0, bz);
      this.stage3Group.add(colL);

      const corbL = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.45, 0.7), this.matCrimson);
      corbL.position.set(-4.1, 2.4, bz);
      this.stage3Group.add(corbL);

      // Right Column + Corbel
      const colR = new THREE.Mesh(new THREE.BoxGeometry(0.7, 6.0, 0.7), this.matPaper);
      colR.position.set(4.5, 3.0, bz);
      this.stage3Group.add(colR);

      const corbR = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.45, 0.7), this.matCrimson);
      corbR.position.set(4.1, 2.4, bz);
      this.stage3Group.add(corbR);

      // Transverse Inverted-T Beam Overhead
      const beamMesh = new THREE.Mesh(new THREE.BoxGeometry(9.6, 0.75, 0.8), this.matInkDark);
      beamMesh.position.set(0, 5.2, bz);
      this.stage3Group.add(beamMesh);

      // Precast Hollow-Core Floor Slabs
      for (let s = -3; s <= 3; s++) {
        const slabMesh = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.3, 3.8), this.matPaper);
        slabMesh.position.set(s * 1.22, 5.5, bz);
        this.stage3Group.add(slabMesh);
      }
    });

    // Radiant Red Vanishing Construction Rays Extending Down Corridor
    const apexPoint = new THREE.Vector3(0, 5.5, -12);
    for (let r = -8; r <= 8; r++) {
      const targetPoint = new THREE.Vector3(r * 1.5, 0.0, 10.0);
      const rayGeo = new THREE.BufferGeometry().setFromPoints([apexPoint, targetPoint]);
      const ray = new THREE.Line(rayGeo, this.matRedVector);
      this.stage3Group.add(ray);
    }

    this.rootAssembly.add(this.stage3Group);

    // ==========================================
    // STAGE 4 & 5: DRAFTING STUDIO & ARTIFACTS
    // ==========================================
    this.stage4Group = new THREE.Group();
    this.stage4Group.position.set(0, 0, -26.0);

    // Massive Architectural Drafting Table
    const tableTop = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.18, 3.2), this.matInkDark);
    tableTop.position.set(0, 1.8, 0);
    this.stage4Group.add(tableTop);

    // Table Trestle Legs with Red Technical Struts
    const legCoords = [
      { x: -2.3, z: -1.3 }, { x: 2.3, z: -1.3 },
      { x: -2.3, z: 1.3 },  { x: 2.3, z: 1.3 }
    ];
    legCoords.forEach(lc => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 1.8, 12), this.matPaper);
      leg.position.set(lc.x, 0.9, lc.z);
      this.stage4Group.add(leg);
    });

    // Computational & Architectural Artifacts on the Table:
    // Artifact 1: Precast HC-250 Slab Section with Visible Hollow Cores
    this.artifactSlab = new THREE.Group();
    this.artifactSlab.position.set(-1.4, 2.05, 0.2);
    const slabBlock = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.35, 1.1), this.matPaper);
    this.artifactSlab.add(slabBlock);
    // 3 Dark Hollow Voids on Front Face
    for (let v = -1; v <= 1; v++) {
      const voidMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.15, 16), this.matInkDark);
      voidMesh.rotation.x = Math.PI / 2;
      voidMesh.position.set(v * 0.4, 0, 0);
      this.artifactSlab.add(voidMesh);
    }
    this.stage4Group.add(this.artifactSlab);

    // Artifact 2: Structural Matrix Wireframe Lattice
    this.artifactMatrix = new THREE.Group();
    this.artifactMatrix.position.set(0, 2.2, 0.4);
    const matrixBox = new THREE.WireframeGeometry(new THREE.BoxGeometry(0.9, 0.9, 0.9));
    const matrixLines = new THREE.LineSegments(matrixBox, this.matRedVector);
    this.artifactMatrix.add(matrixLines);
    this.stage4Group.add(this.artifactMatrix);

    // Artifact 3: Geodesic Tech Dodecahedron (Lab Artifact)
    this.artifactPoly = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.42, 0),
      this.createMangaMaterial(0x18181b, 0xff2233)
    );
    this.artifactPoly.position.set(1.4, 2.25, -0.2);
    this.stage4Group.add(this.artifactPoly);

    // Standing 3D Stylized Architect beside Table
    this.architectFigure = new THREE.Group();
    this.architectFigure.position.set(3.2, 0, 0.2);
    this.architectFigure.rotation.y = -Math.PI / 2.8;

    const archBody = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 2.8, 16), this.matInkDark);
    archBody.position.y = 1.4;
    this.architectFigure.add(archBody);

    const archHead = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), this.matPaper);
    archHead.position.y = 3.0;
    this.architectFigure.add(archHead);

    const archVisor = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.08, 0.2), this.matCrimson);
    archVisor.position.set(0, 3.0, 0.22);
    this.architectFigure.add(archVisor);

    this.stage4Group.add(this.architectFigure);
    this.rootAssembly.add(this.stage4Group);

    // ==========================================
    // STAGE 6: EXPLOSIVE INK PORTAL
    // ==========================================
    this.stage6Group = new THREE.Group();
    this.stage6Group.position.set(0, 2.5, -36.0);

    // Huge Radial Ink Shatter Octagon
    for (let o = 1; o <= 5; o++) {
      const octGeo = new THREE.RingGeometry(o * 1.4, o * 1.4 + 0.1, 8);
      const octMesh = new THREE.Mesh(octGeo, o % 2 === 0 ? this.matRedVector : this.matCyanVector);
      octMesh.rotation.z = o * 0.25;
      this.stage6Group.add(octMesh);
    }
    this.rootAssembly.add(this.stage6Group);

    // Global Floating Ink & Ember Particles
    this.createGlobalParticles();
  }

  buildArticulatedHand() {
    this.handGroup = new THREE.Group();

    const skinMat = this.createMangaMaterial(0xf4f4f5, 0xff2233);
    const cuffMat = this.createMangaMaterial(0x09090b, 0xff2233);

    // Forearm
    const forearmGeo = new THREE.CylinderGeometry(0.48, 0.62, 3.2, 16);
    forearmGeo.rotateZ(Math.PI / 12);
    const forearm = new THREE.Mesh(forearmGeo, skinMat);
    forearm.position.set(0.65, -1.8, 0);
    this.handGroup.add(forearm);

    // Wrist Ring / Tech Bracelet
    const cuffGeo = new THREE.TorusGeometry(0.68, 0.12, 12, 32);
    cuffGeo.rotateX(Math.PI / 2.3);
    const cuff = new THREE.Mesh(cuffGeo, cuffMat);
    cuff.position.set(0.28, -0.38, 0.1);
    this.handGroup.add(cuff);

    // Palm
    const palmGeo = new THREE.BoxGeometry(1.05, 1.2, 0.36);
    const palm = new THREE.Mesh(palmGeo, skinMat);
    palm.position.set(0, 0.45, 0);
    this.handGroup.add(palm);

    // 4 Articulated Fingers
    const fingerPositions = [
      { x: -0.38, y: 1.1, len: 0.85, rotZ: 0.15 },
      { x: -0.12, y: 1.25, len: 1.0, rotZ: 0.04 },
      { x: 0.16, y: 1.18, len: 0.92, rotZ: -0.05 },
      { x: 0.4, y: 1.02, len: 0.78, rotZ: -0.16 }
    ];

    this.fingers = [];
    fingerPositions.forEach(cfg => {
      const fingerGroup = new THREE.Group();
      fingerGroup.position.set(cfg.x, 0.95, 0);

      // Proximal knuckle
      const seg1Geo = new THREE.CylinderGeometry(0.12, 0.14, cfg.len * 0.6, 12);
      const seg1 = new THREE.Mesh(seg1Geo, skinMat);
      seg1.position.y = (cfg.len * 0.6) / 2;
      seg1.rotation.x = -0.45;
      fingerGroup.add(seg1);

      // Distal claw segment
      const seg2Geo = new THREE.CylinderGeometry(0.09, 0.12, cfg.len * 0.5, 12);
      const seg2 = new THREE.Mesh(seg2Geo, skinMat);
      seg2.position.set(0, cfg.len * 0.56, 0.22);
      seg2.rotation.x = -0.7;
      fingerGroup.add(seg2);

      fingerGroup.rotation.z = cfg.rotZ;
      this.handGroup.add(fingerGroup);
      this.fingers.push(fingerGroup);
    });

    // Thumb
    const thumbGroup = new THREE.Group();
    thumbGroup.position.set(-0.58, 0.2, 0.1);
    const thumbGeo = new THREE.CylinderGeometry(0.13, 0.16, 0.72, 12);
    const thumb = new THREE.Mesh(thumbGeo, skinMat);
    thumb.position.y = 0.36;
    thumb.rotation.z = 0.62;
    thumb.rotation.x = -0.35;
    thumbGroup.add(thumb);
    this.handGroup.add(thumbGroup);

    // Initial Hand Orientation (reaching toward miniature pavilion)
    this.handGroup.position.set(0.65, 1.25, 1.4);
    this.handGroup.rotation.set(-0.25, -0.65, 0.1);
    this.handGroup.scale.set(0.85, 0.85, 0.85);
  }

  createGlobalParticles() {
    const count = 2200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colCrimson = new THREE.Color(0xff2233);
    const colCyan = new THREE.Color(0x399dd6);
    const colWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16 + 3.0;
      positions[i * 3 + 2] = -Math.random() * 42;

      velocities[i * 3] = (Math.random() - 0.5) * 0.012;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.012;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.015;

      const r = Math.random();
      let c = colWhite;
      if (r > 0.6) c = colCrimson;
      else if (r > 0.35) c = colCyan;

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.88
    });

    this.particles = new THREE.Points(geometry, pMat);
    this.particleVelocities = velocities;
    this.scene.add(this.particles);
  }

  // Update scroll progress along the 6-stage trajectory
  updateScrollProgress(progress) {
    this.targetScrollProgress = Math.max(0.0, Math.min(1.0, progress));
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

      if (key === 'hand' && this.stage1Group) this.stage1Group.visible = this.layers.hand;
      if (key === 'aperture' && this.stage2Group) this.stage2Group.visible = this.layers.aperture;
      if (key === 'corridor' && this.stage3Group) this.stage3Group.visible = this.layers.corridor;
      if (key === 'studio' && this.stage4Group) this.stage4Group.visible = this.layers.studio;
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
    sound.playPencilScratch();

    if (this.visualMode === 'crimson') {
      this.setWireframeMode(false);
      this.matPaper.color.setHex(0xf7fbff);
      this.matInkDark.color.setHex(0x09090b);
      this.matCrimson.color.setHex(0xff2233);
      this.crimsonLight.color.setHex(0xff2233);
    } else if (this.visualMode === 'blueprint') {
      this.setWireframeMode(false);
      this.matPaper.color.setHex(0xe5f4ff);
      this.matInkDark.color.setHex(0x173c5b);
      this.matCrimson.color.setHex(0x399dd6);
      this.crimsonLight.color.setHex(0x399dd6);
    } else {
      this.setWireframeMode(true);
      this.matCrimson.color.setHex(0xffaa00);
      this.crimsonLight.color.setHex(0xffaa00);
    }
    return this.visualMode;
  }

  resetCamera() {
    this.targetScrollProgress = 0.0;
    this.scrollProgress = 0.0;
    this.targetExploded = 0.0;
    this.isExploded = false;
    this.dragRotation.x = 0;
    this.dragRotation.y = 0;
    sound.playBlueprintUnfold();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const delta = this.clock.getDelta();
    const time = this.clock.getElapsedTime();

    // Smooth Mouse Interpolation
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.08;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.08;

    // Smooth Scroll Progression [0.0 to 1.0]
    this.scrollProgress += (this.targetScrollProgress - this.scrollProgress) * 0.08;
    const sp = this.scrollProgress;

    // ==========================================
    // 6-STAGE CINEMATIC CAMERA PATH INTERPOLATION
    // ==========================================
    let targetCamPos = new THREE.Vector3(1.2, 1.4, 3.8);
    let targetLookAt = new THREE.Vector3(0.2, 0.7, 0.6);

    if (sp < 0.18) {
      // Stage 1: Close-up on Hand & Miniature Pavilion
      const t = sp / 0.18;
      targetCamPos.set(1.2 - t * 0.4, 1.4 + t * 0.3, 3.8 - t * 0.8);
      targetLookAt.set(0.2, 0.7, 0.6);
    } else if (sp < 0.36) {
      // Stage 2: Pull back and up to Circular Aperture & Architect Silhouette
      const t = (sp - 0.18) / 0.18;
      targetCamPos.set(0.8 - t * 0.8, 1.7 + t * 1.8, 3.0 - t * 4.5);
      targetLookAt.set(0, 3.6, -6.5);
    } else if (sp < 0.55) {
      // Stage 3: Dolly through Aperture down the Red Monumental Corridor
      const t = (sp - 0.36) / 0.19;
      targetCamPos.set(0, 3.5 - t * 0.8, -1.5 - t * 12.0);
      targetLookAt.set(0, 2.7, -22.0);
    } else if (sp < 0.75) {
      // Stage 4: Pan into Drafting Studio & Standing Architect
      const t = (sp - 0.55) / 0.20;
      targetCamPos.set(t * 3.8, 2.7 - t * 0.4, -13.5 - t * 8.5);
      targetLookAt.set(0.5, 2.0, -26.0);
    } else if (sp < 0.90) {
      // Stage 5: Tight Close-up Orbit on Table Artifacts (HC-250, Matrix, Dodecahedron)
      const t = (sp - 0.75) / 0.15;
      targetCamPos.set(3.8 - t * 2.6, 2.3 + t * 0.4, -22.0 - t * 3.5);
      targetLookAt.set(0, 2.1, -26.0);
    } else {
      // Stage 6: Accelerate into Ink Shatter Vortex
      const t = (sp - 0.90) / 0.10;
      targetCamPos.set(1.2 - t * 1.2, 2.7, -25.5 - t * 10.0);
      targetLookAt.set(0, 2.5, -38.0);
    }

    // Apply Subtle Mouse Parallax Offset
    targetCamPos.x += this.mouse.x * 0.45;
    targetCamPos.y += this.mouse.y * 0.35;

    this.camera.position.lerp(targetCamPos, 0.09);
    this.camera.lookAt(targetLookAt);

    // ==========================================
    // INTERACTIVE HAND INERTIA & FINGER FLEXION
    // ==========================================
    if (this.handGroup) {
      // Hand rotates gently toward cursor position with smooth damping
      const handTargetRotY = -0.65 + this.mouse.x * 0.45;
      const handTargetRotX = -0.25 - this.mouse.y * 0.35;
      this.handGroup.rotation.y += (handTargetRotY - this.handGroup.rotation.y) * 0.1;
      this.handGroup.rotation.x += (handTargetRotX - this.handGroup.rotation.x) * 0.1;

      // Fingers flex dynamically on hover
      this.fingers.forEach((finger, idx) => {
        const flex = Math.sin(time * 2.5 + idx * 0.8) * 0.08 + (this.mouse.y * 0.2);
        finger.rotation.x = -0.25 + flex;
      });
    }

    // Miniature Pavilion Core Pulse
    if (this.pavilionCore) {
      this.pavilionCore.rotation.y += 0.02;
      this.pavilionCore.rotation.x += 0.01;
      const s = 1.0 + Math.sin(time * 3.0) * 0.15;
      this.pavilionCore.scale.set(s, s, s);
    }

    // Drafting Artifact Rotations
    if (this.artifactMatrix) {
      this.artifactMatrix.rotation.y += 0.015;
      this.artifactMatrix.rotation.z += 0.01;
    }
    if (this.artifactPoly) {
      this.artifactPoly.rotation.y += 0.018;
      this.artifactPoly.rotation.x += 0.012;
    }

    // Exploded View Separation
    this.explodedProgress += (this.targetExploded - this.explodedProgress) * 0.08;
    if (this.stage3Group) {
      this.stage3Group.position.y = this.explodedProgress * 2.5;
    }

    // Global Floating Particles Update
    if (this.particles) {
      const pos = this.particles.geometry.attributes.position.array;
      for (let i = 0; i < pos.length / 3; i++) {
        pos[i * 3 + 1] += this.particleVelocities[i * 3 + 1];
        if (pos[i * 3 + 1] < -4) pos[i * 3 + 1] = 16;
        if (pos[i * 3 + 1] > 16) pos[i * 3 + 1] = -4;
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
    }

    // Click Shockwave Explosion Decay
    if (this.explosionProgress > 0) {
      this.explosionProgress += 0.035;
      if (this.explosionProgress > 1.0) this.explosionProgress = 0.0;
      if (this.postPass) {
        this.postPass.uniforms.uExplosion.value = this.explosionProgress;
      }
    }

    if (this.postPass) {
      this.postPass.uniforms.uTime.value = time;
    }

    // Render with EffectComposer (Post-processing active!)
    this.composer.render();
  }
}
