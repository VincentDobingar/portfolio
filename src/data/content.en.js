export const profile = {
  name: 'Vincent Dobingar Guiryambaye',
  photoUrl: '/photo-vincent.jpg',
  primaryTitle: 'Mobile Money, DFS & Data Analyst Expert',
  titles: [
    'Revenue Assurance & Data Reconciliation',
    'PMP Consultant — Digital Solutions',
    'Full-Stack Developer',
  ],
  tagline:
    "10+ years across telecommunications, digital financial services (Mobile Money, Airtel Money) and financial data analysis — I make transactional data trustworthy, and I build the platforms that run on it.",
  email: 'guiryambaye.vincent@gmail.com',
  phone: '+257 62 500 305',
  location: 'Bujumbura, Burundi — Open to relocation (Chad & Africa)',
  linkedin: 'https://linkedin.com/in/dobingarvincent',
  github: 'https://github.com/VincentDobingar',
  cvUrl: '/CV_Vincent_Dobingar_MobileMoney_DFS.pdf',
  summary:
    "IT and data professional with 10+ years of experience in telecommunications and digital financial services (Mobile Money, Airtel Money, DFS), as well as financial data analysis and Revenue Assurance (Millicom Tigo). Proven expertise in reconciling transactional data (wallet, agents, merchants), KPI tracking, Power BI dashboards, KYC/AML compliance and PMP-certified project management. In parallel, I design and build complete web platforms — frontend, backend, APIs, databases, application security — for institutions and SMEs across Chad and Africa. A hybrid, hands-on profile able to run a digital project end to end, from needs analysis to decision-oriented reporting.",
}

export const cvOptions = [
  {
    key: 'dfs',
    label: 'Resume — Mobile Money & DFS',
    description: 'IT operations, Mobile Money, Airtel Money, digital financial services',
    url: '/CV_Vincent_Dobingar_MobileMoney_DFS.pdf',
  },
  {
    key: 'finance',
    label: 'Resume — Data Analyst & Finance',
    description: 'Financial reporting, data reconciliation, Power BI',
    url: '/CV_Vincent_Dobingar_DataAnalyst_Finance.pdf',
  },
]

export const highlights = [
  { icon: 'database', label: 'Transactional data reconciliation & Revenue Assurance (Mobile Money, telecom)' },
  { icon: 'shield', label: 'KYC/AML compliance and security of critical transactional systems' },
  { icon: 'users', label: 'PMP-certified project management, multi-country and multicultural coordination' },
  { icon: 'code', label: 'Complete full-stack architectures for institutional platforms and SMEs' },
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
    url: 'https://github.com/VincentDobingar/Sahel_Deplacement_UN',
    cta: 'View code',
  },
  {
    title: 'Cameroon Healthcare Consultations Analysis',
    stack: 'R / Shiny',
    description:
      "Analysis of 10,068 health consultations across Cameroon's 10 regions (2025): medication stockouts (18% on average), health insurance coverage, treatment costs and disparities in access to care. R-based data cleaning pipeline (tidyverse) and an interactive Shiny dashboard for decision support.",
    url: 'https://github.com/VincentDobingar/SanteCameroun',
    cta: 'View code',
  },
  {
    title: 'DataLendo-RH',
    stack: 'SQL',
    description:
      'HR data analysis in SQL: queries, indicators and data exploration built during my data analysis training.',
    url: 'https://github.com/VincentDobingar/DataLendo-RH',
    cta: 'View code',
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
    title: 'EduManage Africa',
    role: 'Designer & Full-Stack Developer',
    period: '2026',
    description:
      'A multi-tenant SaaS platform for managing educational institutions across Africa: enrollment, staff management, curriculum, scheduling, grading, attendance and discipline, plus financial management with integrated Mobile Money payments. Secure multi-tenant architecture (Row-Level Security) built as a Turborepo monorepo.',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Redis', 'Mobile Money'],
    url: 'https://github.com/VincentDobingar/dbs_education_project',
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
    role: 'Senior IN, VAS & MFS (Mobile Financial Services) Consultant / Data Analyst & Project Manager',
    org: 'Telecommunications and Digital Financial Services, Bujumbura, Burundi',
    period: 'July 2023 — Present',
    points: [
      'Oversaw VAS/MFS (Mobile Money) activities: wallet, USSD, agent and merchant network, KYC/AML, interoperability.',
      'Reconciled mobile network operator (MNO) files — multi-source data matching, equivalent to bank reconciliation logic.',
      'Designed DAX measures for Power BI dashboards, automated Excel/VBA reporting, tracked KPIs and supported management reporting.',
      'Coordinated technical and business teams, managed anomalies and incidents, ensured regulatory compliance of critical transactional systems.',
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
    period: '2021 — 2023',
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
