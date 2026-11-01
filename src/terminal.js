// ==========================================================================
// MANGA-NOIR CLI TERMINAL // 0xDagi
// Interactive easter egg terminal
// ==========================================================================

import { sound } from './audio.js';

export class MangaTerminal {
  constructor(options) {
    this.container = document.getElementById('manga-terminal');
    this.output = document.getElementById('terminal-output');
    this.input = document.getElementById('terminal-input');
    this.closeBtn = document.getElementById('btn-terminal-close');
    this.openBtn = document.getElementById('btn-terminal-open');
    this.onTriggerExperience = options.onTriggerExperience;
    this.onTriggerBurst = options.onTriggerBurst;

    this.isOpen = false;
    this.init();
  }

  init() {
    if (!this.container || !this.input) return;

    // Toggle button
    this.openBtn?.addEventListener('click', () => this.toggle());
    this.closeBtn?.addEventListener('click', () => this.close());

    // Keyboard shortcut: `~`
    window.addEventListener('keydown', (e) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        this.toggle();
      }
    });

    // Input submission
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = this.input.value.trim().toLowerCase();
        this.executeCommand(cmd);
        this.input.value = '';
      }
    });
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.isOpen = true;
    this.container.classList.remove('hidden');
    this.input.focus();
    sound.playClick();
  }

  close() {
    this.isOpen = false;
    this.container.classList.add('hidden');
    sound.playClick();
  }

  print(text, isError = false) {
    const line = document.createElement('div');
    if (isError) {
      line.className = 'text-crimson font-bold';
    } else {
      line.className = 'text-paper';
    }
    line.innerHTML = text;
    this.output.appendChild(line);
    this.output.scrollTop = this.output.scrollHeight;
  }

  executeCommand(cmd) {
    sound.playClick();
    this.print(`<span class="text-neutral-500">&gt;</span> ${cmd}`);

    switch (cmd) {
      case 'help':
        this.print(`
          <span class="text-amber">AVAILABLE MANGA COMMANDS:</span><br>
          • <strong class="text-crimson">whoami</strong> - Developer identity & profile<br>
          • <strong class="text-crimson">skills</strong> - Technical arsenal breakdown<br>
          • <strong class="text-crimson">projects</strong> - Featured flagship deployments<br>
          • <strong class="text-crimson">experience</strong> - Launch 3D Experience Mode<br>
          • <strong class="text-crimson">burst</strong> - Fire WebGL ink particle explosion<br>
          • <strong class="text-crimson">contact</strong> - Reach out & hire<br>
          • <strong class="text-crimson">clear</strong> - Clear console window
        `);
        break;

      case 'whoami':
        this.print(`
          <strong class="text-crimson">DAGIYOSI (0xDagi)</strong><br>
          Creative Coder • Full-Stack Engineer • BIM Computational Architect.<br>
          "First make it work, then make it right, then make it fast."<br>
          Based in Addis Ababa, Ethiopia. Open to global remote builds.
        `);
        break;

      case 'skills':
        this.print(`
          <span class="text-amber">[ARSENAL OVERVIEW]</span><br>
          • Frontend: Three.js, WebGL, GLSL Shaders, GSAP, React, Tailwind<br>
          • Backend: Python (FastAPI/Flask), Node.js, PostgreSQL, REST APIs<br>
          • Engineering: Revit API, Hollow-Core Slab Engine, Structural Sizing
        `);
        break;

      case 'projects':
        this.print(`
          <span class="text-amber">[FEATURED ARCHIVES]</span><br>
          1. 🇪🇹 Ethiopian National Curriculum Platform (SQ3R, 577+ CBA Qs)<br>
          2. 🏗️ Precast BIM & Structural Framework Suite (Revit API)<br>
          3. ⚡ Manga-Noir WebGL 3D Shader Engine
        `);
        break;

      case 'experience':
        this.print('<span class="text-crimson">Awakening 3D Experience Mode...</span>');
        if (this.onTriggerExperience) this.onTriggerExperience();
        this.close();
        break;

      case 'burst':
        this.print('<span class="text-crimson">Fired WebGL Ink Burst!</span>');
        if (this.onTriggerBurst) this.onTriggerBurst();
        break;

      case 'contact':
        this.print(`
          Email: <span class="text-crimson font-bold">dagiyosi5321@gmail.com</span><br>
          GitHub: <a href="https://github.com/dagiyosi-pixel" target="_blank" class="underline text-paper">github.com/dagiyosi-pixel</a>
        `);
        break;

      case 'clear':
        this.output.innerHTML = '';
        break;

      case '':
        break;

      default:
        this.print(`Command not found: '${cmd}'. Type '<strong class="text-crimson">help</strong>'`, true);
        break;
    }
  }
}
