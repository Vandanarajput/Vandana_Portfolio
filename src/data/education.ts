export type EducationItem = {
  badge: string
  degree: string
  institution: string
  result: string
  year: string
  description: string
  accent: string
}

export const education: EducationItem[] = [
  {
    badge: 'MCA',
    degree: 'Master of Computer Applications',
    institution: 'Mata Gujri College',
    result: 'CGPA: 9.0 / 10',
    year: '2023 — 2025',
    description:
      'Advanced studies in software engineering, system design, and full-stack development with focus on scalable architectures.',
    accent: 'from-blue-600 to-violet-600',
  },
  {
    badge: 'BCA',
    degree: 'Bachelor of Computer Applications',
    institution: 'Punjabi University',
    result: 'Score: 85%',
    year: '2020 — 2023',
    description:
      'Comprehensive foundation in programming, database systems, web technologies, and software development methodologies.',
    accent: 'from-violet-600 to-fuchsia-600',
  },
]
