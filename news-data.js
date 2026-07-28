/* =========================================================
   NEWS DATA — single source of truth
   Used by BOTH index.html (shows the 3 most recent, as excerpts)
   and news.html (shows all, with filters + pagination).

   To add a new post: copy one block below and edit it.
   - id: short, unique, URL-safe (used for direct links like news.html#welcome-carla)
   - date: format "YYYY-MM-DD" (used for sorting and the year filter)
   - category: short label, shown as a tag and used in the category filter
   - excerpt: 1-2 sentences shown on cards (Home + News list)
   - body: full text shown when a News card is expanded (not shown on Home)
========================================================= */
const NEWS_POSTS = [
  {
    id: "welcome-carla-valenzuela",
    title: "Welcoming Dr. Carla Valenzuela",
    date: "2026-06-01",
    category: "Team",
    excerpt: "GeoL welcomes Dr. Carla Valenzuela as a postdoctoral researcher, strengthening our work in deep mining geomechanics.",
    body: "We are excited to welcome Dr. Carla Valenzuela, who joins GeoL as a postdoctoral researcher. Carla holds a PhD in Geophysics, specializing in Seismology, from the University of Potsdam and the GFZ German Research Centre for Geosciences (Germany). She also holds a Master's degree in Geophysics from Universidad de Chile. Carla joins the research group to help strengthen our work in deep mining geomechanics."
  },
  {
    id: "welcome-matias-clunes",
    title: "Welcoming Matías Clunes",
    date: "2026-06-01",
    category: "Team",
    excerpt: "Postdoctoral researcher Matías Clunes joins GeoL, returning to Chile after two years of research in the UK.",
    body: "We are excited to welcome Matías Clunes as a postdoctoral researcher joining GeoL. Matías is a Geologist from Universidad de Concepción and holds a PhD in Geosciences from Pontificia Universidad Católica de Chile. He returns to Chile after two years of research at the University of Portsmouth (UK). His research focuses on hydraulic fracturing in natural and anthropogenic systems, and experimental rock deformation. Follow his work on Instagram: @maticlu."
  },
  {
    id: "wmc-2026-espinola",
    title: "GeoL at the 27th World Mining Congress",
    date: "2026-06-24",
    category: "Conference",
    excerpt: "Espínola, F. presented joint work with Orellana, L.F., Castillo, E. & Jevez, E. on socio-environmental criteria for the open-pit to underground mining transition.",
    body: "Espínola, F., Orellana, L.F., Castillo, E. & Jevez, E. presented \"Evaluation of Socio-Environmental Criteria using AHP for the Transition from Open-Pit to Underground Mining\" at the 27th World Mining Congress (WMC), held in Lima, Perú, June 24–26, 2026."
  },
  {
    id: "egu-2026-valdes",
    title: "GeoL at the European Geoscience Union Meeting (EGU) 2026 — Valdés",
    date: "2026-05-04",
    category: "Conference",
    excerpt: "Valdés, F. presented on alteration-related damage thresholds in cyclically loaded rocks from deep mining environments.",
    body: "Valdés, F. presented \"Alteration-related damage thresholds in cyclically loaded rocks from deep mining environments\" at the European Geoscience Union Meeting (EGU) 2026, held in Vienna, Austria, May 2026."
  },
  {
    id: "egu-2026-robbiano",
    title: "GeoL at EGU 2026 — Robbiano et al.",
    date: "2026-05-04",
    category: "Conference",
    excerpt: "Robbiano, F., Violay, M., Orellana, L.F., Guggisberg, A. & Heinkel, E. presented on veinlet behavior in El Teniente mine rock samples.",
    body: "Robbiano, F., Violay, M., Orellana, L.F., Guggisberg, A. & Heinkel, E. presented \"The role of veinlets in the unconfined behavior of El Teniente Mine rock samples: Implications for mining-induced rockmass failure\" at the European Geoscience Union Meeting (EGU) 2026, Vienna, Austria, May 2026."
  },
  {
    id: "egu-2026-clunes",
    title: "GeoL at EGU 2026 — Clunes",
    date: "2026-05-04",
    category: "Conference",
    excerpt: "Matías Clunes presented on multiscale controls on cyclic damage and elastic memory in heterogeneous rocks from a porphyry copper system.",
    body: "Clunes, M. presented \"Multiscale controls on cyclic damage and elastic memory in heterogeneous rocks from a porphyry copper system\" at the European Geoscience Union Meeting (EGU) 2026, Vienna, Austria, May 2026."
  },
  {
    id: "euroconference-2026-orellana",
    title: "GeoL at the 16th Euroconference on Rock Physics and Rock Mechanics — Orellana",
    date: "2026-01-19",
    category: "Conference",
    excerpt: "Orellana, L.F. presented on frictional properties of main faults at El Teniente mine.",
    body: "Orellana, L.F., Fieldhouse, J., Violay, M., Sepúlveda, M.P. & Gonzalez, R. presented \"Frictional properties of main faults at El Teniente mine: Implications to deep mining conditions\" at the 16th Euroconference on Rock Physics and Rock Mechanics, held January 19–23, 2026 in Les Diablerets, Switzerland."
  },
  {
    id: "euroconference-2026-robbiano",
    title: "GeoL at the 16th Euroconference on Rock Physics and Rock Mechanics — Robbiano",
    date: "2026-01-19",
    category: "Conference",
    excerpt: "Robbiano, F. and team presented on veinlet behavior in El Teniente mine rock samples.",
    body: "Robbiano, F., Heinkel, E., Guggisberg, A., Orellana, L.F. & Violay, M. presented \"The role of veinlets in the unconfined behavior of El Teniente Mine rock samples: Implications for mining-induced rockmass failure\" at the 16th Euroconference on Rock Physics and Rock Mechanics, January 19–23, 2026, Les Diablerets, Switzerland."
  },
  {
    id: "conamet-2025-mera",
    title: "GeoL at CONAMET-SAM 2025 — Mera et al.",
    date: "2025-11-03",
    category: "Conference",
    excerpt: "José Ignacio Mera presented on the characterization and stability of the main fault systems at Chuquicamata underground mine.",
    body: "Mera, J., Clunes, M., Bravo, L., Barindelli, G., Valenzuela, I. & Orellana, L.F. presented \"Caracterización y estabilidad de los principales sistemas de falla de Chuquicamata en la minería subterránea\" at the XXIII Congreso Internacional de Metalurgia y Materiales (CONAMET-SAM) 2025, November 3–7, 2025, Concepción, Chile."
  },
  {
    id: "conamet-2025-valdes",
    title: "GeoL at CONAMET-SAM 2025 — Valdés et al.",
    date: "2025-11-03",
    category: "Conference",
    excerpt: "Francisca Valdés presented on the mechanical and acoustic properties of rocks with quartz-sericite alteration.",
    body: "Valdés, F., Clunes, M., Roquer, T., Barindelli, G., Valenzuela, I. & Orellana, L.F. presented \"Mechanical and Acoustic properties of rocks with Quartz-Sericite alteration\" at the XXIII Congreso Internacional de Metalurgia y Materiales (CONAMET-SAM) 2025, November 3–7, 2025, Concepción, Chile."
  },
  {
    id: "conamet-2025-larregla",
    title: "GeoL at CONAMET 2025 — Larregla et al.",
    date: "2025-11-03",
    category: "Conference",
    excerpt: "Roberto Larregla presented on isostatic imbalance from mineral extraction in large deposits.",
    body: "Larregla, R., Roquer, T., Melnick, D. & Orellana, L.F. presented \"Desequilibrio isostático por extracción minera en grandes yacimientos\" at the XXIII Congreso Internacional CONAMET: Minería, Metalurgía, Materiales 2025, November 3–7, 2025, Concepción, Chile."
  },
  {
    id: "conamet-2025-cabezas",
    title: "GeoL at CONAMET 2025 — Cabezas et al.",
    date: "2025-11-03",
    category: "Conference",
    excerpt: "Experimental evaluation of lithological response to hydraulic fracturing in underground mining.",
    body: "Cabezas, M., Clunes, M., Palma, S. & Orellana, L.F. presented \"Evaluación experimental de la respuesta litológica frente al Fracturamiento Hidráulico en Minería Subterránea\" at the XXIII Congreso Internacional CONAMET: Minería, Metalurgía, Materiales 2025, November 3–7, 2025, Concepción, Chile."
  },
  {
    id: "armmic-2025-bravo",
    title: "GeoL at ARMMIC 2025 — Bravo et al.",
    date: "2025-11-04",
    category: "Conference",
    excerpt: "Lucy Bravo presented a seismicity-based methodology for evaluating fault reactivation in underground mining.",
    body: "Bravo, L., Roquer, T., Gonzalez, R., Leon, I. & Diaz, D. presented \"Seismicity-based methodology for evaluating fault reactivation in underground mining\" at the Applied Research in Mining and Metallurgy International Congress (ARMMIC) 2025, November 4–7, 2025, Antofagasta, Chile."
  },
  {
    id: "armmic-2025-espinola",
    title: "GeoL at ARMMIC 2025 — Espínola et al.",
    date: "2025-11-04",
    category: "Conference",
    excerpt: "Fernanda Espínola presented on the surface impact of open-pit and underground mining through satellite image analysis.",
    body: "Espínola, F., Castillo, E. & Orellana, L.F. presented \"Evolution and Projection of the Surface Impact of Open-Pit and Underground Mining through Multitemporal Satellite Image Analysis\" at the Applied Research in Mining and Metallurgy International Congress (ARMMIC), November 4–7, 2025, Antofagasta, Chile."
  },
  {
    id: "armmic-2025-herrera",
    title: "GeoL at ARMMIC 2025 — Electromobility simulation study",
    date: "2025-11-04",
    category: "Conference",
    excerpt: "A multidisciplinary team presented simulation and decision-analysis work on electromobility scenarios in underground mining.",
    body: "Herrera, B., Espinosa, C., Martínez, B., Mancilla, D., Monsalve, G., Ramírez, G., Orchard, M.E., Ruiz-del-Solar, J., Flores-Quiroz, Á. & Orellana, L.F. presented \"Electromobility in underground mining: simulation and multicriteria decision analysis of scenarios to reduce emissions\" at ARMMIC 2025, November 4–7, 2025, Antofagasta, Chile."
  },
  {
    id: "jornada-2025-santander-1",
    title: "GeoL at the Jornada Nacional de Mecánica de Rocas 2025 — Santander et al.",
    date: "2025-10-30",
    category: "Conference",
    excerpt: "Presentation on stress-induced damage evolution and fracture microstructures in El Teniente lithologies.",
    body: "Santander, P., Cortez, J., Browning, J., Roquer, T., Clunes, M., Marquardt, C., Benson, P., Koor, N., Sepúlveda, M.P., León, Í., Díaz, D., González, R., Celhay, F. & Orellana, L.F. presented \"Evolución del daño inducido por esfuerzos y microestructuras de fractura en litologías de El Teniente: integración de emisiones acústicas, anisotropía sísmica y análisis microscópico (SEM)\" at the Jornada Nacional de Mecánica de Rocas 2025, October 30, 2025, Santiago, Chile."
  },
  {
    id: "jornada-2025-mass",
    title: "GeoL at the Jornada Nacional de Mecánica de Rocas 2025 — Mass et al.",
    date: "2025-10-30",
    category: "Conference",
    excerpt: "Analysis and damage modeling in horizontal pillars at local scale.",
    body: "Mass, S., Orellana, L.F. & Emery, X. presented \"Análisis y modelamiento de daño en pilares horizontales a escala local\" at the Jornada Nacional de Mecánica de Rocas 2025, October 30, 2025, Santiago, Chile."
  },
  {
    id: "jornada-2025-cortez",
    title: "GeoL at the Jornada Nacional de Mecánica de Rocas 2025 — Cortez et al.",
    date: "2025-10-30",
    category: "Conference",
    excerpt: "Seismic response of El Teniente rocks and implications for rockburst hazard, from acoustic emission monitoring.",
    body: "Cortez, J., Browning, J., Roquer, T., Santander, P., Clunes, M., Valdés, F., Benson, P., Koor, N., Marquardt, C. & Orellana, L.F. presented \"Respuesta sísmica de las rocas de la mina El Teniente, Chile: Implicancias para el peligro de estallido de roca a partir del monitoreo de emisiones acústicas bajo carga monotónica\" at the Jornada Nacional de Mecánica de Rocas 2025, October 30, 2025, Santiago, Chile."
  },
  {
    id: "geomin-2025-santander",
    title: "GeoL at Geomin-Mineplanning 2025 — Santander et al.",
    date: "2025-06-11",
    category: "Conference",
    excerpt: "Evolution of damage prior to induced failure in rocks from El Teniente mine.",
    body: "Santander, P., Cortez, J., Browning, J., Roquer, T., Clunes, M., Marquardt, C., Benson, P., Koor, N., Sepúlveda, M.P., León, Í., Díaz, D., González, R., Celhay, F. & Orellana, L.F. presented \"Evolution of damage prior to induce failure in rocks from El Teniente mine\" at Geomin–Mineplanning 2025: the 9th International Conference on Geology and Mine Planning, June 11–13, 2025, Santiago, Chile."
  },
  {
    id: "geomin-2025-diaz",
    title: "GeoL at Geomin-Mineplanning 2025 — Diaz et al.",
    date: "2025-06-11",
    category: "Conference",
    excerpt: "A new methodology to evaluate the reactivation of geological structures through advanced analytics at El Teniente mine.",
    body: "Diaz, D., Mery, N. & Orellana, L.F. presented \"Methodology to evaluate the Reactivation of Geological Structures through advanced Analytics, El Teniente Mine\" at Geomin–Mineplanning 2025: the 9th International Conference on Geology and Mine Planning, June 11–13, 2025, Santiago, Chile."
  }
];
