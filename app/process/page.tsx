import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Globe, Layers, Code2, Shield, Rocket,
  MessageSquare, FileSearch, GitBranch, TestTube, Server, HeartHandshake,
  CheckCircle,
} from 'lucide-react'
import VideoHero from '@/components/VideoHero'

export const metadata: Metadata = {
  title: 'Our Process',
  description: 'Codvoro\'s proven development process — from discovery to launch. Transparent, iterative, and built for predictable delivery.',
  alternates: {
    canonical: '/process',
  },
  openGraph: {
    title: 'Codvoro Development Process',
    description:
      'See how Codvoro plans, designs, builds, tests, and launches software projects with transparent delivery.',
    url: '/process',
    type: 'website',
  },
}

const phases = [
  {
    num: '01',
    icon: Globe,
    title: 'Discovery & Planning',
    duration: 'Week 1–2',
    tagline: 'We understand before we build.',
    desc: "Every successful project starts with deep understanding. We don't jump straight into code — we take time to understand your users, your business goals, your constraints, and your definition of success.",
    activities: [
      'Stakeholder interviews and goal alignment session',
      'User research and persona definition',
      'Technical requirements gathering',
      'Competitive analysis',
      'Project scope and milestone agreement',
    ],
    deliverable: 'Project brief, scope document, and milestone plan.',
    color: 'from-brand-700 to-brand-900',
  },
  {
    num: '02',
    icon: Layers,
    title: 'Architecture & Design',
    duration: 'Week 2–3',
    tagline: 'We design the right system before writing a line of code.',
    desc: 'Architecture decisions made early save weeks of refactoring later. We design the system, data models, APIs, and UI flows before development begins — giving your team full visibility and the chance to give feedback.',
    activities: [
      'System architecture and tech stack selection',
      'Database schema and data model design',
      'API contract design',
      'UI/UX wireframes and component planning',
      'Infrastructure and deployment planning',
    ],
    deliverable: 'Architecture diagram, API spec, wireframes, and database schema.',
    color: 'from-purple-700 to-brand-800',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Development',
    duration: 'Ongoing sprints',
    tagline: 'Iterative delivery with full transparency.',
    desc: 'We develop in 1–2 week sprints with weekly demos. You see real progress constantly — no black box development. Every sprint ends with a deployed, testable increment of your product.',
    activities: [
      '1–2 week sprints with clear sprint goals',
      'Weekly progress demos and async/sync check-ins',
      'Code review and pair programming for complex features',
      'Staging environment updated after every sprint',
      'GitHub project board for full visibility',
    ],
    deliverable: 'Working, tested software in staging after every sprint.',
    color: 'from-emerald-700 to-brand-800',
  },
  {
    num: '04',
    icon: Shield,
    title: 'Testing & QA',
    duration: 'Throughout + final sprint',
    tagline: 'Quality is built in, not bolted on.',
    desc: "We don't treat QA as an afterthought. Automated tests are written alongside feature code, and each release goes through a defined QA process before reaching production.",
    activities: [
      'Unit and integration tests for all core features',
      'End-to-end test coverage for critical user flows',
      'Performance testing and Lighthouse audits',
      'Security review and vulnerability scanning',
      'Cross-browser and cross-device testing',
    ],
    deliverable: 'Test coverage report, QA sign-off, and performance audit.',
    color: 'from-orange-700 to-brand-800',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Deployment & Launch',
    duration: 'Launch week',
    tagline: 'Smooth launch, zero surprises.',
    desc: 'Launch day should be boring. We set up CI/CD pipelines, infrastructure, monitoring, and rollback plans well before go-live. The first production deployment is never a surprise.',
    activities: [
      'CI/CD pipeline setup (GitHub Actions / Vercel / AWS)',
      'Production infrastructure provisioning',
      'DNS, SSL, and domain configuration',
      'Monitoring, alerting, and logging setup',
      'Launch checklist sign-off and go-live',
    ],
    deliverable: 'Live production application with monitoring and runbook.',
    color: 'from-sky-700 to-brand-800',
  },
  {
    num: '06',
    icon: HeartHandshake,
    title: 'Support & Iteration',
    duration: 'Post-launch',
    tagline: 'We stay with you after the launch.',
    desc: 'A shipped product is just the beginning. We offer post-launch support packages to handle bug fixes, performance optimisations, and new feature development as your product evolves.',
    activities: [
      '30-day post-launch bug fix warranty (all projects)',
      'Monthly retainer options for ongoing development',
      'Performance and cost optimisation reviews',
      'Feature prioritisation and product roadmap support',
      'Team handoff documentation and knowledge transfer',
    ],
    deliverable: 'Maintenance plan, codebase documentation, and handoff package.',
    color: 'from-pink-700 to-brand-800',
  },
]

const principles = [
  { icon: MessageSquare, title: 'Over-communicate', desc: 'You always know what is happening. No surprises, no excuses.' },
  { icon: FileSearch, title: 'Document everything', desc: 'Code, decisions, and processes are all documented so the project belongs to you.' },
  { icon: GitBranch, title: 'Version control first', desc: 'All code is in Git from day one. Full history, clean branches, and pull request reviews.' },
  { icon: TestTube, title: 'Test as you build', desc: 'Tests are written with features — not after. Quality is a habit, not a step.' },
  { icon: Server, title: 'Infrastructure as code', desc: 'Deployments are repeatable, environments are consistent, and rollbacks are always possible.' },
]

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <VideoHero src="/process.mp4">
        <span className="inline-block text-sm font-semibold uppercase tracking-[0.1em] text-brand-200 mb-3">
          How We Work
        </span>
        <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4">
          A Process Built for <span className="gradient-text-light">Predictability</span>
        </h1>
        <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
          We follow a structured, transparent process that gives you full visibility and confidence at every stage — from first conversation to live product.
        </p>
      </VideoHero>

      {/* Process phases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {phases.map((phase, idx) => {
            const Icon = phase.icon
            const isEven = idx % 2 === 0
            return (
              <div
                key={phase.num}
                className={`grid lg:grid-cols-2 gap-10 items-start ${!isEven ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Visual */}
                <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className={`h-48 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-hero-grid opacity-30" />
                    <Icon className="relative w-20 h-20 text-white/25" strokeWidth={1} />
                    <div className="absolute bottom-4 right-4 bg-slate-900/70 backdrop-blur rounded-lg px-3 py-1.5">
                      <span className="text-xs font-semibold text-white">{phase.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-black text-slate-900/10">{phase.num}</span>
                    <div className="w-10 h-10 bg-brand-600/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-1">{phase.title}</h2>
                  <p className="text-brand-600 font-semibold mb-3">{phase.tagline}</p>
                  <p className="text-slate-600 leading-relaxed mb-5 text-sm">{phase.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {phase.activities.map((act) => (
                      <li key={act} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                        {act}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-slate-100 rounded-xl px-4 py-3 text-sm">
                    <span className="text-slate-500 font-medium">Deliverable: </span>
                    <span className="text-slate-700">{phase.deliverable}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Engineering principles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Engineering Standards</span>
            <h2 className="section-title text-4xl">
              How We Write <span className="gradient-text">Production Code</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {principles.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="card text-center">
                  <div className="w-10 h-10 bg-brand-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{p.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Want to walk through the process together?
          </h2>
          <p className="text-slate-600 mb-8">
            Book a free 30-minute call and we will walk you through exactly how we would approach your project.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Book a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
