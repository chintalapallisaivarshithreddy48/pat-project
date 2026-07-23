import SectionHeading from '../components/atoms/SectionHeading'
import Card from '../components/molecules/Card'
import Button from '../components/atoms/Button'
import { profile } from '../data/content'

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow="Resume" title="Download a polished overview" description="A concise snapshot of experience, product craft, and technical depth." />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">Professional profile</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{profile.name}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">Senior product engineer focused on premium UI systems, motion-led product experiences, and scalable frontend architecture.</p>
          <div className="mt-6">
            <Button>Download Resume</Button>
          </div>
        </Card>
        <Card>
          <div className="space-y-4 text-sm text-slate-400">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4"><strong className="text-white">Core strengths:</strong> React, design systems, animation, performance, accessibility</div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4"><strong className="text-white">Experience:</strong> 7+ years building software experiences for modern product teams</div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4"><strong className="text-white">Focus:</strong> Purposeful interaction, visual polish, and fast product delivery</div>
          </div>
        </Card>
      </div>
    </main>
  )
}
