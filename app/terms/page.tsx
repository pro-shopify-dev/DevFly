import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the Codvoro Terms of Service for using this website and contacting our team.',
  alternates: {
    canonical: '/terms',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <section className="section-pad-sm bg-white">
      <div className="container-wide">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 mb-10 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="section-title pb-8 border-b border-slate-200 mb-10">Terms of Service</h1>
        <div className="measure text-slate-600 space-y-4 leading-relaxed">
          <p className="text-sm text-slate-500">Last updated: March 15, 2026</p>
          <p>
            By accessing or using the Codvoro website, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.
          </p>
          <h2 className="text-slate-900 text-xl font-bold mt-6 mb-2">Use of Site</h2>
          <p>
            This site is provided for informational purposes and to allow users to contact Codvoro about software development services. You agree not to misuse the site or submit false information.
          </p>
          <h2 className="text-slate-900 text-xl font-bold mt-6 mb-2">Intellectual Property</h2>
          <p>
            All content on this site, including text, graphics, and code samples, is the property of Codvoro unless otherwise stated.
          </p>
          <h2 className="text-slate-900 text-xl font-bold mt-6 mb-2">Contact</h2>
          <p>
            Questions about these Terms? Reach us through our{' '}
            <Link href="/contact" className="text-brand-600 hover:underline">contact form</Link>
            {' '}or call{' '}
            <a href="tel:+16176159749" className="text-brand-600 hover:underline">+1 (617) 615-9749</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
