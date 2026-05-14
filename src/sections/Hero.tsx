import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_60%)]" />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-[320px] w-[320px] rounded-full bg-cyan-400/15 blur-[120px]"
      />

      <div className="container-px relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-zinc-300">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text bg-[length:200%_auto] animate-gradient-shift">
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05]"
          >
            {[
              { value: '1+', label: 'Year Experience' },
              { value: '4+', label: 'Projects Built' },
              { value: '4', label: 'Certifications' },
            ].map((s) => (
              <div key={s.label} className="bg-bg/80 px-4 py-4 sm:px-6 sm:py-5">
                <div className="gradient-text text-2xl font-bold tracking-tight sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500 sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Building end-to-end web and desktop applications — React + Electron on the front,
            Spring Boot REST APIs and MySQL data models on the back.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-0.5 hover:from-blue-500 hover:to-violet-500"
            >
              Let's Connect
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-zinc-200 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
            >
              View Projects
            </a>
            <a
              href={profile.links.resume}
              download="Vandana_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-violet-400/40 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-200 transition-all hover:-translate-y-0.5 hover:border-violet-400/70 hover:bg-violet-500/20 hover:text-violet-100"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex items-center gap-3"
          >
            <SocialIcon href={profile.links.github} label="GitHub">
              <Github className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={profile.links.linkedin} label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={`mailto:${profile.email}`} label="Email">
              <Mail className="h-5 w-5" />
            </SocialIcon>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-white/[0.06] hover:text-violet-200"
    >
      {children}
    </a>
  )
}
