'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      {/* Utility bar — contact details up front, the way a firm's site opens */}
      <div className="hidden lg:block bg-slate-900 text-slate-300">
        <div className="container-wide h-10 flex items-center justify-between text-[0.8125rem]">
          <p className="tracking-wide">
            Senior software team for US startups — freelancer pricing, agency delivery.
          </p>
          <div className="flex items-center gap-7">
            <a href="tel:+16176159749" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +1 (617) 615-9749
            </a>
            <a href="mailto:admin@codvoro.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              admin@codvoro.com
            </a>
          </div>
        </div>
      </div>

      <nav className="container-wide h-16 lg:h-20 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/codvoro-logo.svg"
            alt="Codvoro"
            width={180}
            height={64}
            priority
            className="h-10 lg:h-12 w-auto logo-clean"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 ml-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative py-2 text-[0.9375rem] font-semibold tracking-tight transition-colors after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:transition-colors ${
                  pathname === link.href
                    ? 'text-slate-900 after:bg-brand-600'
                    : 'text-slate-600 hover:text-slate-900 after:bg-transparent hover:after:bg-slate-300'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center shrink-0">
          <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
            Book a Free Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <ul className="container-wide py-3">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-slate-100 last:border-0">
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 text-base font-semibold transition-colors ${
                    pathname === link.href ? 'text-brand-700' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary text-sm w-full justify-center"
              >
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
