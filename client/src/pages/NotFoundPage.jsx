import { Link } from 'react-router-dom'
import Button from '../components/atoms/Button'

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-20 lg:px-8">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">This page is not available.</h1>
        <p className="mt-4 text-lg leading-8 text-slate-400">The route you requested does not exist, but the rest of the experience is ready to explore.</p>
        <div className="mt-8 flex justify-center">
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
