import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-400'
  const variants = {
    primary: 'bg-white text-slate-950 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]',
    secondary: 'border border-white/15 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/8',
  }

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
