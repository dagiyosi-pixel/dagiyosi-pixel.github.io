// ==========================================================================
// CASE STUDY MODAL — Clean editorial reading experience
// ==========================================================================

import { projectsData } from './projectsData.js';

export class CaseStudyModal {
  constructor() {
    this.modal = document.getElementById('case-study-modal');
    this.content = document.getElementById('case-study-content');
    this.btnClose = document.getElementById('btn-close-case-study');

    this.btnClose?.addEventListener('click', () => this.close());
    this.modal?.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  }

  open(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !this.content) return;

    const chapterNames = [
      'The Idea',
      'The Challenge',
      'Blueprint & Architecture',
      'Engineering & Analysis',
      'Build & Implementation',
      'Result & Impact',
    ];

    const chapterKeys = ['ch1_idea', 'ch2_challenge', 'ch3_blueprint', 'ch4_engineering', 'ch5_build', 'ch6_result'];

    let html = `
      <div style="margin-bottom: 2rem;">
        <span class="chapter-number">${project.category}</span>
        <h3 style="font-size: 1.5rem; letter-spacing: -0.02em;">${project.title}</h3>
        <p style="color: var(--text-muted); font-size: 0.875rem; margin-top: 0.5rem;">${project.subtitle}</p>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
        ${project.tools.map(t => `<span style="font-family: var(--font-mono); font-size: 0.6875rem; padding: 0.3rem 0.7rem; background: var(--crimson-soft, rgba(255,34,51,0.1)); color: var(--crimson, #FF2233); border-radius: 6px;">${t}</span>`).join('')}
      </div>

      ${project.metrics ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1px; background: var(--border, #27272a); border-radius: 10px; overflow: hidden; margin-bottom: 2.5rem;">
          ${project.metrics.map(m => `
            <div style="background: var(--bg-card, #111113); padding: 1.25rem; text-align: center;">
              <span style="display: block; font-family: var(--font-display, sans-serif); font-weight: 800; font-size: 1.25rem; letter-spacing: -0.02em;">${m.value}</span>
              <span style="display: block; font-family: var(--font-mono, monospace); font-size: 0.625rem; color: var(--text-muted, #71717a); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 0.25rem;">${m.label}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
    `;

    chapterKeys.forEach((key, i) => {
      if (project.chapters[key]) {
        html += `
          <div class="chapter-section">
            <span class="chapter-number">Chapter ${String(i + 1).padStart(2, '0')}</span>
            <h3 class="chapter-title">${chapterNames[i]}</h3>
            <p>${project.chapters[key]}</p>
          </div>
        `;
      }
    });

    // Next project link
    if (project.chapters.ch7_next) {
      const nextProject = projectsData.find(p => p.id === project.chapters.ch7_next);
      if (nextProject) {
        html += `
          <button class="next-project-link" data-next-id="${nextProject.id}">
            Next: ${nextProject.title} →
          </button>
        `;
      }
    }

    this.content.innerHTML = html;

    // Bind next project link
    const nextBtn = this.content.querySelector('.next-project-link');
    nextBtn?.addEventListener('click', () => {
      const nextId = nextBtn.getAttribute('data-next-id');
      if (nextId) {
        this.content.scrollTop = 0;
        this.open(nextId);
      }
    });

    // Update modal title
    const titleEl = this.modal.querySelector('.modal-title-text');
    if (titleEl) titleEl.textContent = project.title;

    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modal?.classList.add('hidden');
    document.body.style.overflow = '';
  }
}
