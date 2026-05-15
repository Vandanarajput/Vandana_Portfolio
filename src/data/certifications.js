import { Award, Smartphone, GraduationCap, Coffee } from 'lucide-react'

const BASE = import.meta.env.BASE_URL

export const certifications = [
  {
    title: 'Full Stack Java — Internship',
    issuer: 'Pisoft Informatics Pvt. Ltd.',
    type: 'Internship',
    period: '6 Months · Completed 15 Jul 2025',
    issuedOn: 'Issued 16 Jul 2025',
    credentialId: 'PIPL/Tr/2025-26/00280',
    description:
      'Successfully completed a six-month full-stack Java internship covering Core Java, Spring Boot, Hibernate, REST APIs, MySQL, and full-stack project delivery. Signed by P. S. Kang, Director.',
    href: `${BASE}certificates/pisoft-fullstack-java.pdf`,
    icon: Award,
    accent: 'from-blue-600 to-violet-600',
  },
  {
    title: 'Mobile App Development & Testing',
    issuer: 'Lending Buddha',
    type: 'Internship',
    period: 'Oct 2024 — Dec 2024',
    credentialId: 'CK8URW93RQJYXV4F',
    description:
      'Three-month mobile internship covering App Design, Development, Testing, and Debugging. Signed by Sarita Bansal, Program Head. Noida, India.',
    href: `${BASE}certificates/lending-buddha-mobile.pdf`,
    icon: Smartphone,
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Java Programming for Complete Beginners',
    issuer: 'Udemy · in28Minutes Official',
    type: 'Online Course',
    period: '42 hours · Completed 29 Mar 2025',
    credentialId: 'UC-2cb95a7d-89ce-4648-baa5-059b62d87266',
    description:
      'In-depth Java fundamentals course covering OOP, core language features, and applied programming — 42 total hours. Issued by Udemy, taught by in28Minutes Official.',
    href: `${BASE}certificates/java_udemy.png`,
    icon: Coffee,
    accent: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Flutter for Beginners',
    issuer: 'Great Learning Academy',
    type: 'Online Course',
    period: 'Completed Oct 2024',
    credentialId: 'XAHNCFRK',
    description:
      'Foundations of Flutter for cross-platform mobile development — widgets, layout, and app structure. Issued by Great Learning Academy as a free online completion course.',
    href: `${BASE}certificates/flutter_Great_learning.png`,
    icon: GraduationCap,
    accent: 'from-cyan-500 to-sky-600',
  },
]
