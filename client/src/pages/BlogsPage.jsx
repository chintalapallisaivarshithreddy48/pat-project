import SectionHeading from '../components/atoms/SectionHeading'
import Card from '../components/molecules/Card'
import { blogs } from '../data/content'

export default function BlogsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow="Blog" title="Writing on interface craft and product systems" description="Reflections, process notes, and ideas on modern product design." />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {blogs.map((blog) => (
          <Card key={blog.title}>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">{blog.date}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{blog.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{blog.excerpt}</p>
          </Card>
        ))}
      </div>
    </main>
  )
}
