import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code2, Layers3 } from 'lucide-react'
import Button from '../components/atoms/Button'
import SectionHeading from '../components/atoms/SectionHeading'
import Card from '../components/molecules/Card'
import { profile, projects, services, stats } from '../data/content'

export default function HomePage() {
  return (
    <main className="relative z-10">
      <section className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-20 lg:px-8 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
            <Sparkles size={16} />
            Available for selected collaborations
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Designing premium digital products with motion, clarity, and speed.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            {profile.intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>View Projects <ArrowRight size={16} /></Button>
            <Button variant="secondary">Download Resume</Button>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <SectionHeading eyebrow="Featured work" title="Product experiences shaped for ambition" description="A collection of thoughtful interfaces with immersive motion and polished systems." />
          </Card>
          <Card>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading eyebrow="Services" title="Built for modern product teams" description="Design systems, frontend engineering, and motion-led experiences tailored for speed and beauty." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.08 }}>
              <Card>
                <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 p-3 text-cyan-300">
                  {index === 0 ? <Layers3 size={18} /> : index === 1 ? <Sparkles size={18} /> : <Code2 size={18} />}
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading eyebrow="Selected work" title="Recent products and interfaces" description="A mix of product design, frontend craft, and performant storytelling." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
              <Card className="h-full overflow-hidden p-0">
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
