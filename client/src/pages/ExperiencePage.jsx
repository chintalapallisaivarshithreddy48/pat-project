import SectionHeading from '../components/atoms/SectionHeading'
import Card from '../components/molecules/Card'
import { experience, education } from '../data/content'

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow="Experience" title="Crafting product experiences at modern companies" description="A track record spanning design systems, frontend architecture, and high-growth interfaces." />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {experience.map((item) => (
          <Card key={item.title}>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">{item.period}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm font-medium text-slate-300">{item.company}</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.highlights.map((highlight) => (
                <span key={highlight} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{highlight}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-12">
        <SectionHeading eyebrow="Education" title="Academic foundation" description="A technical background shaped by product design and systems thinking." />
        <div className="mt-8 grid gap-6 md:grid-cols-1">
          {education.map((item) => (
            <Card key={item.school}>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">{item.period}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.school}</h3>
              <p className="mt-2 text-sm font-medium text-slate-300">{item.degree}</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
