export const profile = {
  name: 'Guiryambaye Vincent DOBINGAR',
  photoUrl: '/photo-vincent.jpg',
  primaryTitle: 'Revenue Assurance, Fraude & Data — Mobile Money / DFS',
  titles: [
    'Détection de fraude & Réconciliation de données télécom',
    'Chef de projet certifié PMP',
    'Développeur Full-Stack',
  ],
  tagline:
    "14 ans dans les télécoms et les services financiers digitaux. Je conçois les plateformes qui détectent la fraude, réconcilient les données des opérateurs et sécurisent les revenus — de Millicom Tigo au Tchad aux opérateurs Lumitel, Econet et Onatel au Burundi.",
  email: 'guiryambaye.vincent@gmail.com',
  phone: '+257 62 500 305',
  location: 'Bujumbura, Burundi — Ouvert à la relocalisation (Tchad & Afrique)',
  linkedin: 'https://linkedin.com/in/dobingarvincent',
  github: 'https://github.com/VincentDobingar',
  cvUrl: '/CV_Guiryambaye_Vincent_DOBINGAR_RevenueAssurance_Fraude.pdf',
  summary:
    "Spécialiste Revenue Assurance, fraude et data avec 14 ans d'expérience dans les télécommunications et le Mobile Money. Chez Millicom Tigo (Tchad), j'ai bâti les systèmes de reporting SQL et de détection d'anomalies de la Revenue Assurance et de l'interconnexion. Aujourd'hui chez NP Holding (Burundi), je pilote et développe les plateformes de conformité et de contrôle couvrant Lumitel, Econet et Onatel : système KYC multi-opérateurs, plateforme ITS-RAFM de détection de fraude et d'assurance des revenus, intégration des CDR voix à l'échelle du milliard de lignes. Certifié PMP, je couvre toute la chaîne : analyse du besoin, données (SQL Server, Oracle, Power BI), développement full-stack (React, Node.js) et reporting à la direction.",
}

export const cvOptions = [
  {
    key: 'dfs',
    label: 'CV — Revenue Assurance & Fraude',
    description: 'Revenue Assurance, détection de fraude, KYC/AML, Mobile Money / DFS',
    url: '/CV_Guiryambaye_Vincent_DOBINGAR_RevenueAssurance_Fraude.pdf',
  },
  {
    key: 'finance',
    label: 'CV — Data Analyst & BI',
    description: 'SQL, Power BI, Python, R — télécoms, finance et données humanitaires',
    url: '/CV_Guiryambaye_Vincent_DOBINGAR_DataAnalyst_BI.pdf',
  },
]

export const highlights = [
  { icon: 'database', label: 'Revenue Assurance & détection de fraude : plateforme RAFM, CDR voix sur plus d\'1 milliard de lignes' },
  { icon: 'shield', label: 'Conformité KYC/AML multi-opérateurs (Lumitel, Econet, Onatel) et audit des systèmes transactionnels' },
  { icon: 'users', label: 'Gestion de projet certifiée PMP, reporting au Comité de Direction' },
  { icon: 'code', label: 'Plateformes full-stack de bout en bout : React, Node.js, SQL Server, Oracle, PostgreSQL' },
]

export const skills = [
  {
    category: 'Mobile Money / DFS',
    items: ['Wallet', 'USSD', 'Réseau agents & marchands', 'KYC/AML', 'Interopérabilité', 'Switch de paiement'],
  },
  {
    category: 'Finance & Revenue Assurance',
    items: ['Réconciliation de données', 'Rapprochement bancaire', "Détection d'anomalies", 'Contrôle de cohérence', 'Reporting financier'],
  },
  {
    category: 'Business Intelligence & Data',
    items: ['Power BI', 'DAX', 'Power Query', 'Excel avancé (VBA)', 'SQL', 'Python', 'R'],
  },
  {
    category: 'Gestion de projet',
    items: ['PMP', 'Agile', 'Analyse fonctionnelle (MOA)', 'Gouvernance IT', 'Coordination à distance'],
  },
  {
    category: 'Développement Full-Stack',
    items: ['React', 'Node.js', 'Express', 'API REST', 'GraphQL', 'WordPress'],
  },
  {
    category: 'Bases de données & Sécurité',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Authentification', 'Rôles & sessions', 'CORS'],
  },
]

