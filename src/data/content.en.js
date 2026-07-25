export const profile = {
  name: 'Vincent Dobingar Guiryambaye',
  photoUrl: '/photo-vincent.jpg',
  primaryTitle: 'Full-Stack Developer & Data Analyst',
  titles: [
    'IN, VAS & MFS Engineer',
    'Digital Solutions Consultant',
    'Full-Stack Developer',
    'Data Analyst',
    'Project Manager',
  ],
  tagline:
    "I design, build and deploy institutional and business-oriented digital platforms — from needs analysis to production deployment.",
  email: 'guiryambaye.vincent@gmail.com',
  phone: '+257 62 500 305',
  location: 'Bujumbura, Burundi',
  linkedin: 'https://linkedin.com/in/dobingarvincent',
  github: 'https://github.com/VincentDobingar',
  cvUrl: '/CV_Vincent_Dobingar.pdf',
  summary:
    "IN, VAS & MFS Engineer, full-stack developer and digital solutions consultant with experience in the design, architecture, development and deployment of institutional and business-oriented digital platforms. Strong skills in functional analysis, technical specification writing, backend architecture, REST APIs, databases, application security, dashboards, user management, quality control and digital project management. Able to produce structured technical deliverables, work remotely with multidisciplinary teams and support the full lifecycle of a digital project, from needs analysis to technical validation.",
}

export const highlights = [
  { icon: 'code', label: 'Designed complete full-stack architectures (frontend, backend, database, admin)' },
  { icon: 'database', label: 'Data analysis, reporting and automation to support decision-making' },
  { icon: 'shield', label: 'Application security: authentication, roles, API, sessions' },
  { icon: 'users', label: 'Coordinated digital projects with multidisciplinary remote teams' },
]

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'WordPress', 'Responsive Design', 'UX/UI'],
  },
  {
    category: 'Backend & API',
    items: ['Node.js', 'Express', 'PHP', 'REST API', 'GraphQL'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQL Server'],
  },
  {
    category: 'Data & BI',
    items: ['Power BI', 'Excel', 'SPSS', 'R', 'Python', 'Reporting & KPIs'],
  },
  {
    category: 'Application Security',
    items: ['Authentication', 'Role Management', 'Sessions', 'CORS', 'API Security'],
  },
  {
    category: 'Project Management',
    items: ['PMP', 'MEAL', 'Planning', 'Remote Coordination', 'Reporting'],
  },
]

export const dataProjects = [
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
]

export const experience = [
  {
    role: 'Senior IN, VAS & MFS Consultant / Data Analyst & Project Manager',
    org: 'Telecommunications and digital services',
    period: 'July 2023 — Present',
    points: [
      'Analyzed and reconciled files collected from mobile network operators.',
      'Automated reports, structured data, monitored indicators and supported operational decision-making.',
      'Coordinated technical activities, tracked anomalies, documented findings and contributed to continuous process improvement.',
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
    org: 'Digital Business Services — Chad',
    period: '2017 — Present',
    points: [
      'Founded and managed a consulting firm providing data-driven solutions for SMEs.',
      'Designed digital transformation and monitoring systems.',
      'Developed organizational performance monitoring frameworks.',
    ],
  },
  {
    role: 'BI Analyst — Revenue Assurance, Interconnection, Business Development',
    org: 'Millicom Tigo — Chad',
    period: '2012 — 2017',
    points: [
      'Developed SQL-based reporting systems and dashboards.',
      'Automated data analysis and anomaly detection processes.',
      'Supported performance monitoring and risk mitigation.',
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
  { name: 'Data Analysis with Excel, SPSS and Power BI', org: 'CCL — Morocco', year: '2024', status: 'done' },
  { name: 'Full Stack Web Development (React, JavaScript, Node.js, Web3)', org: 'Udemy', year: '2025 — 2026', status: 'done' },
  { name: 'AI Expertise (ChatGPT, Claude, Midjourney, Jasper, Stable Diffusion, DeepSeek)', org: 'Cousiv', year: '2025 — 2026', status: 'done' },
]

export const languages = [
  { name: 'French', level: 'Excellent' },
  { name: 'English', level: 'Good' },
  { name: 'Chadian Arabic / other local languages', level: 'Good' },
]

export const tools = [
  'React', 'JavaScript', 'Node.js', 'Express', 'WordPress', 'SQL Server', 'MySQL',
  'PostgreSQL', 'REST API', 'Git', 'cPanel', 'Passenger', 'Power BI', 'Excel',
]
