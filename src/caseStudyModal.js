// ==========================================================================
// REUSABLE 7-CHAPTER MANHWA CASE STUDY MODAL // THE BLUEPRINT UNIVERSE
// Storytelling narrative: Idea → Challenge → Blueprint → Engineering → Build → Result → Next Adventure
// ==========================================================================

import { projectsData } from './projectsData.js';
import { sound } from './audio.js';

export class CaseStudyModal {
  constructor() {
    this.modal = document.getElementById('case-study-modal');
    this.content = document.getElementById('case-study-content');
    this.closeBtn = document.getElementById('btn-close-case-study');
    this.currentProjectId = null;

    this.init();
  }

  init() {
    if (!this.modal) return;

    this.closeBtn?.addEventListener('click', () => this.close());

    // ESC key closes
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
        this.close();
      }
    });

    // Delegate clicks from inside modal (e.g. Next Adventure button)
    this.modal.addEventListener('click', (e) => {
      const nextBtn = e.target.closest('[data-next-project]');
      if (nextBtn) {
        const nextId = nextBtn.getAttribute('data-next-project');
        if (nextId) {
          this.open(nextId);
        }
      }
    });
  }

  open(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    this.currentProjectId = projectId;
    sound.playBlueprintUnfold();

    const ch = project.chapters;
    const nextProj = projectsData.find(p => p.id === ch.ch7_next) || projectsData[0];

    this.content.innerHTML = `
      <!-- Header Banner / Breadcrumb -->
      <div class="border-b-2 border-navy pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-2 font-fira text-xs font-bold text-azure uppercase tracking-wider">
            <span>// MANHWA DOSSIER</span>
            <span>•</span>
            <span class="bg-navy text-white px-2 py-0.5 rounded">${project.category}</span>
            <span class="bg-gold text-navy px-2 py-0.5 rounded font-black">${project.badge}</span>
          </div>
          <h2 class="font-anton text-4xl sm:text-6xl text-navy uppercase tracking-tight leading-none">
            ${project.title}
          </h2>
          <p class="font-fira text-sm text-neutral-600 mt-2 font-medium">
            ${project.subtitle}
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          ${project.liveUrl ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="manga-btn px-4 py-2 bg-azure text-white font-fira text-xs font-bold uppercase rounded border-2 border-navy shadow-brutal-sm hover:bg-navy transition">
              <span>🚀 LAUNCH LIVE APP</span>
            </a>
          ` : ''}
          ${project.repoUrl ? `
            <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="manga-btn px-4 py-2 bg-white text-navy font-fira text-xs font-bold uppercase rounded border-2 border-navy shadow-brutal-sm hover:bg-ice transition">
              <span>📁 INSPECT REPO</span>
            </a>
          ` : ''}
        </div>
      </div>

      <!-- Verified Metrics Strip -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-ice border-2 border-navy rounded mb-10 font-fira shadow-brutal-sm">
        ${project.metrics.map(m => `
          <div class="p-2">
            <span class="block text-2xl font-anton text-azure leading-tight">${m.value}</span>
            <span class="text-[10px] font-bold text-navy uppercase tracking-wider">${m.label}</span>
          </div>
        `).join('')}
      </div>

      <!-- Seven Narrative Chapters -->
      <div class="space-y-12">
        
        <!-- CHAPTER 01: THE IDEA -->
        <div class="manhwa-chapter border-l-4 border-azure pl-6 relative">
          <span class="font-fira text-xs font-black text-azure uppercase tracking-widest block mb-1">
            CHAPTER 01 // THE IDEA
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">GENESIS OF THE CONCEPT</h3>
          <p class="font-sans text-neutral-700 leading-relaxed text-sm md:text-base">
            ${ch.ch1_idea}
          </p>
        </div>

        <!-- CHAPTER 02: THE CHALLENGE -->
        <div class="manhwa-chapter border-l-4 border-navy pl-6 relative">
          <span class="font-fira text-xs font-black text-navy uppercase tracking-widest block mb-1">
            CHAPTER 02 // THE CHALLENGE
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">TECHNICAL & SPATIAL CONSTRAINTS</h3>
          <p class="font-sans text-neutral-700 leading-relaxed text-sm md:text-base">
            ${ch.ch2_challenge}
          </p>
        </div>

        <!-- CHAPTER 03: THE BLUEPRINT -->
        <div class="manhwa-chapter border-l-4 border-sky pl-6 relative bg-ice/40 p-6 rounded border border-navy/20">
          <span class="font-fira text-xs font-black text-azure uppercase tracking-widest block mb-1">
            CHAPTER 03 // THE BLUEPRINT
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">SYSTEM ARCHITECTURE & SCHEMATICS</h3>
          <p class="font-sans text-neutral-700 leading-relaxed text-sm md:text-base mb-4">
            ${ch.ch3_blueprint}
          </p>
          <div class="flex flex-wrap gap-2 font-fira text-xs">
            ${project.tools.map(t => `<span class="bg-white border border-navy px-2.5 py-1 rounded text-navy font-bold">${t}</span>`).join('')}
          </div>
        </div>

        <!-- CHAPTER 04: THE ENGINEERING -->
        <div class="manhwa-chapter border-l-4 border-gold pl-6 relative">
          <span class="font-fira text-xs font-black text-gold uppercase tracking-widest block mb-1">
            CHAPTER 04 // THE ENGINEERING
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">MATHEMATICS, LOGIC & EQUATIONS</h3>
          <p class="font-sans text-neutral-700 leading-relaxed text-sm md:text-base">
            ${ch.ch4_engineering}
          </p>
        </div>

        <!-- CHAPTER 05: THE BUILD -->
        <div class="manhwa-chapter border-l-4 border-azure pl-6 relative">
          <span class="font-fira text-xs font-black text-azure uppercase tracking-widest block mb-1">
            CHAPTER 05 // THE BUILD
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">DEVELOPMENT & IMPLEMENTATION</h3>
          <p class="font-sans text-neutral-700 leading-relaxed text-sm md:text-base">
            ${ch.ch5_build}
          </p>
        </div>

        <!-- CHAPTER 06: THE RESULT -->
        <div class="manhwa-chapter border-l-4 border-green-600 pl-6 relative bg-white p-6 rounded border-2 border-navy shadow-brutal-sm">
          <span class="font-fira text-xs font-black text-green-700 uppercase tracking-widest block mb-1">
            CHAPTER 06 // THE RESULT
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">VERIFIED OUTCOMES & IMPACT</h3>
          <p class="font-sans text-neutral-800 leading-relaxed text-sm md:text-base font-medium">
            ${ch.ch6_result}
          </p>
        </div>

        <!-- CHAPTER 07: NEXT ADVENTURE -->
        <div class="border-t-2 border-navy pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-cloud p-6 rounded border border-navy">
          <div>
            <span class="font-fira text-xs font-bold text-azure uppercase tracking-wider block">
              CHAPTER 07 // NEXT ADVENTURE
            </span>
            <h4 class="font-anton text-2xl text-navy uppercase">
              ${nextProj.title}
            </h4>
            <span class="font-fira text-xs text-neutral-500">${nextProj.subtitle}</span>
          </div>

          <button data-next-project="${nextProj.id}" class="manga-btn px-6 py-3 bg-navy text-white font-fira text-xs font-bold uppercase rounded border-2 border-navy shadow-brutal hover:bg-azure transition flex items-center gap-2">
            <span>ENTER NEXT CHRONICLE</span>
            <span>→</span>
          </button>
        </div>

      </div>
    `;

    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    this.content.scrollTop = 0;
  }

  close() {
    this.modal.classList.add('hidden');
    document.body.style.overflow = '';
    sound.playCaliperClick();
  }
}
