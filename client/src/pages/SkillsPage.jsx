import SectionHeading from '../components/atoms/SectionHeading'
import Card from '../components/molecules/Card'
import { skills } from '../data/content'

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow="Skills" title="A modern stack with deliberate craft" description="Skills spanning interface systems, interaction design, and performant engineering." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <Card key={skill.title}>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">{skill.category}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{skill.title}</h3>
            <p className="mt-2 text-sm text-slate-400">Proficiency: {skill.level}</p>
          </Card>
        ))}
      </div>
    </main>
  )
}
