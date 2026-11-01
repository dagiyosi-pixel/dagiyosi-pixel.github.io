// ==========================================================================
// GLSL MANGA SHADERS & POST-PROCESSING PIPELINE // 0xDagi
// Cel-shading, Screen-Space Cross-Hatching, Sobel Ink Outlines & Ink Explosions
// ==========================================================================

import * as THREE from 'three';

// 1. Mesh Material Cel-Shading & Screen-Space Hatching Shader
export const MangaHatchShader = {
  uniforms: {
    uLightDir: { value: new THREE.Vector3(3, 5, 4).normalize() },
    uColor: { value: new THREE.Color(0xf4f4f5) },
    uRimColor: { value: new THREE.Color(0xff2233) },
    uHatchDensity: { value: 28.0 },
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

      // Screen-space coordinates for hatching
      vec2 screenCoord = (vScreenPos.xy / vScreenPos.w) * 0.5 + 0.5;
      vec2 hatchUV = screenCoord * uHatchDensity;

      // Diagonal cross-hatch lines
      float hatch1 = mod(hatchUV.x + hatchUV.y, 1.0);
      float hatch2 = mod(hatchUV.x - hatchUV.y, 1.0);

      // Stepped cel shading
      vec3 finalColor = uColor;

      // Highlight
      if (nDotL > 0.6) {
        finalColor = uColor * 1.25;
      } 
      // Midtones - single hatch
      else if (nDotL > 0.15) {
        if (hatch1 < 0.28) {
          finalColor = vec3(0.04, 0.04, 0.06); // Ink line
        } else {
          finalColor = uColor * 0.88;
        }
      } 
      // Deep Shadow - cross hatch
      else if (nDotL > -0.3) {
        if (hatch1 < 0.42 || hatch2 < 0.42) {
          finalColor = vec3(0.02, 0.02, 0.04); // Dark ink
        } else {
          finalColor = uColor * 0.42;
        }
      } 
      // Pitch black void
      else {
        finalColor = vec3(0.01, 0.01, 0.02);
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
    uniform sampler2D tDiffuse;
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
      vec4 baseColor = vec4(colR.r, colG.g, colB.b, 1.0);

      // 3. Sobel Edge Detection for Hand-Inked Outlines
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

      if (edge > 0.32) {
        baseColor.rgb = mix(baseColor.rgb, vec3(0.03, 0.03, 0.05), 0.88);
      }

      // 4. Directional Cross-Hatching in Shadows
      float brightness = dot(baseColor.rgb, vec3(0.299, 0.587, 0.114));
      vec2 screenPos = gl_FragCoord.xy;
      float hatch1 = mod(screenPos.x + screenPos.y, 8.0);
      float hatch2 = mod(screenPos.x - screenPos.y, 8.0);

      if (brightness < 0.22) {
        if (hatch1 < 2.0 || hatch2 < 2.0) {
          baseColor.rgb = vec3(0.02, 0.02, 0.04);
        }
      } else if (brightness < 0.42) {
        if (hatch1 < 1.6) {
          baseColor.rgb = mix(baseColor.rgb, vec3(0.04, 0.04, 0.06), 0.75);
        }
      }

      // 5. Halftone Screentone in Midtones
      float dotPattern = sin(screenPos.x * 0.38) * sin(screenPos.y * 0.38);
      if (brightness > 0.45 && brightness < 0.72 && dotPattern > 0.88) {
        baseColor.rgb = mix(baseColor.rgb, vec3(0.09, 0.23, 0.35), 0.22);
      }

      // 6. Subtle Saturated Crimson Rim
      float radial = distance(uv, vec2(0.5, 0.5));
      float vignette = smoothstep(0.45, 0.85, radial);
      baseColor.rgb = mix(baseColor.rgb, vec3(0.55, 0.05, 0.08), vignette * 0.25);

      gl_FragColor = baseColor;
    }
  `
};
