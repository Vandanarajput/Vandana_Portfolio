import { Award, ArrowUpRight, BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="container-px py-20 sm:py-28">
      <Reveal>
        <div className="mb-12 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600/30 to-violet-600/30 text-violet-300">
            <Award className="h-5 w-5" />
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            Certifications
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((c, idx) => {
          const Icon = c.icon
          const CardTag = c.href ? 'a' : 'div'
          return (
            <Reveal key={c.credentialId} delay={idx * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="h-full"
              >
                <CardTag
                  {...(c.href
                    ? { href: c.href, target: '_blank', rel: 'noreferrer' }
                    : {})}
                  className="card card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${c.accent} text-white shadow-lg`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      Verified
                    </span>
                  </div>

                  <span
                    className={`mt-5 inline-flex w-fit items-center rounded-full bg-gradient-to-r ${c.accent} bg-clip-text px-0 py-0 font-mono text-[10px] uppercase tracking-[0.18em] text-transparent`}
                  >
                    {c.type}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-zinc-50">{c.title}</h3>
                  <p
                    className={`mt-1 bg-gradient-to-r ${c.accent} bg-clip-text text-sm font-semibold text-transparent`}
                  >
                    {c.issuer}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-zinc-500">{c.period}</p>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{c.description}</p>

                  <div className="mt-5 flex items-end justify-between gap-3 border-t border-white/[0.06] pt-4">
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                        Credential ID
                      </div>
                      <div className="truncate font-mono text-xs text-zinc-300">
                        {c.credentialId}
                      </div>
                    </div>
                    {c.href && (
                      <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-violet-300 transition-colors group-hover:text-violet-200">
                        View
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
                </CardTag>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
