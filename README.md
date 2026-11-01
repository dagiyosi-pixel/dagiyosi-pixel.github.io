# 0xDagi // Manga-Noir 3D Web Portfolio

An Awwwards-caliber interactive 3D WebGL web experience inspired by Samana Studio and manga-noir art direction.

---

## ⚡ Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (with Hot Module Replacement)
npm run dev

# 3. Build optimized production distribution
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🎨 Creative Architecture

* **Graphics Engine:** Three.js with custom GLSL cel-shading + screen-space cross-hatching post-processing shaders (`src/shaders.js`, `src/mangaScene.js`).
* **Interactive Elements:**
  * Real-time 3D Manga Arm & Hand with articulated fingers tracking cursor coordinates with inertial lerp.
  * 3D Floating Relics (Bottle/cylinder, Precast Beam section, Geodesic dodecahedron).
  * Reactive ink particle physics (2,000+ particles with velocity drag and radial click bursts).
* **Kinetic Typography & Motion:** Lenis smooth momentum scrolling + brutalist comic panel layout (`src/style.css`).
* **Tactile Audio:** Pure Web Audio API procedural synthesis for blade slices, mechanical clicks, and ink explosions (`src/audio.js`).
* **Secret CLI Terminal:** Press `` ` `` / `~` or click `>_` to open the interactive manga terminal (`src/terminal.js`).
* **Experience Mode:** Fullscreen interactive cinematic showcase launched from the top-right `[ EXPERIENCE ]` button.

---

## 🚀 Deployment to GitHub Pages

1. Create a repository named `dagiyosi-pixel.github.io` on your GitHub account.
2. Initialize git inside this folder:
   ```bash
   git init
   git add .
   git commit -m "feat: Manga-Noir 3D Web Portfolio"
   git branch -M main
   git remote add origin https://github.com/dagiyosi-pixel/dagiyosi-pixel.github.io.git
   git push -u origin main
   ```
3. In your repository on GitHub, go to **Settings > Pages** and select **GitHub Actions** as the source.
4. Your site will automatically build and deploy to `https://dagiyosi-pixel.github.io`!
