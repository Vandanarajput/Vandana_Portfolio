import { Terminal, Code, Smartphone, type LucideIcon } from 'lucide-react'

export type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
  icon: LucideIcon
  dot: string
}

export const experience: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'Techsapphire Solutions Pvt. Ltd.',
    period: 'Jun 2025 — Present',
    description:
      'Building production software across desktop and mobile. Lead developer on a Point of Sale (POS) application shipping to both Android and Windows desktop. Currently architecting MoBrowser — an Electron-based developer browser with native connectors for MySQL, PostgreSQL, SQL Server, SQLite, and MongoDB, an AES-256 OS-keychain credential vault, GitHub integration, thermal printing, and a background Windows scheduler service. Cut bundle size ~22% by removing a third-party theme dependency; reduced critical bug backlog ~60% with Jest.',
    icon: Terminal,
    dot: 'from-blue-500 to-violet-500',
  },
  {
    role: 'Full Stack Java Developer · Intern',
    company: 'Pisoft Informatics Pvt. Ltd.',
    period: 'Jan 2025 — Jul 2025 · 6-month internship',
    description:
      'Six-month full-stack internship in SAS Nagar, Mohali. Completed Jul 2025 (Certificate № PIPL/Tr/2025-26/00280). Built end-to-end applications with Core Java, Spring Framework, Spring Boot, and Hibernate — RESTful API design, relational data modeling on MySQL, and frontends with Thymeleaf + jQuery. Maintained 85%+ unit test coverage on core modules. The foundation of my full-stack work today.',
    icon: Code,
    dot: 'from-cyan-400 to-blue-500',
  },
  {
    role: 'Mobile App Development & Testing · Intern',
    company: 'Lending Buddha',
    period: 'Oct 2024 — Dec 2024 · 3-month internship',
    description:
      'Three-month mobile internship in Noida covering App Design, Development, Testing, and Debugging. Hands-on exposure to the full mobile delivery lifecycle — laying the groundwork for the Android side of the POS application I lead today at Techsapphire.',
    icon: Smartphone,
    dot: 'from-emerald-400 to-teal-500',
  },
]
