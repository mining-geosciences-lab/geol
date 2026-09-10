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
    title_es: "Bienvenida a la Dra. Carla Valenzuela",
    date: "2026-06-01",
    category: "Team",
    excerpt: "geoL welcomes Dr. Carla Valenzuela as a postdoctoral researcher, strengthening our work in deep mining geomechanics.",
    excerpt_es: "geoL da la bienvenida a la Dra. Carla Valenzuela como investigadora postdoctoral, fortaleciendo nuestro trabajo en geomecánica de minería profunda.",
    body: "We are excited to welcome Dr. Carla Valenzuela, who joins geoL as a postdoctoral researcher. Carla holds a PhD in Geophysics, specializing in Seismology, from the University of Potsdam and the GFZ German Research Centre for Geosciences (Germany). She also holds a Master's degree in Geophysics from Universidad de Chile. Carla joins the research group to help strengthen our work in deep mining geomechanics.",
    body_es: "Estamos felices de dar la bienvenida a la Dra. Carla Valenzuela, quien se une a geoL como investigadora postdoctoral. Carla tiene un Doctorado en Geofísica, especialidad Sismología, de la Universidad de Potsdam y el GFZ German Research Centre for Geosciences (Alemania). También posee un Magíster en Geofísica de la Universidad de Chile. Carla se une al grupo de investigación para fortalecer nuestro trabajo en geomecánica de minería profunda."
  },
  {
    id: "welcome-matias-clunes",
    title: "Welcoming Matías Clunes",
    title_es: "Bienvenida a Matías Clunes",
    date: "2026-06-01",
    category: "Team",
    excerpt: "Postdoctoral researcher Matías Clunes joins geoL, returning to Chile after two years of research in the UK.",
    excerpt_es: "El investigador postdoctoral Matías Clunes se une a geoL, de vuelta en Chile tras dos años de investigación en el Reino Unido.",
    body: "We are excited to welcome Matías Clunes as a postdoctoral researcher joining geoL. Matías is a Geologist from Universidad de Concepción and holds a PhD in Geosciences from Pontificia Universidad Católica de Chile. He returns to Chile after two years of research at the University of Portsmouth (UK). His research focuses on hydraulic fracturing in natural and anthropogenic systems, and experimental rock deformation. Follow his work on Instagram: @maticlu.",
    body_es: "Estamos felices de dar la bienvenida a Matías Clunes como investigador postdoctoral en geoL. Matías es Geólogo de la Universidad de Concepción y posee un Doctorado en Geociencias de la Pontificia Universidad Católica de Chile. Vuelve a Chile tras dos años de investigación en la Universidad de Portsmouth (Reino Unido). Su investigación se centra en el fracturamiento hidráulico en sistemas naturales y antropogénicos, y la deformación experimental de rocas. Sigue su trabajo en Instagram: @maticlu."
  },
  {
    id: "wmc-2026-espinola",
    title: "geoL at the 27th World Mining Congress",
    title_es: "geoL en el 27° Congreso Mundial de Minería",
    date: "2026-06-24",
    category: "Conference",
    excerpt: "Espínola, F. presented joint work with Orellana, L.F., Castillo, E. & Jevez, E. on socio-environmental criteria for the open-pit to underground mining transition.",
    excerpt_es: "Espínola, F. presentó trabajo conjunto con Orellana, L.F., Castillo, E. y Jevez, E. sobre criterios socioambientales para la transición de minería a rajo abierto a subterránea.",
    body: "Espínola, F., Orellana, L.F., Castillo, E. & Jevez, E. presented \"Evaluation of Socio-Environmental Criteria using AHP for the Transition from Open-Pit to Underground Mining\" at the 27th World Mining Congress (WMC), held in Lima, Perú, June 24–26, 2026.",
    body_es: "Espínola, F., Orellana, L.F., Castillo, E. y Jevez, E. presentaron \"Evaluation of Socio-Environmental Criteria using AHP for the Transition from Open-Pit to Underground Mining\" en el 27° World Mining Congress (WMC), realizado en Lima, Perú, del 24 al 26 de junio de 2026."
  },
  {
    id: "egu-2026-valdes",
    title: "geoL at the European Geoscience Union Meeting (EGU) 2026 — Valdés",
    title_es: "geoL en la European Geoscience Union Meeting (EGU) 2026 — Valdés",
    date: "2026-05-04",
    category: "Conference",
    excerpt: "Valdés, F. presented on alteration-related damage thresholds in cyclically loaded rocks from deep mining environments.",
    excerpt_es: "Valdés, F. presentó sobre umbrales de daño por alteración en rocas sometidas a carga cíclica en ambientes de minería profunda.",
    body: "Valdés, F. presented \"Alteration-related damage thresholds in cyclically loaded rocks from deep mining environments\" at the European Geoscience Union Meeting (EGU) 2026, held in Vienna, Austria, May 2026.",
    body_es: "Valdés, F. presentó \"Alteration-related damage thresholds in cyclically loaded rocks from deep mining environments\" en la European Geoscience Union Meeting (EGU) 2026, realizada en Viena, Austria, mayo de 2026."
  },
  {
    id: "egu-2026-robbiano",
    title: "geoL at EGU 2026 — Robbiano et al.",
    title_es: "geoL en EGU 2026 — Robbiano et al.",
    date: "2026-05-04",
    category: "Conference",
    project: "el-teniente-etapa-3",
    excerpt: "Robbiano, F., Violay, M., Orellana, L.F., Guggisberg, A. & Heinkel, E. presented on veinlet behavior in El Teniente mine rock samples.",
    excerpt_es: "Robbiano, F., Violay, M., Orellana, L.F., Guggisberg, A. y Heinkel, E. presentaron sobre el comportamiento de vetillas en muestras de roca de la mina El Teniente.",
    body: "Robbiano, F., Violay, M., Orellana, L.F., Guggisberg, A. & Heinkel, E. presented \"The role of veinlets in the unconfined behavior of El Teniente Mine rock samples: Implications for mining-induced rockmass failure\" at the European Geoscience Union Meeting (EGU) 2026, Vienna, Austria, May 2026.",
    body_es: "Robbiano, F., Violay, M., Orellana, L.F., Guggisberg, A. y Heinkel, E. presentaron \"The role of veinlets in the unconfined behavior of El Teniente Mine rock samples: Implications for mining-induced rockmass failure\" en la European Geoscience Union Meeting (EGU) 2026, Viena, Austria, mayo de 2026."
  },
  {
    id: "egu-2026-clunes",
    title: "geoL at EGU 2026 — Clunes",
    title_es: "geoL en EGU 2026 — Clunes",
    date: "2026-05-04",
    category: "Conference",
    excerpt: "Matías Clunes presented on multiscale controls on cyclic damage and elastic memory in heterogeneous rocks from a porphyry copper system.",
    excerpt_es: "Matías Clunes presentó sobre controles multiescala del daño cíclico y la memoria elástica en rocas heterogéneas de un sistema pórfido cuprífero.",
    body: "Clunes, M. presented \"Multiscale controls on cyclic damage and elastic memory in heterogeneous rocks from a porphyry copper system\" at the European Geoscience Union Meeting (EGU) 2026, Vienna, Austria, May 2026.",
    body_es: "Clunes, M. presentó \"Multiscale controls on cyclic damage and elastic memory in heterogeneous rocks from a porphyry copper system\" en la European Geoscience Union Meeting (EGU) 2026, Viena, Austria, mayo de 2026."
  },
  {
    id: "euroconference-2026-orellana",
    title: "geoL at the 16th Euroconference on Rock Physics and Rock Mechanics — Orellana",
    title_es: "geoL en la 16ª Euroconference on Rock Physics and Rock Mechanics — Orellana",
    date: "2026-01-19",
    category: "Conference",
    project: "el-teniente-etapa-3",
    excerpt: "Orellana, L.F. presented on frictional properties of main faults at El Teniente mine.",
    excerpt_es: "Orellana, L.F. presentó sobre las propiedades friccionales de las fallas principales de la mina El Teniente.",
    body: "Orellana, L.F., Fieldhouse, J., Violay, M., Sepúlveda, M.P. & Gonzalez, R. presented \"Frictional properties of main faults at El Teniente mine: Implications to deep mining conditions\" at the 16th Euroconference on Rock Physics and Rock Mechanics, held January 19–23, 2026 in Les Diablerets, Switzerland.",
    body_es: "Orellana, L.F., Fieldhouse, J., Violay, M., Sepúlveda, M.P. y Gonzalez, R. presentaron \"Frictional properties of main faults at El Teniente mine: Implications to deep mining conditions\" en la 16ª Euroconference on Rock Physics and Rock Mechanics, realizada del 19 al 23 de enero de 2026 en Les Diablerets, Suiza."
  },
  {
    id: "euroconference-2026-robbiano",
    title: "geoL at the 16th Euroconference on Rock Physics and Rock Mechanics — Robbiano",
    title_es: "geoL en la 16ª Euroconference on Rock Physics and Rock Mechanics — Robbiano",
    date: "2026-01-19",
    category: "Conference",
    project: "el-teniente-etapa-3",
    excerpt: "Robbiano, F. and team presented on veinlet behavior in El Teniente mine rock samples.",
    excerpt_es: "Robbiano, F. y equipo presentaron sobre el comportamiento de vetillas en muestras de roca de la mina El Teniente.",
    body: "Robbiano, F., Heinkel, E., Guggisberg, A., Orellana, L.F. & Violay, M. presented \"The role of veinlets in the unconfined behavior of El Teniente Mine rock samples: Implications for mining-induced rockmass failure\" at the 16th Euroconference on Rock Physics and Rock Mechanics, January 19–23, 2026, Les Diablerets, Switzerland.",
    body_es: "Robbiano, F., Heinkel, E., Guggisberg, A., Orellana, L.F. y Violay, M. presentaron \"The role of veinlets in the unconfined behavior of El Teniente Mine rock samples: Implications for mining-induced rockmass failure\" en la 16ª Euroconference on Rock Physics and Rock Mechanics, 19-23 de enero de 2026, Les Diablerets, Suiza."
  },
  {
    id: "conamet-2025-mera",
    title: "geoL at CONAMET-SAM 2025 — Mera et al.",
    title_es: "geoL en CONAMET-SAM 2025 — Mera et al.",
    date: "2025-11-03",
    category: "Conference",
    project: "chuquicamata-fallas",
    excerpt: "José Ignacio Mera presented on the characterization and stability of the main fault systems at Chuquicamata underground mine.",
    excerpt_es: "José Ignacio Mera presentó sobre la caracterización y estabilidad de los principales sistemas de falla en la mina subterránea de Chuquicamata.",
    body: "Mera, J., Clunes, M., Bravo, L., Barindelli, G., Valenzuela, I. & Orellana, L.F. presented \"Caracterización y estabilidad de los principales sistemas de falla de Chuquicamata en la minería subterránea\" at the XXIII Congreso Internacional de Metalurgia y Materiales (CONAMET-SAM) 2025, November 3–7, 2025, Concepción, Chile.",
    body_es: "Mera, J., Clunes, M., Bravo, L., Barindelli, G., Valenzuela, I. y Orellana, L.F. presentaron \"Caracterización y estabilidad de los principales sistemas de falla de Chuquicamata en la minería subterránea\" en el XXIII Congreso Internacional de Metalurgia y Materiales (CONAMET-SAM) 2025, del 3 al 7 de noviembre de 2025, Concepción, Chile."
  },
  {
    id: "conamet-2025-valdes",
    title: "geoL at CONAMET-SAM 2025 — Valdés et al.",
    title_es: "geoL en CONAMET-SAM 2025 — Valdés et al.",
    date: "2025-11-03",
    category: "Conference",
    project: "student-thesis",
    excerpt: "Francisca Valdés presented on the mechanical and acoustic properties of rocks with quartz-sericite alteration.",
    excerpt_es: "Francisca Valdés presentó sobre las propiedades mecánicas y acústicas de rocas con alteración cuarzo-sericítica.",
    body: "Valdés, F., Clunes, M., Roquer, T., Barindelli, G., Valenzuela, I. & Orellana, L.F. presented \"Mechanical and Acoustic properties of rocks with Quartz-Sericite alteration\" at the XXIII Congreso Internacional de Metalurgia y Materiales (CONAMET-SAM) 2025, November 3–7, 2025, Concepción, Chile.",
    body_es: "Valdés, F., Clunes, M., Roquer, T., Barindelli, G., Valenzuela, I. y Orellana, L.F. presentaron \"Mechanical and Acoustic properties of rocks with Quartz-Sericite alteration\" en el XXIII Congreso Internacional de Metalurgia y Materiales (CONAMET-SAM) 2025, del 3 al 7 de noviembre de 2025, Concepción, Chile."
  },
  {
    id: "conamet-2025-larregla",
    title: "geoL at CONAMET 2025 — Larregla et al.",
    title_es: "geoL en CONAMET 2025 — Larregla et al.",
    date: "2025-11-03",
    category: "Conference",
    project: "student-thesis",
    excerpt: "Roberto Larregla presented on isostatic imbalance from mineral extraction in large deposits.",
    excerpt_es: "Roberto Larregla presentó sobre el desequilibrio isostático por extracción minera en grandes yacimientos.",
    body: "Larregla, R., Roquer, T., Melnick, D. & Orellana, L.F. presented \"Desequilibrio isostático por extracción minera en grandes yacimientos\" at the XXIII Congreso Internacional CONAMET: Minería, Metalurgía, Materiales 2025, November 3–7, 2025, Concepción, Chile.",
    body_es: "Larregla, R., Roquer, T., Melnick, D. y Orellana, L.F. presentaron \"Desequilibrio isostático por extracción minera en grandes yacimientos\" en el XXIII Congreso Internacional CONAMET: Minería, Metalurgía, Materiales 2025, del 3 al 7 de noviembre de 2025, Concepción, Chile."
  },
  {
    id: "conamet-2025-cabezas",
    title: "geoL at CONAMET 2025 — Cabezas et al.",
    title_es: "geoL en CONAMET 2025 — Cabezas et al.",
    date: "2025-11-03",
    category: "Conference",
    project: "student-thesis",
    excerpt: "Experimental evaluation of lithological response to hydraulic fracturing in underground mining.",
    excerpt_es: "Evaluación experimental de la respuesta litológica frente al fracturamiento hidráulico en minería subterránea.",
    body: "Cabezas, M., Clunes, M., Palma, S. & Orellana, L.F. presented \"Evaluación experimental de la respuesta litológica frente al Fracturamiento Hidráulico en Minería Subterránea\" at the XXIII Congreso Internacional CONAMET: Minería, Metalurgía, Materiales 2025, November 3–7, 2025, Concepción, Chile.",
    body_es: "Cabezas, M., Clunes, M., Palma, S. y Orellana, L.F. presentaron \"Evaluación experimental de la respuesta litológica frente al Fracturamiento Hidráulico en Minería Subterránea\" en el XXIII Congreso Internacional CONAMET: Minería, Metalurgía, Materiales 2025, del 3 al 7 de noviembre de 2025, Concepción, Chile."
  },
  {
    id: "armmic-2025-bravo",
    title: "geoL at ARMMIC 2025 — Bravo et al.",
    title_es: "geoL en ARMMIC 2025 — Bravo et al.",
    date: "2025-11-04",
    category: "Conference",
    project: "student-thesis",
    excerpt: "Lucy Bravo presented a seismicity-based methodology for evaluating fault reactivation in underground mining.",
    excerpt_es: "Lucy Bravo presentó una metodología basada en sismicidad para evaluar la reactivación de fallas en minería subterránea.",
    body: "Bravo, L., Roquer, T., Gonzalez, R., Leon, I. & Diaz, D. presented \"Seismicity-based methodology for evaluating fault reactivation in underground mining\" at the Applied Research in Mining and Metallurgy International Congress (ARMMIC) 2025, November 4–7, 2025, Antofagasta, Chile.",
    body_es: "Bravo, L., Roquer, T., Gonzalez, R., Leon, I. y Diaz, D. presentaron \"Seismicity-based methodology for evaluating fault reactivation in underground mining\" en el Applied Research in Mining and Metallurgy International Congress (ARMMIC) 2025, del 4 al 7 de noviembre de 2025, Antofagasta, Chile."
  },
  {
    id: "armmic-2025-espinola",
    title: "geoL at ARMMIC 2025 — Espínola et al.",
    title_es: "geoL en ARMMIC 2025 — Espínola et al.",
    date: "2025-11-04",
    category: "Conference",
    excerpt: "Fernanda Espínola presented on the surface impact of open-pit and underground mining through satellite image analysis.",
    excerpt_es: "Fernanda Espínola presentó sobre el impacto superficial de la minería a rajo abierto y subterránea mediante análisis de imágenes satelitales multitemporales.",
    body: "Espínola, F., Castillo, E. & Orellana, L.F. presented \"Evolution and Projection of the Surface Impact of Open-Pit and Underground Mining through Multitemporal Satellite Image Analysis\" at the Applied Research in Mining and Metallurgy International Congress (ARMMIC), November 4–7, 2025, Antofagasta, Chile.",
    body_es: "Espínola, F., Castillo, E. y Orellana, L.F. presentaron \"Evolution and Projection of the Surface Impact of Open-Pit and Underground Mining through Multitemporal Satellite Image Analysis\" en el Applied Research in Mining and Metallurgy International Congress (ARMMIC), del 4 al 7 de noviembre de 2025, Antofagasta, Chile."
  },
  {
    id: "armmic-2025-herrera",
    title: "geoL at ARMMIC 2025 — Electromobility simulation study",
    title_es: "geoL en ARMMIC 2025 — Estudio de simulación de electromovilidad",
    date: "2025-11-04",
    category: "Conference",
    project: "elmo-etapa-1",
    excerpt: "A multidisciplinary team presented simulation and decision-analysis work on electromobility scenarios in underground mining.",
    excerpt_es: "Un equipo multidisciplinario presentó trabajo de simulación y análisis de decisión sobre escenarios de electromovilidad en minería subterránea.",
    body: "Herrera, B., Espinosa, C., Martínez, B., Mancilla, D., Monsalve, G., Ramírez, G., Orchard, M.E., Ruiz-del-Solar, J., Flores-Quiroz, Á. & Orellana, L.F. presented \"Electromobility in underground mining: simulation and multicriteria decision analysis of scenarios to reduce emissions\" at ARMMIC 2025, November 4–7, 2025, Antofagasta, Chile.",
    body_es: "Herrera, B., Espinosa, C., Martínez, B., Mancilla, D., Monsalve, G., Ramírez, G., Orchard, M.E., Ruiz-del-Solar, J., Flores-Quiroz, Á. y Orellana, L.F. presentaron \"Electromobility in underground mining: simulation and multicriteria decision analysis of scenarios to reduce emissions\" en ARMMIC 2025, del 4 al 7 de noviembre de 2025, Antofagasta, Chile."
  },
  {
    id: "jornada-2025-santander-1",
    title: "geoL at the Jornada Nacional de Mecánica de Rocas 2025 — Santander et al.",
    title_es: "geoL en la Jornada Nacional de Mecánica de Rocas 2025 — Santander et al.",
    date: "2025-10-30",
    category: "Conference",
    project: "el-teniente-etapa-3",
    excerpt: "Presentation on stress-induced damage evolution and fracture microstructures in El Teniente lithologies.",
    excerpt_es: "Presentación sobre la evolución del daño inducido por esfuerzos y microestructuras de fractura en litologías de El Teniente.",
    body: "Santander, P., Cortez, J., Browning, J., Roquer, T., Clunes, M., Marquardt, C., Benson, P., Koor, N., Sepúlveda, M.P., León, Í., Díaz, D., González, R., Celhay, F. & Orellana, L.F. presented \"Evolución del daño inducido por esfuerzos y microestructuras de fractura en litologías de El Teniente: integración de emisiones acústicas, anisotropía sísmica y análisis microscópico (SEM)\" at the Jornada Nacional de Mecánica de Rocas 2025, October 30, 2025, Santiago, Chile.",
    body_es: "Santander, P., Cortez, J., Browning, J., Roquer, T., Clunes, M., Marquardt, C., Benson, P., Koor, N., Sepúlveda, M.P., León, Í., Díaz, D., González, R., Celhay, F. y Orellana, L.F. presentaron \"Evolución del daño inducido por esfuerzos y microestructuras de fractura en litologías de El Teniente: integración de emisiones acústicas, anisotropía sísmica y análisis microscópico (SEM)\" en la Jornada Nacional de Mecánica de Rocas 2025, 30 de octubre de 2025, Santiago, Chile."
  },
  {
    id: "jornada-2025-mass",
    title: "geoL at the Jornada Nacional de Mecánica de Rocas 2025 — Mass et al.",
    title_es: "geoL en la Jornada Nacional de Mecánica de Rocas 2025 — Mass et al.",
    date: "2025-10-30",
    category: "Conference",
    excerpt: "Analysis and damage modeling in horizontal pillars at local scale.",
    excerpt_es: "Análisis y modelamiento de daño en pilares horizontales a escala local.",
    body: "Mass, S., Orellana, L.F. & Emery, X. presented \"Análisis y modelamiento de daño en pilares horizontales a escala local\" at the Jornada Nacional de Mecánica de Rocas 2025, October 30, 2025, Santiago, Chile.",
    body_es: "Mass, S., Orellana, L.F. y Emery, X. presentaron \"Análisis y modelamiento de daño en pilares horizontales a escala local\" en la Jornada Nacional de Mecánica de Rocas 2025, 30 de octubre de 2025, Santiago, Chile."
  },
  {
    id: "jornada-2025-cortez",
    title: "geoL at the Jornada Nacional de Mecánica de Rocas 2025 — Cortez et al.",
    title_es: "geoL en la Jornada Nacional de Mecánica de Rocas 2025 — Cortez et al.",
    date: "2025-10-30",
    category: "Conference",
    project: "el-teniente-etapa-3",
    excerpt: "Seismic response of El Teniente rocks and implications for rockburst hazard, from acoustic emission monitoring.",
    excerpt_es: "Respuesta sísmica de las rocas de El Teniente e implicancias para el peligro de estallido de roca, a partir del monitoreo de emisiones acústicas.",
    body: "Cortez, J., Browning, J., Roquer, T., Santander, P., Clunes, M., Valdés, F., Benson, P., Koor, N., Marquardt, C. & Orellana, L.F. presented \"Respuesta sísmica de las rocas de la mina El Teniente, Chile: Implicancias para el peligro de estallido de roca a partir del monitoreo de emisiones acústicas bajo carga monotónica\" at the Jornada Nacional de Mecánica de Rocas 2025, October 30, 2025, Santiago, Chile.",
    body_es: "Cortez, J., Browning, J., Roquer, T., Santander, P., Clunes, M., Valdés, F., Benson, P., Koor, N., Marquardt, C. y Orellana, L.F. presentaron \"Respuesta sísmica de las rocas de la mina El Teniente, Chile: Implicancias para el peligro de estallido de roca a partir del monitoreo de emisiones acústicas bajo carga monotónica\" en la Jornada Nacional de Mecánica de Rocas 2025, 30 de octubre de 2025, Santiago, Chile."
  },
  {
    id: "geomin-2025-santander",
    title: "geoL at Geomin-Mineplanning 2025 — Santander et al.",
    title_es: "geoL en Geomin-Mineplanning 2025 — Santander et al.",
    date: "2025-06-11",
    category: "Conference",
    project: "el-teniente-etapa-3",
    excerpt: "Evolution of damage prior to induced failure in rocks from El Teniente mine.",
    excerpt_es: "Evolución del daño previo a la falla inducida en rocas de la mina El Teniente.",
    body: "Santander, P., Cortez, J., Browning, J., Roquer, T., Clunes, M., Marquardt, C., Benson, P., Koor, N., Sepúlveda, M.P., León, Í., Díaz, D., González, R., Celhay, F. & Orellana, L.F. presented \"Evolution of damage prior to induce failure in rocks from El Teniente mine\" at Geomin–Mineplanning 2025: the 9th International Conference on Geology and Mine Planning, June 11–13, 2025, Santiago, Chile.",
    body_es: "Santander, P., Cortez, J., Browning, J., Roquer, T., Clunes, M., Marquardt, C., Benson, P., Koor, N., Sepúlveda, M.P., León, Í., Díaz, D., González, R., Celhay, F. y Orellana, L.F. presentaron \"Evolution of damage prior to induce failure in rocks from El Teniente mine\" en Geomin–Mineplanning 2025: la 9ª Conferencia Internacional de Geología y Planificación Minera, del 11 al 13 de junio de 2025, Santiago, Chile."
  },
  {
    id: "geomin-2025-diaz",
    title: "geoL at Geomin-Mineplanning 2025 — Diaz et al.",
    title_es: "geoL en Geomin-Mineplanning 2025 — Diaz et al.",
    date: "2025-06-11",
    category: "Conference",
    project: "el-teniente-etapa-3",
    excerpt: "A new methodology to evaluate the reactivation of geological structures through advanced analytics at El Teniente mine.",
    excerpt_es: "Una nueva metodología para evaluar la reactivación de estructuras geológicas mediante analítica avanzada en la mina El Teniente.",
    body: "Diaz, D., Mery, N. & Orellana, L.F. presented \"Methodology to evaluate the Reactivation of Geological Structures through advanced Analytics, El Teniente Mine\" at Geomin–Mineplanning 2025: the 9th International Conference on Geology and Mine Planning, June 11–13, 2025, Santiago, Chile.",
    body_es: "Diaz, D., Mery, N. y Orellana, L.F. presentaron \"Methodology to evaluate the Reactivation of Geological Structures through advanced Analytics, El Teniente Mine\" en Geomin–Mineplanning 2025: la 9ª Conferencia Internacional de Geología y Planificación Minera, del 11 al 13 de junio de 2025, Santiago, Chile."
  }
];
