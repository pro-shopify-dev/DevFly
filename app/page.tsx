import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { siteUrl } from '@/lib/site'
import { techBrands } from '@/components/BrandLogos'
import VideoHero from '@/components/VideoHero'
import PartnerMarquee from '@/components/PartnerMarquee'
import {
  ArrowRight,
  Code2,
  Layers,
  Rocket,
  Server,
  Figma,
  ShoppingCart,
  Star,
  ChevronRight,
  Globe,
  Zap,
  Shield,
  BrainCircuit,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web App, AI, SaaS & MVP Development Agency',
  description:
    'Codvoro builds custom web applications, AI solutions, SaaS platforms, and startup MVPs for US businesses.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Codvoro — Web App, SaaS & MVP Development Agency',
    description:
      'Custom web apps, SaaS products, and startup MVPs built fast with senior engineers.',
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codvoro — Web App, SaaS & MVP Development Agency',
    description:
      'Custom web apps, SaaS products, and startup MVPs built fast with senior engineers.',
  },
}

// ─── DATA ───────────────────────────────────────────────────────────────────

const services = [
  {
    icon: BrainCircuit,
    title: 'AI Solutions & Automation',
    desc: 'Practical AI copilots, intelligent workflows, and retrieval systems connected to your business data.',
  },
  {
    icon: Code2,
    title: 'Web Application Development',
    desc: 'Full-stack web apps built with React, Next.js, and Node.js — performant and scalable.',
  },
  {
    icon: Layers,
    title: 'SaaS Platform Development',
    desc: 'End-to-end SaaS products with auth, billing, dashboards, and multi-tenancy.',
  },
  {
    icon: Rocket,
    title: 'Startup MVP Development',
    desc: 'Go from idea to live product fast. We help startups validate and launch quickly.',
  },
  {
    icon: Server,
    title: 'API & Backend Systems',
    desc: 'Robust REST & GraphQL APIs, microservices, and cloud-native backend architectures.',
  },
  {
    icon: Figma,
    title: 'UI/UX Implementation',
    desc: 'Pixel-perfect implementation of Figma designs into production-ready interfaces.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Platforms',
    desc: 'Custom storefronts, headless commerce, and payment-integrated e-commerce solutions.',
  },
]

const processSteps = [
  { num: '01', title: 'Discovery', icon: Globe, desc: 'Understand your goals, users, and technical requirements.' },
  { num: '02', title: 'Architecture', icon: Layers, desc: 'Design system architecture, tech stack, and data models.' },
  { num: '03', title: 'Development', icon: Code2, desc: 'Iterative sprints with weekly demos and transparent progress.' },
  { num: '04', title: 'Testing & QA', icon: Shield, desc: 'Automated tests, code review, and performance audits.' },
  { num: '05', title: 'Launch', icon: Rocket, desc: 'Deployment to production with CI/CD, monitoring, and support.' },
]

const projects = [
  {
    title: 'AI Knowledge Assistant',
    desc: 'A secure, source-grounded assistant that helps support teams find answers across internal documentation in seconds.',
    tags: ['Next.js', 'Python', 'OpenAI', 'PostgreSQL'],
    color: 'from-cyan-700 to-brand-800',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    title: 'SaaS Analytics Dashboard',
    desc: 'A real-time analytics platform for e-commerce brands with custom reporting and data export.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    color: 'from-brand-600 to-brand-800',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'Startup Marketplace MVP',
    desc: 'Two-sided marketplace connecting freelancers with clients — built and launched in 8 weeks.',
    tags: ['React', 'Firebase', 'Stripe', 'Vercel'],
    color: 'from-purple-700 to-brand-700',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    title: 'Healthcare Scheduling App',
    desc: 'HIPAA-compliant scheduling system for a US-based medical group with 50+ providers.',
    tags: ['Next.js', 'PostgreSQL', 'Twilio', 'AWS'],
    color: 'from-emerald-700 to-brand-700',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Headless commerce storefront with custom CMS, personalized recommendations, and checkout.',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    color: 'from-orange-700 to-brand-700',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
  },
]

