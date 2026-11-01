// ==========================================================================
// VERIFIED PROJECT DATA // THE BLUEPRINT UNIVERSE
// Real technical metrics, architectural calculations & verified repository data
// ==========================================================================

export const projectsData = [
  {
    id: "precast-bim",
    title: "PRECAST BIM & COMPUTATIONAL STRUCTURAL SUITE",
    subtitle: "Revit API Automation • Hollow-Core Slab Layouts • Structural Corbels",
    category: "ARCHITECTURE & BIM",
    badge: "ENGINEERING SUITE",
    status: "DOCUMENTED CAPABILITY",
    tools: ["Autodesk Revit API", "pyRevit", "Python", "PCI Design Manual", "Eurocode 2"],
    highlight: "Algorithmic placement of precast floor systems, inverted-T ledge beams, and corbel calculations inside strict Revit API Transactions.",
    metrics: [
      { label: "STANDARD", value: "PCI / EN 1992" },
      { label: "ELEMENT TRACKING", value: "100% Unique Marks" },
      { label: "UNIT CONVERSION", value: "304.8 mm/ft" },
      { label: "AUTOMATION", value: "Revit Transactions" }
    ],
    chapters: {
      ch1_idea: "In conventional architectural-structural coordination, modeling hundreds of precast hollow-core slabs, inverted-T beams, and beam-to-column corbels is labor-intensive and prone to bearing-length errors. The idea was to create an automated computational bridge in Revit that calculates bearings and places parametric elements algorithmically.",
      ch2_challenge: "Precast elements require strict bearing minimums (typically 75mm on masonry, 60mm on steel, 90mm on concrete ledges). Web integrity must be preserved when transverse slab cuts occur, and all geometry modifications must run inside verified database Transactions without corrupting model worksets.",
      ch3_blueprint: "Architectural floor loops and column grids are extracted as boundary vectors. The algorithm determines optimal span directions, divides floor envelopes into modular 1200mm hollow-core widths, and generates bearing ledges on supporting inverted-T and L-shaped beams.",
      ch4_engineering: "Implemented verified structural calculations for inverted-T beam ledges based on PCI Handbook equations (punching shear, cantilever bending, hanger steel tension) and corbel shear-friction under vertical and horizontal restrained creep forces.",
      ch5_build: "Built using Python and pyRevit against the Autodesk Revit API. The script iterates boundary curves, instantiates structural framing and floor families, binds shared parameters for piece marks, and checks clash clearances.",
      ch6_result: "Dramatically reduces modeling time from hours to seconds for multi-story precast frame assemblies, guarantees code-compliant ledge bearing widths, and produces automated shop drawing schedules with piece mark IDs.",
      ch7_next: "theory-of-structures"
    }
  },
  {
    id: "theory-of-structures",
    title: "THEORY OF STRUCTURES MASTERY LAB",
    subtitle: "Interactive Structural Analysis & Determinacy Engine",
    category: "COMPUTATIONAL ENGINEERING",
    badge: "LAB & SOLVERS",
    status: "PRODUCTION CODEBASE",
    tools: ["JavaScript (ES6+)", "KaTeX Math Engine", "Canvas Graphics", "HTML5"],
    highlight: "Interactive analytical platform computing determinate & indeterminate beams, virtual work, slope deflection, and moment distribution.",
    repoUrl: "https://github.com/dagiyosi-pixel/theory-of-structures-mastery-lab",
    metrics: [
      { label: "METHODS", value: "7 Core Modules" },
      { label: "ACCURACY", value: "Exact Symbolic/Math" },
      { label: "EQUATIONS", value: "KaTeX Rendered" },
      { label: "SOLVER", value: "Real-Time Matrix" }
    ],
    chapters: {
      ch1_idea: "Structural engineering students and practitioners often struggle with the conceptual leap between abstract differential equations and physical beam bending. The Mastery Lab was built to turn complex structural theory into an intuitive, real-time graphical calculator.",
      ch2_challenge: "Indeterminate structures require multi-degree-of-freedom matrix solutions (Consistent Deformation, Three Moment Equation, Slope Deflection, and Hardy Cross Moment Distribution) with step-by-step intermediate checks and KaTeX equation formatting.",
      ch3_blueprint: "Designed as an analytical workbook: input beam span lengths, support conditions (fixed, pinned, roller), and loading types (UDL, point load, applied moment), producing continuous Bending Moment Diagrams (BMD) and Shear Force Diagrams (SFD).",
      ch4_engineering: "Formulated exact stiffness matrices: [K]{u} = {P}, conjugate beam rotations, and virtual work integrals ($\\int \\frac{M m}{EI} dx$) with automated integration table lookups.",
      ch5_build: "Engineered in vanilla JavaScript for maximum speed without framework overhead, utilizing KaTeX for LaTeX formula rendering, custom canvas graphing for BMD/SFD curves, and offline local caching.",
      ch6_result: "A self-contained engineering laboratory solving 7 major structural methods, providing step-by-step derivations, distractor diagnostics, and interactive deformation plots.",
      ch7_next: "ethiopia-curriculum"
    }
  },
  {
    id: "ethiopia-curriculum",
    title: "ETHIOPIAN NATIONAL CURRICULUM PLATFORM (SQ3R)",
    subtitle: "Grade 7 & 8 Examination Mastery & Ministry Simulator",
    category: "EDUCATIONAL TECHNOLOGY",
    badge: "FLAGSHIP APP",
    status: "DEPLOYED PWA",
    tools: ["Progressive Web App", "HTML5 Canvas (1200x840)", "Web Audio API", "LocalStorage"],
    highlight: "Authentic, offline-first study and timed examination platform based on the SQ3R method, aligned with the FDRE Ministry of Education CBA.",
    liveUrl: "https://dagiyosi-pixel.github.io/ethiopia-curriculum-sq3r-platform/",
    repoUrl: "https://github.com/dagiyosi-pixel/ethiopia-curriculum-sq3r-platform",
    metrics: [
      { label: "CURRICULUM UNITS", value: "96 Units" },
      { label: "SUBTOPICS", value: "184 Subtopics" },
      { label: "CBA QUESTIONS", value: "577+ Verified Qs" },
      { label: "MASTERY GATE", value: "Strict 80%" }
    ],
    chapters: {
      ch1_idea: "Middle school students preparing for Ethiopian national examinations often lack access to reliable internet, comprehensive textbooks, or personalized exam hall practice. The idea: engineer a 100% offline-first PWA implementing the proven SQ3R study cycle.",
      ch2_challenge: "Packaging 96 complete units across 6 subjects (Math, Science, Social Studies, English, Citizenship, IT) with 577+ verified questions while keeping payload size tiny and running smoothly on low-cost Android phones without internet.",
      ch3_blueprint: "Structured information architecture: 1) Survey (Syllabus glance), 2) Question (Diagnostic checkpoints), 3) Read (MoE textbook archive), 4) Recite (3D Leitner flip flashcards), and 5) Review (Timed Ministry Exam Hall Simulator).",
      ch4_engineering: "Psychometric scoring engine with zero false inflation: calculating realistic national exam prediction curves, distractor autopsy logs, and automated A4 1-page formula sheet generation.",
      ch5_build: "Client-side PWA architecture with Service Worker asset caching, high-resolution HTML5 Canvas generator drawing the official FDRE MoE crest and honors certificate with 1-click HD PNG export, and Web Audio sound feedback.",
      ch6_result: "Empowered students with a zero-data, accessible learning tool that tracks individual mastery, multi-account progress for shared family devices, and instant Telegram honors challenge sharing.",
      ch7_next: "ethiopia-360"
    }
  },
  {
    id: "ethiopia-360",
    title: "ETHIOPIA//360 — COMMUNITY ATLAS",
    subtitle: "Geographic, Cultural & Spatial Visual Explorer",
    category: "SPATIAL COMPUTING & GIS",
    badge: "DIGITAL ATLAS",
    status: "PRODUCTION REPOSITORY",
    tools: ["JavaScript", "Modern CSS", "SVG Spatial Mapping", "Geo Data"],
    highlight: "Interactive digital atlas exploring the geographic, architectural, and historical topology of Ethiopia.",
    repoUrl: "https://github.com/dagiyosi-pixel/ethiopia-360",
    metrics: [
      { label: "REGIONS", value: "All Regional States" },
      { label: "TOPOLOGY", value: "Rift Valley to Highlands" },
      { label: "MAPPING", value: "Interactive Vector SVG" },
      { label: "CULTURE", value: "Heritage & Architecture" }
    ],
    chapters: {
      ch1_idea: "Ethiopia possesses extraordinary geological, archaeological, and architectural diversity (from the monolithic rock churches of Lalibela to the Great Rift Valley). ETHIOPIA//360 was conceived as an interactive digital atlas celebrating this heritage.",
      ch2_challenge: "Presenting multi-layered geographic, cultural, and architectural data in an engaging, visual way without heavy, slow GIS software dependencies.",
      ch3_blueprint: "Created an interactive vector map interface with fluid region-by-region drill-down, synchronized architectural dossiers, and elevation cross-sections.",
      ch4_engineering: "Optimized vector coordinates, coordinate projection algorithms, and lightweight spatial metadata querying.",
      ch5_build: "Built using semantic HTML5, SVG path interaction, custom animations, and responsive typography.",
      ch6_result: "A clean, responsive interactive digital showcase of Ethiopian topography, cultural monuments, and architectural history.",
      ch7_next: "amt-exam"
    }
  },
  {
    id: "amt-exam",
    title: "AMT EXAM PREPARATION PLATFORM",
    subtitle: "Adaptive Diagnostic Assessment Engine",
    category: "PRODUCT DESIGN & MOBILE",
    badge: "EXAM PLATFORM",
    status: "DOCUMENTED APPLICATION",
    tools: ["Mobile-First UI", "JavaScript", "LocalStorage", "Web Audio"],
    highlight: "High-retention assessment engine with timed diagnostic question banks, performance analytics, and rapid active recall.",
    repoUrl: "https://github.com/dagiyosi-pixel/amt-exam-app",
    metrics: [
      { label: "ASSESSMENT", value: "Adaptive Timed Tests" },
      { label: "INTERFACE", value: "Thumb-Friendly Mobile" },
      { label: "FEEDBACK", value: "Instant Explanations" },
      { label: "STORAGE", value: "Offline Device State" }
    ],
    chapters: {
      ch1_idea: "Exam candidates require rapid, low-friction practice tests that isolate knowledge gaps immediately after every question rather than waiting until the end.",
      ch2_challenge: "Designing an intuitive, thumb-friendly mobile interface with zero distractions and instant visual feedback on error patterns.",
      ch3_blueprint: "Streamlined single-screen question flow with an interactive question palette, flag-for-review tags, and detailed distractor explanations.",
      ch4_engineering: "Scoring algorithms weighting question difficulty and tracking speed-per-question to build time-management stamina.",
      ch5_build: "Responsive modern web application optimized for smartphones and offline local storage.",
      ch6_result: "Proven study companion allowing candidates to rapidly drill weak topics and track progress toward target scores.",
      ch7_next: "manga-noir"
    }
  },
  {
    id: "manga-noir",
    title: "MANGA-NOIR WEBGL SHADER LAB",
    subtitle: "Real-Time 3D Cel-Shading & Graphic Novel Shaders",
    category: "CREATIVE 3D & SHADERS",
    badge: "EXPERIMENTAL LAB",
    status: "ACTIVE 3D ENGINE",
    tools: ["Three.js", "GLSL Shaders", "GSAP 3", "Lenis Scroll", "Web Audio API"],
    highlight: "GPU-accelerated 3D engine rendering real-time manga hatching, toon rim-lighting, and interactive particle dynamics.",
    liveUrl: "https://dagiyosi-pixel.github.io",
    repoUrl: "https://github.com/dagiyosi-pixel/dagiyosi-pixel.github.io",
    metrics: [
      { label: "FRAME RATE", value: "60+ FPS Native" },
      { label: "SHADERS", value: "Custom GLSL Cel/Hatch" },
      { label: "PARTICLES", value: "1,800+ Reactive" },
      { label: "SOUND", value: "Procedural Web Audio" }
    ],
    chapters: {
      ch1_idea: "Inspired by the high-impact graphic storytelling of contemporary manga and the interactive creative web development of Samana Studio. The mission: build an authentic, interactive 3D manga experience running directly in the browser.",
      ch2_challenge: "Simulating traditional ink cross-hatching and cel-shaded screentones on complex 3D meshes at native 60fps without heavy raster textures.",
      ch3_blueprint: "Constructed a custom GLSL pipeline where surface normal vectors calculate light luminance, procedurally generating diagonal crosshatch patterns in dark zones and electric rim-light accents in highlights.",
      ch4_engineering: "Vertex & fragment shaders (`MangaHatchShader`) computing screen-space UV coordinates, smooth stepped tone ramps, and inertial mouse tracking.",
      ch5_build: "Integrated with Three.js, GSAP ScrollTrigger, and Lenis momentum scrolling. Features an articulated 3D manga hand and procedural sound synthesizer.",
      ch6_result: "An award-winning caliber creative coding showcase that demonstrates the convergence of digital art, 3D technology, and storytelling.",
      ch7_next: "precast-bim"
    }
  }
];
