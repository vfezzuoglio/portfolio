export const profile = {
  name: 'Vincent Fezzuoglio',
  location: 'Harriman, NY',
  email: 'Vincent.Fezzuoglio@Protonmail.com',
  phone: '(845) 309-5272',
  linkedin: 'https://www.linkedin.com/in/vincent-fezzuoglio/',
  github: 'https://github.com/vfezzuoglio',
  title: 'Backend Software Engineer',
  blurb:
    "I'm a backend-focused software engineer building payment infrastructure, APIs, and AI-powered applications. Currently pursuing an MS in Computer Science at Pace University while working full-time as a Backend Software Engineer.",
}

export const skills = {
  Languages: ['Python', 'Go', 'TypeScript', 'JavaScript (ES6+)', 'C#', 'C++', 'Java'],
  Frontend: ['React', 'React Native', 'HTML5', 'CSS3'],
  'Backend & Systems': [
    'Node.js',
    'Express',
    'FastAPI',
    'ASP.NET Core',
    'REST APIs',
    'Claude API',
    'RAG',
    'Embeddings',
  ],
  'Cloud & DevOps': ['AWS', 'Azure', 'Docker', 'CI/CD', 'Git', 'Claude Code', 'Supabase'],
  'Libraries & Databases': ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
  Testing: ['Jest', 'Postman API Testing'],
}

export const education = [
  {
    school: 'Pace University, Seidenberg School of Computer Science and Information Systems',
    location: 'New York, NY',
    degree: 'Master of Science (MS) in Computer Science',
    detail: 'GPA: 4.00',
    date: 'May 2027',
  },
  {
    school: 'Pace University, Seidenberg School of Computer Science and Information Systems',
    location: 'New York, NY',
    degree: 'Bachelor of Science (BS) in Computer Information Technology',
    detail: 'Concentration: Software Development | GPA: 3.41',
    date: 'May 2021',
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
    role: 'Backend Software Engineer',
    date: 'May 2026 — Present',
    bullets: [
      'Built Stripe and Stripe Connect payment infrastructure for a live auction platform, implementing vendor onboarding, payout routing, Checkout Sessions, and transaction safeguards.',
      'Developed and shipped an Android NFC Companion App using React Native, Supabase authentication, Row Level Security (RLS), and NDEF tag read/write functionality for live-event operations.',
      'Designed idempotent checkout processing and payable-amount validation to prevent duplicate and invalid charges during concurrent bidding activity.',
      'Built and launched AI-powered applications for live events, generating 100 personalized FIFA attendee cards and enabling 100 head-to-head battles through an interactive cosplay experience using OpenRouter and Google Wallet.',
    ],
  },
  {
    company: 'Russell Cellular',
    location: 'Warwick, NY',
    role: 'Store Manager',
    date: 'Nov 2020 — Present',
    bullets: [
      'Lead daily operations and a four-person sales team, overseeing training, performance, scheduling, and customer escalations while maintaining strong customer retention and service standards.',
    ],
  },
]

export const volunteer = [
  {
    company: "Aunt Mary's Storybook – Companions Journeying Together",
    location: 'Remote, USA',
    role: 'Volunteer Software Developer',
    date: 'Aug 2025 — Feb 2026',
    bullets: [
      'Resolved 15+ bugs across authentication, data validation, and role-based workflows using DevTools, logging, and API testing, improving application stability and reliability.',
      'Optimized SQL queries and developed 5+ backend features in CodeIgniter 4 (MVC), improving performance and scalability for large datasets.',
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
    subtitle: 'Backend API',
    stack: ['FastAPI', 'Azure', 'PostgreSQL'],
    date: 'Feb 2026 — April 2026',
    github: 'https://github.com/vfezzuoglio/document-analysis-api',
    bullets: [
      'Built REST API for document upload and text extraction using FastAPI and Docker for scalable document processing.',
      'Designed a secure JWT-based authentication layer and modular service architecture for maintainable, extensible backend logic.',
      'Developed AI-ready backend services for document analysis, embeddings, generative AI workflows, and RAG-based processing using FastAPI and PostgreSQL.',
    ],
  },
  {
    name: 'CyberWatch',
    subtitle: 'AI-Powered Cybersecurity News Curator',
    stack: ['Go', 'React', 'Anthropic Claude API', 'Docker'],
    date: 'April 2026',
    github: 'https://github.com/vfezzuoglio/cyberwatchnews',
    bullets: [
      'Built a full-stack AI-powered news aggregation platform with a Go backend and React frontend, integrating the Anthropic Claude API to retrieve, analyze, categorize, and summarize recent cybersecurity news.',
      'Designed backend API functionality with server-side caching and rate limiting to reduce external API usage, prevent abuse, and improve application reliability.',
      'Containerized the frontend and backend using Docker and Docker Compose, with error handling for external API and network failures.',
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
  { name: 'GameboyEmulator', url: 'https://github.com/vfezzuoglio/GameboyEmulator', language: 'C++', updated: 'Apr 22' },
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
