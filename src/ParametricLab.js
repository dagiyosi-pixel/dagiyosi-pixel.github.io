// ==========================================================================
// PARAMETRIC GEOMETRY LAB // INTERACTIVE 3D COMPUTATIONAL EXPERIMENT
// Procedural Torus Knot, Möbius Arch & Hyperboloid with Real-Time Shading & Telemetry
// Inspired by Dagmawi Yosef's Section 04 Technology & Lab reference.
// ==========================================================================

import * as THREE from 'three';

export class ParametricLab {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.mesh = null;
    this.wireMesh = null;
    this.group = null;

    // Active state
    this.topology = 'torus'; // 'torus', 'mobius', 'hyper'
    this.shading = 'titanium'; // 'titanium', 'wireframe', 'glass'

    // Parameters
    this.params = {
      radius: 1.25,
      tube: 0.38,
      tubularSegments: 128,
      radialSegments: 18,
      p: 2, // twist
      q: 3, // loops
      wireframe: false
    };

    // Interaction
    this.isDragging = false;
    this.prevMouse = { x: 0, y: 0 };
    this.targetRot = { x: 0.35, y: -0.4 };
    this.clock = new THREE.Clock();

    this.init();
  }

  init() {
    this.scene = new THREE.Scene();

    const width = this.canvas.clientWidth || 480;
    const height = this.canvas.clientHeight || 420;

    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    this.camera.position.set(0, 0, 5.4);

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

    const dir1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dir1.position.set(4, 6, 5);
    this.scene.add(dir1);

    const rimCyan = new THREE.DirectionalLight(0x00d4ff, 3.4);
    rimCyan.position.set(-5, -2, -3);
    this.scene.add(rimCyan);

    const fillBlue = new THREE.PointLight(0x0088ff, 2.8, 14);
    fillBlue.position.set(0, 0, 2);
    this.scene.add(fillBlue);

    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Build the geometry
    this.rebuildGeometry();

    // Setup events
    window.addEventListener('resize', () => this.resize());
    this.setupInteractions();
    this.animate();
  }

  resize() {
    const width = this.canvas.clientWidth || 480;
    const height = this.canvas.clientHeight || 420;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
      this.targetRot.y += dx * 0.012;
      this.targetRot.x += dy * 0.012;
      this.prevMouse = { x: e.clientX, y: e.clientY };
    });
  }

  setTopology(type) {
    this.topology = type;
    this.rebuildGeometry();
    this.updateCodePreview();
  }

  setShading(mode) {
    this.shading = mode;
    this.rebuildGeometry();
  }

  createGeometry() {
    const { radius, tube, tubularSegments, radialSegments, p, q } = this.params;

    if (this.topology === 'torus') {
      return new THREE.TorusKnotGeometry(
        radius,
        tube,
        Math.round(tubularSegments),
        Math.round(radialSegments),
        p,
        q
      );
    } else if (this.topology === 'mobius') {
      // Procedural Möbius Strip
      const uSeg = Math.round(tubularSegments);
      const vSeg = Math.round(radialSegments);
      const positions = [];
      const indices = [];

      for (let i = 0; i <= uSeg; i++) {
        const u = (i / uSeg) * Math.PI * 2;
        for (let j = 0; j <= vSeg; j++) {
          const v = ((j / vSeg) - 0.5) * (tube * 2.8);
          const x = (radius + v * Math.cos(u / 2)) * Math.cos(u);
          const y = (radius + v * Math.cos(u / 2)) * Math.sin(u);
          const z = v * Math.sin(u / 2);
          positions.push(x, y, z);
        }
      }

      for (let i = 0; i < uSeg; i++) {
        for (let j = 0; j < vSeg; j++) {
          const a = i * (vSeg + 1) + j;
          const b = (i + 1) * (vSeg + 1) + j;
          const c = (i + 1) * (vSeg + 1) + (j + 1);
          const d = i * (vSeg + 1) + (j + 1);
          indices.push(a, b, d);
          indices.push(b, c, d);
        }
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geo.setIndex(indices);
      geo.computeVertexNormals();
      return geo;
    } else if (this.topology === 'hyper') {
      // Hyperboloid of One Sheet
      return new THREE.CylinderGeometry(radius * 0.9, radius * 1.3, tube * 5.5, 36, 18, false);
    }

    return new THREE.TorusKnotGeometry(radius, tube, 96, 16, 2, 3);
  }

  rebuildGeometry() {
    if (this.mesh) {
      this.group.remove(this.mesh);
      this.mesh.geometry.dispose();
    }
    if (this.wireMesh) {
      this.group.remove(this.wireMesh);
      this.wireMesh.geometry.dispose();
    }

    const geo = this.createGeometry();

    // Material selection
    let mat;
    if (this.shading === 'titanium') {
      mat = new THREE.MeshStandardMaterial({
        color: 0x1f242c,
        roughness: 0.28,
        metalness: 0.82,
        flatShading: true,
        wireframe: this.params.wireframe
      });
    } else if (this.shading === 'wireframe') {
      mat = new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        wireframe: true,
        transparent: true,
        opacity: 0.85
      });
    } else if (this.shading === 'glass') {
      mat = new THREE.MeshPhysicalMaterial({
        color: 0x0088ff,
        emissive: 0x0033aa,
        emissiveIntensity: 0.4,
        roughness: 0.1,
        metalness: 0.2,
        transmission: 0.78,
        transparent: true,
        opacity: 0.9,
        ior: 1.5
      });
    }

    this.mesh = new THREE.Mesh(geo, mat);
    this.group.add(this.mesh);

    // Subtle cyan edges if not in pure wireframe mode
    if (this.shading !== 'wireframe') {
      const wireGeo = new THREE.WireframeGeometry(geo);
      this.wireMesh = new THREE.LineSegments(
        wireGeo,
        new THREE.LineBasicMaterial({ color: 0x00b4ff, transparent: true, opacity: 0.35 })
      );
      this.group.add(this.wireMesh);
    }

    // Telemetry display update
    const verts = geo.attributes.position ? geo.attributes.position.count : 0;
    const faces = geo.index ? Math.round(geo.index.count / 3) : Math.round(verts / 3);

    const elVerts = document.getElementById('lab-verts-count');
    const elFaces = document.getElementById('lab-faces-count');
    if (elVerts) elVerts.textContent = `VERTS: ${verts.toLocaleString()}`;
    if (elFaces) elFaces.textContent = `FACES: ${faces.toLocaleString()}`;
  }

  updateParam(key, value) {
    if (key in this.params) {
      this.params[key] = value;
      this.rebuildGeometry();
      this.updateCodePreview();
    }
  }

  updateCodePreview() {
    const codeEl = document.querySelector('.code-block code');
    if (!codeEl) return;

    if (this.topology === 'torus') {
      codeEl.textContent = `vec3 parametric_torus(float u, float v) {
  float r = ${this.params.radius.toFixed(2)} + ${this.params.tube.toFixed(2)} * cos(v);
  float x = r * cos(u * ${this.params.p}.0);
  float y = r * sin(u * ${this.params.p}.0);
  float z = ${this.params.tube.toFixed(2)} * sin(v * ${this.params.q}.0);
  return vec3(x, y, z);
}`;
    } else if (this.topology === 'mobius') {
      codeEl.textContent = `vec3 parametric_mobius(float u, float v) {
  float r = ${this.params.radius.toFixed(2)};
  float w = v * ${this.params.tube.toFixed(2)};
  float x = (r + w * cos(u * 0.5)) * cos(u);
  float y = (r + w * cos(u * 0.5)) * sin(u);
  float z = w * sin(u * 0.5);
  return vec3(x, y, z);
}`;
    } else if (this.topology === 'hyper') {
      codeEl.textContent = `vec3 parametric_hyperboloid(float u, float v) {
  float a = ${this.params.radius.toFixed(2)};
  float c = ${this.params.tube.toFixed(2)};
  float x = a * cosh(v) * cos(u);
  float y = a * cosh(v) * sin(u);
  float z = c * sinh(v);
  return vec3(x, y, z);
}`;
    }
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const t = this.clock.getElapsedTime();

    if (!this.isDragging) {
      this.targetRot.y += 0.0035;
      this.targetRot.x = 0.35 + Math.sin(t * 0.5) * 0.08;
    }

    this.group.rotation.y += (this.targetRot.y - this.group.rotation.y) * 0.08;
    this.group.rotation.x += (this.targetRot.x - this.group.rotation.x) * 0.08;

    this.renderer.render(this.scene, this.camera);
  }
}
