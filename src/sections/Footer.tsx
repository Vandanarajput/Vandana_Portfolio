import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-px flex flex-col items-center justify-between gap-3 text-xs text-zinc-500 sm:flex-row">
        <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
        <div className="font-mono">
          Built with <span className="text-zinc-300">React</span> ·{' '}
          <span className="text-zinc-300">TypeScript</span> ·{' '}
          <span className="text-zinc-300">Vite</span> ·{' '}
          <span className="text-zinc-300">Tailwind</span>
        </div>
      </div>
    </footer>
  )
}
