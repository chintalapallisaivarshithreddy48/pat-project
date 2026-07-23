import SectionHeading from '../components/atoms/SectionHeading'
import Card from '../components/molecules/Card'
import { projects } from '../data/content'

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow="Projects" title="Selected systems and launch experiences" description="A portfolio of interface-rich products, design systems, and polished web experiences." />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden p-0">
            <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
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
        ))}
      </div>
    </main>
  )
}
