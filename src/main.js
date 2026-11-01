// ==========================================================================
// MAIN CONTROLLER // THE BLUEPRINT UNIVERSE
// Orchestrates 3D Blueprint Constructor, Drawing Viewer, Case Study Modal, Lenis & Audio
// ==========================================================================

import Lenis from 'lenis';
import { BlueprintConstructor } from './blueprintConstructor.js';
import { DrawingViewer } from './drawingViewer.js';
import { CaseStudyModal } from './caseStudyModal.js';
import { sound } from './audio.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lenis Smooth Scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.85
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 2. Initialize 3D Blueprint Constructor in Hero
  const canvas = document.getElementById('blueprint-canvas');
  let constructor = null;
  if (canvas) {
    constructor = new BlueprintConstructor(canvas);
  }

  // 3. Initialize Architectural Drawing Viewer in Section C
  const dvRoot = document.getElementById('drawing-viewer-root');
  if (dvRoot) {
    new DrawingViewer('drawing-viewer-root');
  }

  // 4. Initialize 7-Chapter Manhwa Case Study Modal
  const caseStudyModal = new CaseStudyModal();

  // Attach click listeners to all Case Study buttons
  document.querySelectorAll('.btn-open-case-study').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projId = btn.getAttribute('data-project-id');
      if (projId) {
        caseStudyModal.open(projId);
      }
    });
  });

  // Also make project cards clickable
  document.querySelectorAll('[data-project]').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked directly on an anchor or button inside
      if (e.target.closest('a') || e.target.closest('button')) return;
      const projId = card.getAttribute('data-project');
      if (projId) {
        caseStudyModal.open(projId);
      }
    });
  });

  // 5. Hero 3D Blueprint Constructor Controls
  const btnExplode = document.getElementById('btn-hero-toggle-exploded');
  const tagExplode = document.getElementById('hero-exploded-tag');
  const btnReset = document.getElementById('btn-hero-reset-cam');
  const btnCycleMode = document.getElementById('btn-hero-cycle-mode');

  btnExplode?.addEventListener('click', () => {
    if (constructor) {
      const isExploded = constructor.toggleExploded();
      if (tagExplode) {
        tagExplode.classList.toggle('hidden', !isExploded);
      }
      btnExplode.innerHTML = isExploded ? '<span>🔄 COLLAPSE 3D MODEL</span>' : '<span>💥 EXPLODE 3D MODEL</span>';
      showToast(isExploded ? 'Exploded Assembly: Precast components separated' : 'Assembly Restored: Structural joints locked');
    }
  });

  btnReset?.addEventListener('click', () => {
    if (constructor) {
      constructor.resetCamera();
      if (tagExplode) tagExplode.classList.add('hidden');
      if (btnExplode) btnExplode.innerHTML = '<span>💥 EXPLODE 3D MODEL</span>';
      showToast('Camera orientation reset');
    }
  });

  btnCycleMode?.addEventListener('click', () => {
    if (constructor) {
      const mode = constructor.cycleVisualMode();
      btnCycleMode.textContent = `MODE: ${mode.toUpperCase()}`;
      showToast(`Visual Style: ${mode.toUpperCase()}`);
    }
  });

  // Layer toggles
  document.querySelectorAll('.layer-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const layer = btn.getAttribute('data-layer');
      if (constructor && layer) {
        const visible = constructor.toggleLayer(layer);
        btn.classList.toggle('bg-navy', visible);
        btn.classList.toggle('text-white', visible);
        btn.classList.toggle('bg-ice', !visible);
        btn.classList.toggle('text-navy', !visible);
      }
    });
  });

  // 6. Custom Blueprint Crosshair Cursor
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

  // Hover states on interactives
  document.querySelectorAll('a, button, input, .manhwa-panel').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor?.classList.add('cursor-hover');
      sound.playPencilScratch();
    });
    el.addEventListener('mouseleave', () => {
      cursor?.classList.remove('cursor-hover');
    });
  });

  // 7. Audio Toggle Button
  const btnAudio = document.getElementById('btn-audio');
  const audioIcon = document.getElementById('audio-icon');
  const audioLabel = document.getElementById('audio-label');

  btnAudio?.addEventListener('click', () => {
    const isEnabled = sound.toggle();
    if (audioIcon && audioLabel) {
      audioIcon.textContent = isEnabled ? '📐' : '🔇';
      audioLabel.textContent = isEnabled ? 'SOUND: ON' : 'SOUND: OFF';
    }
    showToast(isEnabled ? 'Drafting & Assembly Audio Enabled' : 'Audio Muted');
  });

  // 8. Copy Email to Clipboard & Toast
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
    '%cTHE BLUEPRINT UNIVERSE // DAGMAWI YOSEF (0xDagi)\nComputational Architecture • Precast Engineering • Creative WebGL',
    'color: #399DD6; font-weight: bold; font-size: 14px; background: #173C5B; padding: 6px 12px; border: 2px solid #399DD6; border-radius: 4px;'
  );
});