const testimonials = [
  {
    quote: 'Codvoro delivered our MVP faster than expected and the quality was excellent. They communicate clearly and deliver consistently.',
    name: 'Marcus Thompson',
    role: 'Founder, TechFlow',
    initials: 'MT',
    color: '#4f46e5',
  },
  {
    quote: 'Working with Codvoro felt different from other agencies. They treated our product like their own and brought thoughtful solutions.',
    name: 'Sarah Klein',
    role: 'CTO, GrowthBase',
    initials: 'SK',
    color: '#0ea5e9',
  },
  {
    quote: "The team's technical expertise combined with their business understanding made them an invaluable partner for our platform.",
    name: 'James Rivera',
    role: 'CEO, NovaSaaS',
    initials: 'JR',
    color: '#059669',
  },
]

const homePageUrl = siteUrl

const homeServicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Codvoro Featured Services',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.desc,
      provider: {
        '@type': 'Organization',
        name: 'Codvoro',
        url: siteUrl,
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      url: `${siteUrl}/services`,
    },
  })),
}

const homeProjectsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Codvoro Featured Projects',
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: project.title,
      description: project.desc,
      image: project.image,
      url: `${siteUrl}/portfolio`,
    },
  })),
}

const homeBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: homePageUrl,
    },
  ],
}

// ─── SECTIONS ───────────────────────────────────────────────────────────────

const heroStats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '8+ yrs', label: 'Senior engineering' },
  { value: '24h', label: 'Response time' },
  { value: 'US', label: 'Timezone coverage' },
]

