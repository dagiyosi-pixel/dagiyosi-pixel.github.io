// ==========================================================================
// MAIN CONTROLLER // THE BLUEPRINT UNIVERSE
// Orchestrates BlueprintWorld, ShaderImageGallery, MangaMotion, InkTrail, DrawingViewer & Audio
// ==========================================================================

import Lenis from 'lenis';
import { BlueprintWorld } from './BlueprintWorld.js';
import { ShaderImageGallery } from './ShaderImageGallery.js';
import { MangaMotion } from './MangaMotion.js';
import { InkTrail } from './InkTrail.js';
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

  // 2. Initialize Calligraphy Ink Trail (Canvas Overlay)
  const inkCanvas = document.getElementById('ink-canvas');
  if (inkCanvas) {
    new InkTrail(inkCanvas);
  }

  // 3. Initialize MangaMotion (Scroll Storytelling & 3D Tilt)
  new MangaMotion(lenis);

  // 4. Initialize BlueprintWorld (3D Architectural Assembly in Hero)
  const bpCanvas = document.getElementById('blueprint-canvas');
  let blueprintWorld = null;
  if (bpCanvas) {
    blueprintWorld = new BlueprintWorld(bpCanvas);
  }

  // 5. Initialize WebGL Shader Image Gallery
  const shaderCanvas = document.getElementById('shader-gallery-canvas');
  let shaderGallery = null;
  if (shaderCanvas) {
    shaderGallery = new ShaderImageGallery(shaderCanvas);

    // Hover effect on the shader gallery container
    shaderCanvas.addEventListener('mouseenter', () => {
      shaderGallery.setHover(true);
      sound.playPencilScratch();
    });
    shaderCanvas.addEventListener('mouseleave', () => {
      shaderGallery.setHover(false);
    });

    // Buttons to toggle images
    const btnArch = document.getElementById('btn-show-arch');
    const btnManga = document.getElementById('btn-show-manga');

    btnArch?.addEventListener('click', () => {
      shaderGallery.setTransition(0.0);
      btnArch.classList.add('bg-crimson', 'text-white', 'border-white');
      btnArch.classList.remove('bg-ink-slate', 'text-cloud', 'border-azure');
      btnManga.classList.add('bg-ink-slate', 'text-cloud', 'border-azure');
      btnManga.classList.remove('bg-crimson', 'text-white', 'border-white');
      sound.playBlueprintUnfold();
      showToast('Shader Active: Architectural Perspective');
    });

    btnManga?.addEventListener('click', () => {
      shaderGallery.setTransition(1.0);
      btnManga.classList.add('bg-crimson', 'text-white', 'border-white');
      btnManga.classList.remove('bg-ink-slate', 'text-cloud', 'border-azure');
      btnArch.classList.add('bg-ink-slate', 'text-cloud', 'border-azure');
      btnArch.classList.remove('bg-crimson', 'text-white', 'border-white');
      sound.playStructuralClack();
      showToast('Shader Active: Manga Awakening');
    });
  }

  // 6. Initialize Architectural Drawing Viewer
  const dvRoot = document.getElementById('drawing-viewer-root');
  if (dvRoot) {
    new DrawingViewer('drawing-viewer-root');
  }

  // 7. Initialize 7-Chapter Manhwa Case Study Modal
  const caseStudyModal = new CaseStudyModal();

  document.querySelectorAll('.btn-open-case-study').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-project-id');
      if (projId) caseStudyModal.open(projId);
    });
  });

  document.querySelectorAll('[data-project]').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) return;
      const projId = card.getAttribute('data-project');
      if (projId) caseStudyModal.open(projId);
    });
  });

  // 8. Hero 3D Assembly Controls
  const btnExplode = document.getElementById('btn-hero-toggle-exploded');
  const btnReset = document.getElementById('btn-hero-reset-cam');
  const btnCycleMode = document.getElementById('btn-hero-cycle-mode');

  btnExplode?.addEventListener('click', () => {
    if (blueprintWorld) {
      const isExp = blueprintWorld.toggleExploded();
      btnExplode.innerHTML = isExp ? '<span>🔄 COLLAPSE 3D ASSEMBLY</span>' : '<span>💥 EXPLODE 3D ASSEMBLY</span>';
      showToast(isExp ? 'Exploded Assembly: Precast components separated' : 'Assembly Restored: Structural joints locked');
    }
  });

  btnReset?.addEventListener('click', () => {
    if (blueprintWorld) {
      blueprintWorld.resetCamera();
      if (btnExplode) btnExplode.innerHTML = '<span>💥 EXPLODE 3D ASSEMBLY</span>';
      showToast('Camera orientation reset');
    }
  });

  btnCycleMode?.addEventListener('click', () => {
    if (blueprintWorld) {
      const mode = blueprintWorld.cycleVisualMode();
      btnCycleMode.textContent = `MODE: ${mode.toUpperCase()} MANGA`;
      showToast(`Visual Style: ${mode.toUpperCase()} MODE`);
    }
  });

  document.querySelectorAll('.layer-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const layer = btn.getAttribute('data-layer');
      if (blueprintWorld && layer) {
        const visible = blueprintWorld.toggleLayer(layer);
        btn.classList.toggle('bg-crimson', visible);
        btn.classList.toggle('text-white', visible);
        btn.classList.toggle('border-crimson', visible);
        btn.classList.toggle('bg-ink-slate', !visible);
        btn.classList.toggle('text-cloud', !visible);
        btn.classList.toggle('border-azure', !visible);
      }
    });
  });

  // 9. Custom Blueprint Crosshair Cursor
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

  // 10. Audio Toggle
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

  // 11. Copy Email & Toast
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
    '%cTHE BLUEPRINT UNIVERSE // ARCHITECTURAL MANHWA ENGINE LOADED\nWebGL Shaders, 3D Assembly, Ink Trail & Motion Active',
    'color: #FF2233; font-weight: bold; font-size: 14px; background: #09090B; padding: 6px 12px; border: 2px solid #FF2233; border-radius: 4px;'
  );
});
