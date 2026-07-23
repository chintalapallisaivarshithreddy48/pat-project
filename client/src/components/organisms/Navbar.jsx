import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Sparkles } from 'lucide-react'
import { navItems, profile } from '../../data/content'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/40 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.24em] text-white uppercase">
          <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 p-2 text-cyan-300"><Sparkles size={16} /></span>
          {profile.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => `text-sm transition-colors ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 md:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </motion.header>
  )
}
