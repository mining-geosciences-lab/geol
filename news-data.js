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
  }
];
