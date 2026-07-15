import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Codvoro Privacy Policy describing how we collect and use information.',
  alternates: {
    canonical: '/privacy',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl font-black text-slate-900 mb-6">Privacy Policy</h1>
        <div className="prose prose-invert prose-sm max-w-none text-slate-600 space-y-4">
          <p>Last updated: March 15, 2026</p>
          <p>
            Codvoro (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This policy describes how we collect, use, and safeguard your information when you use our website or contact us.
          </p>
          <h2 className="text-slate-900 text-xl font-bold mt-6 mb-2">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as your name, email address, company name, and project details when you fill out our contact form.
          </p>
          <h2 className="text-slate-900 text-xl font-bold mt-6 mb-2">How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries, send you relevant project proposals, and communicate with you about your project. We do not sell your data to third parties.
          </p>
          <h2 className="text-slate-900 text-xl font-bold mt-6 mb-2">Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, reach us through our{' '}
            <Link href="/contact" className="text-brand-600 hover:underline">contact form</Link>
            {' '}or call{' '}
            <a href="tel:+16176159749" className="text-brand-600 hover:underline">+1 (617) 615-9749</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
