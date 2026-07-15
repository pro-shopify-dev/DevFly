import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Users, Zap, Target, Heart, Code2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Codvoro — a small, senior software development team building world-class web apps and SaaS platforms for US startups and businesses.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Codvoro',
    description:
      'Meet the senior software team behind Codvoro and learn how we deliver startup and SaaS products.',
    url: '/about',
    type: 'website',
  },
}

const values = [
  {
    icon: Zap,
    title: 'Speed without compromise',
    desc: 'We move fast because our process is proven — not because we skip steps. Quality is non-negotiable.',
  },
  {
    icon: Target,
    title: 'Outcome-focused',
    desc: 'We care about business results, not just lines of code. Every decision maps back to your goals.',
  },
  {
    icon: Users,
    title: 'True partnership',
    desc: "We embed in your team, communicate proactively, and treat your product like it's our own.",
  },
  {
    icon: Heart,
    title: 'Craft & craftsmanship',
    desc: 'We take pride in clean architecture, readable code, and interfaces that users love.',
  },
]

const differentiators = [
  'Senior-only team — no juniors learning on your project',
  'Freelancer pricing, agency-level execution and accountability',
  'Weekly demos and transparent project tracking',
  'Direct communication — no account managers or middlemen',
  'We care about your product, not just the invoice',
  'US-timezone availability and fluent English communication',
]

const timeline = [
  { year: '2018', event: 'Combined 10+ years of experience building software for top tech companies.' },
  { year: '2020', event: 'Started taking on freelance clients — first $500k in client project value.' },
  { year: '2022', event: 'Formalised as Codvoro. First agency-level project delivery for US startup.' },
  { year: '2024', event: '50+ projects delivered. Expanded team with vetted senior specialists.' },
  { year: '2026', event: 'Focused exclusively on US startups and growth-stage companies.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-white bg-hero-grid relative overflow-hidden anim-reveal">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">About Codvoro</span>
          <h1 className="section-title text-5xl lg:text-6xl">
            Small Team. <span className="gradient-text">Big Delivery.</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4 text-lg">
            Codvoro is a high-expertise software development team building web applications, SaaS platforms, and startup MVPs for US businesses. We combine the cost-efficiency of freelancers with the accountability and quality of a top-tier agency.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 anim-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div className="card card-tilt anim-pop anim-delay-1">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              To help US startups and businesses build exceptional software — faster than they thought possible and at a price that makes sense. We believe great software should not require a $500k engineering hire or a bloated agency retainer.
            </p>
          </div>
          <div className="card card-tilt border-brand-500/30 anim-pop anim-delay-2">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              To become the go-to development partner for US startups at the product-building stage — known for shipping fast, communicating clearly, and delivering results that move businesses forward.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white anim-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">The Team</span>
            <h2 className="section-title">
              People Behind <span className="gradient-text">Codvoro</span>
            </h2>
            <p className="section-subtitle mx-auto mt-2">
              A focused core of senior engineers who architect, build, test, and ship your product end-to-end.
            </p>
          </div>

          {/* Development Team */}
          <div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card card-tilt anim-pop anim-delay-1">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden relative shrink-0">
                    <Image
                      src="/tony-brain.png"
                      alt="Tony Brain — Technical Lead"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Tony Brain</h4>
                    <p className="text-brand-600 text-sm font-semibold">Technical Lead & Co-founder</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mt-4">
                  Full-stack engineer with 8+ years of experience building web applications and SaaS platforms. Specialises in React, Node.js, and cloud architecture. Leads all technical delivery at Codvoro.
                </p>
              </div>
              <div className="card card-tilt anim-pop anim-delay-2">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-brand-600/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                    <Code2 className="w-9 h-9 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Senior Specialist Network</h4>
                    <p className="text-brand-600 text-sm font-semibold">Frontend · Backend · Design · DevOps</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mt-4">
                  For larger projects, we bring in vetted senior specialists from our trusted network — all pre-screened and held to the same standards as our core team, so quality never slips as scope grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Codvoro */}
      <section className="py-20 bg-slate-50 anim-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-tag">Why Codvoro</span>
            <h2 className="section-title text-4xl">
              The Right Mix of <span className="gradient-text">Price & Quality</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              Most founders face a hard choice: hire an expensive agency and get bloated overhead, or hire individual freelancers and manage chaos. Codvoro is the third option.
            </p>
            <ul className="space-y-3">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="card card-tilt anim-pop">
                  <div className="w-10 h-10 bg-brand-600/20 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{v.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white anim-reveal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title text-4xl">
              How We Got <span className="gradient-text">Here</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[72px] top-3 bottom-3 w-px bg-slate-200" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div className="w-16 text-right shrink-0">
                    <span className="text-brand-600 font-bold text-sm">{item.year}</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[13px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-500 border-2 border-white ring-1 ring-slate-200" />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed pt-px">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 anim-reveal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Let&apos;s build something great together.
          </h2>
          <p className="text-slate-600 mb-8">
            We only take on projects we believe in. Tell us yours — we&apos;ll tell you honestly if we&apos;re the right fit.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
