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
    status: "Wrapping Up",
    partner: "Codelco",
    dates: "2024 – Dec 2026",
    line: "Mining and Climate Change, Electrification and Technology",
    team: "B. Herrera, C. Espinosa, B. Martínez, D. Mancilla, G. Monsalve, G. Ramírez, M.E. Orchard, J. Ruiz-del-Solar, Á. Flores-Quiroz, L.F. Orellana",
    shortDesc: "Simulation and multicriteria decision analysis of electromobility scenarios to reduce emissions in underground mining.",
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
    fullDesc: "",
    tags: ["Energy Systems", "Electrification"],
    image: "images/16042632745_bd47019b1f_o.png"
  },
  {
    id: "chuquicamata-fallas",
    name: "Chuquicamata — Geological Faults",
    status: "Wrapping Up",
    partner: "Codelco",
    dates: "2025 – 2026",
    line: "Advanced Geotechnical Characterization",
    team: "J.I. Mera, M. Clunes, L. Bravo, G. Barindelli, I. Valenzuela, L.F. Orellana",
    shortDesc: "Characterization and stability analysis of the main fault systems at Chuquicamata underground mine.",
    fullDesc: "",
    tags: ["Chuquicamata", "Faults"],
    image: "images/434e4132-0d6c-46b5-9bcf-9ee14ba89cca.jfif"
  },
  {
    id: "el-teniente-etapa-3",
    name: "El Teniente — Stage 3",
    status: "Wrapping Up",
    partner: "Codelco",
    dates: "2025 – 2027",
    line: "Deep Mining Geoscience",
    team: "P. Santander, J. Cortez, J. Browning, T. Roquer, M. Clunes, C. Marquardt, P. Benson, N. Koor, M.P. Sepúlveda, Í. León, D. Díaz, R. González, F. Celhay, L.F. Orellana",
    shortDesc: "Stress-induced damage evolution and rock mass characterization as El Teniente advances to its deepest levels.",
    fullDesc: "",
    tags: ["El Teniente", "Block caving"],
    image: "images/13998229524_96853011b4_o.jpg"
  },
  {
    id: "gerencia-geociencias",
    name: "Geosciences Management",
    status: "Upcoming",
    partner: "Codelco",
    dates: "2026",
    line: "Advanced Geotechnical Characterization",
    team: "M. Clunes, C. Valenzuela, L.F. Orellana",
    shortDesc: "Formation of Codelco's Geosciences Management division.",
    fullDesc: "",
    tags: ["Geosciences", "Codelco"],
    image: "images/7167097613_847bc5d10d_o.jpg"
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
    fullDesc: "Project goal: deliver a validated tool for the mining industry that reduces CO₂ emissions without sacrificing productivity or safety.",
    tags: ["Electromobility", "Energy systems"],
    image: "images/5496615871_84c572348c_o.jpg"
  },
  {
    id: "student-thesis",
    name: "Student Thesis Projects",
    status: "In Progress",
    partner: "Universidad de Chile",
    dates: "",
    line: "",
    team: "L.F. Orellana",
    shortDesc: "Individual thesis projects by GeoL master's and doctoral students, supervised within the lab's research lines.",
    fullDesc: "Examples from recent presentations: R. Larregla (isostatic imbalance from mining extraction), S. Mass (pillar damage modeling), D. Díaz (fault reactivation methodology), M. Cabezas (hydraulic fracturing response), L. Bravo (seismicity-based fault reactivation), F. Valdés (rock alteration properties).",
    tags: ["Thesis", "Graduate students"],
    image: "team/geol_2025_2.jpg"
  },
  {
    id: "lab-mecanica-rocas",
    name: "Rock Mechanics Lab",
    status: "Starting",
    partner: "Codelco, UC, Geoblast",
    dates: "2026",
    line: "Advanced Geotechnical Characterization",
    team: "M. Carrión, M. Clunes, L.F. Orellana",
    shortDesc: "",
    fullDesc: "",
    tags: ["Geosciences", "Laboratory"],
    image: "images/44934596661_0a5c54d1bc_o.jpg"
  },
  {
    id: "red-regional-sismica-det",
    name: "DET Regional Seismic Network",
    status: "Upcoming",
    partner: "El Teniente + universidades",
    dates: "2026",
    line: "Advanced Geotechnical Characterization",
    team: "C. Valenzuela, L.F. Orellana",
    shortDesc: "Proposal for a regional seismic network, covering space, infrastructure, staffing requirements, and sensors.",
    fullDesc: "",
    tags: ["Geosciences", "El Teniente"],
    image: "images/15856870447_0002226d9b_o.png"
  }
];
