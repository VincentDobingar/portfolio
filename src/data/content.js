export const profile = {
  name: 'Vincent Dobingar Guiryambaye',
  photoUrl: '/photo-vincent.jpg',
  primaryTitle: 'Développeur Full-Stack & Data Analyst',
  titles: [
    'Ingénieur IN, VAS & MFS',
    'Consultant en Solutions Digitales',
    'Développeur Full-Stack',
    'Data Analyst',
    'Chef de Projet',
  ],
  tagline:
    "Je conçois, développe et déploie des plateformes digitales institutionnelles et business — de l'analyse du besoin à la mise en production.",
  email: 'guiryambaye.vincent@gmail.com',
  phone: '+257 62 500 305',
  location: 'Bujumbura, Burundi',
  linkedin: 'https://linkedin.com/in/dobingarvincent',
  github: 'https://github.com/VincentDobingar',
  cvUrl: '/CV_Vincent_Dobingar.pdf',
  summary:
    "Ingénieur IN, VAS & MFS, développeur full-stack et consultant en solutions digitales, avec une expérience dans la conception, l'architecture, le développement et le déploiement de plateformes institutionnelles et business. Solides compétences en analyse fonctionnelle, rédaction de cahiers des charges, architecture backend, API REST, bases de données, sécurité applicative, tableaux de bord, gestion des utilisateurs, contrôle qualité et gestion de projets digitaux. Capable de produire des livrables techniques structurés, de travailler à distance avec des équipes pluridisciplinaires et d'accompagner tout le cycle de vie d'un projet digital, de l'analyse des besoins à la validation technique.",
}

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'WordPress', 'Design responsive', 'UX/UI'],
  },
  {
    category: 'Backend & API',
    items: ['Node.js', 'Express', 'PHP', 'API REST', 'GraphQL'],
  },
  {
    category: 'Bases de données',
    items: ['PostgreSQL', 'MySQL', 'SQL Server'],
  },
  {
    category: 'Data & BI',
    items: ['Power BI', 'Excel', 'SPSS', 'R', 'Python', 'Reporting & KPIs'],
  },
  {
    category: 'Sécurité applicative',
    items: ['Authentification', 'Gestion des rôles', 'Sessions', 'CORS', 'Sécurité API'],
  },
  {
    category: 'Gestion de projet',
    items: ['PMP', 'MEAL', 'Planification', 'Coordination à distance', 'Reporting'],
  },
]

export const dataProjects = [
  {
    title: 'DataLendo-RH',
    stack: 'SQL',
    description:
      "Analyse de données RH en SQL : requêtes, indicateurs et exploration de données réalisées durant la formation en analyse de données.",
    url: 'https://github.com/VincentDobingar/DataLendo-RH',
    cta: 'Voir le code',
  },
  {
    title: 'AfriMarket Projects',
    stack: 'Python',
    description:
      'Application de data analyse en Python déployée avec Streamlit, pour explorer et visualiser des données de marché africain.',
    url: 'https://afrimarketprojects.streamlit.app/',
    cta: "Voir l'application",
  },
  {
    title: 'Projet Data Analyse R',
    stack: 'R',
    description:
      "Projet d'analyse de données réalisé en R et publié sur Posit Cloud, mettant en œuvre traitement, statistiques et visualisation de données.",
    url: 'https://019f9499-d98d-4398-5222-9875193ce2dd.share.connect.posit.cloud/',
    cta: "Voir l'application",
  },
]

export const webProjects = [
  {
    title: 'DBS Africa — Digital Business Services',
    role: 'Fondateur & Architecte Technique',
    period: '2017 — Présent',
    description:
      "Site vitrine et plateforme institutionnelle de mon propre cabinet de conseil. « Solutions Digitales. Intelligence des Données. Croissance des Entreprises. » DBS accompagne entreprises, institutions et organisations dans leur transformation digitale via des solutions web, data analytics, business intelligence et gestion de projets. Frontend React/Vite avec Tailwind CSS et Framer Motion, contenu bilingue FR/EN (i18next). Backend Node.js/Express avec MySQL, authentification JWT, gestion des rôles admin, modules projets, blog, devis et contact.",
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'JWT', 'i18n'],
    url: 'https://dbs-africa.org',
  },
  {
    title: 'SNRC — Société Nationale de Recouvrement des Créances du Tchad',
    role: 'Consultant Freelance — Développeur / Architecte Technique',
    period: 'Mars 2026 — Présent',
    description:
      "Plateforme institutionnelle structurée avec React, Node.js/Express, PostgreSQL et API REST. Modules de gestion de pages, actualités, publications, FAQ et messages. Sécurité applicative : CORS, authentification, cookies, endpoints protégés, déploiement et supervision technique.",
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST API'],
    url: 'https://www.snrc.td',
  },
  {
    title: 'Eden Business Center',
    role: 'Consultant Freelance — Développeur / Consultant Digital',
    period: 'Janvier 2026 — Présent',
    description:
      'Plateforme vitrine, administration et vente en ligne. Gestion de produits, galerie, statistiques et authentification superadmin. Backend Node.js/Express, base MySQL, API et déploiement en production.',
    tags: ['Node.js', 'Express', 'MySQL', 'E-commerce'],
    url: 'https://www.eden-businesscenter.org',
  },
  {
    title: 'Harvest Center',
    role: 'Développeur Full-Stack',
    period: 'Avril 2025 — Présent',
    description:
      "Plateforme éducative et institutionnelle : utilisateurs, rôles, enseignants, étudiants, inscriptions, programmes de formation et opportunités. Backend Node.js/Express avec MySQL, authentification et routes protégées. Contribution à l'internationalisation FR/EN.",
    tags: ['Node.js', 'Express', 'MySQL', 'i18n'],
    url: 'https://www.harvestcentertd.org',
  },
  {
    title: 'CDO Chad',
    role: 'Consultant Freelance — Développement de Solutions Digitales',
    period: 'Septembre 2024 — Présent',
    description:
      'Conception et développement de plateformes web complètes : frontend, backend, API, bases de données et interfaces d\'administration. Rédaction de cahiers des charges fonctionnels et techniques.',
    tags: ['Full-Stack', 'API', 'Déploiement cPanel'],
    url: 'https://www.cdotchad.com',
  },
  {
    title: 'ToBeMalko (2BM)',
    role: 'Partenaire & Consultant — Développement de Solutions Digitales',
    period: 'Septembre 2024 — Présent',
    description:
      "Frontend React & Material UI, API REST/GraphQL avec Node.js et PHP connectées à PostgreSQL. Authentification, gestion des rôles, tableaux de bord et modules de contenu. SEO et bonnes pratiques UX.",
    tags: ['React', 'Material UI', 'GraphQL', 'PostgreSQL'],
    url: 'https://www.2bemalko.com',
  },
]

