export const profile = {
  name: 'Guiryambaye Vincent DOBINGAR',
  photoUrl: '/photo-vincent.jpg',
  primaryTitle: 'Revenue Assurance, Fraud & Data — Mobile Money / DFS',
  titles: [
    'Telecom Fraud Detection & Data Reconciliation',
    'PMP-Certified Project Manager',
    'Full-Stack Developer',
  ],
  tagline:
    "14 years in telecoms and digital financial services. I build the platforms that detect fraud, reconcile operator data and protect revenue — from Millicom Tigo in Chad to the Lumitel, Econet and Onatel operators in Burundi.",
  email: 'guiryambaye.vincent@gmail.com',
  phone: '+257 62 500 305',
  location: 'Bujumbura, Burundi — Open to relocation (Chad & Africa)',
  linkedin: 'https://linkedin.com/in/dobingarvincent',
  github: 'https://github.com/VincentDobingar',
  cvUrl: '/CV_Guiryambaye_Vincent_DOBINGAR_RevenueAssurance_Fraud_EN.pdf',
  summary:
    "Revenue Assurance, fraud and data specialist with 14 years of experience in telecommunications and Mobile Money. At Millicom Tigo (Chad) I built the SQL reporting and anomaly-detection systems for Revenue Assurance and interconnection. Today at NP Holding (Burundi) I lead and build the compliance and control platforms covering Lumitel, Econet and Onatel: a multi-operator KYC system, the ITS-RAFM fraud and revenue assurance platform, and voice CDR integration at billion-row scale. PMP-certified, I cover the whole chain: requirements, data (SQL Server, Oracle, Power BI), full-stack development (React, Node.js) and executive reporting.",
}

export const cvOptions = [
  {
    key: 'dfs',
    label: 'Resume — Revenue Assurance & Fraud',
    description: 'Revenue Assurance, fraud detection, KYC/AML, Mobile Money / DFS',
    url: '/CV_Guiryambaye_Vincent_DOBINGAR_RevenueAssurance_Fraud_EN.pdf',
  },
  {
    key: 'finance',
    label: 'Resume — Data Analyst & BI',
    description: 'SQL, Power BI, Python, R — telecom, finance and humanitarian data',
    url: '/CV_Guiryambaye_Vincent_DOBINGAR_DataAnalyst_BI_EN.pdf',
  },
]

export const highlights = [
  { icon: 'database', label: 'Revenue Assurance & fraud detection: RAFM platform, voice CDRs across 1+ billion rows' },
  { icon: 'shield', label: 'Multi-operator KYC/AML compliance (Lumitel, Econet, Onatel) and audit of transactional systems' },
  { icon: 'users', label: 'PMP-certified project management, reporting to the Executive Committee' },
  { icon: 'code', label: 'End-to-end full-stack platforms: React, Node.js, SQL Server, Oracle, PostgreSQL' },
]

export const skills = [
  {
    category: 'Mobile Money / DFS',
    items: ['Wallet', 'USSD', 'Agent & merchant network', 'KYC/AML', 'Interoperability', 'Payment switch'],
  },
  {
    category: 'Finance & Revenue Assurance',
    items: ['Data reconciliation', 'Bank reconciliation', 'Anomaly detection', 'Consistency control', 'Financial reporting'],
  },
  {
    category: 'Business Intelligence & Data',
    items: ['Power BI', 'DAX', 'Power Query', 'Advanced Excel (VBA)', 'SQL', 'Python', 'R'],
  },
  {
    category: 'Project Management',
    items: ['PMP', 'Agile', 'Functional Analysis', 'IT Governance', 'Remote Coordination'],
  },
  {
    category: 'Full-Stack Development',
    items: ['React', 'Node.js', 'Express', 'REST API', 'GraphQL', 'WordPress'],
  },
  {
    category: 'Databases & Security',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Authentication', 'Roles & sessions', 'CORS'],
  },
]