export const dataProjects = [
  {
    title: 'Déplacement de Population & Sécurité Alimentaire au Sahel',
    stack: 'Python / Power BI',
    description:
      "Analyse de données humanitaires sur les déplacements de population et la sécurité alimentaire au Mali, Burkina Faso et Niger (2015-2024). Pipeline de collecte automatisée à partir de sources UNHCR, IDMC, FAOSTAT, ACLED et IPC, dashboard bilingue FR/EN et rapport Power BI interactif pour bailleurs et organisations humanitaires.",
    url: 'https://sahel-deplacement-un-r6mf.vercel.app',
    cta: "Voir le dashboard",
  },
  {
    title: 'Analyse des Consultations de Santé au Cameroun',
    stack: 'R / Shiny',
    description:
      "Analyse de 10 068 consultations de santé réparties sur les 10 régions du Cameroun (2025) : ruptures de stock de médicaments (18 % en moyenne), couverture d'assurance santé, coûts de traitement et disparités d'accès aux soins. Pipeline de nettoyage de données en R (tidyverse) et dashboard Shiny interactif pour l'aide à la décision.",
    url: 'https://santestatic.vercel.app',
    cta: 'Voir le rapport',
  },
  {
    title: 'DataLendo-RH',
    stack: 'SQL',
    description:
      "Analyse de données RH en SQL : effectifs, turnover et performance sur 1 500 employés et 18 000 évaluations trimestrielles. Requêtes, indicateurs et dashboard interactif réalisés durant la formation en analyse de données.",
    url: 'https://site-taupe-nine-66.vercel.app',
    cta: 'Voir le dashboard',
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
    title: 'KYC Management System',
    role: 'Concepteur & Développeur Full-Stack',
    period: '2026',
    description:
      "Plateforme de conformité KYC centralisant les données d'abonnés des trois opérateurs mobiles du Burundi pour la gestion de dossiers, l'évaluation des risques et les audits réglementaires. Réconciliation croisée entre opérateurs, scoring de risque et détection d'anomalies basés sur des règles, alertes de conformité en temps réel, contrôle d'accès par rôle (Admin, Analyste, Auditeur) et traçabilité complète des actions. Interface bilingue FR/EN.",
    tags: ['React', 'Node.js', 'Express', 'SQL Server', 'JWT', 'Socket.IO', 'KYC/AML'],
  },
  {
    title: 'ITS-RAFM — Plateforme Revenue Assurance & Fraud Management',
    role: 'Chef de Projet & Développeur Full-Stack',
    period: '2026',
    description:
      "Plateforme d'intelligence télécom pour la détection de fraude et l'assurance des revenus au Burundi, couvrant les opérateurs Lumitel, Econet et Onatel, en complément du système KYC. Tableau de bord et gestion des alarmes, scoring de risque par IA, réconciliation des revenus entre opérateurs, espace d'investigation (dossiers, assignation, notes, pièces jointes), CDR Explorer lisant en direct sur Oracle les CDR voix, recharges, transferts et transactions Mobile Money, moteur de règles de fraude, exports Excel/CSV/PDF et journal d'audit complet. Livré par phases, documentation et présentation bilingues FR/EN.",
    tags: ['React', 'Material UI', 'Node.js', 'Express', 'SQL Server', 'Oracle', 'Socket.IO', 'Revenue Assurance'],
  },
  {
    title: 'SBC Call Data Integration — CDR Voix',
    role: 'Chef de Projet & Développeur Full-Stack',
    period: '2026',
    description:
      "Intégration des CDR voix du SBC (Session Border Controller) dans l'outil de reporting télécom au Burundi, en remplacement d'extractions Excel qui bloquaient sur les gros volumes. Vues appels réussis / échoués, export CSV et export massif asynchrone, sur des tables Oracle partitionnées par jour (plus de 1,3 milliard de lignes, ~1,1 M d'appels échoués par jour). Optimisation des requêtes jour par jour : affichage des 24 h et 7 derniers jours en moins d'une seconde. Authentification par session, verrouillage anti-brute-force, audit, déploiement HTTPS en service Windows. Suivi de projet et reporting au Comité de Direction.",
    tags: ['Node.js', 'Express', 'Oracle', 'React', 'Optimisation SQL', 'Télécom'],
  },
  {
    title: 'EduManage Africa',
    role: 'Concepteur & Développeur Full-Stack',
    period: '2026',
    description:
      "Plateforme SaaS multi-établissements pour la gestion des institutions éducatives en Afrique : inscriptions, gestion du personnel, curriculum, emplois du temps, notes, présence et discipline, ainsi que gestion financière avec paiement Mobile Money intégré. Architecture multi-tenant sécurisée (Row-Level Security) en monorepo Turborepo.",
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Redis', 'Mobile Money'],
    url: 'https://dbseducationproject.vercel.app',
  },
  {
    title: 'CityMove — Écosystème de Taxis & Location de Véhicules',
    role: 'Concepteur & Développeur Mobile',
    period: '2026',
    description:
      "Trois applications Android natives (Gestionnaire, Client, Chauffeur) pour une société de taxis et de location de véhicules, avec version web (PWA) pour iPhone. Réservation de courses, suivi GPS des chauffeurs en temps réel, tri des taxis par proximité, calcul de tarif, gestion de flotte et des contrats de location avec alertes d'échéance, paiement Mobile Money, reçus PDF et notation des chauffeurs. Authentification par téléphone (OTP), mode hors-ligne, règles de sécurité Firestore testées, interface en français, anglais, swahili et kirundi.",
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Firestore', 'Google Maps', 'PWA', 'Mobile Money'],
  },
  {
    title: 'ADN Santé Plus — Gestion de Centre de Santé',
    role: 'Concepteur & Développeur Full-Stack',
    period: '2026',
    description:
      "Système de gestion pour le Centre Djenandoum Naasson (CDN) et ADN Santé Plus, centre de prise en charge du VIH/sida à Moundou (Tchad) qui soigne gratuitement plus de 1 800 patients. Gestion des patients et des rendez-vous avec calendrier, authentification sécurisée et notifications par e-mail, à partir d'un cahier des charges rédigé avec le centre.",
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'JWT', 'Santé'],
    url: 'https://github.com/VincentDobingar/ADN-Sant--Plus',
  },
  {
    title: 'FN & Partners — Cabinet d\'avocats',
    role: 'Concepteur & Développeur Full-Stack',
    period: '2026',
    description:
      "Site institutionnel bilingue FR/EN d'un cabinet d'avocats et de conseil juridique au Tchad : 22 pages domaines d'expertise optimisées SEO, blog, FAQ juridique, prise de rendez-vous en ligne avec pièces jointes. Formulaire de demande multi-étapes enregistré en base MySQL, back-office staff pour le tri des demandes et espace client authentifié. SEO technique (sitemap, données structurées, Open Graph) et en-têtes de sécurité (CSP, HSTS).",
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'SEO', 'i18n'],
    url: 'https://nf-partnerscom.vercel.app',
  },
  {
    title: 'Eden Datawize — Formation Data en Afrique',
    role: 'Concepteur & Développeur Full-Stack',
    period: '2026',
    description:
      "Plateforme bilingue FR/EN d'un organisme de formation aux métiers de la data (analyse de données, Power BI, SQL, Python, Data Science, IA) au Tchad et au Rwanda. Catalogue de formations, sessions, inscriptions, devis entreprises, espace apprenant et back-office administrateur. Frontend React/TypeScript en génération statique (SSG), API Express avec Prisma, authentification JWT et double facteur (2FA), moteur de paiement multi-prestataires (PayPal, MTN MoMo, GIMACPAY, Paypack).",
    tags: ['React', 'TypeScript', 'Express', 'Prisma', '2FA', 'Mobile Money', 'i18n'],
    url: 'https://github.com/VincentDobingar/eden-datawize',
  },
  {
    title: 'NDOF Consulting — Bureau d\'ingénierie',
    role: 'Concepteur & Développeur Full-Stack',
    period: '2026',
    description:
      "Site vitrine et back-office d'un cabinet d'ingénierie et de contrôle basé à N'Djamena (études de faisabilité, plans d'exécution, DAO, surveillance de chantiers). Présentation des expertises et des réalisations, interface d'administration sécurisée pour gérer projets et images. Frontend React/Vite sur Vercel, API Express sur Render, base MySQL hébergée (Aiven), authentification JWT.",
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'JWT'],
    url: 'https://ndof-consulting.vercel.app',
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
  {
    title: 'Plateforme de Déclaration Anti-Discrimination',
    role: 'Concepteur & Développeur Full-Stack',
    period: '2026',
    description:
      "Application web pour le signalement et le suivi de déclarations liées à des situations de discrimination. Frontend React, backend Node.js avec API dédiée.",
    tags: ['React', 'Node.js', 'API REST'],
    url: 'https://github.com/VincentDobingar/antidiscrimination',
  },
]

