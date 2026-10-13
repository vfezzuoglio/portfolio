export const profile = {
  name: 'Vincent Fezzuoglio',
  location: 'Harriman, NY',
  email: 'Vincent.Fezzuoglio@Protonmail.com',
  phone: '(845) 309-5272',
  linkedin: 'https://www.linkedin.com/in/vincent-fezzuoglio/',
  github: 'https://github.com/vfezzuoglio',
  website: 'fezzuoglio.com',
  title: 'Software Engineer | Backend & Full-Stack',
  blurb:
    'Software Engineer with production experience building Stripe Connect payment systems, multi-tenant backends, and React Native mobile apps. M.S. Computer Science candidate with a 4.00 GPA and full-stack, AI/LLM integration, and C++ systems-programming experience.',
}

export const skills = {
  Languages: ['Python', 'TypeScript', 'JavaScript', 'C#', 'C++', 'Go', 'SQL'],
  'Backend and APIs': ['FastAPI', 'Node.js', 'Express.js', 'ASP.NET Core', 'REST APIs', 'JWT', 'Stripe Connect'],
  'Frontend and Mobile': ['React', 'React Native', 'Tailwind CSS', 'HTML5', 'CSS3'],
  'Databases and AI': ['PostgreSQL', 'SQL Server', 'Supabase', 'pgvector', 'RAG', 'Embeddings'],
  'Cloud and DevOps': ['AWS', 'Azure', 'Netlify', 'Docker', 'Docker Compose', 'CI/CD', 'Git', 'GitHub'],
  Tools: ['Claude API', 'Gemini API', 'OpenRouter', 'sentence-transformers', 'Jest', 'Postman', 'Alembic', 'Swagger/OpenAPI'],
}

type EducationEntry = {
  school: string
  location: string
  degree: string
  detail: string
  date: string
  summary?: string[]
  areas?: string[]
  activities?: string[]
}

export const education: EducationEntry[] = [
  {
    school: 'Pace University, Seidenberg School of Computer Science and Information Systems',
    location: 'New York, NY',
    degree: 'Master of Science (MS) in Computer Science',
    detail: 'GPA: 4.00',
    date: 'Jan 2025 — May 2027',
    summary: [
      "Pursuing a Master of Science in Computer Science at Pace University's Seidenberg School of Computer Science and Information Systems with a 4.0 GPA, expected May 2027.",
      'Graduate coursework has focused on advanced computer science topics including Algorithms & Computing Theory, Parallel Computing, Data Science, and Software Engineering/Capstone development. Through these courses, I’ve gained experience with algorithm design and analysis, concurrent and parallel programming, data-driven problem solving, and the software development lifecycle.',
      'My capstone work includes collaborating on the design and development of a business application using requirements analysis, AWS, Jenkins, CI/CD practices, testing, and team-based software development.',
    ],
    areas: ['Algorithms', 'Computing Theory', 'Parallel Computing', 'Data Science', 'Software Engineering', 'Cloud Computing', 'CI/CD'],
  },
  {
    school: 'Pace University, Seidenberg School of Computer Science and Information Systems',
    location: 'New York, NY',
    degree: 'Bachelor of Science (BS) in Computer Information Technology',
    detail: 'Concentration: Software Development | GPA: 3.41',
    date: '2018 — 2021',
    summary: [
      'At Pace University, I specialized in Information Technology with a focus on Software Engineering. Throughout my coursework, I gained a strong foundation in programming, database management, and computer security. Some of the key courses I completed include Intro to Programming Using Python, Database Management, Computer Forensics, and Game Development. My academic journey culminated in achieving Dean’s Second Honors in the Spring 2021 semester, demonstrating my dedication to excellence in my field.',
    ],
    activities: [
      'Tech Collective: Member of a student organization focused on fostering collaboration and innovation in the tech community.',
      'National Cyber League (NCL): Competed in cybersecurity challenges, gaining hands-on experience in securing systems and responding to real-world security threats.',
    ],
  },
  {
    school: 'Rockland Community College',
    location: 'Suffern, NY',
    degree: "Associate's Degree in Computer and Information Systems",
    detail: 'GPA: 3.2',
    date: '2015 — 2017',
    summary: [
      'During my time at Rockland Community College, I completed courses that provided a strong foundation in both networking and software development. I took CCNA 1 and 2, which introduced me to networking concepts, protocols, and the fundamentals of network management. Additionally, I studied Introduction to Computer Programming (Java), where I gained hands-on experience in Java programming and software development principles. In Web Development, I learned the basics of creating dynamic, interactive websites, including HTML, CSS, and JavaScript. These courses helped me develop a broad skill set, preparing me for more advanced studies and professional opportunities in IT and software development.',
    ],
  },
]

export const certifications = [
  { name: 'Google AI Professional Certificate', date: 'Issued Sept 2026' },
  { name: 'Microsoft Certified: Azure Fundamentals', date: 'Issued Oct 2025' },
  { name: 'MIT xPRO: Professional Certificate in Full Stack Development (MERN)', date: 'Issued Aug 2023' },
]

