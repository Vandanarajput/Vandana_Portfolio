import {
  Sparkles,
  MapPin,
  Briefcase,
  Hammer,
  Mail,
  Monitor,
  Server,
  Database,
} from 'lucide-react'
import Reveal from '../components/Reveal'

const capabilities = [
  {
    icon: Monitor,
    label: 'Frontend',
    accent: 'from-cyan-400 to-blue-500',
    items: ['React.js', 'JavaScript', 'Redux', 'Context API', 'Tailwind CSS'],
  },
  {
    icon: Server,
    label: 'Backend',
    accent: 'from-blue-500 to-violet-500',
    items: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'MVC'],
  },
  {
    icon: Database,
    label: 'Desktop & Data',
    accent: 'from-violet-500 to-fuchsia-500',
    items: ['Electron.js', 'IPC · AES-256', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
]

export default function About() {
  return (
    <section id="about" className="container-px py-20 sm:py-28">
      <Reveal>
        <div className="mb-12 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600/30 to-violet-600/30 text-violet-300">
            <Sparkles className="h-5 w-5" />
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">About Me</h2>
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <div className="card relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"
            />

            <p className="relative text-2xl font-bold leading-snug tracking-tight text-zinc-50 sm:text-3xl">
              End-to-end developer. <span className="gradient-text">React</span> on the front.{' '}
              <span className="gradient-text">Spring Boot</span> on the back.
            </p>

            <div className="relative mt-6 space-y-4 text-base leading-relaxed text-zinc-300">
              <p>
                I started with a{' '}
                <span className="text-zinc-50 font-medium">6-month Java internship</span> at Pisoft
                Informatics, building end-to-end apps with Spring Boot, Hibernate, and MySQL.
                Before that, a 3-month mobile internship at Lending Buddha gave me my first
                exposure to app design and testing.
              </p>
              <p>
                Today I work at <span className="text-zinc-50 font-medium">Techsapphire</span> as
                the lead developer on a Point of Sale app shipping to Android and Windows
                desktop — and I'm architecting{' '}
                <span className="text-zinc-50 font-medium">MoBrowser</span>, an Electron developer
                browser with native connectors for five databases, an AES-256 credential vault,
                and a background Windows service.
              </p>
              <p>
                I care about full-stack craftsmanship — clean components, fast load times, honest
                tests, and not adding a dependency I can write in twenty lines. Recent wins: cut
                bundle size <span className="gradient-text font-semibold">~22%</span>, reduced
                bug backlog <span className="gradient-text font-semibold">~60%</span>, improved
                load time <span className="gradient-text font-semibold">~30%</span>.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="card sticky top-24 rounded-3xl p-7">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-violet-300">
              Currently
            </div>

            <ul className="mt-5 space-y-5">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-blue-600/30 to-violet-600/30 text-violet-300">
                  <Briefcase className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">Role</div>
                  <div className="text-sm font-semibold text-zinc-100">Full Stack Developer</div>
                  <div className="text-xs text-zinc-400">Techsapphire · Jun 2025 — Present</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-500/30 text-cyan-300">
                  <Hammer className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">Building</div>
                  <div className="text-sm font-semibold text-zinc-100">MoBrowser · POS App</div>
                  <div className="text-xs text-zinc-400">Electron · Android · Windows</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 text-fuchsia-300">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">Based in</div>
                  <div className="text-sm font-semibold text-zinc-100">Panchkula, India</div>
                  <div className="text-xs text-zinc-400">Open to remote & on-site</div>
                </div>
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(99,102,241,0.6)] transition-all hover:-translate-y-0.5 hover:from-blue-500 hover:to-violet-500"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </aside>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {capabilities.map((c, idx) => {
          const Icon = c.icon
          return (
            <Reveal key={c.label} delay={0.15 + idx * 0.05}>
              <div className="card card-hover h-full rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${c.accent} text-white shadow-lg`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3
                    className={`bg-gradient-to-r ${c.accent} bg-clip-text text-base font-semibold text-transparent`}
                  >
                    {c.label}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.items.map((i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-zinc-300"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
