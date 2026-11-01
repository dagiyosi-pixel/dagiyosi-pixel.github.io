// ==========================================================================
// MAIN CONTROLLER // 0xDagi
// Coordinates Three.js, Lenis Smooth Scroll, Audio & Interactive UI
// ==========================================================================

import Lenis from 'lenis';
import { MangaScene } from './mangaScene.js';
import { sound } from './audio.js';
import { MangaTerminal } from './terminal.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize WebGL 3D Scene
  const canvas = document.getElementById('webgl-canvas');
  let mangaScene = null;
  if (canvas) {
    mangaScene = new MangaScene(canvas);
  }

  // 2. Initialize Lenis Smooth Scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.9
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Hook scroll to 3D scene camera & relics
  lenis.on('scroll', (e) => {
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollMax > 0 ? e.scroll / scrollMax : 0;
    if (mangaScene) {
      mangaScene.setScroll(progress);
    }
  });

  // 3. Custom Manga Cursor
  const cursor = document.getElementById('manga-cursor');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    if (cursor) {
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover effect on links and buttons
  const interactables = document.querySelectorAll('a, button, input, .manga-panel, .project-strip');
  interactables.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor?.classList.add('cursor-hover');
      sound.playHover();
    });
    el.addEventListener('mouseleave', () => {
      cursor?.classList.remove('cursor-hover');
    });
  });

  // 4. Audio Toggle Controller
  const btnAudio = document.getElementById('btn-audio');
  const audioIcon = document.getElementById('audio-icon');
  const audioLabel = document.getElementById('audio-label');

  btnAudio?.addEventListener('click', () => {
    const isEnabled = sound.toggle();
    if (audioIcon && audioLabel) {
      audioIcon.textContent = isEnabled ? '🔊' : '🔇';
      audioLabel.textContent = isEnabled ? 'AUDIO: ON' : 'AUDIO: OFF';
    }
    showToast(isEnabled ? 'Sound activated: Manga SFX enabled!' : 'Audio muted');
  });

  // 5. Experience Mode (The Famous Samana Studio Inspiration)
  const experienceModal = document.getElementById('experience-modal');
  const btnExperience = document.getElementById('btn-experience');
  const btnTrigger2 = document.getElementById('btn-trigger-experience-2');
  const btnCloseExp = document.getElementById('btn-close-experience');
  const speedlines = document.querySelector('.speedlines-overlay');

  const btnExpBurst = document.getElementById('btn-exp-spawn-burst');
  const btnExpShader = document.getElementById('btn-exp-switch-shader');
  const btnExpReset = document.getElementById('btn-exp-reset-cam');

  function openExperience() {
    if (!experienceModal) return;
    experienceModal.classList.remove('opacity-0', 'pointer-events-none');
    experienceModal.classList.add('opacity-100', 'pointer-events-auto');
    if (speedlines) speedlines.classList.remove('opacity-0');
    sound.playAwakening();
    if (mangaScene) mangaScene.triggerInkBurst(400);
  }

  function closeExperience() {
    if (!experienceModal) return;
    experienceModal.classList.add('opacity-0', 'pointer-events-none');
    experienceModal.classList.remove('opacity-100', 'pointer-events-auto');
    if (speedlines) speedlines.classList.add('opacity-0');
    sound.playClick();
  }

  btnExperience?.addEventListener('click', openExperience);
  btnTrigger2?.addEventListener('click', openExperience);
  btnCloseExp?.addEventListener('click', closeExperience);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeExperience();
    }
    if ((e.key === 'e' || e.key === 'E') && document.activeElement.tagName !== 'INPUT') {
      openExperience();
    }
  });

  btnExpBurst?.addEventListener('click', () => {
    if (mangaScene) mangaScene.triggerInkBurst(500);
  });

  btnExpShader?.addEventListener('click', () => {
    if (mangaScene) {
      const active = mangaScene.toggleShader();
      showToast(active ? 'Hatching shader enabled' : 'Smooth cel shader enabled');
    }
  });

  btnExpReset?.addEventListener('click', () => {
    if (mangaScene) {
      mangaScene.camera.position.set(0, 0, 10);
      mangaScene.camera.lookAt(0, 0, 0);
      showToast('Camera reset');
    }
  });

  // 6. Interactive Terminal
  new MangaTerminal({
    onTriggerExperience: openExperience,
    onTriggerBurst: () => {
      if (mangaScene) mangaScene.triggerInkBurst(400);
    }
  });

  // 7. Email Copy & Toast Notification
  const btnCopy = document.getElementById('btn-copy-email');
  const toast = document.getElementById('manga-toast');
  let toastTimeout = null;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove('opacity-0', 'pointer-events-none');
    toast.classList.add('opacity-100');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.add('opacity-0', 'pointer-events-none');
      toast.classList.remove('opacity-100');
    }, 2800);
  }

  btnCopy?.addEventListener('click', () => {
    navigator.clipboard.writeText('dagiyosi5321@gmail.com').then(() => {
      sound.playClick();
      showToast('EMAIL COPIED: dagiyosi5321@gmail.com');
      // Visual stamp effect on seal
      const hanko = document.getElementById('hanko-seal');
      if (hanko) {
        hanko.classList.add('scale-125');
        setTimeout(() => hanko.classList.remove('scale-125'), 300);
      }
    });
  });

  console.log(
    '%c0xDagi // MANGA-NOIR ENGINE LOADED\nPress [~] for Terminal | Press [E] for Experience Mode',
    'color: #ff2233; font-weight: bold; font-size: 14px; background: #09090b; padding: 6px 12px; border: 2px solid #ff2233;'
  );
});
