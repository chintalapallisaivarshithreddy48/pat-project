import SectionHeading from '../components/atoms/SectionHeading'
import Card from '../components/molecules/Card'
import Button from '../components/atoms/Button'
import { profile } from '../data/content'

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow="Contact" title="Let’s build something premium" description="For product design, frontend engineering, and polished digital experiences." />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">Reach out</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{profile.email}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-400">Based globally and available for select collaborations, product design partnerships, and high-impact launches.</p>
        </Card>
        <Card>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500" placeholder="Name" />
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500" placeholder="Email" />
            </div>
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500" placeholder="Project type" />
            <textarea rows="5" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500" placeholder="Tell me about your vision..." />
            <Button type="button">Send Inquiry</Button>
          </form>
        </Card>
      </div>
    </main>
  )
}