export const experience = [
  {
    company: 'WRTH',
    location: 'Remote, USA',
    role: 'Backend Software Engineer (Full-Time Contract)',
    date: 'May 2026 — Present',
    bullets: [
      'Built Stripe Connect payment workflows in TypeScript and Node.js with checkout idempotency and payable-amount validation; engineered a multi-tenant Supabase PostgreSQL backend for merchant inventory, role-based access, and orders, deployed on Netlify.',
      'Shipped an Android NFC companion app in React Native with Supabase PostgreSQL row-level security and NDEF read/write tag operations.',
      'Built three AI live-event activations in TypeScript and PostgreSQL using Claude Code and the Claude, Gemini, and OpenRouter APIs; added Google Wallet and head-to-head battles for 100 attendees.',
      'Hardened a Python pipeline spanning Google Lens, voting, and pricing; added six-format pattern matching, AI vision verification, an eight-category classifier with regression tests, and eBay and StockX integrations.',
      'Collaborated with product and engineering teams to deliver backend features, participated in pull requests and peer code reviews, and improved software reliability through automated testing.',
    ],
  },
  {
    company: 'Russell Cellular',
    location: 'Warwick, NY',
    role: 'Store Manager',
    date: 'Nov 2020 — Present',
    bullets: [
      'Lead and train a team of four associates; manage hiring, scheduling, inventory, and loss prevention.',
      'Exceed sales targets by more than 10% while managing daily store operations and customer experience.',
    ],
  },
]

export const volunteer = [
  {
    company: "Aunt Mary's Storybook – Companions Journeying Together",
    location: 'Remote, USA',
    role: 'Software Developer (Volunteer)',
    date: 'Aug 2025 — Feb 2026',
    bullets: [
      'Resolved 15+ authentication and role-based workflow defects, optimized SQL queries, and delivered 5+ backend features in CodeIgniter 4 using MVC architecture.',
    ],
  },
]

export const projects = [
  {
    name: 'RepairOps',
    subtitle: 'Repair Management System',
    stack: ['C#', 'ASP.NET Core', 'SQL', 'React', 'React Native'],
    date: 'Nov 2025 — May 2026',
    github: 'https://github.com/vfezzuoglio/RepairOps',
    bullets: [
      'Built a multi-user repair tracking system with real-time status updates across React Native (mobile) and React (desktop) clients, backed by an ASP.NET Core REST API.',
      'Designed normalized SQL schemas and efficient query patterns to manage repair workflows, parts inventory, and role-based access for sales and technician workflows.',
    ],
  },
  {
    name: 'Document Analysis API',
    subtitle: 'Full-Stack PDF Analysis',
    stack: ['FastAPI', 'PostgreSQL', 'React', 'Docker', 'Claude API'],
    date: 'Feb 2026 — April 2026',
    github: 'https://github.com/vfezzuoglio/document-analysis-api',
    bullets: [
      'Built a full-stack PDF analysis application with a FastAPI REST API and React/Tailwind frontend; stored uploaded PDFs in PostgreSQL to support per-document question answering.',
      'Implemented JWT/bcrypt authentication, Alembic migrations, and a Docker Compose stack for the API, web client, and PostgreSQL.',
    ],
  },
  {
    name: 'CyberWatch',
    subtitle: 'AI-Powered Cybersecurity News Curator',
    stack: ['Go', 'React', 'Claude Code', 'Claude API', 'Docker'],
    date: 'Mar 2026 — April 2026',
    github: 'https://github.com/vfezzuoglio/cyberwatchnews',
    bullets: [
      'Built a Go and React cybersecurity news platform using Claude API for retrieval, analysis, categorization, and summaries; added caching, rate limiting, error handling, and Docker deployment.',
    ],
  },
  {
    name: 'Game Boy Emulator',
    subtitle: 'Cycle-Accurate Emulation',
    stack: ['C++', 'CMake', 'SDL2'],
    date: 'April 2026 — August 2026',
    github: 'https://github.com/vfezzuoglio/GameboyEmulator',
    bullets: [
      'Built a Game Boy emulator from scratch in C++, implementing all 512 SM83 CPU opcodes, memory management, interrupts, timers, DMA, input, and MBC1 bank switching.',
      'Implemented PPU graphics rendering and validated CPU correctness against the Blargg test suite, passing all 11 cpu_instrs tests.',
    ],
  },
]

export type Repo = {
  name: string
  url: string
  language?: string
  updated?: string
  stars?: number
}

// Additional GitHub repos, shown as lighter-weight cards linking out to GitHub.
export const otherRepos: Repo[] = [
  { name: 'instaclone-fullstack', url: 'https://github.com/vfezzuoglio/instaclone-fullstack', language: 'JavaScript', updated: 'May 8' },
  { name: 'school-admin-platform', url: 'https://github.com/vfezzuoglio/school-admin-platform', language: 'C#', updated: 'May 5' },
  { name: 'algorithms-computing-theory-breast-cancer-graphs', url: 'https://github.com/vfezzuoglio/algorithms-computing-theory-breast-cancer-graphs' },
  { name: 'ParallelComputingCStar', url: 'https://github.com/vfezzuoglio/ParallelComputingCStar' },
  { name: 'Project-Redo-Adventure-Game', url: 'https://github.com/vfezzuoglio/Project-Redo-Adventure-Game', language: 'C#', updated: 'Dec 19, 2023' },
  { name: 'MERN-ToDo-App', url: 'https://github.com/vfezzuoglio/MERN-ToDo-App' },
  { name: 'MERN-Social-App', url: 'https://github.com/vfezzuoglio/MERN-Social-App', language: 'JavaScript', updated: 'Oct 4, 2023', stars: 1 },
  { name: 'BudgetApp', url: 'https://github.com/vfezzuoglio/BudgetApp' },
  { name: 'ChatGBTCloneWebApp', url: 'https://github.com/vfezzuoglio/ChatGBTCloneWebApp' },
  { name: 'full-stack-bank-application', url: 'https://github.com/vfezzuoglio/full-stack-bank-application' },
  { name: 'spotifyClone', url: 'https://github.com/vfezzuoglio/spotifyClone', language: 'JavaScript', stars: 1 },
  { name: 'xzceb-flask_eng_fr', url: 'https://github.com/vfezzuoglio/xzceb-flask_eng_fr' },
]
