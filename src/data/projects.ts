export type Project = {
  title: string
  description: string
  stack: string[]
  href?: string
  accent: string
  badge?: string
  proprietary?: boolean
}

export const projects: Project[] = [
  {
    title: 'MoBrowser — Enterprise Developer Browser',
    description:
      'Electron desktop browser with native database connectors (MySQL, PostgreSQL, SQL Server, SQLite, MongoDB), AES-256 credential vault via OS keychain (keytar), GitHub integration, thermal printer support, and a background Windows scheduler service. Modular connector architecture with context-isolated IPC and auto-update via electron-updater.',
    stack: [
      'Electron',
      'Node.js',
      'JavaScript',
      'SQLite',
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'keytar (AES-256)',
      'Jest',
    ],
    accent: 'from-cyan-400 via-blue-500 to-violet-500',
    badge: 'Production · Enterprise',
    proprietary: true,
  },
  {
    title: 'Point of Sale Application',
    description:
      'Cross-platform POS for retail — built for both Android and Windows desktop. Order management, billing, and receipt printing with hardware integration. Currently in active development at Techsapphire.',
    stack: ['Android', 'Desktop', 'Java', 'JavaScript', 'SQLite'],
    accent: 'from-emerald-400 via-teal-500 to-cyan-500',
    badge: 'In production',
    proprietary: true,
  },
  {
    title: 'E-Commerce Web Application',
    description:
      'Full-stack e-commerce platform for user authentication, product browsing, cart, and order management. Backend services built with Spring Boot following MVC architecture and RESTful API design; user, product, and order data persisted in MySQL. Thymeleaf server-side rendering for views.',
    stack: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL', 'REST', 'MVC'],
    href: 'https://github.com/Vandanarajput',
    accent: 'from-violet-500 via-fuchsia-500 to-pink-500',
    badge: 'Full-stack Java',
  },
  {
    title: 'Campus Placement Management',
    description:
      'Web system to run a campus placement cycle end-to-end — student profile management, job listings, application tracking, and an admin panel. Backend logic in Spring Boot with Hibernate ORM; relational data stored in MySQL; views rendered via Thymeleaf.',
    stack: ['Java', 'Spring Boot', 'Hibernate', 'Thymeleaf', 'MySQL'],
    href: 'https://github.com/Vandanarajput/Campus_PlacementManagement',
    accent: 'from-amber-400 via-orange-500 to-rose-500',
    badge: 'Full-stack Java',
  },
]
