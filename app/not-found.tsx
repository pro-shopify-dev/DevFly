import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-white bg-hero-grid">
      <div className="text-center px-4">
        <p className="text-9xl font-black text-brand-600/30 leading-none">404</p>
        <h1 className="text-3xl font-black text-slate-900 mt-4 mb-2">Page not found</h1>
        <p className="text-slate-600 mb-8">The page you are looking for does not exist.</p>
        <Link href="/" className="btn-primary">
          Back to Home <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