export const experience = [
  {
    role: 'Consultant Senior IN, VAS & MFS — Data Analyst & Chef de Projet (Revenue Assurance, Fraude, KYC)',
    org: 'NP Holding — Télécommunications et Services Financiers Digitaux, Bujumbura, Burundi',
    period: 'Juillet 2023 — Présent',
    points: [
      "Conception et pilotage de la plateforme ITS-RAFM (Revenue Assurance & Fraud Management) : alarmes, scoring de risque, réconciliation des revenus entre opérateurs, dossiers d'investigation et reporting exécutif.",
      "Mise en place d'un système KYC centralisant les abonnés de Lumitel, Econet et Onatel : réconciliation croisée, scoring de risque, alertes de conformité et piste d'audit.",
      "Intégration des CDR voix du SBC (tables Oracle de plus d'1 milliard de lignes, ~1,1 M d'appels échoués/jour) : vues réussis/échoués et exports, avec un affichage ramené de plusieurs minutes à moins d'une seconde.",
      "Supervision des activités VAS/MFS (wallet, USSD, agents et marchands, interopérabilité), réconciliation des fichiers opérateurs, tableaux de bord Power BI/DAX et reporting au Comité de Direction.",
    ],
  },
  {
    role: 'Consultant Indépendant — Développement Digital & Analyse Fonctionnelle (MOA)',
    org: 'Divers clients, Tchad (à distance) — SNRC, Eden Business Center, Harvest Center, CDO Tchad',
    period: '2023 — Présent',
    points: [
      "Conception de plateformes web complètes (frontend, backend, API REST, bases de données, interfaces d'administration) pour des institutions et PME.",
      "Recueil des besoins, rédaction de cahiers des charges et spécifications fonctionnelles et techniques, gestion de projet Agile (sprints, backlog).",
      "Sécurisation applicative (authentification, CORS, endpoints protégés) et support technique en production.",
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
    period: 'Février 2021 — Juin 2023',
    points: [
      'Conception et mise en œuvre de systèmes de données et tableaux de bord.',
      'Gestion de projets ICT et data pour le suivi de la performance.',
      "Production d'analyses KPI et de rapports de business intelligence.",
    ],
  },
  {
    role: 'Fondateur et Directeur Exécutif',
    org: 'DBS Africa — Digital Business Services, Tchad',
    period: '2017 — Présent',
    points: [
      "Création et direction d'un cabinet de conseil en solutions digitales et data pour PME.",
      'Conception de systèmes de transformation digitale et de suivi de la performance organisationnelle.',
      'Développement de cadres de suivi de la performance organisationnelle.',
    ],
  },
  {
    role: 'BI Analyst — Revenue Assurance, Interconnexion, Développement Commercial',
    org: 'Millicom Tigo — Tchad',
    period: '2012 — 2017',
    points: [
      'Développement de systèmes de reporting et tableaux de bord SQL pour le suivi des revenus et de la performance.',
      "Automatisation de l'analyse de données et détection d'anomalies (Revenue Assurance) — identification d'écarts financiers et de pertes de revenus.",
      'Appui au suivi de la performance financière et à la gestion des risques opérationnels.',
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
  { name: 'Project Management Professional (PMP)', org: 'PMI', year: '2025', status: 'done' },
  { name: 'MEAL Fundamentals', org: 'DisasterReady', year: '2025', status: 'done' },
  { name: 'Analyse de données (Excel, SPSS, Power BI)', org: 'CCL — Maroc', year: '2024', status: 'done' },
  { name: 'Analyse de données avec Claude (Excel, Power BI, Python et R)', org: 'Eureca', year: '2026', status: 'done' },
  { name: 'Full Stack Web Development (React, JavaScript, Node.js, Web3)', org: 'Udemy', year: '2025 — 2026', status: 'done' },
  { name: 'IA appliquée (ChatGPT, Claude, Midjourney, Jasper, Stable Diffusion, DeepSeek)', org: 'Cousiv', year: '2025 — 2026', status: 'done' },
]

export const languages = [
  { name: 'Français', level: 'Excellent' },
  { name: 'Anglais', level: 'Courant' },
  { name: 'Arabe tchadien / autres langues locales', level: 'Bon' },
]

export const tools = [
  'Power BI', 'DAX', 'Power Query', 'Excel', 'VBA', 'SQL Server', 'MySQL', 'PostgreSQL',
  'Python', 'R', 'React', 'Node.js', 'Express', 'API REST', 'GraphQL', 'Git', 'JIRA',
  'cPanel', 'Passenger', 'PMP',
]
