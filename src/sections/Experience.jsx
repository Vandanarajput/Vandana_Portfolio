import { Briefcase } from 'lucide-react'
import Reveal from '../components/Reveal'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="container-px py-20 sm:py-28">
      <Reveal>
        <div className="mb-12 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600/30 to-violet-600/30 text-violet-300">
            <Briefcase className="h-5 w-5" />
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">Experience</h2>
        </div>
      </Reveal>

      <ol className="relative space-y-8 border-l border-white/10 pl-12">
        {experience.map((exp, idx) => {
          const Icon = exp.icon
          return (
            <Reveal key={`${exp.company}-${idx}`} delay={idx * 0.05} as="div">
              <li className="relative">
                <span className="absolute -left-[58px] top-2 grid h-10 w-10 place-items-center">
                  <span
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.dot} opacity-30 blur-md`}
                  />
                  <span
                    className={`relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${exp.dot} text-white shadow-lg ring-4 ring-bg`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                </span>

                <div className="card card-hover rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-xl font-bold text-transparent">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-zinc-300">{exp.company}</p>
                    </div>
                    <span className="inline-flex w-fit items-center rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 font-mono text-xs text-violet-200">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{exp.description}</p>
                </div>
              </li>
            </Reveal>
          )
        })}
      </ol>
    </section>
  )
}
