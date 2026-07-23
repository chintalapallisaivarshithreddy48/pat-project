import SectionHeading from '../components/atoms/SectionHeading'
import Card from '../components/molecules/Card'
import { profile, achievements, certifications } from '../data/content'

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow="About" title="Designing systems with human clarity" description="I bridge product thinking, frontend engineering, and cinematic interaction design." />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <p className="text-lg leading-8 text-slate-300">{profile.intro}</p>
          <p className="mt-5 text-base leading-8 text-slate-400">I specialize in building polished, high-performing user experiences that feel effortless while staying robust under real-world product pressure.</p>
        </Card>
        <Card>
          <div className="space-y-4">
            {achievements.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {certifications.map((certification) => (
          <Card key={certification.title}>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">Certification</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{certification.title}</h3>
            <p className="mt-2 text-slate-400">{certification.issuer} • {certification.year}</p>
          </Card>
        ))}
      </div>
    </main>
  )
}
