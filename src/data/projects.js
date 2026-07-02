export const projects = [
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
    title: 'ShopSphere — MERN E-Commerce Platform',
    description:
      'Production-style e-commerce app covering the full customer journey — browse, cart, checkout, and order tracking — plus a complete admin panel. Atomic stock decrement prevents overselling, cart price snapshots lock pricing between add-to-cart and checkout, and MongoDB text indexes power product search. JWT auth with role-based access (customer / admin / superAdmin), Cloudinary CDN for product images, and Zod-validated REST APIs. Deployed as separate frontend and backend serverless projects on Vercel.',
    stack: [
      'React 18',
      'Redux Toolkit',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Cloudinary',
    ],
    href: 'https://shopsphere-web.vercel.app/',
    accent: 'from-violet-500 via-fuchsia-500 to-pink-500',
    badge: 'MERN · Live on Vercel',
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
