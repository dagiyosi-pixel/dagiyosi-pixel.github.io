// ==========================================================================
// ARCHITECTURAL DRAWING VIEWER // THE BLUEPRINT UNIVERSE
// High-precision vector blueprint viewer with Pan, Zoom & Drawing Selection
// ==========================================================================

import { sound } from './audio.js';

export class DrawingViewer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentDrawing = 'section-precast';
    this.scale = 1.0;
    this.pan = { x: 0, y: 0 };
    this.isPanning = false;
    this.startPan = { x: 0, y: 0 };

    this.drawings = {
      'section-precast': {
        title: "STRUCTURAL SECTION 1:50 — HOLLOW-CORE & INVERTED-T BEAM",
        ref: "DWG-S01 // BMC III PRECAST FRAME",
        scaleLabel: "SCALE 1:50 @ A2",
        svg: this.getSectionSvg()
      },
      'framing-plan': {
        title: "MODULAR FRAMING PLAN — HOLLOW-CORE SLAB DISTRIBUTION",
        ref: "DWG-S02 // LEVEL 02 STRUCTURAL",
        scaleLabel: "SCALE 1:100 @ A2",
        svg: this.getPlanSvg()
      },
      'stair-detail': {
        title: "PRECAST STAIR FLIGHT & LANDING RECESS 1:25",
        ref: "DWG-D04 // CIRCULATION CORE",
        scaleLabel: "SCALE 1:25 @ A2",
        svg: this.getStairSvg()
      },
      'exploded-axon': {
        title: "EXPLODED AXONOMETRIC — COLUMN-CORBEL-BEAM JOINT",
        ref: "DWG-AX01 // JOINT AUDIT",
        scaleLabel: "N.T.S. // ISOMETRIC",
        svg: this.getAxonSvg()
      }
    };

    this.init();
  }

  init() {
    if (!this.container) return;
    this.render();
    this.attachEvents();
  }

  render() {
    const d = this.drawings[this.currentDrawing];

    this.container.innerHTML = `
      <div class="drawing-viewer-frame border-2 border-navy bg-cloud rounded relative overflow-hidden shadow-brutal flex flex-col h-[560px]">
        
        <!-- Top Toolbar -->
        <div class="viewer-toolbar bg-ice border-b-2 border-navy px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 z-10 font-fira text-xs">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-azure inline-block animate-pulse"></span>
            <span class="font-bold text-navy uppercase">${d.ref}</span>
            <span class="text-neutral-400 hidden sm:inline">|</span>
            <span class="text-neutral-600 hidden sm:inline">${d.title}</span>
          </div>

          <div class="flex items-center gap-2">
            <!-- Zoom controls -->
            <button id="btn-dv-zoom-in" class="px-2 py-1 bg-white border border-navy rounded hover:bg-light transition font-bold" title="Zoom In">+</button>
            <span id="dv-scale-text" class="px-1.5 py-1 text-[11px] font-bold text-navy">100%</span>
            <button id="btn-dv-zoom-out" class="px-2 py-1 bg-white border border-navy rounded hover:bg-light transition font-bold" title="Zoom Out">-</button>
            <button id="btn-dv-reset" class="px-2.5 py-1 bg-white border border-navy rounded hover:bg-light transition text-[11px]" title="Reset View">RESET</button>
          </div>
        </div>

        <!-- Drawing Canvas Area -->
        <div id="dv-viewport" class="flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing bg-cloud select-none">
          <div id="dv-canvas" class="w-full h-full flex items-center justify-center transition-transform duration-75 origin-center">
            ${d.svg}
          </div>

          <!-- Watermark Grid Pattern -->
          <div class="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#173c5b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

        <!-- Bottom Selector Tabs & Title Block -->
        <div class="bg-ice border-t-2 border-navy px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 z-10 font-fira text-xs">
          <div class="flex flex-wrap items-center gap-1.5">
            <button class="dv-tab-btn px-2.5 py-1 rounded border border-navy text-[11px] font-bold ${this.currentDrawing === 'section-precast' ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-light'}" data-drawing="section-precast">SECTION 1:50</button>
            <button class="dv-tab-btn px-2.5 py-1 rounded border border-navy text-[11px] font-bold ${this.currentDrawing === 'framing-plan' ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-light'}" data-drawing="framing-plan">FRAMING PLAN</button>
            <button class="dv-tab-btn px-2.5 py-1 rounded border border-navy text-[11px] font-bold ${this.currentDrawing === 'stair-detail' ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-light'}" data-drawing="stair-detail">STAIR RECESS</button>
            <button class="dv-tab-btn px-2.5 py-1 rounded border border-navy text-[11px] font-bold ${this.currentDrawing === 'exploded-axon' ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-light'}" data-drawing="exploded-axon">EXPLODED AXON</button>
          </div>

          <div class="text-[11px] text-neutral-600 font-fira flex items-center gap-3">
            <span>${d.scaleLabel}</span>
            <span class="text-azure font-bold">DRAG TO PAN • SCROLL TO ZOOM</span>
          </div>
        </div>

      </div>
    `;

    this.attachControls();
  }

  attachEvents() {
    // Tab switching
    this.container.addEventListener('click', (e) => {
      const btn = e.target.closest('.dv-tab-btn');
      if (btn) {
        const id = btn.getAttribute('data-drawing');
        if (id && id !== this.currentDrawing) {
          this.currentDrawing = id;
          this.scale = 1.0;
          this.pan = { x: 0, y: 0 };
          sound.playBlueprintUnfold();
          this.render();
        }
      }
    });
  }

  attachControls() {
    const vp = document.getElementById('dv-viewport');
    const canvas = document.getElementById('dv-canvas');
    const scaleText = document.getElementById('dv-scale-text');

    const updateTransform = () => {
      if (canvas) {
        canvas.style.transform = `translate(${this.pan.x}px, ${this.pan.y}px) scale(${this.scale})`;
      }
      if (scaleText) {
        scaleText.textContent = `${Math.round(this.scale * 100)}%`;
      }
    };

    // Zoom Buttons
    document.getElementById('btn-dv-zoom-in')?.addEventListener('click', () => {
      this.scale = Math.min(3.0, this.scale + 0.25);
      sound.playCaliperClick();
      updateTransform();
    });

    document.getElementById('btn-dv-zoom-out')?.addEventListener('click', () => {
      this.scale = Math.max(0.5, this.scale - 0.25);
      sound.playCaliperClick();
      updateTransform();
    });

    document.getElementById('btn-dv-reset')?.addEventListener('click', () => {
      this.scale = 1.0;
      this.pan = { x: 0, y: 0 };
      sound.playPencilScratch();
      updateTransform();
    });

    // Mouse Pan
    vp?.addEventListener('mousedown', (e) => {
      this.isPanning = true;
      this.startPan = { x: e.clientX - this.pan.x, y: e.clientY - this.pan.y };
    });

    window.addEventListener('mouseup', () => {
      this.isPanning = false;
    });

    vp?.addEventListener('mousemove', (e) => {
      if (!this.isPanning) return;
      this.pan.x = e.clientX - this.startPan.x;
      this.pan.y = e.clientY - this.startPan.y;
      updateTransform();
    });

    // Mouse Wheel Zoom
    vp?.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.15 : 0.88;
      this.scale = Math.max(0.4, Math.min(3.5, this.scale * zoomFactor));
      updateTransform();
    }, { passive: false });
  }

  // DRAWING 01: Precast Frame Structural Section 1:50
  getSectionSvg() {
    return `
      <svg viewBox="0 0 900 480" width="860" height="460" xmlns="http://www.w3.org/2000/svg" class="select-none pointer-events-none">
        <!-- Blueprint Grid -->
        <defs>
          <pattern id="sGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="20" y2="0" stroke="#C9E9FC" stroke-width="0.5" />
            <line x1="0" y1="0" x2="0" y2="20" stroke="#C9E9FC" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect width="900" height="480" fill="url(#sGrid)" />

        <!-- Column Left (Precast 500x500) -->
        <rect x="80" y="40" width="100" height="400" fill="#E5F4FF" stroke="#173C5B" stroke-width="2.5" />
        <!-- Corbel Left -->
        <polygon points="180,240 250,240 250,290 180,340" fill="#C9E9FC" stroke="#173C5B" stroke-width="2" />
        <line x1="190" y1="240" x2="240" y2="240" stroke="#399DD6" stroke-width="4" stroke-linecap="round" />
        <!-- Neoprene Bearing Pad -->
        <rect x="200" y="235" width="40" height="5" fill="#14212D" />

        <!-- Inverted-T Precast Beam -->
        <path d="M 235,160 L 235,320 L 315,320 L 315,240 L 415,240 L 415,320 L 495,320 L 495,160 Z" fill="#E5F4FF" stroke="#173C5B" stroke-width="2.5" />
        
        <!-- Left Hollow-Core Slab resting on Inverted-T Ledge -->
        <rect x="180" y="160" width="130" height="75" fill="#FFFFFF" stroke="#173C5B" stroke-width="2" />
        <!-- Longitudinal Core Voids -->
        <circle cx="210" cy="197" r="16" fill="#F7FBFF" stroke="#399DD6" stroke-width="1.5" />
        <circle cx="255" cy="197" r="16" fill="#F7FBFF" stroke="#399DD6" stroke-width="1.5" />

        <!-- Right Hollow-Core Slab resting on Ledge -->
        <rect x="420" y="160" width="280" height="75" fill="#FFFFFF" stroke="#173C5B" stroke-width="2" />
        <!-- Core Voids -->
        <circle cx="460" cy="197" r="16" fill="#F7FBFF" stroke="#399DD6" stroke-width="1.5" />
        <circle cx="510" cy="197" r="16" fill="#F7FBFF" stroke="#399DD6" stroke-width="1.5" />
        <circle cx="560" cy="197" r="16" fill="#F7FBFF" stroke="#399DD6" stroke-width="1.5" />
        <circle cx="610" cy="197" r="16" fill="#F7FBFF" stroke="#399DD6" stroke-width="1.5" />

        <!-- Cast-In-Place Concrete Topping (50mm with Mesh) -->
        <rect x="180" y="145" width="520" height="15" fill="#C9E9FC" stroke="#399DD6" stroke-width="1.5" stroke-dasharray="3,2" />

        <!-- Column Right -->
        <rect x="720" y="40" width="100" height="400" fill="#E5F4FF" stroke="#173C5B" stroke-width="2.5" />
        <!-- Corbel Right -->
        <polygon points="720,240 650,240 650,290 720,340" fill="#C9E9FC" stroke="#173C5B" stroke-width="2" />

        <!-- Dimension Lines & Annotations -->
        <g stroke="#173C5B" stroke-width="1">
          <!-- Bearing length annotation -->
          <line x1="200" y1="260" x2="240" y2="260" />
          <line x1="200" y1="255" x2="200" y2="265" />
          <line x1="240" y1="255" x2="240" y2="265" />
          <text x="220" y="278" font-family="'Fira Code', monospace" font-size="10" font-weight="bold" fill="#173C5B" text-anchor="middle">90 mm BEARING</text>

          <!-- Hollow-Core Depth -->
          <line x1="708" y1="160" x2="708" y2="235" />
          <text x="714" y="202" font-family="'Fira Code', monospace" font-size="10" font-weight="bold" fill="#399DD6">HC 250</text>
          
          <!-- Callout pointer -->
          <line x1="365" y1="220" x2="365" y2="90" stroke="#E5A93C" stroke-width="1.5" />
          <circle cx="365" cy="220" r="3" fill="#E5A93C" />
          <text x="365" y="80" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" fill="#173C5B" text-anchor="middle">PRECAST INVERTED-T LEDGE BEAM (IT-600)</text>

          <text x="560" y="135" font-family="'Fira Code', monospace" font-size="10" font-weight="bold" fill="#173C5B">50mm STRUCTURAL TOPPING + A142 MESH</text>
        </g>
      </svg>
    `;
  }

  // DRAWING 02: Modular Framing Plan
  getPlanSvg() {
    return `
      <svg viewBox="0 0 900 480" width="860" height="460" xmlns="http://www.w3.org/2000/svg" class="select-none pointer-events-none">
        <rect width="900" height="480" fill="#F7FBFF" />
        
        <!-- Grid Bubbles & Lines -->
        <g stroke="#399DD6" stroke-width="1" stroke-dasharray="6,4">
          <!-- Vertical Grids -->
          <line x1="140" y1="40" x2="140" y2="440" />
          <line x1="380" y1="40" x2="380" y2="440" />
          <line x1="620" y1="40" x2="620" y2="440" />
          <line x1="780" y1="40" x2="780" y2="440" />

          <!-- Horizontal Grids -->
          <line x1="80" y1="120" x2="840" y2="120" />
          <line x1="80" y1="360" x2="840" y2="360" />
        </g>

        <!-- Grid Markers -->
        <g fill="#FFFFFF" stroke="#173C5B" stroke-width="1.5" font-family="'Fira Code', monospace" font-size="12" font-weight="bold" text-anchor="middle">
          <circle cx="140" cy="30" r="14" /><text x="140" y="34">1</text>
          <circle cx="380" cy="30" r="14" /><text x="380" y="34">2</text>
          <circle cx="620" cy="30" r="14" /><text x="620" y="34">3</text>
          <circle cx="780" cy="30" r="14" /><text x="780" y="34">4</text>

          <circle cx="65" cy="120" r="14" /><text x="65" y="124">A</text>
          <circle cx="65" cy="360" r="14" /><text x="65" y="364">B</text>
        </g>

        <!-- Precast Columns at Grid Intersections -->
        <g fill="#173C5B">
          <rect x="125" y="105" width="30" height="30" />
          <rect x="365" y="105" width="30" height="30" />
          <rect x="605" y="105" width="30" height="30" />
          <rect x="765" y="105" width="30" height="30" />

          <rect x="125" y="345" width="30" height="30" />
          <rect x="365" y="345" width="30" height="30" />
          <rect x="605" y="345" width="30" height="30" />
          <rect x="765" y="345" width="30" height="30" />
        </g>

        <!-- Inverted-T Ledge Beams along Grid A & B -->
        <rect x="140" y="112" width="640" height="16" fill="#8CCDF2" stroke="#173C5B" stroke-width="1.5" />
        <rect x="140" y="352" width="640" height="16" fill="#8CCDF2" stroke="#173C5B" stroke-width="1.5" />

        <!-- Hollow-Core Slabs laid across span (1200mm width planks) -->
        <g fill="#E5F4FF" stroke="#399DD6" stroke-width="1">
          <rect x="145" y="132" width="44" height="216" />
          <rect x="193" y="132" width="44" height="216" />
          <rect x="241" y="132" width="44" height="216" />
          <rect x="289" y="132" width="44" height="216" />
          <rect x="337" y="132" width="44" height="216" />

          <rect x="385" y="132" width="44" height="216" />
          <rect x="433" y="132" width="44" height="216" />
          <rect x="481" y="132" width="44" height="216" />
          <rect x="529" y="132" width="44" height="216" />
          <rect x="577" y="132" width="44" height="216" />

          <!-- Stair / Service Opening Core -->
          <rect x="625" y="132" width="150" height="216" fill="#C9E9FC" stroke="#173C5B" stroke-width="2" />
          <line x1="625" y1="132" x2="775" y2="348" stroke="#E5A93C" stroke-width="2" />
          <line x1="625" y1="348" x2="775" y2="132" stroke="#E5A93C" stroke-width="2" />
          <text x="700" y="245" font-family="'Fira Code', monospace" font-size="12" font-weight="bold" fill="#173C5B" text-anchor="middle">STAIR VOID</text>
        </g>

        <!-- Span Direction Arrows -->
        <g stroke="#173C5B" stroke-width="2" marker-end="url(#arrow)">
          <line x1="265" y1="180" x2="265" y2="300" />
          <line x1="505" y1="180" x2="505" y2="300" />
          <text x="275" y="245" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" fill="#173C5B">SPAN 7.2 m</text>
        </g>

        <!-- Piece Mark Callouts -->
        <rect x="180" y="225" width="68" height="22" fill="#FFFFFF" stroke="#173C5B" stroke-width="1" />
        <text x="214" y="240" font-family="'Fira Code', monospace" font-size="10" font-weight="bold" fill="#173C5B" text-anchor="middle">HC-1200-01</text>
      </svg>
    `;
  }

  // DRAWING 03: Precast Stair Recess
  getStairSvg() {
    return `
      <svg viewBox="0 0 900 480" width="860" height="460" xmlns="http://www.w3.org/2000/svg" class="select-none pointer-events-none">
        <rect width="900" height="480" fill="#F7FBFF" />
        
        <!-- Floor Landing Precast Slab with Pocket Recess -->
        <path d="M 60,80 L 320,80 L 320,180 L 250,180 L 250,260 L 60,260 Z" fill="#E5F4FF" stroke="#173C5B" stroke-width="2.5" />
        
        <!-- Elastomeric Bearing Strip in Pocket -->
        <rect x="250" y="175" width="60" height="6" fill="#14212D" />

        <!-- Inclined Stair Flight resting on the Landing Pocket -->
        <polygon points="260,165 390,165 390,205 450,205 450,245 510,245 510,285 570,285 570,325 630,325 630,365 720,365 720,440 590,440 210,200 210,165" fill="#FFFFFF" stroke="#173C5B" stroke-width="2.5" />

        <!-- Dowel Pin Connection -->
        <line x1="285" y1="130" x2="285" y2="215" stroke="#E5A93C" stroke-width="4" stroke-dasharray="8,4" />
        <circle cx="285" cy="175" r="5" fill="#E5A93C" />

        <!-- Dimension Strings -->
        <g stroke="#173C5B" stroke-width="1">
          <!-- Riser 170mm -->
          <line x1="450" y1="205" x2="450" y2="245" stroke="#399DD6" stroke-width="1.5" />
          <text x="465" y="230" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" fill="#399DD6">R = 170mm</text>

          <!-- Tread 280mm -->
          <line x1="390" y1="205" x2="450" y2="205" stroke="#399DD6" stroke-width="1.5" />
          <text x="420" y="195" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" fill="#399DD6" text-anchor="middle">T = 280mm</text>

          <!-- Callout Pin -->
          <line x1="285" y1="130" x2="360" y2="70" stroke="#173C5B" />
          <text x="370" y="70" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" fill="#173C5B">Ø20 SHEAR DOWEL IN GROUTED SLEEVE</text>

          <text x="140" y="160" font-family="'Fira Code', monospace" font-size="12" font-weight="bold" fill="#173C5B">LEVEL 02 LANDING RECESS</text>
        </g>
      </svg>
    `;
  }

  // DRAWING 04: Exploded Axonometric
  getAxonSvg() {
    return `
      <svg viewBox="0 0 900 480" width="860" height="460" xmlns="http://www.w3.org/2000/svg" class="select-none pointer-events-none">
        <rect width="900" height="480" fill="#F7FBFF" />
        
        <!-- 3D Isometric Precast Column Base -->
        <g stroke="#173C5B" stroke-width="2" fill="#E5F4FF">
          <!-- Column Shaft -->
          <polygon points="420,380 480,350 480,240 420,270" fill="#C9E9FC" />
          <polygon points="420,380 360,350 360,240 420,270" fill="#E5F4FF" />
          <polygon points="420,270 480,240 420,210 360,240" fill="#FFFFFF" />

          <!-- Corbel Ledge -->
          <polygon points="480,300 540,270 540,240 480,270" fill="#8CCDF2" />
          <polygon points="480,270 540,240 500,220 440,250" fill="#399DD6" />
        </g>

        <!-- Exploded Floating Inverted-T Beam -->
        <g stroke="#173C5B" stroke-width="2" fill="#FFFFFF" transform="translate(60, -90)">
          <polygon points="480,250 640,170 640,130 480,210" fill="#C9E9FC" />
          <polygon points="480,250 430,225 430,185 480,210" fill="#E5F4FF" />
          <polygon points="480,210 640,130 590,105 430,185" fill="#FFFFFF" />
          <text x="560" y="150" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" fill="#173C5B">INVERTED-T LEDGE</text>
        </g>

        <!-- Exploded Hollow-Core Slab Planks -->
        <g stroke="#399DD6" stroke-width="1.5" fill="#F7FBFF" transform="translate(-40, -180)">
          <polygon points="360,220 520,140 520,110 360,190" fill="#E5F4FF" />
          <polygon points="360,190 520,110 470,85 310,165" fill="#FFFFFF" />
          <circle cx="380" cy="180" r="8" fill="#C9E9FC" />
          <circle cx="410" cy="165" r="8" fill="#C9E9FC" />
          <text x="350" y="125" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" fill="#399DD6">HOLLOW-CORE SLAB (HC-250)</text>
        </g>

        <!-- Assembly Exploded Guide Vectors -->
        <g stroke="#E5A93C" stroke-width="1.5" stroke-dasharray="4,4">
          <line x1="500" y1="240" x2="560" y2="150" />
          <line x1="420" y1="210" x2="380" y2="30" />
        </g>
      </svg>
    `;
  }
}
