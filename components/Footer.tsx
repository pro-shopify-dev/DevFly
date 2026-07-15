import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react'

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
    <footer className="bg-slate-100 border-t border-slate-200">
      {/* CTA band */}
      <div className="bg-gradient-to-r from-brand-700 to-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-bold text-white">Ready to launch your project?</p>
            <p className="text-brand-100 mt-1">We respond within 24 hours.</p>
          </div>
          <Link href="/contact" className="btn-secondary shrink-0">
            Let&apos;s Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/codvoro-logo.svg"
                alt="Codvoro"
                width={180}
                height={64}
                className="h-11 w-auto logo-clean"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              We build modern web applications, SaaS platforms, and startup MVPs for US businesses — with freelancer pricing and agency-quality delivery.
            </p>
            <div className="flex flex-col gap-2 mt-6">
              <a
                href="tel:+16176159749"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (617) 615-9749
              </a>
              <a
                href="mailto:admin@codvoro.com"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                admin@codvoro.com
              </a>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:text-white hover:bg-brand-600 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:text-white hover:bg-brand-600 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-slate-900 font-semibold text-sm mb-4">{group}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-brand-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Codvoro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
