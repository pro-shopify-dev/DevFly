import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Zap, Target, Heart } from 'lucide-react'
import VideoHero from '@/components/VideoHero'

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
      <VideoHero src="/team.mp4">
        <span className="section-tag section-tag-light">About Codvoro</span>
        <h1 className="text-[2.5rem] lg:text-6xl font-extrabold text-white leading-[1.05] tracking-[-0.033em] mb-6">
          Small team. <span className="gradient-text-light">Big delivery.</span>
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
          Codvoro is a high-expertise software development team building web applications, SaaS platforms, and startup MVPs for US businesses. We combine the cost-efficiency of freelancers with the accountability and quality of a top-tier agency.
        </p>
      </VideoHero>

      {/* Mission & Vision */}
      <section className="section-pad-sm bg-slate-50 border-b border-slate-200 anim-reveal">
        <div className="container-wide grid md:grid-cols-2 gap-10 lg:gap-20">
          <div className="anim-pop anim-delay-1">
            <span className="section-tag">Our Mission</span>
            <p className="lede text-slate-700">
              To help US startups and businesses build exceptional software — faster than they thought possible and at a price that makes sense. We believe great software should not require a $500k engineering hire or a bloated agency retainer.
            </p>
          </div>
          <div className="anim-pop anim-delay-2 md:border-l md:border-slate-200 md:pl-10 lg:pl-20">
            <span className="section-tag">Our Vision</span>
            <p className="lede text-slate-700">
              To become the go-to development partner for US startups at the product-building stage — known for shipping fast, communicating clearly, and delivering results that move businesses forward.
            </p>
          </div>
        </div>
      </section>

      {/* Why Codvoro */}
      <section className="section-pad bg-slate-50 border-y border-slate-200 anim-reveal">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="section-tag">Why Codvoro</span>
            <h2 className="section-title">
              The right mix of <span className="gradient-text">price &amp; quality</span>
            </h2>
            <p className="lede mt-6 mb-8 max-w-xl">
              Most founders face a hard choice: hire an expensive agency and get bloated overhead, or hire individual freelancers and manage chaos. Codvoro is the third option.
            </p>
            <ul className="border-t border-slate-300 max-w-xl">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 py-3.5 border-b border-slate-300">
                  <CheckCircle className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 rule-grid bg-white">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="rule-cell anim-pop">
                  <Icon className="w-7 h-7 text-brand-600 mb-5" strokeWidth={1.5} />
                  <h3 className="font-bold text-slate-900 text-lg tracking-tight mb-2">{v.title}</h3>
                  <p className="text-slate-600 text-[0.9375rem] leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white anim-reveal">
        <div className="container-wide grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-10 lg:gap-20">
          <div>
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">
              How we got <span className="gradient-text">here</span>
            </h2>
          </div>
          <ol className="border-t border-slate-200">
            {timeline.map((item) => (
              <li key={item.year} className="grid sm:grid-cols-[7rem_1fr] gap-2 sm:gap-8 py-6 border-b border-slate-200">
                <span className="text-brand-600 font-bold tabular-nums text-lg">{item.year}</span>
                <p className="text-slate-700 leading-relaxed">{item.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 anim-reveal">
        <div className="container-wide section-pad-sm grid lg:grid-cols-[1.15fr_auto] gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s build something great together.
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl">
              We only take on projects we believe in. Tell us yours — we&apos;ll tell you honestly if we&apos;re the right fit.
            </p>
          </div>
          <Link href="/contact" className="btn-primary text-base shrink-0">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
