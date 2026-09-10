/* =========================================================
   PROJECTS DATA — single source of truth
   Used by BOTH projects.html (overview grid, with filters)
   and project.html (individual project page, via ?id=slug).

   To add a new project: copy one block below and edit it.
   - id: short, unique, URL-safe (used in links like project.html?id=elmo-etapa-1)
   - status: one of "Upcoming", "Starting", "In Progress", "Wrapping Up", "Completed"
   - dates: display string
   - line: must match one of the research lines exactly (Advanced Geotechnical
     Characterization / Deep Mining Geoscience / Mining and Climate Change,
     Electrification and Technology) so filters group correctly
   - team: display string (names) OR a list of work packages
   - shortDesc: 1-2 lines, shown on the overview card
   - fullDesc: optional, shown only on the project's own page
   - image: path to the representative photo
   - tags: 2-3 keywords
========================================================= */
const PROJECTS = [
  {
    id: "elmo-etapa-1",
    name: "ELMO — Stage 1",
    name_es: "ELMO — Etapa 1",
    status: "Wrapping Up",
    partner: "Codelco",
    dates: "2024 – Dec 2026",
    line: "Mining and Climate Change, Electrification and Technology",
    team: "B. Herrera, C. Espinosa, B. Martínez, D. Mancilla, G. Monsalve, G. Ramírez, M.E. Orchard, J. Ruiz-del-Solar, Á. Flores-Quiroz, L.F. Orellana",
    shortDesc: "Simulation and multicriteria decision analysis of electromobility scenarios to reduce emissions in underground mining.",
    shortDesc_es: "Simulación y análisis multicriterio de escenarios de electromovilidad para reducir emisiones en minería subterránea.",
    fullDesc: "",
    tags: ["Electromobility", "Underground mining"],
    image: "images/31061253238_0f12963932_o.jpg"
  },
  {
    id: "elmomine-os",
    name: "ELMOMine — OS",
    status: "Upcoming",
    partner: "Instituto de Tecnologías Limpias (ITL)",
    dates: "2027 – 2031",
    line: "Mining and Climate Change, Electrification and Technology",
    team: "",
    shortDesc: "An intelligent energy operating system for mining, supporting electrification and energy management. Integration of ELMO's modules.",
    shortDesc_es: "Un sistema operativo energético inteligente para la minería, que apoya la electrificación y la gestión energética. Integración de los módulos de ELMO.",
    fullDesc: "",
    tags: ["Energy Systems", "Electrification"],
    image: "images/16042632745_bd47019b1f_o.png"
  },
  {
    id: "chuquicamata-fallas",
    name: "Chuquicamata — Geological Faults",
    name_es: "Chuquicamata — Fallas Geológicas",
    status: "Wrapping Up",
    partner: "Codelco",
    dates: "2025 – 2026",
    line: "Advanced Geotechnical Characterization",
    team: "J.I. Mera, M. Clunes, L. Bravo, G. Barindelli, I. Valenzuela, L.F. Orellana",
    shortDesc: "Characterization and stability analysis of the main fault systems at Chuquicamata underground mine.",
    shortDesc_es: "Caracterización y análisis de estabilidad de los principales sistemas de falla en la mina subterránea de Chuquicamata.",
    fullDesc: "",
    tags: ["Chuquicamata", "Faults"],
    image: "images/434e4132-0d6c-46b5-9bcf-9ee14ba89cca.jfif"
  },
  {
    id: "el-teniente-etapa-3",
    name: "El Teniente — Stage 3",
    name_es: "El Teniente — Etapa 3",
    status: "Wrapping Up",
    partner: "Codelco",
    dates: "2025 – 2027",
    line: "Deep Mining Geoscience",
    team: "P. Santander, J. Cortez, J. Browning, T. Roquer, M. Clunes, C. Marquardt, P. Benson, N. Koor, M.P. Sepúlveda, Í. León, D. Díaz, R. González, F. Celhay, L.F. Orellana",
    shortDesc: "Stress-induced damage evolution and rock mass characterization as El Teniente advances to its deepest levels.",
    shortDesc_es: "Evolución del daño inducido por esfuerzos y caracterización del macizo rocoso a medida que El Teniente avanza hacia sus niveles más profundos.",
    fullDesc: "",
    tags: ["El Teniente", "Block caving"],
    image: "images/13998229524_96853011b4_o.jpg"
  },
  {
    id: "pamma",
    name: "PAMMA",
    status: "In Progress",
    partner: "Ministerio de Minería (Chile) — PAMMA Program",
    dates: "2026",
    line: "Advanced Geotechnical Characterization",
    team: "M. Carrión, N. Oyarzún, L.F. Orellana",
    shortDesc: "PAMMA (Programa de Asistencia y Modernización para la Minería Artesanal) is a Chilean Ministry of Mining program that provides equipment subsidies to small-scale and artisanal mining producers to improve productivity and safety.",
    shortDesc_es: "PAMMA (Programa de Asistencia y Modernización para la Minería Artesanal) es un programa del Ministerio de Minería de Chile que entrega subsidios de equipamiento a pequeños productores mineros y mineros artesanales para mejorar su productividad y seguridad.",
    fullDesc: "",
    tags: ["Geosciences", "Ministry"],
    image: "images/44934596661_0a5c54d1bc_o.jpg"
  },
  {
    id: "mci",
    name: "MCI",
    status: "In Progress",
    partner: "",
    dates: "Sept 2026 — 3 years",
    line: "Mining and Climate Change, Electrification and Technology",
    team: "Open-pit design (WP1), Underground design (WP2), Energy modeling / EV demand management (WP3)",
    shortDesc: "Building an integrated, replicable methodological framework to incorporate electromobility (battery trucks, trolley-assist, high-power charging) from the earliest design stage of open-pit and underground mines.",
    shortDesc_es: "Construcción de un marco metodológico integrado y replicable para incorporar la electromovilidad (camiones a batería, trolley-assist, carga de alta potencia) desde la etapa más temprana del diseño de minas a rajo abierto y subterráneas.",
    fullDesc: "Project goal: deliver a validated tool for the mining industry that reduces CO₂ emissions without sacrificing productivity or safety.",
    fullDesc_es: "Objetivo del proyecto: entregar a la industria minera una herramienta validada que reduzca las emisiones de CO₂ sin sacrificar productividad ni seguridad.",
    tags: ["Electromobility", "Energy systems"],
    image: "images/5496615871_84c572348c_o.jpg"
  },
];
