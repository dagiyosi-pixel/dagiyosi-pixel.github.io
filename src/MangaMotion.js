// ==========================================================================
// MANGA MOTION // THE BLUEPRINT UNIVERSE
// GSAP & Scroll-Triggered Kinetic Storytelling, Speedlines & 3D Tilt
// ==========================================================================

import gsap from 'gsap';

export class MangaMotion {
  constructor(lenis) {
    this.lenis = lenis;
    this.speedlines = document.querySelector('.speedlines-overlay');
    this.init();
  }

  init() {
    // 1. Velocity-based speedline flash
    if (this.lenis && this.speedlines) {
      this.lenis.on('scroll', (e) => {
        const vel = Math.abs(e.velocity || 0);
        if (vel > 1.8) {
          const opacity = Math.min(0.4, (vel - 1.8) * 0.08);
          this.speedlines.style.opacity = opacity.toString();
        } else {
          this.speedlines.style.opacity = '0';
        }
      });
    }

    // 2. 3D Card Perspective Tilt on Hover
    const cards = document.querySelectorAll('.manhwa-panel');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(card, {
          rotationY: x * 8,
          rotationX: -y * 8,
          transformPerspective: 900,
          ease: 'power1.out',
          duration: 0.3
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          ease: 'power2.out',
          duration: 0.5
        });
      });
    });

    // 3. Staggered reveal of sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          gsap.fromTo(entry.target, 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
          );
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.manhwa-chapter, .project-card, .process-step').forEach(el => {
      observer.observe(el);
    });
  }
}
