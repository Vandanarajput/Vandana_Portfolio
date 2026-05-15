import { GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="container-px py-20 sm:py-28">
      <Reveal>
        <div className="mb-12 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600/30 to-violet-600/30 text-violet-300">
            <GraduationCap className="h-5 w-5" />
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">Education</h2>
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, idx) => (
          <Reveal key={e.degree} delay={idx * 0.05}>
            <div className="card card-hover h-full rounded-2xl p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${e.accent} text-sm font-bold text-white shadow-lg`}
                >
                  {e.badge}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Completed
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-zinc-50">{e.degree}</h3>
              <p className="mt-1 bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-sm font-semibold text-transparent">
                {e.institution}
              </p>
              <div className="mt-1 flex items-center gap-2 font-mono text-xs text-zinc-500">
                <span>{e.year}</span>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                <span className="text-zinc-400">{e.result}</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{e.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
