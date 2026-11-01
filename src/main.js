// ==========================================================================
// MAIN CONTROLLER // THE BLUEPRINT UNIVERSE
// Orchestrates 6-Stage Hero Pinned ScrollTrigger, 3D Post-Processing, Visualizers & Motion
// ==========================================================================

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { BlueprintWorld } from './BlueprintWorld.js';
import { ShaderImageGallery } from './ShaderImageGallery.js';
import { ProjectVisualizers } from './projectVisualizers.js';
import { DrawingViewer } from './drawingViewer.js';
import { CaseStudyModal } from './caseStudyModal.js';
import { InkTrail } from './InkTrail.js';
import { sound } from './audio.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lenis Smooth Scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.85
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // 2. Initialize Calligraphy Ink Trail (Canvas Overlay)
  const inkCanvas = document.getElementById('ink-canvas');
  if (inkCanvas) {
    new InkTrail(inkCanvas);
  }

  // 3. Initialize Master 3D Engine (EffectComposer + 6-Stage Spatial Universe)
  const bpCanvas = document.getElementById('blueprint-canvas');
  let blueprintWorld = null;
  if (bpCanvas) {
    blueprintWorld = new BlueprintWorld(bpCanvas);
  }

  // 4. Hero Pinned ScrollTrigger Choreography (6 Sequential Chapters)
  const heroStage = document.getElementById('hero-stage');
  const heroScrollBar = document.getElementById('hero-scroll-bar');
  const heroChapterTag = document.getElementById('hero-chapter-tag');
  const narrativePanes = document.querySelectorAll('.narrative-pane');

  function updateHeroNarrative(progress) {
    if (heroScrollBar) {
      heroScrollBar.style.width = `${Math.round(progress * 100)}%`;
    }

    let activeIndex = 0;
    if (progress < 0.18) activeIndex = 0;
    else if (progress < 0.36) activeIndex = 1;
    else if (progress < 0.55) activeIndex = 2;
    else if (progress < 0.75) activeIndex = 3;
    else if (progress < 0.90) activeIndex = 4;
    else activeIndex = 5;

    const chapterTitles = [
      "SCENE 1: THE ARCHITECT'S TOUCH // 創世",
      "SCENE 2: THE CELESTIAL APERTURE // 覚醒",
      "SCENE 3: THE RED MONUMENTAL CORRIDOR // 構築",
      "SCENE 4: THE DRAFTING STUDIO // 工房",
      "SCENE 5: ARTIFACT INSPECTION // 遺物",
      "SCENE 6: INK SHATTER & DEPLOYED REALITY // 突破"
    ];

    if (heroChapterTag) {
      heroChapterTag.textContent = chapterTitles[activeIndex];
    }

    narrativePanes.forEach((pane, idx) => {
      pane.classList.toggle('hidden', idx !== activeIndex);
    });
  }

  if (heroStage && blueprintWorld) {
    ScrollTrigger.create({
      trigger: '#hero-stage',
      start: 'top top',
      end: '+=3400',
      pin: true,
      scrub: 1.0,
      onUpdate: (self) => {
        blueprintWorld.updateScrollProgress(self.progress);
        updateHeroNarrative(self.progress);
      }
    });
  }

  // 5. Hero 3D HUD Controls
  const btnExplode = document.getElementById('btn-hero-toggle-exploded');
  const btnCycleMode = document.getElementById('btn-hero-cycle-mode');

  btnExplode?.addEventListener('click', () => {
    if (blueprintWorld) {
      const isExp = blueprintWorld.toggleExploded();
      btnExplode.innerHTML = isExp ? '<span>🔄 COLLAPSE ASSEMBLY</span>' : '<span>💥 EXPLODE ASSEMBLY</span>';
      showToast(isExp ? 'Exploded Assembly: Precast components separated' : 'Assembly Restored: Structural joints locked');
    }
  });

  btnCycleMode?.addEventListener('click', () => {
    if (blueprintWorld) {
      const mode = blueprintWorld.cycleVisualMode();
      btnCycleMode.textContent = `MODE: ${mode.toUpperCase()} MANGA`;
      showToast(`Visual Style: ${mode.toUpperCase()} MODE`);
    }
  });

  // 6. Initialize WebGL Shader Image Gallery
  const shaderCanvas = document.getElementById('shader-gallery-canvas');
  let shaderGallery = null;
  if (shaderCanvas) {
    shaderGallery = new ShaderImageGallery(shaderCanvas);

    shaderCanvas.addEventListener('mouseenter', () => {
      shaderGallery.setHover(true);
      sound.playPencilScratch();
    });
    shaderCanvas.addEventListener('mouseleave', () => {
      shaderGallery.setHover(false);
    });

    const btnArch = document.getElementById('btn-show-arch');
    const btnManga = document.getElementById('btn-show-manga');

    btnArch?.addEventListener('click', () => {
      shaderGallery.setTransition(0.0);
      btnArch.classList.add('bg-crimson', 'text-white');
      btnArch.classList.remove('bg-ink-slate', 'text-cloud');
      btnManga.classList.add('bg-ink-slate', 'text-cloud');
      btnManga.classList.remove('bg-crimson', 'text-white');
      sound.playBlueprintUnfold();
      showToast('Shader Active: Architectural Perspective');
    });

    btnManga?.addEventListener('click', () => {
      shaderGallery.setTransition(1.0);
      btnManga.classList.add('bg-crimson', 'text-white');
      btnManga.classList.remove('bg-ink-slate', 'text-cloud');
      btnArch.classList.add('bg-ink-slate', 'text-cloud');
      btnArch.classList.remove('bg-crimson', 'text-white');
      sound.playStructuralClack();
      showToast('Shader Active: Manga Awakening');
    });
  }

  // 7. Initialize Real Project Visualizers (Exploded Precast, Beam Solver, Atlas, SQ3R)
  new ProjectVisualizers();

  // 8. Initialize Architectural Drawing Viewer
  const dvRoot = document.getElementById('drawing-viewer-root');
  if (dvRoot) {
    new DrawingViewer('drawing-viewer-root');
  }

  // 9. Process Pinned Scroll Storyteller (IDEA -> RESULT)
  const processStage = document.getElementById('process-stage');
  const processSteps = document.querySelectorAll('.process-story-step');
  const processGraphicCanvas = document.getElementById('process-visual-content');

  const processGraphics = [
    `<!-- Step 1: Spatial Intuition -->
     <div class="space-y-4 text-center">
       <div class="sfx-impact text-7xl mb-2">直感!</div>
       <div class="font-fira text-xs font-bold text-azure">// FIRST PRINCIPLES DECONSTRUCTION</div>
       <p class="font-sans text-sm text-neutral-300 max-w-md mx-auto">Deconstructing spatial constraints and structural requirements from first principles into core physics logic.</p>
       <div class="w-24 h-1 bg-crimson mx-auto rounded"></div>
     </div>`,
    `<!-- Step 2: Blueprint Schematic -->
     <div class="space-y-4 text-center">
       <div class="sfx-rumble text-6xl mb-2">下絵!</div>
       <div class="font-fira text-xs font-bold text-sky">// VECTOR COORDINATE DRAFTING</div>
       <p class="font-sans text-sm text-neutral-300 max-w-md mx-auto">Drafting coordinate grids, column axes, and component boundaries with millimeter-exact vector lines.</p>
       <div class="w-24 h-1 bg-azure mx-auto rounded"></div>
     </div>`,
    `<!-- Step 3: Computational Equations -->
     <div class="space-y-4 text-center">
       <div class="sfx-construction text-6xl mb-2">数式!</div>
       <div class="font-fira text-xs font-bold text-crimson">// STRUCTURAL MATRIX SOLVERS</div>
       <p class="font-sans text-sm text-neutral-300 max-w-md mx-auto">Calculating bending moments, shear transfer, and bearing lengths ($b_{nom} \\ge 90\\text{mm}$) under Eurocode 2 and PCI standards.</p>
       <div class="w-24 h-1 bg-gold mx-auto rounded"></div>
     </div>`,
    `<!-- Step 4: 3D Precast Assembly -->
     <div class="space-y-4 text-center">
       <div class="sfx-impact text-7xl mb-2">構築!</div>
       <div class="font-fira text-xs font-bold text-azure">// SOLID PRECAST JOINT LOCKING</div>
       <p class="font-sans text-sm text-neutral-300 max-w-md mx-auto">Extruding 2D geometry into 3D precast columns, corbels, and hollow-core slabs inside Autodesk Revit API Transactions.</p>
       <div class="w-24 h-1 bg-crimson mx-auto rounded"></div>
     </div>`,
    `<!-- Step 5: Deployed Production -->
     <div class="space-y-4 text-center">
       <div class="sfx-impact text-7xl mb-2 text-white">完成!</div>
       <div class="font-fira text-xs font-bold text-green-400">// VERIFIED DEPLOYED REALITY</div>
       <p class="font-sans text-sm text-neutral-300 max-w-md mx-auto">Shipping hardened, accessible, 60 FPS applications that work seamlessly across every device and screen.</p>
       <div class="w-24 h-1 bg-green-400 mx-auto rounded"></div>
     </div>`
  ];

  if (processStage) {
    ScrollTrigger.create({
      trigger: '#process-stage',
      start: 'top top',
      end: '+=2400',
      pin: true,
      scrub: 1.0,
      onUpdate: (self) => {
        let stepIdx = Math.min(4, Math.floor(self.progress * 5));
        processSteps.forEach((step, idx) => {
          step.classList.toggle('bg-crimson', idx === stepIdx);
          step.classList.toggle('text-white', idx === stepIdx);
          step.classList.toggle('bg-ink-slate', idx !== stepIdx);
          step.classList.toggle('text-neutral-400', idx !== stepIdx);
        });
        if (processGraphicCanvas) {
          processGraphicCanvas.innerHTML = processGraphics[stepIdx];
        }
      }
    });
  }

  // 10. 7-Chapter Manhwa Case Study Modal
  const caseStudyModal = new CaseStudyModal();

  document.querySelectorAll('.btn-open-case-study').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = btn.getAttribute('data-project-id');
      if (projId) caseStudyModal.open(projId);
    });
  });

  // 11. Crosshair Cursor
  const cursor = document.getElementById('blueprint-cursor');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let curX = mouseX;
  let curY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    curX += (mouseX - curX) * 0.25;
    curY += (mouseY - curY) * 0.25;
    if (cursor) {
      cursor.style.transform = `translate(${curX}px, ${curY}px)`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  document.querySelectorAll('a, button, input, .manhwa-panel, .comic-shard').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor?.classList.add('cursor-hover');
      sound.playPencilScratch();
    });
    el.addEventListener('mouseleave', () => {
      cursor?.classList.remove('cursor-hover');
    });
  });

  // 12. Audio Toggle
  const btnAudio = document.getElementById('btn-audio');
  const audioIcon = document.getElementById('audio-icon');
  const audioLabel = document.getElementById('audio-label');

  btnAudio?.addEventListener('click', () => {
    const isEnabled = sound.toggle();
    if (audioIcon && audioLabel) {
      audioIcon.textContent = isEnabled ? '📐' : '🔇';
      audioLabel.textContent = isEnabled ? 'SOUND: ON' : 'SOUND: OFF';
    }
    showToast(isEnabled ? 'Drafting Audio Enabled' : 'Audio Muted');
  });

  // 13. Copy Email
  const btnCopy = document.getElementById('btn-copy-email');
  const toast = document.getElementById('blueprint-toast');
  let toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove('opacity-0', 'pointer-events-none');
    toast.classList.add('opacity-100');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.add('opacity-0', 'pointer-events-none');
      toast.classList.remove('opacity-100');
    }, 2500);
  }

  btnCopy?.addEventListener('click', () => {
    navigator.clipboard.writeText('dagiyosi5321@gmail.com').then(() => {
      sound.playCaliperClick();
      showToast('EMAIL COPIED: dagiyosi5321@gmail.com');
    });
  });

  console.log(
    '%cTHE BLUEPRINT UNIVERSE // 3D MANGA ARCHITECT ENGINE ACTIVE\nEffectComposer Post-Processing, GSAP ScrollTrigger & Shaders Online',
    'color: #FF2233; font-weight: bold; font-size: 14px; background: #09090B; padding: 6px 12px; border: 2px solid #FF2233; border-radius: 4px;'
  );
});
