// ==========================================================================
// ARCHITECTURAL DRAWING VIEWER // THE BLUEPRINT UNIVERSE
// Genuine Interactive Drawing Workstation with Plan, Section, Elevation & 3D Isometric View
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
    this.is3DIsometric = false;

    // Layer Visibility
    this.layers = {
      dimensions: true,
      grid: true,
      rebar: true,
      annotations: true
    };

    this.drawings = {
      'section-precast': {
        title: "STRUCTURAL SECTION 1:50 — HOLLOW-CORE HC-250 ON INVERTED-T BEAM",
        ref: "DWG-S01 // EUROCODE 2 & PCI 8TH ED.",
        scaleLabel: "SCALE 1:50 @ A2",
        type: "section",
        svg: this.getSectionSvg()
      },
      'framing-plan': {
        title: "MODULAR FRAMING PLAN 1:100 — 9.0m × 6.0m PRECAST GRID",
        ref: "DWG-S02 // LEVEL 02 STRUCTURAL",
        scaleLabel: "SCALE 1:100 @ A2",
        type: "plan",
        svg: this.getPlanSvg()
      },
      'elevation-corbel': {
        title: "PRECAST COLUMN CORBEL ELEVATION 1:50 — BEARING GEOMETRY",
        ref: "DWG-E03 // COLUMN GRID LINE B",
        scaleLabel: "SCALE 1:50 @ A2",
        type: "elevation",
        svg: this.getElevationSvg()
      },
      'stair-detail': {
        title: "PRECAST STAIR FLIGHT & LANDING RECESS DETAIL 1:25",
        ref: "DWG-D04 // CIRCULATION CORE",
        scaleLabel: "SCALE 1:25 @ A2",
        type: "detail",
        svg: this.getStairSvg()
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
      <div id="dv-main-frame" class="drawing-viewer-frame border-4 border-crimson bg-ink-deep rounded relative overflow-hidden shadow-crimson-lg flex flex-col h-[620px]">
        
        <!-- Top Drawing Toolbar -->
        <div class="viewer-toolbar bg-ink-slate border-b-2 border-crimson px-4 py-3 flex flex-wrap items-center justify-between gap-3 z-10 font-body text-xs">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-crimson inline-block animate-ping"></span>
            <span class="font-mono font-black text-white uppercase tracking-wider">${d.ref}</span>
            <span class="text-crimson hidden sm:inline">•</span>
            <span class="font-editorial text-sky font-bold hidden sm:inline tracking-tight">${d.title}</span>
          </div>

          <!-- Controls: Zoom, Pan, 3D Morph & Fullscreen -->
          <div class="flex items-center gap-2">
            <button id="btn-dv-zoom-in" class="manga-btn px-2.5 py-1 bg-ink-deep text-white border border-azure rounded hover:bg-azure hover:text-ink-deep font-bold" title="Zoom In">+</button>
            <span id="dv-scale-text" class="px-2 py-1 text-[11px] font-mono font-bold text-white bg-ink-deep rounded border border-ink-slate">${Math.round(this.scale * 100)}%</span>
            <button id="btn-dv-zoom-out" class="manga-btn px-2.5 py-1 bg-ink-deep text-white border border-azure rounded hover:bg-azure hover:text-ink-deep font-bold" title="Zoom Out">-</button>
            <button id="btn-dv-reset" class="manga-btn px-3 py-1 bg-ink-deep text-neutral-300 border border-neutral-600 rounded text-[11px] font-bold hover:text-white" title="Reset View">RESET</button>
            <button id="btn-dv-3d" class="manga-btn px-3 py-1 ${this.is3DIsometric ? 'bg-crimson text-white' : 'bg-ink-deep text-sky border-azure'} rounded text-[11px] font-bold" title="3D Isometric Mode">
              ${this.is3DIsometric ? '⚡ 3D ISOMETRIC: ON' : '📐 3D ISOMETRIC'}
            </button>
          </div>
        </div>

        <!-- Layer Toggles Strip -->
        <div class="bg-ink-deep border-b border-crimson/40 px-4 py-1.5 flex flex-wrap items-center justify-between gap-2 z-10 font-editorial text-[11px]">
          <div class="flex items-center gap-2">
            <span class="font-mono text-neutral-400 font-bold">LAYERS:</span>
            <button class="dv-layer-btn px-2 py-0.5 rounded border border-crimson font-bold ${this.layers.dimensions ? 'bg-crimson text-white' : 'bg-ink-slate text-neutral-400'}" data-layer="dimensions">DIMENSIONS (90mm)</button>
            <button class="dv-layer-btn px-2 py-0.5 rounded border border-azure font-bold ${this.layers.grid ? 'bg-azure text-ink-deep' : 'bg-ink-slate text-neutral-400'}" data-layer="grid">AXIS GRID</button>
            <button class="dv-layer-btn px-2 py-0.5 rounded border border-gold font-bold ${this.layers.rebar ? 'bg-gold text-ink-deep' : 'bg-ink-slate text-neutral-400'}" data-layer="rebar">REBAR & MESH</button>
            <button class="dv-layer-btn px-2 py-0.5 rounded border border-white font-bold ${this.layers.annotations ? 'bg-white text-ink-deep' : 'bg-ink-slate text-neutral-400'}" data-layer="annotations">ANNOTATIONS</button>
          </div>
          <div class="font-body text-neutral-400 font-medium hidden md:inline">
            🖱️ DRAG TO PAN • SCROLL WHEEL TO ZOOM
          </div>
        </div>

        <!-- Interactive Vector Drawing Canvas -->
        <div id="dv-viewport" class="flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing bg-[#0d151c] select-none">
          <div id="dv-canvas" class="w-full h-full flex items-center justify-center transition-transform duration-75 origin-center" style="transform: translate(${this.pan.x}px, ${this.pan.y}px) scale(${this.scale}) ${this.is3DIsometric ? 'rotateX(55deg) rotateZ(-40deg) skewX(-10deg)' : ''};">
            ${d.svg}
          </div>

          <!-- Technical Grid Watermark -->
          <div class="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#399dd6_1px,transparent_1px),linear-gradient(to_bottom,#399dd6_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <!-- Floating Scale & Compass Tag -->
          <div class="absolute bottom-3 right-3 pointer-events-none bg-ink-deep/90 border border-crimson px-3 py-1.5 rounded font-mono text-[11px] text-white shadow-brutal-sm">
            <span>PCI 8TH ED. & EN 1992-1-1</span> • <span class="text-crimson font-black">VERIFIED NOMINAL</span>
          </div>
        </div>

        <!-- Bottom Selector Tabs: Plan, Section, Elevation & Detail -->
        <div class="bg-ink-slate border-t-2 border-crimson px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3 z-10 font-body text-xs">
          <div class="flex flex-wrap items-center gap-2 font-editorial">
            <button class="dv-tab-btn manga-btn px-3 py-1.5 rounded text-[11px] font-bold ${this.currentDrawing === 'section-precast' ? 'manga-btn-crimson' : 'bg-ink-deep text-white border-azure'}" data-drawing="section-precast">1. SECTION 1:50</button>
            <button class="dv-tab-btn manga-btn px-3 py-1.5 rounded text-[11px] font-bold ${this.currentDrawing === 'framing-plan' ? 'manga-btn-crimson' : 'bg-ink-deep text-white border-azure'}" data-drawing="framing-plan">2. FRAMING PLAN 1:100</button>
            <button class="dv-tab-btn manga-btn px-3 py-1.5 rounded text-[11px] font-bold ${this.currentDrawing === 'elevation-corbel' ? 'manga-btn-crimson' : 'bg-ink-deep text-white border-azure'}" data-drawing="elevation-corbel">3. CORBEL ELEVATION 1:50</button>
            <button class="dv-tab-btn manga-btn px-3 py-1.5 rounded text-[11px] font-bold ${this.currentDrawing === 'stair-detail' ? 'manga-btn-crimson' : 'bg-ink-deep text-white border-azure'}" data-drawing="stair-detail">4. STAIR RECESS 1:25</button>
          </div>

          <div class="text-[11px] text-neutral-300 font-mono flex items-center gap-3">
            <span>${d.scaleLabel}</span>
            <span class="text-crimson font-black">● LIVE AUDIT ACTIVE</span>
          </div>
        </div>

      </div>
    `;
  }

  attachEvents() {
    const viewport = document.getElementById('dv-viewport');
    const canvas = document.getElementById('dv-canvas');
    const scaleText = document.getElementById('dv-scale-text');

    const updateTransform = () => {
      if (canvas) {
        canvas.style.transform = `translate(${this.pan.x}px, ${this.pan.y}px) scale(${this.scale}) ${this.is3DIsometric ? 'rotateX(55deg) rotateZ(-40deg) skewX(-10deg)' : ''}`;
      }
      if (scaleText) {
        scaleText.textContent = `${Math.round(this.scale * 100)}%`;
      }
    };

    // Pan (Mouse Drag)
    viewport?.addEventListener('mousedown', (e) => {
      this.isPanning = true;
      this.startPan = { x: e.clientX - this.pan.x, y: e.clientY - this.pan.y };
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isPanning) return;
      this.pan.x = e.clientX - this.startPan.x;
      this.pan.y = e.clientY - this.startPan.y;
      updateTransform();
    });

    window.addEventListener('mouseup', () => {
      this.isPanning = false;
    });

    // Zoom (Mouse Wheel)
    viewport?.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.12 : -0.12;
      this.scale = Math.max(0.4, Math.min(3.2, this.scale + delta));
      sound.playCaliperClick();
      updateTransform();
    }, { passive: false });

    // Zoom Buttons
    document.getElementById('btn-dv-zoom-in')?.addEventListener('click', () => {
      this.scale = Math.min(3.2, this.scale + 0.2);
      sound.playCaliperClick();
      updateTransform();
    });

    document.getElementById('btn-dv-zoom-out')?.addEventListener('click', () => {
      this.scale = Math.max(0.4, this.scale - 0.2);
      sound.playCaliperClick();
      updateTransform();
    });

    document.getElementById('btn-dv-reset')?.addEventListener('click', () => {
      this.scale = 1.0;
      this.pan = { x: 0, y: 0 };
      this.is3DIsometric = false;
      sound.playBlueprintUnfold();
      updateTransform();
      const btn3D = document.getElementById('btn-dv-3d');
      if (btn3D) {
        btn3D.className = 'manga-btn px-3 py-1 bg-ink-deep text-sky border-azure rounded text-[11px] font-bold';
        btn3D.innerHTML = '📐 3D ISOMETRIC';
      }
    });

    // 3D Isometric Toggle
    document.getElementById('btn-dv-3d')?.addEventListener('click', () => {
      this.is3DIsometric = !this.is3DIsometric;
      sound.playStructuralClack();
      updateTransform();
      const btn3D = document.getElementById('btn-dv-3d');
      if (btn3D) {
        btn3D.className = this.is3DIsometric ? 'manga-btn manga-btn-crimson px-3 py-1 rounded text-[11px] font-bold' : 'manga-btn px-3 py-1 bg-ink-deep text-sky border-azure rounded text-[11px] font-bold';
        btn3D.innerHTML = this.is3DIsometric ? '⚡ 3D ISOMETRIC: ON' : '📐 3D ISOMETRIC';
      }
    });

    // Drawing Tab Switcher
    document.querySelectorAll('.dv-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetDwg = btn.getAttribute('data-drawing');
        if (targetDwg && this.drawings[targetDwg]) {
          this.currentDrawing = targetDwg;
          sound.playBlueprintUnfold();
          this.render();
          this.attachEvents();
        }
      });
    });

    // Layer Visibility Buttons
    document.querySelectorAll('.dv-layer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const layerKey = btn.getAttribute('data-layer');
        if (layerKey && layerKey in this.layers) {
          this.layers[layerKey] = !this.layers[layerKey];
          sound.playPencilScratch();
          this.updateLayerStyles();
        }
      });
    });
  }

  updateLayerStyles() {
    document.querySelectorAll('.dv-layer-btn').forEach(btn => {
      const key = btn.getAttribute('data-layer');
      if (key) {
        const isActive = this.layers[key];
        btn.classList.toggle('opacity-50', !isActive);
        btn.classList.toggle('line-through', !isActive);
      }
    });

    // Toggle SVG element classes
    const canvas = document.getElementById('dv-canvas');
    if (canvas) {
      canvas.querySelectorAll('.layer-dimensions').forEach(el => el.style.display = this.layers.dimensions ? 'block' : 'none');
      canvas.querySelectorAll('.layer-grid').forEach(el => el.style.display = this.layers.grid ? 'block' : 'none');
      canvas.querySelectorAll('.layer-rebar').forEach(el => el.style.display = this.layers.rebar ? 'block' : 'none');
      canvas.querySelectorAll('.layer-annotations').forEach(el => el.style.display = this.layers.annotations ? 'block' : 'none');
    }
  }

  // 1. Structural Section 1:50
  getSectionSvg() {
    return `
      <svg viewBox="0 0 920 540" width="880" height="500" class="vector-drawing">
        <!-- Axis Line -->
        <g class="layer-grid" stroke="#399DD6" stroke-width="1.5" stroke-dasharray="6,4">
          <line x1="460" y1="40" x2="460" y2="480" />
          <circle cx="460" cy="30" r="14" fill="#09090B" stroke="#399DD6" stroke-width="2" />
          <text x="460" y="35" fill="#399DD6" font-family="'Fira Code', monospace" font-size="12" font-weight="bold" text-anchor="middle">CL</text>
        </g>

        <!-- Inverted-T Precast Beam -->
        <path d="M 220 380 L 360 380 L 360 210 L 560 210 L 560 380 L 700 380 L 700 460 L 220 460 Z" fill="#173C5B" stroke="#399DD6" stroke-width="3" />
        <text x="460" y="320" fill="#FFFFFF" font-family="'Fira Code', monospace" font-size="14" font-weight="bold" text-anchor="middle">INVERTED-T PRECAST BEAM</text>
        <text x="460" y="342" fill="#8CCDF2" font-family="'Fira Code', monospace" font-size="11" text-anchor="middle">STEM: 200mm | TOTAL DEPTH: 600mm</text>

        <!-- Neoprene Bearing Pads (10mm thick) -->
        <rect x="235" y="370" width="105" height="10" fill="#FF2233" stroke="#FFFFFF" stroke-width="1.5" />
        <rect x="580" y="370" width="105" height="10" fill="#FF2233" stroke="#FFFFFF" stroke-width="1.5" />

        <!-- Left Hollow-Core Slab HC-250 -->
        <rect x="110" y="245" width="230" height="125" fill="#F7FBFF" stroke="#09090B" stroke-width="3" />
        <!-- Hollow Cores -->
        <circle cx="160" cy="308" r="28" fill="#09090B" />
        <circle cx="230" cy="308" r="28" fill="#09090B" />
        <circle cx="300" cy="308" r="28" fill="#09090B" />

        <!-- Right Hollow-Core Slab HC-250 -->
        <rect x="580" y="245" width="230" height="125" fill="#F7FBFF" stroke="#09090B" stroke-width="3" />
        <circle cx="620" cy="308" r="28" fill="#09090B" />
        <circle cx="690" cy="308" r="28" fill="#09090B" />
        <circle cx="760" cy="308" r="28" fill="#09090B" />

        <!-- 50mm Structural Topping Slab -->
        <rect x="110" y="220" width="700" height="25" fill="#C9E9FC" opacity="0.8" stroke="#399DD6" stroke-width="2" />
        
        <!-- Rebar Mesh Layer -->
        <g class="layer-rebar" stroke="#E5A93C" stroke-width="2">
          <line x1="120" y1="232" x2="800" y2="232" stroke-dasharray="8,4" />
          <line x1="330" y1="232" x2="330" y2="390" />
          <line x1="590" y1="232" x2="590" y2="390" />
        </g>

        <!-- Dimensions Layer: 90mm Nominal Bearing -->
        <g class="layer-dimensions" stroke="#FF2233" stroke-width="2">
          <!-- Bearing dimension left -->
          <line x1="250" y1="180" x2="340" y2="180" />
          <line x1="250" y1="175" x2="250" y2="370" stroke-dasharray="2,2" />
          <line x1="340" y1="175" x2="340" y2="370" stroke-dasharray="2,2" />
          <text x="295" y="170" fill="#FF2233" font-family="'Fira Code', monospace" font-size="12" font-weight="900" text-anchor="middle">b_nom = 90mm</text>

          <!-- Total depth dimension -->
          <line x1="830" y1="220" x2="830" y2="460" />
          <text x="850" y="345" fill="#FF2233" font-family="'Fira Code', monospace" font-size="11" font-weight="bold">DEPTH: 600mm</text>
        </g>

        <!-- Annotations Layer -->
        <g class="layer-annotations" font-family="'Fira Code', monospace" font-size="11" fill="#FFFFFF">
          <text x="120" y="205" fill="#8CCDF2">50mm STRUCTURAL TOPPING + A142 MESH</text>
          <text x="120" y="395" fill="#E5A93C">HC-250 PRECAST HOLLOW-CORE SLAB</text>
          <text x="580" y="415" fill="#FF2233">10mm ELASTOMERIC NEOPRENE STRIP</text>
        </g>
      </svg>
    `;
  }

  // 2. Framing Plan 1:100
  getPlanSvg() {
    return `
      <svg viewBox="0 0 920 540" width="880" height="500" class="vector-drawing">
        <!-- Structural Column Grids (9.0m x 6.0m) -->
        <g class="layer-grid" stroke="#399DD6" stroke-width="1.5">
          <!-- Horizontal grid lines A, B, C -->
          <line x1="80" y1="120" x2="840" y2="120" stroke-dasharray="6,4" />
          <line x1="80" y1="270" x2="840" y2="270" stroke-dasharray="6,4" />
          <line x1="80" y1="420" x2="840" y2="420" stroke-dasharray="6,4" />

          <!-- Vertical grid lines 1, 2, 3, 4 -->
          <line x1="160" y1="60" x2="160" y2="480" stroke-dasharray="6,4" />
          <line x1="380" y1="60" x2="380" y2="480" stroke-dasharray="6,4" />
          <line x1="600" y1="60" x2="600" y2="480" stroke-dasharray="6,4" />
          <line x1="820" y1="60" x2="820" y2="480" stroke-dasharray="6,4" />

          <!-- Grid Bubbles -->
          <circle cx="160" cy="50" r="14" fill="#173C5B" stroke="#399DD6" /><text x="160" y="55" fill="#FFFFFF" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" text-anchor="middle">1</text>
          <circle cx="380" cy="50" r="14" fill="#173C5B" stroke="#399DD6" /><text x="380" y="55" fill="#FFFFFF" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" text-anchor="middle">2</text>
          <circle cx="600" cy="50" r="14" fill="#173C5B" stroke="#399DD6" /><text x="600" y="55" fill="#FFFFFF" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" text-anchor="middle">3</text>
          <circle cx="820" cy="50" r="14" fill="#173C5B" stroke="#399DD6" /><text x="820" y="55" fill="#FFFFFF" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" text-anchor="middle">4</text>
        </g>

        <!-- Precast Columns at Grid Intersections -->
        <g fill="#09090B" stroke="#FF2233" stroke-width="2">
          <rect x="145" y="105" width="30" height="30" /><rect x="365" y="105" width="30" height="30" />
          <rect x="585" y="105" width="30" height="30" /><rect x="805" y="105" width="30" height="30" />
          <rect x="145" y="255" width="30" height="30" /><rect x="365" y="255" width="30" height="30" />
          <rect x="585" y="255" width="30" height="30" /><rect x="805" y="255" width="30" height="30" />
        </g>

        <!-- Hollow-Core Planks Laid Across Bays -->
        <g fill="#173C5B" stroke="#399DD6" stroke-width="1.5" opacity="0.8">
          <rect x="180" y="125" width="195" height="28" /><rect x="180" y="157" width="195" height="28" />
          <rect x="180" y="189" width="195" height="28" /><rect x="180" y="221" width="195" height="28" />
          <rect x="400" y="125" width="195" height="28" /><rect x="400" y="157" width="195" height="28" />
          <rect x="400" y="189" width="195" height="28" /><rect x="400" y="221" width="195" height="28" />
        </g>

        <!-- Span Direction Arrows -->
        <g stroke="#FF2233" stroke-width="2.5" fill="none">
          <line x1="280" y1="140" x2="280" y2="235" />
          <polygon points="275,145 280,135 285,145" fill="#FF2233" />
          <polygon points="275,230 280,240 285,230" fill="#FF2233" />
        </g>

        <!-- Dimension Strings -->
        <g class="layer-dimensions" stroke="#FF2233" stroke-width="1.8" font-family="'Fira Code', monospace" font-size="11" fill="#FF2233">
          <line x1="160" y1="495" x2="380" y2="495" /><text x="270" y="515" text-anchor="middle" font-weight="bold">BAY: 9000 mm</text>
          <line x1="380" y1="495" x2="600" y2="495" /><text x="490" y="515" text-anchor="middle" font-weight="bold">BAY: 9000 mm</text>
          <line x1="50" y1="120" x2="50" y2="270" /><text x="40" y="200" text-anchor="middle" font-weight="bold" transform="rotate(-90 40 200)">6000 mm</text>
        </g>
      </svg>
    `;
  }

  // 3. Precast Column Corbel Elevation 1:50
  getElevationSvg() {
    return `
      <svg viewBox="0 0 920 540" width="880" height="500" class="vector-drawing">
        <!-- Precast Column Shaft -->
        <rect x="410" y="60" width="100" height="420" fill="#14212D" stroke="#399DD6" stroke-width="3" />
        
        <!-- Left Corbel Bracket -->
        <polygon points="410,240 310,280 310,340 410,340" fill="#173C5B" stroke="#FF2233" stroke-width="3" />
        <!-- Right Corbel Bracket -->
        <polygon points="510,240 610,280 610,340 510,340" fill="#173C5B" stroke="#FF2233" stroke-width="3" />

        <!-- Corbel Closed Loop Stirrups (Hanger Rebar) -->
        <g class="layer-rebar" stroke="#E5A93C" stroke-width="2.5" fill="none">
          <line x1="330" y1="300" x2="400" y2="300" />
          <line x1="330" y1="320" x2="400" y2="320" />
          <line x1="520" y1="300" x2="590" y2="300" />
          <line x1="520" y1="320" x2="590" y2="320" />
        </g>

        <!-- Neoprene Bearing Pads on Corbel Seat -->
        <rect x="320" y="272" width="80" height="8" fill="#FF2233" stroke="#FFFFFF" />
        <rect x="520" y="272" width="80" height="8" fill="#FF2233" stroke="#FFFFFF" />

        <!-- Dimensions -->
        <g class="layer-dimensions" stroke="#FF2233" stroke-width="1.8" font-family="'Fira Code', monospace" font-size="11" fill="#FF2233">
          <line x1="310" y1="365" x2="410" y2="365" /><text x="360" y="385" text-anchor="middle" font-weight="bold">CORBEL: 300mm</text>
          <line x1="410" y1="35" x2="510" y2="35" /><text x="460" y="25" text-anchor="middle" font-weight="bold">COL: 500mm</text>
        </g>

        <!-- Annotations -->
        <g class="layer-annotations" font-family="'Fira Code', monospace" font-size="11" fill="#FFFFFF">
          <text x="180" y="260" fill="#FF2233">BEARING SEAT (NEOPRENE PAD)</text>
          <text x="180" y="325" fill="#E5A93C">CLOSED LOOP HANGER TIES</text>
          <text x="630" y="310" fill="#8CCDF2">45° COMPRESSION STRUT (STM)</text>
        </g>
      </svg>
    `;
  }

  // 4. Precast Stair Flight & Landing Detail 1:25
  getStairSvg() {
    return `
      <svg viewBox="0 0 920 540" width="880" height="500" class="vector-drawing">
        <!-- Landing Slab with Recess Pocket -->
        <path d="M 80 180 L 320 180 L 320 260 L 440 260 L 440 380 L 80 380 Z" fill="#14212D" stroke="#399DD6" stroke-width="3" />
        
        <!-- Precast Stair Flight Nib (Rebated Tooth Resting on Pocket) -->
        <path d="M 410 240 L 410 180 L 780 440 L 680 440 L 340 240 Z" fill="#F7FBFF" stroke="#09090B" stroke-width="3" />

        <!-- Acoustic Neoprene Isolation Strip (10mm) in Nib Recess -->
        <path d="M 325 245 L 325 255 L 420 255" fill="none" stroke="#FF2233" stroke-width="4" />

        <!-- Stair Steps Treads & Risers -->
        <g stroke="#09090B" stroke-width="2.5" fill="#E5F4FF">
          <path d="M 410 180 L 470 180 L 470 230 L 530 230 L 530 280 L 590 280 L 590 330 L 650 330 L 650 380 L 710 380 L 710 430" />
        </g>

        <!-- Dimensions -->
        <g class="layer-dimensions" stroke="#FF2233" stroke-width="1.8" font-family="'Fira Code', monospace" font-size="11" fill="#FF2233">
          <line x1="320" y1="280" x2="420" y2="280" /><text x="370" y="300" text-anchor="middle" font-weight="bold">RECESS: 100mm</text>
          <line x1="470" y1="160" x2="530" y2="160" /><text x="500" y="150" text-anchor="middle" font-weight="bold">GO: 280mm</text>
        </g>

        <!-- Annotations -->
        <g class="layer-annotations" font-family="'Fira Code', monospace" font-size="11" fill="#FFFFFF">
          <text x="80" y="150" fill="#399DD6">PRECAST CONCRETE LANDING SLAB</text>
          <text x="300" y="340" fill="#FF2233">ACOUSTIC ELASTOMERIC PAD (IMPACT SOUND ISO)</text>
          <text x="560" y="160" fill="#E5A93C">TREAD: 280mm | RISER: 175mm</text>
        </g>
      </svg>
    `;
  }
}
