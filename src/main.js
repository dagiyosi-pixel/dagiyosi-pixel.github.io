// ==========================================================================
// MAIN CONTROLLER — DAGMAWI YOSEF // ARCHITECTURAL LIVING PORTFOLIO
// Motion & Composition System Powered by GSAP, ScrollTrigger, Three.js & Lenis
// Dark Brutalist Aesthetic • Minimalist Typography • Generative WebGL 3D
// ==========================================================================

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { HeroMonolith } from './HeroMonolith.js';
import { ParametricLab } from './ParametricLab.js';
import { ProjectVisualizers } from './projectVisualizers.js';
import { sound } from './audio.js';

gsap.registerPlugin(ScrollTrigger);
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;

document.addEventListener('DOMContentLoaded', () => {

  // ========================================================================
  // 1. LENIS SMOOTH SCROLL ENGINE
  // ========================================================================
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.95
  });

  window.__lenis = lenis;

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Smooth anchor navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl, { offset: -60, duration: 1.4 });
        }
      }
    });
  });

  // ========================================================================
  // 2. PRECISION CROSSHAIR CURSOR
  // ========================================================================
  const cursor = document.getElementById('custom-cursor');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let curX = mouseX, curY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    curX += (mouseX - curX) * 0.2;
    curY += (mouseY - curY) * 0.2;
    if (cursor) {
      cursor.style.transform = `translate(${curX}px, ${curY}px)`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  function attachCursorInteractions() {
    const interactives = document.querySelectorAll(
      'a, button, input, canvas, .work-dossier, .arch-quad-panel, .lab-controls-panel, .contact-monolith-card'
    );
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor?.classList.add('hovering');
        sound.playHover();
      });
      el.addEventListener('mouseleave', () => {
        cursor?.classList.remove('hovering');
      });
    });
  }
  attachCursorInteractions();

  // ========================================================================
  // 3. AUDIO SOUNDSCAPE CONTROLLER
  // ========================================================================
  const audioBtn = document.getElementById('btn-audio');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      sound.toggle();
      const audioText = audioBtn.querySelector('.audio-text');
      if (audioText) {
        audioText.textContent = sound.enabled ? 'SOUND: ON' : 'SOUND: OFF';
      }
      audioBtn.classList.toggle('audio-active', sound.enabled);
    });
  }

  // ========================================================================
  // 4. 3D HERO MONOLITH SCULPTURE
  // ========================================================================
  const heroCanvas = document.getElementById('hero-monolith-canvas');
  let heroMonolithInstance = null;
  if (heroCanvas) {
    heroMonolithInstance = new HeroMonolith(heroCanvas);
  }

  // ========================================================================
  // 5. 3D PARAMETRIC GEOMETRY LAB (SECTION 04)
  // ========================================================================
  const labCanvas = document.getElementById('canvas-parametric-lab');
  let parametricLabInstance = null;
  if (labCanvas) {
    parametricLabInstance = new ParametricLab(labCanvas);

    // Bind real-time interactive parameter sliders
    const radiusInput = document.getElementById('param-radius');
    const radiusVal = document.getElementById('val-radius');
    radiusInput?.addEventListener('input', (e) => {
      const v = parseFloat(e.target.value);
      parametricLabInstance.updateParam('radius', v);
      if (radiusVal) radiusVal.textContent = v.toFixed(2);
    });

    const tubeInput = document.getElementById('param-tube');
    const tubeVal = document.getElementById('val-tube');
    tubeInput?.addEventListener('input', (e) => {
      const v = parseFloat(e.target.value);
      parametricLabInstance.updateParam('tube', v);
      if (tubeVal) tubeVal.textContent = v.toFixed(2);
    });

    const pInput = document.getElementById('param-p');
    const pVal = document.getElementById('val-p');
    pInput?.addEventListener('input', (e) => {
      const v = parseInt(e.target.value, 10);
      parametricLabInstance.updateParam('p', v);
      if (pVal) pVal.textContent = v.toString();
    });

    const qInput = document.getElementById('param-q');
    const qVal = document.getElementById('val-q');
    qInput?.addEventListener('input', (e) => {
      const v = parseInt(e.target.value, 10);
      parametricLabInstance.updateParam('q', v);
      if (qVal) qVal.textContent = v.toString();
    });

    // Bind shape preset selector buttons
    document.querySelectorAll('.btn-preset').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-preset').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const preset = btn.getAttribute('data-preset');
        parametricLabInstance.setTopology(preset);
        sound.playClick();
      });
    });

    // Bind material shading selector buttons
    document.querySelectorAll('.btn-material').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-material').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mat = btn.getAttribute('data-mat');
        parametricLabInstance.setShading(mat);
        sound.playClick();
      });
    });
  }

  // ========================================================================
  // 6. REAL INTERACTIVE PROJECT VISUALIZERS
  // ========================================================================
  new ProjectVisualizers();

  // ========================================================================
  // 7. LIVING GSAP COMPOSITION & CONNECTED MOTION SYSTEM
  // ========================================================================

  // --- A. HERO PARALLAX & SECTION TRANSITION ---
  const heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  });

  // Hero title letters slide upwards with perspective depth
  heroTl.to('.hero-title', {
    y: -110,
    opacity: 0.35,
    scale: 0.96,
    transformOrigin: 'top left',
    ease: 'power2.out'
  }, 0);

  // Hero vertical title track slides upwards faster
  heroTl.to('.hero-meta-vertical', {
    y: -140,
    opacity: 0.3,
    ease: 'none'
  }, 0);

  // Hero 3D Monolith wrapper shifts slightly right and down, morphing towards section 01
  heroTl.to('.monolith-canvas-wrapper', {
    y: 90,
    scale: 0.92,
    opacity: 0.5,
    ease: 'power2.out'
  }, 0);

  // --- B. SECTION 01: ABOUT TRIPTYCH COMPOSITION ---
  gsap.from('.about-statement-col', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
      once: true
    },
    x: -60,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.from('.monogram-concrete-block', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
      once: true
    },
    y: 80,
    scale: 0.88,
    rotationZ: -3,
    opacity: 0,
    duration: 1.0,
    ease: 'power3.out'
  });

  gsap.from('.about-disciplines-col', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
      once: true
    },
    x: 60,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  });

  // --- C. SECTION 02: SELECTED WORK DOSSIERS ---
  const dossiers = document.querySelectorAll('.work-dossier');
  dossiers.forEach((dossier, i) => {
    const metaCol = dossier.querySelector('.dossier-meta-col');
    const visualCol = dossier.querySelector('.dossier-visual-col');
    const isEven = i % 2 === 0;

    if (metaCol) {
      gsap.from(metaCol, {
        scrollTrigger: {
          trigger: dossier,
          start: 'top 85%',
          once: true
        },
        x: isEven ? -50 : -30,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out'
      });
    }

    if (visualCol) {
      gsap.from(visualCol, {
        scrollTrigger: {
          trigger: dossier,
          start: 'top 85%',
          once: true
        },
        x: isEven ? 50 : 30,
        scale: 0.95,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out'
      });
    }
  });

  // Histogram bars animation in AMT dossier
  gsap.from('.amt-histogram .bar', {
    scrollTrigger: {
      trigger: '.amt-histogram',
      start: 'top 85%',
      once: true
    },
    scaleY: 0,
    transformOrigin: 'bottom center',
    stagger: 0.06,
    duration: 0.7,
    ease: 'power3.out'
  });

  // --- D. SECTION 03: ARCHITECTURE & DESIGN QUAD SPREAD ---
  const quadPanels = [
    { sel: '.panel-image', x: -50, y: -40, rot: -2 },
    { sel: '.panel-cad', x: 50, y: -40, rot: 2 },
    { sel: '.panel-concrete', x: -40, y: 50, rot: 2 },
    { sel: '.panel-polar', x: 50, y: 50, rot: -2 }
  ];

  quadPanels.forEach((p, idx) => {
    gsap.from(p.sel, {
      scrollTrigger: {
        trigger: '#gallery',
        start: 'top 80%',
        once: true
      },
      x: p.x,
      y: p.y,
      rotationZ: p.rot,
      opacity: 0,
      duration: 0.9,
      delay: idx * 0.1,
      ease: 'power3.out'
    });
  });

  // --- E. SECTION 04: PARAMETRIC LAB LIVING EXPANSION ---
  gsap.from('.lab-info-col', {
    scrollTrigger: {
      trigger: '#lab',
      start: 'top 80%',
      once: true
    },
    x: -60,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.from('.parametric-canvas-wrapper', {
    scrollTrigger: {
      trigger: '#lab',
      start: 'top 80%',
      once: true
    },
    scale: 0.85,
    opacity: 0,
    duration: 0.95,
    ease: 'power3.out'
  });

  gsap.from('.lab-controls-col', {
    scrollTrigger: {
      trigger: '#lab',
      start: 'top 80%',
      once: true
    },
    x: 60,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  });

  // --- F. SECTION 05: CONTACT MONOLITH SLATE ---
  gsap.from('.contact-monolith-card', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 85%',
      once: true
    },
    y: 80,
    scale: 0.96,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  });

  // ========================================================================
  // 8. ACTIVE NAVIGATION SPY
  // ========================================================================
  const navLinks = document.querySelectorAll('.nav-center .nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 250;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  console.log('⚡ DAGMAWI YOSEF // LIVING ARCHITECTURAL PORTFOLIO INITIALIZED');
});
