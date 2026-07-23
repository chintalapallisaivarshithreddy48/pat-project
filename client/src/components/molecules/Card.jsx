import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true }) {
  return (
    <motion.article
      whileHover={hover ? { y: -4, scale: 1.01, rotateX: 0 } : undefined}
      transition={{ duration: 0.24, ease: 'easeOut' }}
      className={`rounded-[24px] border border-white/10 bg-white/6 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </motion.article>
  )
}
