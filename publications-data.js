/* =========================================================
   PUBLICATIONS DATA — single source of truth
   Used by research.html (full filterable list) and, where a
   publication has a "project" field, by that project's own
   page (project.html?id=...) to show related publications.

   Real, published academic publications only (no technical reports).
   To add a new publication, copy one block below and edit it.
   - authors: full author list as it should be cited
   - venue: journal / conference / book where it was published
   - date: format "YYYY-MM-DD" (only year is shown, but full date helps sorting)
   - line: must match one of the 3 research lines exactly, so the
     filter dropdown groups it correctly
   - tags: short keywords, shown as pills and searchable
   - link: URL to the publication (DOI, journal page, etc.) — leave "" if none yet
   - project: optional — matches a PROJECTS id in projects-data.js, so this
     publication also appears on that project's own page
========================================================= */
const PUBLICATIONS = [
  {
    title: "Variable elastic anisotropy controls stress in shallow crown pillars",
    authors: "Cortez, J., Browning, J., Marquardt, C., Clunes, M., Carmona, N., Benson, P., Koor, N.",
    venue: "Rock Mechanics Bulletin",
    date: "2025-01-01",
    line: "Advanced Geotechnical Characterization",
    tags: ["Rock mechanics", "Crown pillars"],
    image: "images/27803162016_7c7f8a7357_o-scaled.jpg",
    link: "https://doi.org/10.1016/j.rockmb.2025.100212"
  },
  {
    title: "Volcanoes as Relational Entities in the Poetry of Gabriela Mistral",
    authors: "Clunes, M., Hallett, A.",
    venue: "GeoHumanities",
    date: "2026-01-01",
    line: "Other",
    tags: ["Geohumanities", "Poetry"],
    image: "images/publications/Gabriela_Mistral.jpg",
    link: ""
  },
  {
    title: "Physical and mechanical rock properties of Antuco volcano (Chile): insights into the renewed flank instability of a collapsed basaltic edifice",
    authors: "Romero, J.E., Clunes, M., Heap, M.J., Polacci, M., Baud, P., Villeneuve, M., et al., Solana, C.",
    venue: "Journal of Volcanology and Geothermal Research",
    date: "2026-01-01",
    line: "Advanced Geotechnical Characterization",
    tags: ["Volcanology", "Rock properties"],
    image: "images/publications/ski-Volcan-Antuco.jpg",
    link: "https://doi.org/10.1016/j.jvolgeores.2026.108645"
  },
  {
    title: "The strength of tradition: physical and mechanical properties of Pelequén's \"peach blossom\" pink tuff, Chile",
    authors: "Robbiano, F., Becerril, L., Jullian, D., Orellana, L.F.",
    venue: "GeoHeritage",
    date: "2026-01-01",
    line: "Advanced Geotechnical Characterization",
    tags: ["Rock properties", "Petrophysics"],
    link: ""
  },
  {
    title: "Control of pore geometry on the strength, elastic anisotropy and acoustic emission output of vesicular lavas from Nevados de Chillán, Chile",
    authors: "Merchán, F., Browning, J., Arancibia, G., Healy, D., Mura, V., Pineda, C., Heap, M.J., Baud, P., Romero, J.E., Clunes, M., Orellana, L.F., Morata, D.",
    venue: "Bulletin of Volcanology",
    date: "2026-01-01",
    line: "Advanced Geotechnical Characterization",
    tags: ["Rock mechanics", "Petrophysics"],
    link: "https://doi.org/10.1007/s00445-026-01968-8"
  },
  {
    title: "Evolution of stress induced damage and anisotropy prior to rock failure in the main lithologies of El Teniente mine, Central Chile",
    authors: "Santander, P., Browning, J., Orellana, L.F., Cortez, J., Roquer, T., Clunes, M., et al.",
    venue: "Rock Mechanics and Rock Engineering",
    date: "2026-01-01",
    line: "Deep Mining Geoscience",
    tags: ["El Teniente", "Rock damage"],
    link: "https://doi.org/10.1007/s00603-026-05326-0",
    project: "el-teniente-etapa-3"
  },
  {
    title: "Can Deep-Sea Mining Contribute to the Supply of Critical Minerals Without Compromising Sustainability?",
    authors: "Espínola, F., Orellana, L.F., Castillo, E.",
    venue: "Minerals",
    date: "2026-01-01",
    line: "Mining and Climate Change, Electrification and Technology",
    tags: ["Sustainability", "Critical minerals"],
    link: "https://doi.org/10.3390/min16010098"
  },
  {
    title: "Mining in the Lithium Triangle: A Multifaceted Approach towards resource development in the face of Climate, Governance, and Socio-Environmental Challenges",
    authors: "Reyes, C., Castillo, E., Orellana, L.F., del Real, I.",
    venue: "The Extractive Industries and Society",
    date: "2025-01-01",
    line: "Mining and Climate Change, Electrification and Technology",
    tags: ["Lithium", "Climate"],
    link: "https://doi.org/10.1016/j.exis.2025.101761"
  },
  {
    title: "Bibliometric and PESTEL Analysis of Deep-Sea Mining: Trends and Challenges for Sustainable Development",
    authors: "Espínola, F., Castillo, E., Orellana, L.F.",
    venue: "Mining",
    date: "2025-01-01",
    line: "Mining and Climate Change, Electrification and Technology",
    tags: ["Sustainability", "Deep-sea mining"],
    link: "https://doi.org/10.3390/mining5020036"
  },
  {
    title: "Resources, and climate paradox: Quantifying climate change disruption",
    authors: "Fernández, P., Orellana, L.F., Castillo, E.",
    venue: "International Journal of Mining, Reclamation and Environment",
    date: "2025-01-01",
    line: "Mining and Climate Change, Electrification and Technology",
    tags: ["Climate", "Mining economics"],
    link: "https://doi.org/10.1080/17480930.2024.2424710"
  },
  {
    title: "Modeling and scenario analysis of social management for adaptation to climate change: The case of large mining in Chile",
    authors: "Jiliberto-Herrera, R., Ramos-Jiliberto, R., Castillo, E., Allendes, A., Orellana, L.F., Billi, M., Ramirez, M.",
    venue: "Environmental Development",
    date: "2024-01-01",
    line: "Mining and Climate Change, Electrification and Technology",
    tags: ["Climate", "Social management"],
    link: "https://doi.org/10.1016/j.envdev.2024.101089"
  },
  {
    title: "Dynamic mechanical properties of veined rocks under biaxial confinement",
    authors: "Robbiano, F., Liu, K., Zhang, Q., Orellana, L.F.",
    venue: "International Journal of Rock Mechanics and Mining Sciences",
    date: "2023-01-01",
    line: "Advanced Geotechnical Characterization",
    tags: ["Rock mechanics", "Veined rocks"],
    link: "https://doi.org/10.1016/j.ijrmms.2023.105538"
  },
  {
    title: "Assessing Climate Change Risk in the Mining Industry: A Case Study in the Copper Industry in the Antofagasta Region, Chile",
    authors: "Del Rio, J.I., Fernández, P., Castillo, E., Orellana, L.F.",
    venue: "Commodities",
    date: "2023-01-01",
    line: "Mining and Climate Change, Electrification and Technology",
    tags: ["Climate risk", "Copper"],
    link: "https://doi.org/10.3390/commodities2030015"
  },
  {
    title: "Physical characterization of fault rocks within the Opalinus Clay formation",
    authors: "Orellana, L.F., Nussbaum, C., Grafulha, L., et al.",
    venue: "Scientific Reports",
    date: "2022-01-01",
    line: "Advanced Geotechnical Characterization",
    tags: ["Fault rocks", "Petrophysics"],
    link: "https://doi.org/10.1038/s41598-022-08236-7"
  },
  {
    title: "Dynamic compression test on veined rocks at high strain rates",
    authors: "Robbiano, F., Liu, K., Zhang, Q., Orellana, L.F.",
    venue: "International Journal of Rock Mechanics and Mining Sciences",
    date: "2022-01-01",
    line: "Advanced Geotechnical Characterization",
    tags: ["Rock mechanics", "Veined rocks"],
    link: "https://doi.org/10.1016/j.ijrmms.2022.105085"
  },
  {
    title: "Variations in elastic and electrical properties of crustal rocks with varying degree of microfracturation",
    authors: "Pimienta, L., Orellana, L.F., Violay, M.",
    venue: "Journal of Geophysical Research: Solid Earth",
    date: "2019-01-01",
    line: "Advanced Geotechnical Characterization",
    tags: ["Rock physics", "Microfracturation"],
    link: "https://doi.org/10.1029/2019JB017339"
  },
  {
    title: "Contrasting mechanical and hydraulic properties of wet and dry fault zones in a proposed shale-hosted nuclear waste repository",
    authors: "Orellana, L.F., Giorgetti, C., Violay, M.",
    venue: "Geophysical Research Letters",
    date: "2019-01-01",
    line: "Advanced Geotechnical Characterization",
    tags: ["Fault mechanics", "Hydraulic properties"],
    link: "https://doi.org/10.1029/2018gl080384"
  },
  {
    title: "Do scaly clays control seismicity on faulted shale rocks?",
    authors: "Orellana, L.F., Scuderi, M.M., Collettini, C., Violay, M.",
    venue: "Earth and Planetary Science Letters",
    date: "2018-01-01",
    line: "Deep Mining Geoscience",
    tags: ["Seismicity", "Fault mechanics"],
    link: "https://doi.org/10.1016/j.epsl.2018.01.027"
  },
  {
    title: "Frictional Properties of Opalinus Clay: Implications for Nuclear Waste Storage",
    authors: "Orellana, L.F., Scuderi, M.M., Collettini, C., Violay, M.",
    venue: "Journal of Geophysical Research: Solid Earth",
    date: "2018-01-01",
    line: "Advanced Geotechnical Characterization",
    tags: ["Friction", "Fault mechanics"],
    link: "https://doi.org/10.1002/2017JB014931"
  },
  {
    title: "Productivity of a Continuous Mining System for Block Caving Mines",
    authors: "Orellana, L.F., Castro, R., Hekmat, A., Arancibia, E.",
    venue: "Rock Mechanics and Rock Engineering",
    date: "2017-01-01",
    line: "Deep Mining Geoscience",
    tags: ["Block caving", "Mine productivity"],
    link: "https://doi.org/10.1007/s00603-016-1107-9"
  },
  {
    title: "Predicting the axial capacity of piles in sand",
    authors: "Rotta Loria, A.F., Orellana, L.F., Minardi, A., Fürbringer, J.M., Laloui, L.",
    venue: "Computers and Geotechnics",
    date: "2015-01-01",
    line: "Advanced Geotechnical Characterization",
    tags: ["Geotechnics", "Foundations"],
    link: "https://doi.org/10.1016/j.compgeo.2015.06.013"
  },
  {
    title: "Big Data en Operaciones Mineras",
    authors: "Orellana, L.F., Ehrenfeld, A., Morales, N.",
    venue: "Big Data en Minería (book chapter)",
    date: "2020-01-01",
    line: "Mining and Climate Change, Electrification and Technology",
    tags: ["Big data", "Mining operations"],
    link: ""
  },
  {
    title: "¿El royalty acabará con la inversión minera? Una respuesta desde los ciclos de precio",
    authors: "Orellana, L.F.",
    venue: "CIPER Académico",
    date: "2021-05-12",
    line: "Mining and Climate Change, Electrification and Technology",
    tags: ["Mining policy", "Economics"],
    link: "https://www.ciperchile.cl/2021/05/12/el-royalty-acabara-con-la-inversion-minera-una-respuesta-desde-los-ciclos-de-precio/"
  },
  {
    title: "¿El royalty minero acabará con la inversión? (II Parte)",
    authors: "Orellana, L.F.",
    venue: "CIPER Académico",
    date: "2021-05-22",
    line: "Mining and Climate Change, Electrification and Technology",
    tags: ["Mining policy", "Economics"],
    link: "https://www.ciperchile.cl/2021/05/22/el-royalty-minero-acabara-con-la-inversion-ii/"
  }
];