export const dataProjects = [
  {
    title: 'Sahel Displacement & Food Security',
    stack: 'Python / Power BI',
    description:
      'Humanitarian data analysis on population displacement and food insecurity across Mali, Burkina Faso and Niger (2015-2024). Automated data pipeline pulling from UNHCR, IDMC, FAOSTAT, ACLED and IPC sources, a bilingual FR/EN dashboard and an interactive Power BI report for donors and humanitarian organizations.',
    url: 'https://sahel-deplacement-un-r6mf.vercel.app',
    cta: 'View dashboard',
  },
  {
    title: 'Cameroon Healthcare Consultations Analysis',
    stack: 'R / Shiny',
    description:
      "Analysis of 10,068 health consultations across Cameroon's 10 regions (2025): medication stockouts (18% on average), health insurance coverage, treatment costs and disparities in access to care. R-based data cleaning pipeline (tidyverse) and an interactive Shiny dashboard for decision support.",
    url: 'https://santestatic.vercel.app',
    cta: 'View report',
  },
  {
    title: 'DataLendo-RH',
    stack: 'SQL',
    description:
      'HR data analysis in SQL: headcount, turnover and performance across 1,500 employees and 18,000 quarterly reviews. Queries, indicators and an interactive dashboard built during my data analysis training.',
    url: 'https://site-taupe-nine-66.vercel.app',
    cta: 'View dashboard',
  },
  {
    title: 'AfriMarket Projects',
    stack: 'Python',
    description:
      'Python data analysis application deployed with Streamlit, to explore and visualize African market data.',
    url: 'https://afrimarketprojects.streamlit.app/',
    cta: 'View app',
  },
  {
    title: 'R Data Analysis Project',
    stack: 'R',
    description:
      'A data analysis project built in R and published on Posit Cloud, covering data processing, statistics and visualization.',
    url: 'https://019f9499-d98d-4398-5222-9875193ce2dd.share.connect.posit.cloud/',
    cta: 'View app',
  },
]

