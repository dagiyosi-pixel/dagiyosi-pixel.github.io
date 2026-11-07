// ==========================================================================
// MAIN CONTROLLER — DAGMAWI YOSEF (0xDagi) // THE BLUEPRINT UNIVERSE
// Orchestrates Lenis Smooth Scroll, 3D WebGL, Drawing CAD Viewer, Shaders & GSAP
// Inspired by The Greatest Estate Developer & Space-Age Agency Polish
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
      ScrollTrigger.refresh();
    }, 150);
  }

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Speedlines overlay on velocity scroll
  const speedlinesOverlay = document.getElementById('speedlines-overlay');
  lenis.on('scroll', (e) => {
    const vel = Math.abs(e.velocity || 0);
    if (speedlinesOverlay) {
      if (vel > 2.2) {
        speedlinesOverlay.style.opacity = Math.min(0.35, (vel - 2.2) * 0.08).toString();
      } else {
        speedlinesOverlay.style.opacity = '0';
      }
    }
  });

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
    document.querySelectorAll('a, button, input, .project-card, .mini-project, .process-step, .ref-card, .gallery-canvas, .drawing-viewer-frame, .comic-spread-frame').forEach(el => {
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

  // ====== 5. 3D HERO ENGINE & GAME INTERACTION DECK ======
  const bpCanvas = document.getElementById('blueprint-canvas');
  let blueprintWorld = null;
  if (bpCanvas) {
    blueprintWorld = new BlueprintWorld(bpCanvas);
  }

  // Speedlines overlay burst helper
  function triggerSpeedlinesBurst(duration = 450) {
    if (!speedlinesOverlay) return;
    speedlinesOverlay.style.opacity = '0.65';
    sound.playPencilScratch();
    setTimeout(() => {
      speedlinesOverlay.style.opacity = '0';
    }, duration);
  }

  // Dynamic Lloyd Companion Updates
  const lloydFace = document.getElementById('lloyd-face');
  const lloydMood = document.getElementById('lloyd-mood');
  const lloydMsg = document.getElementById('lloyd-msg');

  function setLloydReaction(emoji, mood, message) {
    if (lloydFace) lloydFace.textContent = emoji;
    if (lloydMood) lloydMood.textContent = `[${mood.toUpperCase()}]`;
    if (lloydMsg) lloydMsg.innerHTML = message;
    gsap.fromTo('#lloyd-companion', { scale: 1.05 }, { scale: 1, duration: 0.35, ease: 'back.out(2)' });
  }

  // 3D Spatial Holographic Pins Tracking Loop
  const pinBeam = document.getElementById('pin-beam');
  const pinBearing = document.getElementById('pin-bearing');
  const pinCorbel = document.getElementById('pin-corbel');
  const pins = { beam: pinBeam, bearing: pinBearing, corbel: pinCorbel };

  function update3DPins() {
    if (blueprintWorld) {
      const pinCoords = blueprintWorld.getPinScreenPositions();
      for (const [key, pinEl] of Object.entries(pins)) {
        if (!pinEl) continue;
        const info = pinCoords[key];
        if (info && info.visible) {
          pinEl.style.display = 'block';
          pinEl.style.left = `${info.x}px`;
          pinEl.style.top = `${info.y}px`;
        } else {
          pinEl.style.display = 'none';
        }
      }
    }
    requestAnimationFrame(update3DPins);
  }
  requestAnimationFrame(update3DPins);

  // Pin Click Handlers (Focus Camera + Lloyd Dialogue)
  pinBeam?.addEventListener('click', () => {
    blueprintWorld?.focusOnTarget('beam');
    sound.playLaserLock();
    triggerSpeedlinesBurst(250);
    setLloydReaction('📐', 'ANALYZING', '&ldquo;Inverted-T ledge beam. 600mm depth, 200mm web. Handles standard floor loads without flinching!&rdquo;');
    showToast('3D Focus: Inverted-T Ledge Beam (PCI 8th Ed.)');
  });

  pinBearing?.addEventListener('click', () => {
    blueprintWorld?.focusOnTarget('bearing');
    sound.playLaserLock();
    triggerSpeedlinesBurst(250);
    setLloydReaction('😈', 'DELIGHTED', '&ldquo;90mm nominal bearing! Check Eurocode 2 Table 10.1! Don’t let the contractor shave off 5mm!&rdquo;');
    showToast('3D Focus: 90mm Nominal Bearing Joint');
  });

  pinCorbel?.addEventListener('click', () => {
    blueprintWorld?.focusOnTarget('corbel');
    sound.playLaserLock();
    triggerSpeedlinesBurst(250);
    setLloydReaction('🏛️', 'SECURE', '&ldquo;450kN corbel bracket with closed loop stirrups. Unbreakable shear friction.&rdquo;');
    showToast('3D Focus: Precast Corbel Shear Seat');
  });

  // Telemetry HUD Refresh Interval
  const hudFps = document.getElementById('hud-fps-val');
  const hudYaw = document.getElementById('hud-yaw-val');
  const hudPitch = document.getElementById('hud-pitch-val');
  const hudMesh = document.getElementById('hud-mesh-val');

  setInterval(() => {
    if (!blueprintWorld) return;
    const telem = blueprintWorld.getTelemetry();
    if (hudFps) hudFps.textContent = `${telem.fps} FPS`;
    if (hudYaw) hudYaw.textContent = `${telem.yaw}°`;
    if (hudPitch) hudPitch.textContent = `${telem.pitch}°`;
    if (hudMesh) hudMesh.textContent = telem.exploded;
  }, 180);

  // Hero Buttons & Hotbar Controls
  const btnExplode = document.getElementById('btn-explode');
  const btnReset = document.getElementById('btn-reset');
  const btnMode = document.getElementById('btn-mode');
  const btnBurstSpeedlines = document.getElementById('btn-burst-speedlines');

  const deckOrbit = document.getElementById('deck-orbit');
  const deckExplode = document.getElementById('deck-explode');
  const deckWireframe = document.getElementById('deck-wireframe');
  const deckShader = document.getElementById('deck-shader');
  const deckMana = document.getElementById('deck-mana');

  function handleExplodeToggle() {
    if (!blueprintWorld) return;
    const isExp = blueprintWorld.toggleExploded();
    if (btnExplode) {
      btnExplode.innerHTML = isExp 
        ? '<span class="btn-icon">🔄</span><span>RESTORE CITADEL</span>' 
        : '<span class="btn-icon">💥</span><span>EXPLODE 3D ASSEMBLY</span>';
    }
    triggerSpeedlinesBurst(350);
    setLloydReaction(
      isExp ? '💥' : '🏗️',
      isExp ? 'MANIC' : 'COMMANDING',
      isExp 
        ? '&ldquo;HA! Full precast breakdown! Slabs flying, rebar exposed! Look at that steel density!&rdquo;'
        : '&ldquo;Joints locked. Millimeter tolerances verified. The citadel stands unshakable.&rdquo;'
    );
    showToast(isExp ? 'Assembly Exploded: Slabs & Beams Separated' : 'Assembly Restored: Structural Joints Locked');
  }

  function handleManaBurst() {
    if (!blueprintWorld) return;
    blueprintWorld.triggerManaShockwave();
    triggerSpeedlinesBurst(750);
    sound.playMangaImpact();
    setLloydReaction('⚡', 'AWAKENED', '&ldquo;UNLIMITED MANA! Constructing 50 floors by twilight! Automate everything!&rdquo;');
    showToast('⚡ MANA BURST // ドーン! (SPEED BOOST +500%)');
  }

  btnExplode?.addEventListener('click', handleExplodeToggle);
  deckExplode?.addEventListener('click', handleExplodeToggle);

  deckOrbit?.addEventListener('click', () => {
    if (!blueprintWorld) return;
    const isRotating = blueprintWorld.toggleAutoRotate();
    deckOrbit.classList.toggle('active', isRotating);
    sound.playCaliperClick();
    showToast(isRotating ? 'Auto-Orbit: Resumed' : 'Auto-Orbit: Paused');
  });

  deckWireframe?.addEventListener('click', () => {
    if (!blueprintWorld) return;
    const isWire = blueprintWorld.toggleLayer('wireframe');
    deckWireframe.classList.toggle('active', isWire);
    showToast(isWire ? 'X-Ray Wireframe: Active' : 'Solid Shading: Restored');
  });

  deckShader?.addEventListener('click', () => {
    if (!blueprintWorld) return;
    const mode = blueprintWorld.cycleVisualMode();
    triggerSpeedlinesBurst(250);
    showToast(`Visual Style: ${mode.toUpperCase()} MANGA`);
  });

  deckMana?.addEventListener('click', handleManaBurst);
  btnBurstSpeedlines?.addEventListener('click', handleManaBurst);

  btnReset?.addEventListener('click', () => {
    if (blueprintWorld) {
      blueprintWorld.resetCamera();
      if (btnExplode) btnExplode.innerHTML = '<span class="btn-icon">💥</span><span>EXPLODE 3D ASSEMBLY</span>';
      setLloydReaction('📐', 'CALM', '&ldquo;Perspective reset to origin. Ready for the next inspection.&rdquo;');
      showToast('Camera Orientation Reset');
    }
  });

  btnMode?.addEventListener('click', () => {
    if (blueprintWorld) {
      const mode = blueprintWorld.cycleVisualMode();
      triggerSpeedlinesBurst(250);
      showToast(`Visual Style: ${mode.toUpperCase()} MANGA`);
    }
  });

  // Keyboard Game Hotkeys [1, 2, 3, 4, Space]
  window.addEventListener('keydown', (e) => {
    // Avoid interfering if user is in an input field
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

    if (e.key === '1') {
      deckOrbit?.click();
    } else if (e.key === '2') {
      handleExplodeToggle();
    } else if (e.key === '3') {
      deckWireframe?.click();
    } else if (e.key === '4') {
      deckShader?.click();
    } else if (e.code === 'Space') {
      e.preventDefault();
      handleManaBurst();
    }
  });

  // Tactical Audio Hover Ticks & 3D Card Parallax Tilt (Marcelo Design X / We Are Brand Style)
  document.querySelectorAll('.project-card, .mini-project, .ref-card, .manifesto-card, .comic-spread-frame').forEach(card => {
    card.addEventListener('mouseenter', () => {
      sound.playHoverTick();
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5.0;
      const rotateY = ((x - centerX) / centerX) * 5.0;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'none';
    });
  });

  document.querySelectorAll('button, .nav-link, .btn-game-primary, .btn-game-secondary, .btn-game-ghost, .spatial-pin').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      sound.playHoverTick();
    });
  });

  // ====== 6. THE GREATEST ESTATE DEVELOPER: RPG SYSTEM WINDOW ======
  const systemWindow = document.getElementById('estate-system-window');
  const btnToggleSystem = document.getElementById('btn-toggle-system');
  const btnMinimizeSystem = document.getElementById('btn-minimize-system');
  const btnSystemDon = document.getElementById('btn-system-sfx-don');
  const btnSystemBuff = document.getElementById('btn-system-buff');

  btnToggleSystem?.addEventListener('click', () => {
    if (systemWindow) {
      const isHidden = window.getComputedStyle(systemWindow).display === 'none';
      systemWindow.style.display = isHidden ? 'block' : 'none';
      sound.playCaliperClick();
      showToast(isHidden ? '[SYSTEM WINDOW OPENED]' : '[SYSTEM WINDOW CONCEALED]');
    }
  });

  btnMinimizeSystem?.addEventListener('click', () => {
    if (systemWindow) {
      systemWindow.classList.toggle('minimized');
      sound.playCaliperClick();
    }
  });

  btnSystemDon?.addEventListener('click', () => {
    sound.playStructuralClack();
    triggerSpeedlinesBurst(500);
    setLloydReaction('💥', 'MANIC', '&ldquo;IMPACT: ドーン! The foundation is welded directly to bedrock!&rdquo;');
    showToast('💥 IMPACT: ドーン! (FOUNDATION LOCKED)');
  });

  btnSystemBuff?.addEventListener('click', () => {
    sound.playAwakening();
    triggerSpeedlinesBurst(700);
    setLloydReaction('😈', 'SUPERCHARGED', '&ldquo;500% WORK SPEED BUFF ACTIVATED! Let us build an empire!&rdquo;');
    showToast('★ BUFF ACTIVE: +500% LLOYD CONSTRUCT MANA');
  });

  // ====== 7. PROJECT VISUALIZERS (Precast Explode, Beam Solver, Atlas, SQ3R) ======
  new ProjectVisualizers();

  // ====== 8. ARCHITECTURAL DRAFTING VIEWER (CAD / BIM) ======
  const dvRoot = document.getElementById('drawing-viewer-root');
  if (dvRoot) {
    new DrawingViewer('drawing-viewer-root');
    setTimeout(attachCursorHover, 300);
  }

  // ====== 9. SHADER IMAGE GALLERY (GLSL Wave Displacement) ======
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

  // ====== 10. 7-CHAPTER CASE STUDY MODAL ======
  const caseStudyModal = new CaseStudyModal();

  document.querySelectorAll('.btn-open-case-study').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = btn.getAttribute('data-project-id');
      if (projId) caseStudyModal.open(projId);
    });
  });

  // ====== 11. AUDIO TOGGLE ======
  const btnAudio = document.getElementById('btn-audio');
  const audioIcon = document.getElementById('audio-icon');
  const audioText = btnAudio?.querySelector('.audio-text');

  btnAudio?.addEventListener('click', () => {
    const isEnabled = sound.toggle();
    if (audioIcon) audioIcon.textContent = isEnabled ? '📐' : '🔇';
    if (audioText) audioText.textContent = isEnabled ? 'SOUND: ON' : 'SOUND: OFF';
    showToast(isEnabled ? 'Synthesized Drafting Audio: Active' : 'Audio Muted');
  });

  // ====== 12. COPY EMAIL ======
  const btnCopy = document.getElementById('btn-copy-email');

  btnCopy?.addEventListener('click', () => {
    navigator.clipboard.writeText('dagiyosi5321@gmail.com').then(() => {
      sound.playCaliperClick();
      showToast('EMAIL COPIED: dagiyosi5321@gmail.com');
    });
  });

  // ====== 13. TOAST SYSTEM ======
  const toast = document.getElementById('blueprint-toast');
  let toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 2400);
  }

  // ====== 14. SMOOTH ANCHOR NAVIGATION ======
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

  // ====== 15. GSAP SCROLL REVEALS ======
  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        once: true
      },
      opacity: 0,
      y: 45,
      duration: 0.8,
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
      y: 30,
      duration: 0.6,
      delay: i * 0.08,
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
      y: 30,
      duration: 0.6,
      delay: i * 0.06,
      ease: 'expo.out'
    });
  });

  gsap.from('.comic-spread-frame', {
    scrollTrigger: {
      trigger: '.comic-spread-frame',
      start: 'top 85%',
      once: true
    },
    opacity: 0,
    scale: 0.96,
    duration: 0.9,
    ease: 'expo.out'
  });

  console.log(
    '%cTHE BLUEPRINT UNIVERSE // The Greatest Estate Developer Mode Active\nFull-Scale Manga Spread, 3D Inked Assembly & Hologram System Ready',
    'color: #FF2233; font-weight: bold; font-size: 13px; background: #09090B; padding: 6px 14px; border: 2px solid #FF2233; border-radius: 6px;'
  );
});
