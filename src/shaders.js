// ==========================================================================
// GLSL MANGA SHADERS // 0xDagi
// Cel-shading + screen-space cross-hatching and ink rim lighting
// ==========================================================================

export const MangaHatchShader = {
  uniforms: {
    uLightDir: { value: null },
    uColor: { value: null },
    uRimColor: { value: null },
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

      // Screen coordinates for hatching
      vec2 screenCoord = (vScreenPos.xy / vScreenPos.w) * 0.5 + 0.5;
      float aspect = 1.0; 
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
        if (hatch1 < 0.25) {
          finalColor = vec3(0.05, 0.05, 0.08); // Ink line
        } else {
          finalColor = uColor * 0.85;
        }
      } 
      // Deep Shadow - cross hatch
      else if (nDotL > -0.3) {
        if (hatch1 < 0.4 || hatch2 < 0.4) {
          finalColor = vec3(0.02, 0.02, 0.04); // Dark ink
        } else {
          finalColor = uColor * 0.45;
        }
      } 
      // Pitch black void
      else {
        finalColor = vec3(0.01, 0.01, 0.02);
      }

      // Manga Rim / Edge Lighting (Fresnel)
      float fresnel = 1.0 - max(dot(viewDir, normal), 0.0);
      float rim = smoothstep(0.72, 0.95, fresnel);
      finalColor = mix(finalColor, uRimColor, rim * 0.85);

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

export const OutlineVertexShader = `
  uniform float uOffset;
  void main() {
    vec3 transformed = position + normal * uOffset;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
  }
`;

export const OutlineFragmentShader = `
  uniform vec3 uOutlineColor;
  void main() {
    gl_FragColor = vec4(uOutlineColor, 1.0);
  }
`;
