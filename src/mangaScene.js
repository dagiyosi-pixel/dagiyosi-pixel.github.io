import * as THREE from 'three';
import { MangaHatchShader, OutlineVertexShader, OutlineFragmentShader } from './shaders.js';
import { sound } from './audio.js';

export class MangaScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = null;
    this.camera = null;
    this.renderer = null;

    // Groups
    this.handGroup = null;
    this.relicsGroup = null;
    this.particles = null;

    // Mouse & Inertia
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.windowHalf = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Scroll state
    this.scrollY = 0;
    this.targetScrollY = 0;

    // Materials
    this.hatchMaterials = [];
    this.hatchEnabled = true;

    // Clock
    this.clock = new THREE.Clock();

    this.init();
  }

  init() {
    // 1. Scene & Camera
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x09090b, 0.035);

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.set(0, 0, 10);

    // 2. Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 8, 7);
    this.scene.add(dirLight);

    const crimsonLight = new THREE.PointLight(0xff2233, 2.5, 20);
    crimsonLight.position.set(-4, -2, 4);
    this.scene.add(crimsonLight);

    // 4. Create Elements
    this.createMangaArmAndHand();
    this.createFloatingRelics();
    this.createInkParticles();

    // 5. Event Listeners
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('mousedown', this.onMouseDown.bind(this));

    // 6. Start Loop
    this.animate();
  }

  createMangaMaterial(baseColorHex, rimColorHex = 0xff2233) {
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uLightDir: { value: new THREE.Vector3(3, 5, 4).normalize() },
        uColor: { value: new THREE.Color(baseColorHex) },
        uRimColor: { value: new THREE.Color(rimColorHex) },
        uHatchDensity: { value: 32.0 },
        uTime: { value: 0 }
      },
      vertexShader: MangaHatchShader.vertexShader,
      fragmentShader: MangaHatchShader.fragmentShader
    });
    this.hatchMaterials.push(mat);
    return mat;
  }

  createMangaArmAndHand() {
    this.handGroup = new THREE.Group();

    const skinMat = this.createMangaMaterial(0xf4f4f5, 0xff2233);
    const cuffMat = this.createMangaMaterial(0x111116, 0xff2233);
    const metalMat = this.createMangaMaterial(0x27272a, 0xffaa00);

    // Forearm
    const forearmGeo = new THREE.CylinderGeometry(0.5, 0.65, 3.2, 16);
    forearmGeo.rotateZ(Math.PI / 12);
    const forearm = new THREE.Mesh(forearmGeo, skinMat);
    forearm.position.set(0.6, -1.8, 0);
    this.handGroup.add(forearm);

    // Manga Wrist Cuff / Bracelet (matching the video's wrist ring!)
    const cuffGeo = new THREE.TorusGeometry(0.68, 0.12, 12, 32);
    cuffGeo.rotateX(Math.PI / 2.3);
    const cuff = new THREE.Mesh(cuffGeo, cuffMat);
    cuff.position.set(0.25, -0.4, 0.1);
    this.handGroup.add(cuff);

    // Palm
    const palmGeo = new THREE.BoxGeometry(1.0, 1.2, 0.35);
    const palm = new THREE.Mesh(palmGeo, skinMat);
    palm.position.set(0, 0.4, 0);
    this.handGroup.add(palm);

    // 5 Articulated Fingers reaching toward viewer
    const fingerPositions = [
      { x: -0.38, y: 1.1, len: 0.8, rotZ: 0.15 },  // Index
      { x: -0.12, y: 1.2, len: 0.95, rotZ: 0.05 }, // Middle
      { x: 0.15, y: 1.15, len: 0.9, rotZ: -0.05 }, // Ring
      { x: 0.38, y: 1.0, len: 0.75, rotZ: -0.15 }  // Pinky
    ];

    this.fingers = [];

    fingerPositions.forEach(cfg => {
      const fingerGroup = new THREE.Group();
      fingerGroup.position.set(cfg.x, 0.9, 0);

      // Knuckle proximal segment
      const seg1Geo = new THREE.CylinderGeometry(0.12, 0.14, cfg.len * 0.6, 12);
      const seg1 = new THREE.Mesh(seg1Geo, skinMat);
      seg1.position.y = (cfg.len * 0.6) / 2;
      seg1.rotation.x = -0.4; // Reaching forward
      fingerGroup.add(seg1);

      // Distal segment
      const seg2Geo = new THREE.CylinderGeometry(0.09, 0.12, cfg.len * 0.5, 12);
      const seg2 = new THREE.Mesh(seg2Geo, skinMat);
      seg2.position.set(0, cfg.len * 0.55, 0.2);
      seg2.rotation.x = -0.65; // Curved claw toward screen
      fingerGroup.add(seg2);

      fingerGroup.rotation.z = cfg.rotZ;
      this.handGroup.add(fingerGroup);
      this.fingers.push(fingerGroup);
    });

    // Thumb
    const thumbGroup = new THREE.Group();
    thumbGroup.position.set(-0.55, 0.2, 0.1);
    const thumbGeo = new THREE.CylinderGeometry(0.13, 0.15, 0.7, 12);
    const thumb = new THREE.Mesh(thumbGeo, skinMat);
    thumb.position.y = 0.35;
    thumb.rotation.z = 0.6;
    thumb.rotation.x = -0.3;
    thumbGroup.add(thumb);
    this.handGroup.add(thumbGroup);

    // Initial pose and location
    this.handGroup.position.set(2.4, 0.2, 2.5);
    this.handGroup.rotation.set(0.2, -0.4, -0.15);
    this.scene.add(this.handGroup);
  }

  createFloatingRelics() {
    this.relicsGroup = new THREE.Group();

    // 1. Ribbed Relic Cylinder (Inspired by the 3 bottles/cylinders in the video!)
    const bottleMat = this.createMangaMaterial(0xff2233, 0xffffff);
    const bottleGeo = new THREE.CylinderGeometry(0.35, 0.35, 1.8, 24);
    this.bottle = new THREE.Mesh(bottleGeo, bottleMat);
    this.bottle.position.set(-3.2, 1.2, -1.0);
    this.relicsGroup.add(this.bottle);

    // Add comic ribbed rings
    for (let i = -3; i <= 3; i++) {
      const ringGeo = new THREE.TorusGeometry(0.38, 0.03, 8, 24);
      const ring = new THREE.Mesh(ringGeo, this.createMangaMaterial(0x09090b, 0xff2233));
      ring.rotation.x = Math.PI / 2;
      ring.position.set(-3.2, 1.2 + i * 0.2, -1.0);
      this.relicsGroup.add(ring);
    }

    // 2. Architectural Structural Beam Section (Precast Inverted-T homage)
    const beamMat = this.createMangaMaterial(0xf4f4f5, 0xff2233);
    const beamGeo = new THREE.BoxGeometry(2.0, 0.4, 0.5);
    this.beam = new THREE.Mesh(beamGeo, beamMat);
    this.beam.position.set(-2.2, -2.0, -1.5);
    this.beam.rotation.set(0.4, 0.6, 0.2);
    this.relicsGroup.add(this.beam);

    // 3. Geodesic Tech Dodecahedron
    const polyMat = this.createMangaMaterial(0x18181b, 0xff2233);
    const polyGeo = new THREE.DodecahedronGeometry(0.8, 0);
    this.poly = new THREE.Mesh(polyGeo, polyMat);
    this.poly.position.set(3.5, -2.2, -2.0);
    this.relicsGroup.add(this.poly);

    this.scene.add(this.relicsGroup);
  }

  createInkParticles() {
    const particleCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const crimson = new THREE.Color(0xff2233);
    const paper = new THREE.Color(0xf4f4f5);
    const darkInk = new THREE.Color(0x09090b);

    for (let i = 0; i < particleCount; i++) {
      // Scatter in a cylinder around the camera
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;

      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;

      // Color distribution: 60% black ink, 25% crimson sparks, 15% white ink
      const rand = Math.random();
      let col = darkInk;
      if (rand > 0.75) col = crimson;
      else if (rand > 0.6) col = paper;

      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    this.particleVelocities = velocities;

    const pMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    this.particles = new THREE.Points(geometry, pMaterial);
    this.scene.add(this.particles);
  }

  onResize() {
    this.windowHalf.x = window.innerWidth / 2;
    this.windowHalf.y = window.innerHeight / 2;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  onMouseMove(e) {
    this.mouse.targetX = (e.clientX - this.windowHalf.x) / this.windowHalf.x;
    this.mouse.targetY = (e.clientY - this.windowHalf.y) / this.windowHalf.y;
  }

  onMouseDown() {
    this.triggerInkBurst();
    sound.playClick();
  }

  triggerInkBurst(count = 200) {
    sound.playInkBurst();
    if (!this.particles) return;

    const positions = this.particles.geometry.attributes.position.array;
    const velocities = this.particleVelocities;

    // Pick 200 random particles and fling them from hand position
    for (let i = 0; i < count; i++) {
      const idx = Math.floor(Math.random() * (positions.length / 3));
      positions[idx * 3] = this.handGroup.position.x + (Math.random() - 0.5) * 0.5;
      positions[idx * 3 + 1] = this.handGroup.position.y + (Math.random() - 0.5) * 0.5;
      positions[idx * 3 + 2] = this.handGroup.position.z + (Math.random() - 0.5) * 0.5;

      velocities[idx * 3] = (Math.random() - 0.5) * 0.45;
      velocities[idx * 3 + 1] = (Math.random() - 0.5) * 0.45;
      velocities[idx * 3 + 2] = (Math.random() - 0.5) * 0.45 + 0.15;
    }
    this.particles.geometry.attributes.position.needsUpdate = true;
  }

  toggleShader() {
    this.hatchEnabled = !this.hatchEnabled;
    this.hatchMaterials.forEach(mat => {
      mat.uniforms.uHatchDensity.value = this.hatchEnabled ? 32.0 : 0.0;
    });
    return this.hatchEnabled;
  }

  setScroll(scrollRatio) {
    this.targetScrollY = scrollRatio;
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const delta = this.clock.getDelta();
    const time = this.clock.getElapsedTime();

    // 1. Smooth Lerp Mouse
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // 2. Smooth Lerp Scroll
    this.scrollY += (this.targetScrollY - this.scrollY) * 0.08;

    // 3. Update Shader Uniforms
    this.hatchMaterials.forEach(mat => {
      mat.uniforms.uTime.value = time;
    });

    // 4. Animate Manga Arm & Hand
    if (this.handGroup) {
      // Inertial tilt following cursor
      this.handGroup.rotation.y = -0.4 + this.mouse.x * 0.45;
      this.handGroup.rotation.x = 0.2 + this.mouse.y * 0.35;
      this.handGroup.position.x = 2.4 + this.mouse.x * 0.6;
      this.handGroup.position.y = 0.2 - this.mouse.y * 0.6 - this.scrollY * 4.0;

      // Subtle breathing motion on fingers
      if (this.fingers) {
        this.fingers.forEach((f, i) => {
          f.children[0].rotation.x = -0.4 + Math.sin(time * 2.5 + i) * 0.06;
          f.children[1].rotation.x = -0.65 + Math.cos(time * 2.5 + i) * 0.08;
        });
      }
    }

    // 5. Rotate Floating Relics
    if (this.relicsGroup) {
      this.relicsGroup.position.y = -this.scrollY * 6.0;
      if (this.bottle) {
        this.bottle.rotation.y = time * 0.6;
        this.bottle.rotation.x = Math.sin(time * 0.5) * 0.15;
      }
      if (this.beam) {
        this.beam.rotation.y = time * 0.3;
        this.beam.rotation.z = Math.cos(time * 0.4) * 0.2;
      }
      if (this.poly) {
        this.poly.rotation.x = time * 0.4;
        this.poly.rotation.y = time * 0.5;
      }
    }

    // 6. Update Particle Physics
    if (this.particles) {
      const positions = this.particles.geometry.attributes.position.array;
      const velocities = this.particleVelocities;

      for (let i = 0; i < positions.length / 3; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];

        // Drag friction
        velocities[i * 3] *= 0.96;
        velocities[i * 3 + 1] *= 0.96;
        velocities[i * 3 + 2] *= 0.96;

        // Wrap around boundaries
        if (Math.abs(positions[i * 3]) > 10) positions[i * 3] *= -0.95;
        if (Math.abs(positions[i * 3 + 1]) > 10) positions[i * 3 + 1] *= -0.95;
        if (Math.abs(positions[i * 3 + 2]) > 8) positions[i * 3 + 2] *= -0.95;
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
    }

    // 7. Render
    this.renderer.render(this.scene, this.camera);
  }
}
