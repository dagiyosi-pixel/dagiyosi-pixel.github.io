// ==========================================================================
// MAIN CONTROLLER — DAGMAWI YOSEF (0xDagi) // THE BLUEPRINT UNIVERSE
// Orchestrates Lenis Smooth Scroll, 3D WebGL, Drawing CAD Viewer, Shaders & GSAP
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

  // ====== 1. LENIS SMOOTH SCROLL ======
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.95
  });

  window.__lenis = lenis;

  // Direct section jump support via URL parameter ?sec=work
  const urlParams = new URLSearchParams(window.location.search);
  const targetSec = urlParams.get('sec');
  if (targetSec) {
    setTimeout(() => {
      lenis.scrollTo('#' + targetSec, { immediate: true });
    }, 150);
  }

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // ====== 2. CUSTOM CURSOR ======
  const cursor = document.getElementById('custom-cursor');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let curX = mouseX, curY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    curX += (mouseX - curX) * 0.18;
    curY += (mouseY - curY) * 0.18;
    if (cursor) cursor.style.transform = `translate(${curX}px, ${curY}px)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  function attachCursorHover() {
    document.querySelectorAll('a, button, input, .project-card, .mini-project, .process-step, .ref-card, .gallery-canvas, .drawing-viewer-frame').forEach(el => {
      el.removeEventListener('mouseenter', cursorEnter);
      el.removeEventListener('mouseleave', cursorLeave);
      el.addEventListener('mouseenter', cursorEnter);
      el.addEventListener('mouseleave', cursorLeave);
    });
  }

  function cursorEnter() { cursor?.classList.add('hovering'); }
  function cursorLeave() { cursor?.classList.remove('hovering'); }

  attachCursorHover();

  // ====== 3. CALLIGRAPHY INK TRAIL ======
  const inkCanvas = document.getElementById('ink-canvas');
  if (inkCanvas) new InkTrail(inkCanvas);

  // ====== 4. GLOBAL NAVIGATION ======
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ====== 5. 3D HERO ENGINE ======
  const bpCanvas = document.getElementById('blueprint-canvas');
  let blueprintWorld = null;
  if (bpCanvas) {
    blueprintWorld = new BlueprintWorld(bpCanvas);
  }

  // Hero Controls
  const btnExplode = document.getElementById('btn-explode');
  const btnReset = document.getElementById('btn-reset');
  const btnMode = document.getElementById('btn-mode');

  btnExplode?.addEventListener('click', () => {
    if (blueprintWorld) {
      const isExp = blueprintWorld.toggleExploded();
      btnExplode.innerHTML = isExp ? '<span>🔄 RESTORE ASSEMBLY</span>' : '<span>💥 EXPLODE 3D ASSEMBLY</span>';
      showToast(isExp ? 'Assembly Exploded: Components Separated' : 'Assembly Restored: Structural Joints Locked');
    }
  });

  btnReset?.addEventListener('click', () => {
    if (blueprintWorld) {
      blueprintWorld.resetCamera();
      if (btnExplode) btnExplode.innerHTML = '<span>💥 EXPLODE 3D ASSEMBLY</span>';
      showToast('Camera Orientation Reset');
    }
  });

  btnMode?.addEventListener('click', () => {
    if (blueprintWorld) {
      const mode = blueprintWorld.cycleVisualMode();
      showToast(`Visual Style: ${mode.toUpperCase()} MODE`);
    }
  });

  // ====== 6. PROJECT VISUALIZERS (Precast Explode, Beam Solver, Atlas, SQ3R) ======
  new ProjectVisualizers();

  // ====== 7. ARCHITECTURAL DRAFTING VIEWER (CAD / BIM) ======
  const dvRoot = document.getElementById('drawing-viewer-root');
  if (dvRoot) {
    new DrawingViewer('drawing-viewer-root');
    setTimeout(attachCursorHover, 300);
  }

  // ====== 8. SHADER IMAGE GALLERY (GLSL Wave Displacement) ======
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
  }

  const btnArch = document.getElementById('btn-show-arch');
  const btnManga = document.getElementById('btn-show-manga');

  btnArch?.addEventListener('click', () => {
    if (!shaderGallery) return;
    shaderGallery.setTransition(0.0);
    btnArch.classList.add('active');
    btnManga.classList.remove('active');
    sound.playBlueprintUnfold();
    showToast('Shader: Architectural Perspective');
  });

  btnManga?.addEventListener('click', () => {
    if (!shaderGallery) return;
    shaderGallery.setTransition(1.0);
    btnManga.classList.add('active');
    btnArch.classList.remove('active');
    sound.playStructuralClack();
    showToast('Shader: Manga Awakening');
  });

  // ====== 9. 7-CHAPTER CASE STUDY MODAL ======
  const caseStudyModal = new CaseStudyModal();

  document.querySelectorAll('.btn-open-case-study').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = btn.getAttribute('data-project-id');
      if (projId) caseStudyModal.open(projId);
    });
  });

  // ====== 10. AUDIO TOGGLE ======
  const btnAudio = document.getElementById('btn-audio');
  const audioIcon = document.getElementById('audio-icon');
  const audioText = btnAudio?.querySelector('.audio-text');

  btnAudio?.addEventListener('click', () => {
    const isEnabled = sound.toggle();
    if (audioIcon) audioIcon.textContent = isEnabled ? '📐' : '🔇';
    if (audioText) audioText.textContent = isEnabled ? 'SOUND: ON' : 'SOUND: OFF';
    showToast(isEnabled ? 'Synthesized Drafting Audio: Active' : 'Audio Muted');
  });

  // ====== 11. COPY EMAIL ======
  const btnCopy = document.getElementById('btn-copy-email');

  btnCopy?.addEventListener('click', () => {
    navigator.clipboard.writeText('dagiyosi5321@gmail.com').then(() => {
      sound.playCaliperClick();
      showToast('EMAIL COPIED: dagiyosi5321@gmail.com');
    });
  });

  // ====== 12. TOAST SYSTEM ======
  const toast = document.getElementById('blueprint-toast');
  let toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 2400);
  }

  // ====== 13. SMOOTH ANCHOR NAVIGATION ======
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#' || !href) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        lenis.scrollTo(target, { offset: -60, duration: 1.2 });
        sound.playPencilScratch();
      }
    });
  });

  // ====== 14. GSAP ENTRANCE & SCROLL REVEALS ======
  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        once: true
      },
      opacity: 0,
      y: 50,
      duration: 0.9,
      delay: i * 0.05,
      ease: 'expo.out'
    });
  });

  gsap.utils.toArray('.mini-project').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true
      },
      opacity: 0,
      y: 35,
      duration: 0.7,
      delay: i * 0.1,
      ease: 'expo.out'
    });
  });

  gsap.utils.toArray('.process-step').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true
      },
      opacity: 0,
      y: 35,
      duration: 0.7,
      delay: i * 0.08,
      ease: 'expo.out'
    });
  });

  gsap.from('.drafting-viewer-container', {
    scrollTrigger: {
      trigger: '.drafting-viewer-container',
      start: 'top 85%',
      once: true
    },
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: 'expo.out'
  });

  gsap.from('.gallery-canvas-wrap', {
    scrollTrigger: {
      trigger: '.gallery-canvas-wrap',
      start: 'top 85%',
      once: true
    },
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: 'expo.out'
  });

  console.log(
    '%cTHE BLUEPRINT UNIVERSE // 0xDagi Portfolio Engine Active\n3D WebGL, Drawing CAD Workstation, GLSL Shaders & Lenis Online',
    'color: #FF2233; font-weight: bold; font-size: 13px; background: #09090B; padding: 6px 14px; border: 1px solid #FF2233; border-radius: 6px;'
  );
});