function HeroSection() {
  return (
    <VideoHero
      src="/hero.mp4"
      minHeightClass="min-h-[82vh]"
      contentWidthClass="max-w-4xl"
      footerBar={
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/15 border-x border-white/15">
          {heroStats.map((stat) => (
            <div key={stat.label} className="px-5 py-6 lg:px-8">
              <p className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">{stat.value}</p>
              <p className="mt-1 text-[0.8125rem] text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      }
    >
      <div className="inline-flex items-center gap-2.5 border border-white/25 px-4 py-2 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-brand-100 mb-8 anim-pop anim-delay-1">
        <Zap className="w-3.5 h-3.5" />
        Freelancer pricing · Agency quality
      </div>
      <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.03] tracking-[-0.035em] mb-7 anim-reveal anim-delay-2">
        We build software <span className="gradient-text-light">that moves fast</span>
      </h1>
      <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl anim-reveal anim-delay-3">
        Custom web apps, AI solutions, SaaS platforms, and startup MVPs for US businesses. Production-ready
        software, delivered on time — by a small team of senior engineers.
      </p>
      <div className="flex flex-wrap gap-4 anim-reveal anim-delay-4">
        <Link href="/contact" className="btn-primary text-base">
          Book a Free Consultation <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
        >
          See Our Services
        </Link>
      </div>
    </VideoHero>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-white anim-reveal">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">
              Services built for <span className="gradient-text">modern products</span>
            </h2>
          </div>
          <div className="section-head-aside">
            <p className="section-subtitle">
              From concept to production, we cover the full software development lifecycle — architecture,
              build, QA, and launch — with one senior team accountable end to end.
            </p>
            <Link href="/services" className="link-arrow">
              View all services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 rule-grid">
          {services.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.title}
                className={`rule-cell group anim-reveal anim-delay-${(idx % 6) + 1}`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <Icon className="w-8 h-8 text-brand-600" strokeWidth={1.5} />
                  <span className="text-sm font-semibold text-slate-300 tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{svc.title}</h3>
                <p className="text-slate-600 leading-relaxed">{svc.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="section-pad bg-slate-50 border-y border-slate-200 anim-reveal">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">
              A process designed for <span className="gradient-text">clarity &amp; speed</span>
            </h2>
          </div>
          <div className="section-head-aside">
            <p className="section-subtitle">
              Five stages, weekly demos, and a working build in staging at the end of every sprint.
              You always know exactly where your project stands.
            </p>
            <Link href="/process" className="link-arrow">
              Our full process <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ol className="border-t border-slate-200">
          {processSteps.map((step, idx) => {
            const Icon = step.icon
            return (
              <li
                key={step.num}
                className={`group grid md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8 border-b border-slate-200 transition-colors hover:bg-white anim-reveal anim-delay-${(idx % 6) + 1}`}
              >
                <span className="md:col-span-1 text-2xl font-extrabold text-slate-300 tabular-nums group-hover:text-brand-500 transition-colors">
                  {step.num}
                </span>
                <h3 className="md:col-span-3 text-xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                  <Icon className="w-5 h-5 text-brand-600 shrink-0" strokeWidth={1.75} />
                  {step.title}
                </h3>
                <p className="md:col-span-8 text-slate-600 leading-relaxed">{step.desc}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

function PortfolioSection() {
  return (
    <section className="section-pad bg-white anim-reveal">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">
              Projects that <span className="gradient-text">drive results</span>
            </h2>
          </div>
          <div className="section-head-aside">
            <p className="section-subtitle">
              A selection of products we have designed, built, and shipped for founders and
              growth-stage teams across the US.
            </p>
            <Link href="/portfolio" className="link-arrow">
              View full portfolio <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-14">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className={`group anim-reveal anim-delay-${(idx % 6) + 1}`}
            >
              <div className="aspect-[16/10] overflow-hidden relative rounded-[var(--radius-lg)] bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-45`} />
              </div>
              <div className="pt-7 border-t border-slate-200 mt-7">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-5 max-w-xl">{project.desc}</p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[0.8125rem] font-semibold text-slate-500 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechStackSection() {
  return (
    <section className="section-pad-sm bg-slate-50 border-y border-slate-200 anim-reveal">
      <div className="container-wide grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-10 lg:gap-20 items-start">
        <div>
          <span className="section-tag">Tech Stack</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Modern tools for scalable products
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-md">
            We keep the stack boring where it should be and modern where it counts — so your product
            stays fast, reliable, and cheap to maintain.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 rule-grid bg-white">
          {techBrands.map((brand, idx) => (
            <div
              key={brand.name}
              className={`flex items-center gap-3.5 px-6 py-6 transition-colors hover:bg-slate-50 anim-pop anim-delay-${(idx % 6) + 1}`}
            >
              <span className="shrink-0 flex items-center justify-center w-8">{brand.logo}</span>
              <span className="text-slate-800 font-bold text-lg tracking-tight">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="section-pad bg-white anim-reveal">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <span className="section-tag">Client Stories</span>
            <h2 className="section-title">
              What our clients <span className="gradient-text">say about us</span>
            </h2>
          </div>
          <div className="section-head-aside">
            <p className="section-subtitle">
              We work with a small number of clients at a time. These are the people who came back.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
          {testimonials.map((t, idx) => (
            <figure
              key={t.name}
              className={`flex flex-col border-t-2 border-slate-900 pt-7 anim-reveal anim-delay-${(idx % 6) + 1}`}
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg text-slate-800 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-4 mt-8">
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block text-slate-900 font-semibold">{t.name}</span>
                  <span className="block text-slate-500 text-sm">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 gradient-animate anim-reveal">
      <div className="absolute inset-0 bg-hero-grid opacity-10" />
      <div className="relative container-wide section-pad-sm grid lg:grid-cols-[1.15fr_auto] gap-10 lg:gap-20 items-center">
        <div>
          <span className="section-tag section-tag-light">Start Today</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.08]">
            Ready to start your project?
          </h2>
          <p className="mt-5 text-lg text-brand-100 leading-relaxed max-w-2xl">
            Tell us about your idea and we will respond within 24 hours. No obligation, no sales pressure.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-secondary text-base">
            Submit Your Project <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeServicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeProjectsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumbJsonLd) }}
      />

      <HeroSection />
      <PartnerMarquee />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  )
}
