import Reveal from '../components/Reveal'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="container-px py-20 sm:py-28">
      <Reveal>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            Technical Expertise
          </h2>
          <p className="mt-3 text-base text-zinc-400">Technologies I work with daily</p>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g, idx) => {
          const HeadingIcon = g.icon
          return (
            <Reveal key={g.label} delay={idx * 0.05}>
              <div className="card card-hover group h-full rounded-2xl p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${g.accent} text-white shadow-lg`}
                  >
                    <HeadingIcon className="h-5 w-5" />
                  </span>
                  <h3 className={`bg-gradient-to-r ${g.accent} bg-clip-text text-lg font-semibold text-transparent`}>
                    {g.label}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {g.items.map((s) => {
                    const Icon = s.icon
                    return (
                      <li
                        key={s.name}
                        className="flex items-center gap-3 text-sm text-zinc-300 transition-colors group-hover:text-zinc-100"
                      >
                        <Icon className="h-4 w-4 text-zinc-500" />
                        {s.name}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
