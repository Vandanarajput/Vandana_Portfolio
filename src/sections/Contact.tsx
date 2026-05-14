import { Mail, Github, Linkedin, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="container-px py-20 sm:py-28">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            Let's Build Something Amazing
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-0.5 hover:from-blue-500 hover:to-violet-500"
              >
                <Mail className="h-4 w-4" />
                Send an Email
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s|-/g, '')}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-zinc-100 transition-all hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-white/[0.06] hover:text-violet-200"
              >
                <Phone className="h-4 w-4" />
                {profile.phone}
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-violet-300"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-violet-300"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
