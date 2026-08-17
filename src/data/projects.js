export const projects = [
  {
    title: 'SQL Client Web Application',
    description:
      'Web-based SQL client built with React.js and Tailwind CSS. Built dashboards, data tables, forms, and modal dialogs with a reusable, component-based architecture. Implemented query result rendering, tab management, and data visualization widgets. Wrote custom Hooks for data fetching, refresh, and keyboard shortcuts; added unit tests for critical UI logic.',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Custom Hooks'],
    accent: 'from-cyan-400 via-blue-500 to-violet-500',
    badge: 'Proprietary · Techsapphire',
    proprietary: true,
  },
  {
    title: 'PDF Reading & Note-Taking Web App',
    description:
      'Offline-capable PDF reader and note workspace. Built a split-pane UI (PDF viewer + rich-text notes editor) with highlighting and image extraction. Delivered backup and restore, project management screens, document upload, and multi-project support. Responsive layouts for desktop and tablet with local storage for offline use.',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Local Storage'],
    accent: 'from-emerald-400 via-teal-500 to-cyan-500',
    badge: 'Proprietary · Techsapphire',
    proprietary: true,
  },
  {
    title: 'ShopSphere — MERN E-Commerce Platform',
    description:
      'Full-stack e-commerce web app covering the complete customer journey — browsing, cart, wishlist, checkout, and order tracking — plus a full admin panel for products and orders. JWT authentication with role-based access (customer / admin), multi-address checkout, and order status tracking with a visual stepper. Backend built with Node.js, Express, and MongoDB (Mongoose); REST APIs for products, cart, orders, reviews, and users. Product image uploads (up to 5), search, filters, and a responsive Tailwind UI.',
    stack: [
      'React.js',
      'Redux Toolkit',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
    ],
    href: 'https://shopsphere-web.vercel.app/',
    accent: 'from-violet-500 via-fuchsia-500 to-pink-500',
    badge: 'MERN · Live on Vercel',
  },
]
