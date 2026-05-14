import {
  Code2,
  Layers,
  Database,
  Wrench,
  type LucideIcon,
  FileType,
  FileCode,
  Hexagon,
  Atom,
  Zap,
  Component,
  Wind,
  Server,
  Cylinder,
  Disc,
  GitBranch,
  TestTube2,
  Send,
  TerminalSquare,
  Boxes,
  Brain,
  Leaf,
  Sprout,
  Wand2,
  CodeXml,
  Binary,
  Network,
  Workflow,
} from 'lucide-react'

export type SkillItem = {
  name: string
  icon: LucideIcon
}

export type SkillGroup = {
  label: string
  icon: LucideIcon
  accent: string
  items: SkillItem[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    icon: Code2,
    accent: 'from-cyan-400 to-blue-500',
    items: [
      { name: 'TypeScript', icon: FileType },
      { name: 'JavaScript (ES6+)', icon: Zap },
      { name: 'Core Java', icon: Boxes },
      { name: 'C++', icon: Binary },
      { name: 'HTML5', icon: FileCode },
      { name: 'CSS3', icon: Hexagon },
    ],
  },
  {
    label: 'Frameworks',
    icon: Layers,
    accent: 'from-blue-500 to-violet-500',
    items: [
      { name: 'React.js', icon: Atom },
      { name: 'Redux', icon: Component },
      { name: 'Electron.js', icon: TerminalSquare },
      { name: 'Spring Boot', icon: Sprout },
      { name: 'Spring Framework', icon: Server },
      { name: 'Hibernate', icon: Leaf },
      { name: 'Thymeleaf', icon: CodeXml },
      { name: 'jQuery', icon: Wand2 },
      { name: 'Tailwind CSS', icon: Wind },
    ],
  },
  {
    label: 'Databases',
    icon: Database,
    accent: 'from-violet-500 to-fuchsia-500',
    items: [
      { name: 'MySQL', icon: Cylinder },
      { name: 'PostgreSQL', icon: Database },
      { name: 'SQLite', icon: Disc },
      { name: 'MongoDB', icon: Database },
    ],
  },
  {
    label: 'Tools & Concepts',
    icon: Wrench,
    accent: 'from-fuchsia-500 to-pink-500',
    items: [
      { name: 'Git & GitHub', icon: GitBranch },
      { name: 'IntelliJ · Eclipse · VS Code', icon: TerminalSquare },
      { name: 'Postman', icon: Send },
      { name: 'Jest + RTL', icon: TestTube2 },
      { name: 'OOP', icon: Brain },
      { name: 'MVC', icon: Workflow },
      { name: 'REST APIs', icon: Network },
    ],
  },
]
