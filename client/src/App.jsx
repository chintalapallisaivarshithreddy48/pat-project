import { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/organisms/Navbar'
import Footer from './components/organisms/Footer'
import AnimatedBackground from './components/organisms/AnimatedBackground'
import Cursor from './components/organisms/Cursor'
import ProgressBar from './components/organisms/ProgressBar'
import BackToTop from './components/organisms/BackToTop'
import LoadingScreen from './components/organisms/LoadingScreen'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'))
const SkillsPage = lazy(() => import('./pages/SkillsPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const BlogsPage = lazy(() => import('./pages/BlogsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ResumePage = lazy(() => import('./pages/ResumePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true })
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const frame = requestAnimationFrame(raf)
    const timer = window.setTimeout(() => setLoading(false), 700)
    return () => {
      window.clearTimeout(timer)
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-transparent text-slate-200">
        {loading ? <LoadingScreen /> : null}
        <AnimatedBackground />
        <Cursor />
        <ProgressBar />
        <Navbar />
        <Suspense fallback={<div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 text-sm text-slate-400">Loading experience…</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  )
}

export default App