export const webProjects = [
  {
    title: 'DBS Africa — Digital Business Services',
    role: 'Founder & Technical Architect',
    period: '2017 — Present',
    description:
      '"Digital Solutions. Data Insights. Business Growth." — the showcase and institutional platform of my own consulting firm. DBS helps companies, institutions and organizations accelerate their digital transformation through web solutions, data analytics, business intelligence and project management. React/Vite frontend with Tailwind CSS and Framer Motion, bilingual FR/EN content (i18next). Node.js/Express backend with MySQL, JWT authentication, admin role management, and modules for projects, blog, quotes and contact.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'JWT', 'i18n'],
    url: 'https://dbs-africa.org',
  },
  {
    title: 'KYC Management System',
    role: 'Designer & Full-Stack Developer',
    period: '2026',
    description:
      "A KYC compliance platform unifying subscriber records from Burundi's three mobile operators into a centralized system for case management, risk assessment and regulatory audits. Cross-operator data reconciliation, rules-based risk and fraud scoring with anomaly detection, real-time compliance alerts, role-based access control (Admin, Analyst, Auditor) and complete audit trails. Bilingual FR/EN interface.",
    tags: ['React', 'Node.js', 'Express', 'SQL Server', 'JWT', 'Socket.IO', 'KYC/AML'],
    url: 'https://github.com/VincentDobingar/kyc_Management_Project',
  },
  {
    title: 'ITS-RAFM — Revenue Assurance & Fraud Management Platform',
    role: 'Project Manager & Full-Stack Developer',
    period: '2026',
    description:
      'Telecom intelligence platform for fraud detection and revenue assurance in Burundi, covering the Lumitel, Econet and Onatel operators, alongside the KYC system. Alarm dashboard and management, AI risk scoring, cross-operator revenue reconciliation, an investigation workspace (cases, assignment, notes, attachments), a CDR Explorer reading live voice, recharge, transfer and Mobile Money transaction records from Oracle, a fraud rule engine, Excel/CSV/PDF exports and a full audit trail. Delivered in phases, with bilingual FR/EN documentation and presentation.',
    tags: ['React', 'Material UI', 'Node.js', 'Express', 'SQL Server', 'Oracle', 'Socket.IO', 'Revenue Assurance'],
  },
  {
    title: 'SBC Call Data Integration — Voice CDRs',
    role: 'Project Manager & Full-Stack Developer',
    period: '2026',
    description:
      "Integration of SBC (Session Border Controller) voice CDRs into a telecom reporting tool in Burundi, replacing Excel extracts that hung on large volumes. Successful / failed call views, CSV export and asynchronous bulk export, on day-partitioned Oracle tables (over 1.3 billion rows, ~1.1M failed calls per day). Day-by-day query optimization: last 24 hours and 7 days load in under a second. Session-based sign-in, brute-force lockout, audit logging and HTTPS deployment as a Windows service. Project tracking and reporting to the Executive Committee.",
    tags: ['Node.js', 'Express', 'Oracle', 'React', 'SQL Optimization', 'Telecom'],
  },
  {
    title: 'EduManage Africa',
    role: 'Designer & Full-Stack Developer',
    period: '2026',
    description:
      'A multi-tenant SaaS platform for managing educational institutions across Africa: enrollment, staff management, curriculum, scheduling, grading, attendance and discipline, plus financial management with integrated Mobile Money payments. Secure multi-tenant architecture (Row-Level Security) built as a Turborepo monorepo.',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Redis', 'Mobile Money'],
    url: 'https://dbseducationproject.vercel.app',
  },
  {
    title: 'CityMove — Taxi & Vehicle Rental Ecosystem',
    role: 'Designer & Mobile Developer',
    period: '2026',
    description:
      'Three native Android apps (Manager, Client, Driver) for a taxi and vehicle rental company, plus a web version (PWA) for iPhone. Ride booking, real-time driver GPS tracking, nearest-taxi sorting, fare calculation, fleet and rental contract management with due-date alerts, Mobile Money payment, PDF receipts and driver ratings. Phone sign-in (OTP), offline mode, tested Firestore security rules, and an interface in French, English, Swahili and Kirundi.',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Firestore', 'Google Maps', 'PWA', 'Mobile Money'],
  },
  {
    title: 'ADN Santé Plus — Health Center Management',
    role: 'Designer & Full-Stack Developer',
    period: '2026',
    description:
      'Management system for Centre Djenandoum Naasson (CDN) and ADN Santé Plus, an HIV/AIDS care center in Moundou, Chad, providing free care to over 1,800 patients. Patient and appointment management with a calendar, secure authentication and email notifications, built from a specification written with the center.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'JWT', 'Healthcare'],
    url: 'https://github.com/VincentDobingar/ADN-Sant--Plus',
  },
  {
    title: 'FN & Partners — Law Firm',
    role: 'Designer & Full-Stack Developer',
    period: '2026',
    description:
      "Bilingual FR/EN institutional website for a law and legal advisory firm in Chad: 22 SEO-optimized practice-area pages, blog, legal FAQ and online appointment booking with attachments. Multi-step request form stored in MySQL, staff back-office for triaging requests and an authenticated client portal. Technical SEO (sitemap, structured data, Open Graph) and security headers (CSP, HSTS).",
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'SEO', 'i18n'],
    url: 'https://nf-partnerscom.vercel.app',
  },
  {
    title: 'Eden Datawize — Data Training in Africa',
    role: 'Designer & Full-Stack Developer',
    period: '2026',
    description:
      "Bilingual FR/EN platform for a data skills training provider (data analysis, Power BI, SQL, Python, Data Science, AI) operating in Chad and Rwanda. Course catalog, sessions, enrollments, corporate quotes, learner portal and admin back-office. Statically generated (SSG) React/TypeScript frontend, Express API with Prisma, JWT and two-factor (2FA) authentication, and a multi-provider payment engine (PayPal, MTN MoMo, GIMACPAY, Paypack).",
    tags: ['React', 'TypeScript', 'Express', 'Prisma', '2FA', 'Mobile Money', 'i18n'],
    url: 'https://github.com/VincentDobingar/eden-datawize',
  },
  {
    title: 'NDOF Consulting — Engineering Firm',
    role: 'Designer & Full-Stack Developer',
    period: '2026',
    description:
      "Showcase website and back-office for an engineering and works-supervision firm based in N'Djamena (feasibility studies, execution plans, tender documents, site supervision). Presents expertise and completed projects, with a secure admin interface to manage projects and images. React/Vite frontend on Vercel, Express API on Render, hosted MySQL database (Aiven), JWT authentication.",
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'JWT'],
    url: 'https://ndof-consulting.vercel.app',
  },
  {
    title: 'SNRC — Société Nationale de Recouvrement des Créances du Tchad',
    role: 'Freelancer Consultant — Developer / Technical Architect',
    period: 'March 2026 — Present',
    description:
      'Structured an institutional platform using React, Node.js/Express, PostgreSQL and REST APIs. Modules for managing pages, news, publications, FAQs and messages. Application security: CORS, authentication, cookies, protected endpoints, deployment and technical supervision.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST API'],
    url: 'https://www.snrc.td',
  },
  {
    title: 'Eden Business Center',
    role: 'Freelancer Consultant — Developer / Digital Consultant',
    period: 'January 2026 — Present',
    description:
      'Showcase, administration and online sales platform. Product management, gallery, statistics and superadmin authentication. Node.js/Express backend, MySQL database, APIs and production deployment.',
    tags: ['Node.js', 'Express', 'MySQL', 'E-commerce'],
    url: 'https://www.eden-businesscenter.org',
  },
  {
    title: 'Harvest Center',
    role: 'Full-Stack Developer',
    period: 'April 2025 — Present',
    description:
      'Educational and institutional platform covering users, roles, teachers, students, enrolments, training programs, content and opportunities. Node.js/Express backend with MySQL database, authentication, session management and protected routes. Contributed to FR/EN internationalization.',
    tags: ['Node.js', 'Express', 'MySQL', 'i18n'],
    url: 'https://www.harvestcentertd.org',
  },
  {
    title: 'CDO Chad',
    role: 'Freelance Consultant — Digital Solutions Development',
    period: 'September 2024 — Present',
    description:
      'Designed and developed complete web platforms: frontend, backend, APIs, databases and administration interfaces. Drafted functional and technical specifications to structure business needs and guide development work.',
    tags: ['Full-Stack', 'API', 'cPanel Deployment'],
    url: 'https://www.cdotchad.com',
  },
  {
    title: 'ToBeMalko (2BM)',
    role: 'Partner & Consultant — Digital Solutions Development',
    period: 'September 2024 — Present',
    description:
      'React & Material UI frontend, REST/GraphQL APIs with Node.js and PHP connected to PostgreSQL. Authentication, role management, dashboards and content modules. SEO and UX best practices.',
    tags: ['React', 'Material UI', 'GraphQL', 'PostgreSQL'],
    url: 'https://www.2bemalko.com',
  },
  {
    title: 'Anti-Discrimination Reporting Platform',
    role: 'Designer & Full-Stack Developer',
    period: '2026',
    description:
      'A web application for reporting and tracking declarations related to discrimination incidents. React frontend, Node.js backend with a dedicated API.',
    tags: ['React', 'Node.js', 'REST API'],
    url: 'https://github.com/VincentDobingar/antidiscrimination',
  },
]

