// ==========================================================================
// GLSL MANGA SHADERS & POST-PROCESSING PIPELINE // 0xDagi
// Hand-Inked Comic Aesthetic: Directional Hatching, Sobel Outlines & Clean Backdrops
// ==========================================================================

import * as THREE from 'three';

// 1. Mesh Material Cel-Shading & Directional Contour Hatching Shader
export const MangaHatchShader = {
  uniforms: {
    uLightDir: { value: new THREE.Vector3(3, 5, 4).normalize() },
    uColor: { value: new THREE.Color(0xf4f4f5) },
    uRimColor: { value: new THREE.Color(0xff2233) },
    uHatchDensity: { value: 20.0 },
    uTime: { value: 0 }
  },

  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    varying vec4 vScreenPos;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
      vScreenPos = gl_Position;
    }
  `,

  fragmentShader: `
    uniform vec3 uLightDir;
    uniform vec3 uColor;
    uniform vec3 uRimColor;
    uniform float uHatchDensity;
    uniform float uTime;

    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    varying vec4 vScreenPos;

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 light = normalize(uLightDir);
      vec3 viewDir = normalize(vViewPosition);

      // Diffuse N.L
      float nDotL = dot(normal, light);

      // Screen-space coordinates for ink strokes
      vec2 pixelPos = gl_FragCoord.xy;

      // Surface contour angle from view-space normal
      float surfAngle = atan(normal.y, normal.x + 0.001);
      float strokeAngle = surfAngle + 1.5708; // perpendicular to normal, following geometric contour

      // Organic hand-drawn pen wobble & irregular stroke spacing
      float wobble = sin(pixelPos.y * 0.05 + uTime * 0.4) * 2.2 + cos(pixelPos.x * 0.04) * 1.5;
      float cosA = cos(strokeAngle);
      float sinA = sin(strokeAngle);
      float rotCoord1 = (pixelPos.x + wobble) * cosA - (pixelPos.y + wobble) * sinA;

      // Expressive Manga Ink Spacing (distinct pen lines, not micro-screen)
      float spacing = 20.0;
      float hatch1 = mod(rotCoord1, spacing);

      // Dynamic pen pressure: tapering from shadow into light
      float penPressure = smoothstep(0.50, 0.05, nDotL);
      float penWidth = penPressure * 3.8 + sin(pixelPos.y * 0.03) * 0.6;

      // Stepped Manga Cel-Shading
      vec3 finalColor = uColor;

      // Highlight Zone: clean lit surface
      if (nDotL > 0.48) {
        finalColor = uColor * 1.15;
      } 
      // Midtone Penumbra: visible hand-drawn ink pen strokes along contour
      else if (nDotL > 0.06) {
        if (hatch1 < penWidth) {
          finalColor = vec3(0.015, 0.015, 0.025); // Bold ink stroke
        } else {
          finalColor = uColor * 0.95;
        }
      } 
      // Deep Core Shadow: solid black ink (beta fill)
      else {
        finalColor = vec3(0.015, 0.015, 0.02);
      }

      // Manga Rim / Edge Lighting (Fresnel) with Crimson glow
      float fresnel = 1.0 - max(dot(viewDir, normal), 0.0);
      float rim = smoothstep(0.68, 0.95, fresnel);
      finalColor = mix(finalColor, uRimColor, rim * 0.9);

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// 2. Full-Screen Manga Post-Processing Shader (EffectComposer / ShaderPass)
export const MangaPostShader = {
  uniforms: {
    tDiffuse: { value: null },
    tDepth: { value: null },
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uVelocity: { value: 0.0 },
    uExplosion: { value: 0.0 }, // Shockwave progress [0.0 to 1.0]
    uExplosionCenter: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2(1920, 1080) }
  },

  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: `
    #include <packing>
    uniform sampler2D tDiffuse;
    uniform sampler2D tDepth;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uVelocity;
    uniform float uExplosion;
    uniform vec2 uExplosionCenter;
    uniform vec2 uResolution;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      // 1. Shockwave displacement from click-triggered ink explosion
      if (uExplosion > 0.001) {
        float dist = distance(uv, uExplosionCenter);
        float wave = sin((dist - uExplosion * 1.4) * 25.0);
        float shock = smoothstep(0.18, 0.0, abs(dist - uExplosion * 1.1)) * wave * 0.06 * (1.0 - uExplosion);
        uv += normalize(uv - uExplosionCenter) * shock;
      }

      // 2. Velocity-based Chromatic Aberration (RGB Split)
      float split = 0.0035 * (1.0 + uVelocity * 16.0);
      vec4 colR = texture2D(tDiffuse, uv + vec2(split, 0.0));
      vec4 colG = texture2D(tDiffuse, uv);
      vec4 colB = texture2D(tDiffuse, uv - vec2(split, 0.0));
      vec4 baseColor = vec4(colR.r, colG.g, colB.b, colG.a);

      // 3. Reliable Geometry & Depth Mask
      float depthVal = texture2D(tDepth, uv).r;
      // Foreground 3D elements have depth < 0.970; background wall and sky have depth >= 0.970
      bool isForeground = (depthVal < 0.970) && (colG.a > 0.05);

      // 4. Sobel Edge Detection for Bold Hand-Inked Manga Outlines
      vec2 texel = 1.0 / uResolution;
      vec4 n[9];
      n[0] = texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y));
      n[1] = texture2D(tDiffuse, uv + vec2(0.0, -texel.y));
      n[2] = texture2D(tDiffuse, uv + vec2(texel.x, -texel.y));
      n[3] = texture2D(tDiffuse, uv + vec2(-texel.x, 0.0));
      n[4] = texture2D(tDiffuse, uv);
      n[5] = texture2D(tDiffuse, uv + vec2(texel.x, 0.0));
      n[6] = texture2D(tDiffuse, uv + vec2(-texel.x, texel.y));
      n[7] = texture2D(tDiffuse, uv + vec2(0.0, texel.y));
      n[8] = texture2D(tDiffuse, uv + vec2(texel.x, texel.y));

      vec4 sobelH = n[2] + (2.0 * n[5]) + n[8] - (n[0] + (2.0 * n[3]) + n[6]);
      vec4 sobelV = n[0] + (2.0 * n[1]) + n[2] - (n[6] + (2.0 * n[7]) + n[8]);
      float edge = length(sqrt(sobelH * sobelH + sobelV * sobelV));

      // Calculate surface luminance gradient to orient hatch strokes along surface form
      float luma[9];
      for (int i = 0; i < 9; i++) {
        luma[i] = dot(n[i].rgb, vec3(0.299, 0.587, 0.114));
      }
      float gx = (luma[2] + 2.0 * luma[5] + luma[8]) - (luma[0] + 2.0 * luma[3] + luma[6]);
      float gy = (luma[0] + 2.0 * luma[1] + luma[2]) - (luma[6] + 2.0 * luma[7] + luma[8]);
      float gradMag = length(vec2(gx, gy));
      float brightness = luma[4];

      // Bold ink outline on silhouettes and geometric edges
      if (edge > 0.20 && (isForeground || brightness > 0.06)) {
        baseColor.rgb = mix(baseColor.rgb, vec3(0.01, 0.01, 0.02), 0.95);
      }

      // 5. Directional Organic Cross-Hatching STRICTLY on Foreground 3D Geometry
      // Flat backdrops, background walls and deep voids are strictly excluded
      if (isForeground && gradMag > 0.025 && brightness >= 0.14 && brightness < 0.62) {
        float surfAngle = atan(gy, gx + 0.001);
        float hatchAngle = surfAngle + 0.40;

        vec2 screenPos = gl_FragCoord.xy;
        float wobble = sin(screenPos.y * 0.05) * 2.0 + cos(screenPos.x * 0.04) * 1.4;

        float cosA = cos(hatchAngle);
        float sinA = sin(hatchAngle);
        float rotCoord1 = (screenPos.x + wobble) * cosA - screenPos.y * sinA;

        // Expressive manga pen spacing: 18px between strokes
        float strokeSpacing = 18.0;
        float hatch1 = mod(rotCoord1, strokeSpacing);
        
        // Pen stroke width tapers from shadow into light
        float penWidth = smoothstep(0.60, 0.14, brightness) * 3.2 + 1.2;

        // Single directional ink hatch along surface curvature
        if (hatch1 < penWidth) {
          baseColor.rgb = mix(baseColor.rgb, vec3(0.015, 0.015, 0.025), 0.88);
        }
      }

      // Clean, high-contrast final output: empty background and deep blacks are 100% free of wallpaper grids
      gl_FragColor = vec4(baseColor.rgb, 1.0);
    }
  `
};
