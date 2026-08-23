import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, ArrowRight } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Process', href: '/process' },
  ],
  Services: [
    { label: 'Web Applications', href: '/services#web-apps' },
    { label: 'SaaS Platforms', href: '/services#saas' },
    { label: 'Startup MVP', href: '/services#mvp' },
    { label: 'AI Solutions', href: '/services#ai' },
    { label: 'API & Backend', href: '/services#api' },
  ],
  Work: [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Case Studies', href: '/portfolio' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-wide py-14 lg:py-16 grid lg:grid-cols-[1.2fr_auto] gap-8 lg:gap-16 items-center">
          <div>
            <p className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to launch your project?
            </p>
            <p className="mt-3 text-slate-400 text-lg">
              Tell us what you are building. We reply within 24 hours — no obligation, no sales pressure.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary shrink-0">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+16176159749"
              className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="w-4 h-4" /> Call us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <Image
                src="/codvoro-logo.svg"
                alt="Codvoro"
                width={180}
                height={64}
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-md">
              We build modern web applications, SaaS platforms, and startup MVPs for US businesses — with
              freelancer pricing and agency-quality delivery.
            </p>
            <div className="flex flex-col gap-3 mt-8">
              <a
                href="tel:+16176159749"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-400" />
                +1 (617) 615-9749
              </a>
              <a
                href="mailto:admin@codvoro.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-400" />
                admin@codvoro.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h4 className="text-white font-semibold text-xs uppercase tracking-[0.16em] mb-5">{group}</h4>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.9375rem] text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Codvoro. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
