import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-px flex justify-center text-xs text-zinc-500">
        <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
      </div>
    </footer>
  )
}
