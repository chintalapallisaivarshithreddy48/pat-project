import { profile } from '../../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {profile.name}. Crafted for ambitious product teams.</p>
        <div className="flex gap-4">
          {profile.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