export const experience = [
  {
    role: 'Senior IN, VAS & MFS Consultant — Data Analyst & Project Manager (Revenue Assurance, Fraud, KYC)',
    org: 'NP Holding — Telecommunications and Digital Financial Services, Bujumbura, Burundi',
    period: 'July 2023 — Present',
    points: [
      'Designed and led the ITS-RAFM platform (Revenue Assurance & Fraud Management): alarms, risk scoring, cross-operator revenue reconciliation, investigation cases and executive reporting.',
      'Built a KYC system centralizing Lumitel, Econet and Onatel subscribers: cross-operator reconciliation, risk scoring, compliance alerts and audit trail.',
      'Integrated SBC voice CDRs (Oracle tables of 1+ billion rows, ~1.1M failed calls/day): successful/failed views and exports, cutting load times from minutes to under a second.',
      'Oversaw VAS/MFS activities (wallet, USSD, agents and merchants, interoperability), reconciled operator files, built Power BI/DAX dashboards and reported to the Executive Committee.',
    ],
  },
  {
    role: 'Independent Consultant — Digital Development & Functional Analysis (MOA)',
    org: 'Various clients, Chad (remote) — SNRC, Eden Business Center, Harvest Center, CDO Chad',
    period: '2023 — Present',
    points: [
      'Designed complete web platforms (frontend, backend, REST APIs, databases, admin interfaces) for institutions and SMEs.',
      'Gathered requirements and drafted functional and technical specifications; ran Agile project management (sprints, backlog).',
      'Application security (authentication, CORS, protected endpoints) and technical support in production.',
    ],
  },
  {
    role: 'Facilitator Consultant — Digital Marketing Training',
    org: 'SESA — IRC in Consortium (EU Programme), Burundi',
    period: '2025 — 2026',
    points: [
      'Delivered training programs integrating digital tools and monitoring systems.',
      'Supported participant monitoring and program performance control.',
      'Contributed to data reporting and program evaluation processes.',
    ],
  },
  {
    role: 'Secure Platform and MEAL Consultant',
    org: 'FAO — Chad',
    period: '2021',
    points: [
      'Designed MEAL frameworks and information management plans.',
      'Developed data collection tools and monitoring indicators.',
      'Produced Power BI dashboards for program monitoring and donor reporting.',
    ],
  },
  {
    role: 'Specialized Enumerator — Food Security',
    org: 'Ministry of Agriculture / World Food Programme / FAO / UNICEF — Chad',
    period: '2019 — 2020',
    points: [
      'Conducted food security assessments and data collection missions.',
      'Ensured data validation and quality control.',
      'Prepared datasets for analysis and reporting in humanitarian contexts.',
    ],
  },
  {
    role: 'Partner and Technical Project Manager',
    org: 'SALY SYSTEM — Digital application development startup, Chad',
    period: 'February 2021 — June 2023',
    points: [
      'Led the design and implementation of data systems and dashboards.',
      'Managed ICT and data projects for performance monitoring and reporting.',
      'Produced KPI analyses and business intelligence reports.',
    ],
  },
  {
    role: 'Founder and Executive Director',
    org: 'DBS Africa — Digital Business Services, Chad',
    period: '2017 — Present',
    points: [
      'Founded and managed a consulting firm providing digital and data-driven solutions for SMEs.',
      'Designed digital transformation and organizational performance monitoring systems.',
      'Developed organizational performance monitoring frameworks.',
    ],
  },
  {
    role: 'BI Analyst — Revenue Assurance, Interconnection, Business Development',
    org: 'Millicom Tigo — Chad',
    period: '2012 — 2017',
    points: [
      'Developed SQL-based reporting systems and dashboards to track revenue and performance.',
      'Automated data analysis and anomaly detection (Revenue Assurance) — identifying financial discrepancies and revenue leakage.',
      'Supported financial performance monitoring and operational risk mitigation.',
    ],
  },
]