export const experience = [
  {
    role: 'Consultant Senior IN, VAS & MFS / Data Analyst & Chef de Projet',
    org: 'Télécommunications et services digitaux',
    period: 'Juillet 2023 — Présent',
    points: [
      "Analyse et réconciliation de fichiers collectés auprès d'opérateurs mobiles.",
      "Automatisation de rapports, structuration de données, suivi d'indicateurs.",
      "Coordination technique, suivi des anomalies et amélioration continue des processus.",
    ],
  },
  {
    role: 'Consultant Facilitateur — Formation Marketing Digital',
    org: 'SESA — IRC en Consortium (Programme UE), Burundi',
    period: '2025 — 2026',
    points: [
      "Animation de formations intégrant outils digitaux et systèmes de suivi.",
      "Suivi des participants et contrôle de la performance des programmes.",
      "Contribution au reporting de données et à l'évaluation des programmes.",
    ],
  },
  {
    role: 'Consultant Plateforme Sécurisée et MEAL',
    org: 'FAO — Tchad',
    period: '2021',
    points: [
      "Conception de cadres MEAL et plans de gestion de l'information.",
      "Développement d'outils de collecte de données et d'indicateurs de suivi.",
      'Production de tableaux de bord Power BI pour le suivi de programme et le reporting bailleurs.',
    ],
  },
  {
    role: 'Enquêteur Spécialisé — Sécurité Alimentaire',
    org: "Ministère de l'Agriculture / PAM / FAO / UNICEF — Tchad",
    period: '2019 — 2020',
    points: [
      "Missions d'évaluation de la sécurité alimentaire et de collecte de données.",
      'Validation des données et contrôle qualité.',
      "Préparation de jeux de données pour l'analyse en contexte humanitaire.",
    ],
  },
  {
    role: 'Partenaire et Chef de Projet Technique',
    org: 'SALY SYSTEM — Startup de développement d\'applications digitales, Tchad',
    period: '2021 — 2023',
    points: [
      'Conception et mise en œuvre de systèmes de données et tableaux de bord.',
      'Gestion de projets ICT et data pour le suivi de la performance.',
      "Production d'analyses KPI et de rapports de business intelligence.",
    ],
  },
  {
    role: 'Fondateur et Directeur Exécutif',
    org: 'Digital Business Services — Tchad',
    period: '2017 — Présent',
    points: [
      "Création et direction d'un cabinet de conseil en solutions data pour PME.",
      'Conception de systèmes de transformation digitale et de suivi.',
      'Développement de cadres de suivi de la performance organisationnelle.',
    ],
  },
  {
    role: 'BI Analyst — Revenue Assurance, Interconnexion, Développement Commercial',
    org: 'Millicom Tigo — Tchad',
    period: '2012 — 2017',
    points: [
      'Développement de systèmes de reporting et tableaux de bord SQL.',
      "Automatisation de l'analyse de données et de la détection d'anomalies.",
      'Appui au suivi de performance et à la maîtrise des risques.',
    ],
  },
]

export const education = [
  {
    degree: "Master en Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE)",
    school: 'USTTB — Bamako, Mali',
    year: '2010',
  },
  {
    degree: "DUT en Systèmes d'Information de Gestion",
    school: 'USTTB — Bamako, Mali',
    year: '2007',
  },
]

export const certifications = [
  { name: 'Project Management Professional (PMP)', org: 'PMI', year: '2025', status: 'Obtenu' },
  { name: 'MEAL Fundamentals', org: 'DisasterReady', year: '2025', status: 'Obtenu' },
  { name: 'Data Analysis with Excel, SPSS and Power BI', org: 'CCL — Maroc', year: '2024', status: 'Obtenu' },
  { name: 'Full Stack Web Development (React, JavaScript, Node.js, Web3)', org: 'Udemy', year: '2025 — 2026', status: 'Obtenu' },
  { name: 'AI Expertise (ChatGPT, Claude, Midjourney, Jasper, Stable Diffusion, DeepSeek)', org: 'Cousiv', year: '2025 — 2026', status: 'Obtenu' },
]

export const languages = [
  { name: 'Français', level: 'Excellent' },
  { name: 'Anglais', level: 'Bon' },
  { name: 'Arabe tchadien / autres langues locales', level: 'Bon' },
]

export const tools = [
  'React', 'JavaScript', 'Node.js', 'Express', 'WordPress', 'SQL Server', 'MySQL',
  'PostgreSQL', 'API REST', 'Git', 'cPanel', 'Passenger', 'Power BI', 'Excel',
]
