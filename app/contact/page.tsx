'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, Calendar, CheckCircle, ArrowRight, Linkedin, Twitter, Send } from 'lucide-react'

const projectTypes = [
  'Web Application',
  'SaaS Platform',
  'Startup MVP',
  'E-Commerce Platform',
  'API / Backend System',
  'UI/UX Implementation',
  'Other',
]

const budgetRanges = [
  'Under $10k',
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+',
  'Not sure yet',
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    details: '',
    website: '', // honeypot
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Bots fill the hidden honeypot — silently pretend success.
    if (formState.website) {
      setSubmitted(true)
      setLoading(false)
      return
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setError('The contact form is not configured yet. Please email admin@codvoro.com directly.')
      setLoading(false)
      return
    }

    try {
      // Web3Forms free plan requires submitting from the browser (client-side).
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New project inquiry from ${formState.name}${formState.company ? ` (${formState.company})` : ''}`,
          from_name: 'Codvoro Website',
          name: formState.name,
          email: formState.email,
          company: formState.company || '—',
          project_type: formState.projectType || '—',
          budget: formState.budget || '—',
          message: formState.details,
          botcheck: '',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || 'Something went wrong. Please try again.')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-white bg-hero-grid relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Get In Touch</span>
          <h1 className="section-title text-5xl lg:text-6xl">
            Let&apos;s Build Something <span className="gradient-text">Together</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4 text-lg">
            Tell us about your project. We read every message and respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact options + form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          {/* Left — contact info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Contact Codvoro</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you have a detailed spec or just a rough idea, we are happy to talk. No obligation, no sales pressure.
              </p>
            </div>

            {/* Phone */}
            <div className="card">
              <div className="w-10 h-10 bg-brand-600/10 rounded-xl flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 text-brand-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Call Us</h3>
              <a
                href="tel:+16176159749"
                className="text-brand-600 hover:text-brand-700 text-sm font-semibold transition-colors"
              >
                +1 (617) 615-9749
              </a>
              <p className="text-slate-500 text-xs mt-1">Mon–Fri, US business hours.</p>
            </div>

            {/* Email */}
            <div className="card">
              <div className="w-10 h-10 bg-brand-600/10 rounded-xl flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 text-brand-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Email Us</h3>
              <a
                href="mailto:admin@codvoro.com"
                className="text-brand-600 hover:text-brand-700 text-sm font-semibold transition-colors break-all"
              >
                admin@codvoro.com
              </a>
              <p className="text-slate-500 text-xs mt-1">We reply within 24 hours.</p>
            </div>

            {/* Book a call */}
            <div className="card">
              <div className="w-10 h-10 bg-accent-500/20 rounded-xl flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5 text-accent-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Book a Free Call</h3>
              <p className="text-slate-600 text-xs mb-3">
                30-minute intro call to discuss your project, timeline, and budget.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2 px-4"
              >
                Open Calendly <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:text-white hover:bg-brand-600 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:text-white hover:bg-brand-600 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* What to expect */}
            <div className="card bg-brand-600/10 border-brand-500/20">
              <h3 className="font-bold text-slate-900 text-sm mb-3">What happens next?</h3>
              <ol className="space-y-2">
                {[
                  'You submit this form',
                  'We review and reply within 24h',
                  'We schedule a discovery call',
                  'We send a proposal within 48h',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="w-5 h-5 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold shrink-0 text-xs">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="card h-full flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="w-8 h-8 text-accent-600" />
                </div>
                <h2 className="text-2xl font-black text-slate-900">Message received!</h2>
                <p className="text-slate-600 max-w-sm">
                  Thanks for reaching out. We will review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setError(''); setFormState({ name: '', email: '', company: '', projectType: '', budget: '', details: '', website: '' }) }}
                  className="btn-outline mt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="card">
                <h2 className="text-2xl font-black text-slate-900 mb-6">Submit Your Project</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot — hidden from real users, catches bots */}
                  <input
                    type="text"
                    name="website"
                    value={formState.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Name <span className="text-brand-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="input-field"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email <span className="text-brand-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="input-field"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Your company name (optional)"
                      className="input-field"
                      autoComplete="organization"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select a type…</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select a range…</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Project Details <span className="text-brand-600">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={5}
                      required
                      value={formState.details}
                      onChange={handleChange}
                      placeholder="Tell us about your project — what are you building, what problem does it solve, and what's your timeline?"
                      className="input-field resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>Sending…</>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting, you agree to our{' '}
                    <Link href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</Link>.
                    We will never share your data.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