export const education = [
  {
    degree: "Master's Degree in Computer Methods Applied to Business Management (MIAGE)",
    school: 'USTTB — Bamako, Mali',
    year: '2010',
  },
  {
    degree: 'DUT in Management Information Systems',
    school: 'USTTB — Bamako, Mali',
    year: '2007',
  },
]

export const certifications = [
  { name: 'Project Management Professional (PMP)', org: 'PMI', year: '2025', status: 'done' },
  { name: 'MEAL Fundamentals', org: 'DisasterReady', year: '2025', status: 'done' },
  { name: 'Data Analysis (Excel, SPSS, Power BI)', org: 'CCL — Morocco', year: '2024', status: 'done' },
  { name: 'Data Analysis with Claude (Excel, Power BI, Python and R)', org: 'Eureca', year: '2026', status: 'done' },
  { name: 'Full Stack Web Development (React, JavaScript, Node.js, Web3)', org: 'Udemy', year: '2025 — 2026', status: 'done' },
  { name: 'Applied AI (ChatGPT, Claude, Midjourney, Jasper, Stable Diffusion, DeepSeek)', org: 'Cousiv', year: '2025 — 2026', status: 'done' },
]

export const languages = [
  { name: 'French', level: 'Excellent' },
  { name: 'English', level: 'Fluent' },
  { name: 'Chadian Arabic / other local languages', level: 'Good' },
]

export const tools = [
  'Power BI', 'DAX', 'Power Query', 'Excel', 'VBA', 'SQL Server', 'MySQL', 'PostgreSQL',
  'Python', 'R', 'React', 'Node.js', 'Express', 'REST API', 'GraphQL', 'Git', 'JIRA',
  'cPanel', 'Passenger', 'PMP',
]
