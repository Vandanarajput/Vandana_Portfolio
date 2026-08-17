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
    items: ['React.js', 'React Hooks', 'JavaScript (ES6+)', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    icon: Server,
    label: 'State & APIs',
    accent: 'from-blue-500 to-violet-500',
    items: ['Redux', 'Context API', 'REST API Integration', 'Client-side Routing', 'Role-based UI'],
  },
  {
    icon: Database,
    label: 'Craft & Workflow',
    accent: 'from-violet-500 to-fuchsia-500',
    items: ['Component Architecture', 'Custom Hooks', 'Unit Testing', 'Git & GitHub', 'Agile / Scrum'],
  },
]

export default function About() {
  return (
    <section id="about" className="container-px py-12 sm:py-16">
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
              Frontend developer. <span className="gradient-text">React.js</span>,{' '}
              <span className="gradient-text">JavaScript</span>, and{' '}
              <span className="gradient-text">Tailwind</span> — every day.
            </p>

            <div className="relative mt-6 space-y-4 text-base leading-relaxed text-zinc-300">
              <p>
                I build responsive, component-based web applications with{' '}
                <span className="text-zinc-50 font-medium">React.js</span>, JavaScript (ES6+),
                HTML5, CSS3, and Tailwind CSS. My day-to-day is reusable components, React Hooks,
                Redux and Context for state, and clean REST API integration.
              </p>
              <p>
                Today I'm at <span className="text-zinc-50 font-medium">Techsapphire</span> as an
                Associate Software Developer — primary frontend on two in-house web products, a{' '}
                <span className="text-zinc-50 font-medium">SQL client web app</span> and an
                offline-capable{' '}
                <span className="text-zinc-50 font-medium">PDF reading & note-taking app</span>.
                Before that I did a 6-month full-stack Java internship at PiSoft (Spring Boot +
                Hibernate + MySQL) and a 3-month mobile testing internship at Lending Buddha.
              </p>
              <p>
                I care about UI craftsmanship — clean components, honest unit tests, and shipping
                inside Agile teams using Git and GitHub. Recent win at Techsapphire: reduced the
                open bug backlog by{' '}
                <span className="gradient-text font-semibold">~60%</span> with unit tests on
                critical UI and application logic.
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
                  <div className="text-sm font-semibold text-zinc-100">Associate Software Developer</div>
                  <div className="text-xs text-zinc-400">Techsapphire · Jun 2025 — Present</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-500/30 text-cyan-300">
                  <Hammer className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">Building</div>
                  <div className="text-sm font-semibold text-zinc-100">SQL Client · PDF Notes App</div>
                  <div className="text-xs text-zinc-400">React.js · JavaScript · Tailwind</div>
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
