import { ArrowUpRight, Github, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function Work() {
  return (
    <section id="projects" className="container-px py-20 sm:py-28">
      <Reveal>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-3 text-base text-zinc-400">Some of my recent work</p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, idx) => {
          const isLink = !!p.href
          const cardClass =
            'card card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl'

          const inner = (
            <>
              <div className={`h-1 w-full bg-gradient-to-r ${p.accent}`} />

              <div className="flex flex-1 flex-col p-7">
                {p.badge && (
                  <span
                    className={`mb-3 inline-flex w-fit items-center rounded-full bg-gradient-to-r ${p.accent} bg-clip-text px-0 py-0 font-mono text-[10px] uppercase tracking-[0.18em] text-transparent`}
                  >
                    {p.badge}
                  </span>
                )}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-50">{p.title}</h3>
                  {isLink && (
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{p.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  {isLink ? (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 transition-colors group-hover:text-violet-200">
                      <Github className="h-4 w-4" />
                      View on GitHub
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-400">
                      <Lock className="h-3 w-3" />
                      Proprietary · Source not public
                    </span>
                  )}
                </div>
              </div>
            </>
          )

          return (
            <Reveal key={p.title} delay={idx * 0.06}>
              {isLink ? (
                <motion.a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className={cardClass}
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className={cardClass}
                >
                  {inner}
                </motion.div>
              )}
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
