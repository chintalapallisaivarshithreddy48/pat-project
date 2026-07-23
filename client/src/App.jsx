import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/organisms/Navbar'
import Footer from './components/organisms/Footer'
import AnimatedBackground from './components/organisms/AnimatedBackground'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'))
const SkillsPage = lazy(() => import('./pages/SkillsPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const BlogsPage = lazy(() => import('./pages/BlogsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 })

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-transparent text-slate-200">
        <AnimatedBackground />
        <motion.div className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500" style={{ scaleX }} />
        <Navbar />
        <Suspense fallback={<div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 text-sm text-slate-400">Loading experience…</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
