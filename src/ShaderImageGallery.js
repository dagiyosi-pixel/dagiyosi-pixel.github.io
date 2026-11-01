// ==========================================================================
// SHADER IMAGE GALLERY // THE BLUEPRINT UNIVERSE
// GLSL WebGL Image Distortion, Manga Screentone & Interactive Wave Shaders
// ==========================================================================

import * as THREE from 'three';

export class ShaderImageGallery {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.mesh = null;
    this.mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, velX: 0, velY: 0 };
    this.targetHover = 0.45; // Always gently alive!
    this.clock = new THREE.Clock();

    this.init();
  }

  init() {
    this.scene = new THREE.Scene();

    const width = this.canvas.clientWidth || window.innerWidth;
    const height = this.canvas.clientHeight || 500;

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.z = 4.8;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.setupGalleryMesh(width, height);

    // Mouse coordinates relative to canvas
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;

      this.mouse.velX = Math.abs(x - this.mouse.targetX);
      this.mouse.velY = Math.abs(y - this.mouse.targetY);

      this.mouse.targetX = x;
      this.mouse.targetY = y;
    });

    window.addEventListener('resize', this.onResize.bind(this));

    this.animate();
  }

  setupGalleryMesh(w, h) {
    const loader = new THREE.TextureLoader();

    // Load the two user uploaded artworks
    const texManga = loader.load('./images/manga-awakening.jpg');
    const texArch = loader.load('./images/architectural-perspective.jpg');

    texManga.generateMipmaps = true;
    texArch.generateMipmaps = true;

    // 16:9 aspect ratio geometry with high vertex density for wave displacement
    const geo = new THREE.PlaneGeometry(6.6, 3.8, 80, 80);

    this.uniforms = {
      uTex1: { value: texArch },
      uTex2: { value: texManga },
      uTransition: { value: 0.0 }, // 0 = Arch, 1 = Manga
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0.45 },
      uVelocity: { value: 0.0 },
      uTime: { value: 0.0 },
      uResolution: { value: new THREE.Vector2(w, h) }
    };

    const vertShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uHover;
      varying vec2 vUv;
      varying vec3 vPos;

      void main() {
        vUv = uv;
        vec3 pos = position;

        // Wave distortion reacting to mouse distance + ambient pulse
        float dist = distance(uv, uMouse);
        float wave = sin(dist * 22.0 - uTime * 4.5) * 0.1 * uHover * smoothstep(0.7, 0.0, dist);
        wave += sin(pos.x * 2.0 + uTime * 2.0) * cos(pos.y * 2.0 + uTime * 2.0) * 0.03;
        pos.z += wave;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        vPos = pos;
      }
    `;

    const fragShader = `
      uniform sampler2D uTex1;
      uniform sampler2D uTex2;
      uniform float uTransition;
      uniform vec2 uMouse;
      uniform float uHover;
      uniform float uVelocity;
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;

        // Mouse displacement ripple
        float dist = distance(uv, uMouse);
        vec2 offset = normalize(uv - uMouse) * sin(dist * 26.0 - uTime * 5.0) * 0.025 * uHover;

        // Chromatic Aberration / RGB Split based on mouse velocity + hover
        float split = 0.006 * (1.0 + uVelocity * 20.0) * max(uHover, 0.3);
        
        vec4 col1R = texture2D(uTex1, uv + offset + vec2(split, 0.0));
        vec4 col1G = texture2D(uTex1, uv + offset);
        vec4 col1B = texture2D(uTex1, uv + offset - vec2(split, 0.0));
        vec4 col1 = vec4(col1R.r, col1G.g, col1B.b, 1.0);

        vec4 col2R = texture2D(uTex2, uv + offset + vec2(split, 0.0));
        vec4 col2G = texture2D(uTex2, uv + offset);
        vec4 col2B = texture2D(uTex2, uv + offset - vec2(split, 0.0));
        vec4 col2 = vec4(col2R.r, col2G.g, col2B.b, 1.0);

        // Crossfade with diagonal slice transition
        float slice = smoothstep(uv.x - 0.25, uv.x + 0.25, uTransition * 1.5);
        vec4 finalCol = mix(col1, col2, slice);

        // Manga ink screentone overlay on hover
        float dotPattern = sin(uv.x * 240.0) * sin(uv.y * 240.0);
        if (dotPattern > 0.82 && uHover > 0.2) {
          finalCol = mix(finalCol, vec4(0.09, 0.09, 0.11, 1.0), 0.35 * uHover);
        }

        // Red perspective rim glow
        float edgeGlow = smoothstep(0.48, 0.5, abs(uv.x - 0.5)) * 0.25;
        finalCol.rgb += vec3(0.9, 0.13, 0.2) * edgeGlow * uHover;

        gl_FragColor = finalCol;
      }
    `;

    this.mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vertShader,
      fragmentShader: fragShader
    });

    this.mesh = new THREE.Mesh(geo, this.mat);
    this.scene.add(this.mesh);
  }

  setTransition(progress) {
    if (this.uniforms) {
      this.uniforms.uTransition.value = Math.max(0, Math.min(1, progress));
    }
  }

  setHover(isHovering) {
    this.targetHover = isHovering ? 1.0 : 0.45;
  }

  onResize() {
    const width = this.canvas.clientWidth || window.innerWidth;
    const height = this.canvas.clientHeight || 500;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (this.uniforms) {
      this.uniforms.uResolution.value.set(width, height);
    }
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const time = this.clock.getElapsedTime();

    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.1;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.1;

    if (this.uniforms) {
      this.uniforms.uTime.value = time;
      this.uniforms.uMouse.value.set(this.mouse.x, this.mouse.y);

      // Smooth hover lerp
      const curHover = this.uniforms.uHover.value;
      this.uniforms.uHover.value += (this.targetHover - curHover) * 0.08;

      // Smooth velocity decay
      this.uniforms.uVelocity.value += (this.mouse.velX + this.mouse.velY - this.uniforms.uVelocity.value) * 0.1;
      this.mouse.velX *= 0.9;
      this.mouse.velY *= 0.9;
    }

    if (this.mesh) {
      this.mesh.rotation.y = (this.mouse.x - 0.5) * 0.28;
      this.mesh.rotation.x = -(this.mouse.y - 0.5) * 0.22;
    }

    this.renderer.render(this.scene, this.camera);
  }
}
