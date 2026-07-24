import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { siteUrl } from '@/lib/site'
import { techBrands } from '@/components/BrandLogos'
import VideoHero from '@/components/VideoHero'
import {
  ArrowRight,
  CheckCircle,
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
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web App, SaaS & MVP Development Agency',
  description:
    'Codvoro builds custom web applications, SaaS platforms, and startup MVPs for US businesses. Next.js, React, Node.js, and AWS experts.',
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

const techStack = [
  'React', 'Next.js', 'Node.js', 'Laravel',
  'Python', 'PostgreSQL', 'Firebase', 'AWS', 'Figma',
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

function HeroSection() {
  return (
    <VideoHero src="/hero.mp4" minHeightClass="min-h-[88vh]" contentWidthClass="max-w-5xl">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-4 py-1.5 text-sm text-brand-100 mb-6 anim-pop anim-delay-1">
        <Zap className="w-3.5 h-3.5" />
        Freelancer pricing · Agency quality
      </div>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-6 anim-reveal anim-delay-2">
        We Build <span className="gradient-text-light">Software That</span> Moves Fast
      </h1>
      <p className="text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto anim-reveal anim-delay-3">
        Custom web apps, SaaS platforms, and startup MVPs for US businesses. We deliver production-ready software — on time, every time.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-10 anim-reveal anim-delay-4">
        <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
          Book a Free Consultation <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/services" className="btn-secondary text-base px-8 py-3.5">
          See Our Services
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-6 anim-reveal anim-delay-5">
        {['50+ Projects delivered', 'US-based clients', '24h response time'].map((item, idx) => (
          <div key={item} className={`flex items-center gap-2 text-sm text-slate-200 anim-pop anim-delay-${idx + 1}`}>
            <CheckCircle className="w-4 h-4 text-accent-400 shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </VideoHero>
  )
}

function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-10 anim-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-8">
          Platforms &amp; technologies we build with
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
          {techBrands.map((brand, idx) => (
            <div
              key={brand.name}
              className={`flex items-center gap-2.5 opacity-90 hover:opacity-100 hover:-translate-y-0.5 transition-all anim-pop anim-delay-${(idx % 6) + 1}`}
            >
              {brand.logo}
              <span className="text-slate-800 font-bold text-lg tracking-tight">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white anim-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">
            Services Built for <span className="gradient-text">Modern Products</span>
          </h2>
          <p className="section-subtitle">
            From concept to production, we cover the full software development lifecycle.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <div key={svc.title} className={`card card-tilt group transition-all duration-300 anim-reveal anim-delay-${(idx % 6) + 1}`}>
                <div className="w-12 h-12 bg-brand-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{svc.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-10">
          <Link href="/services" className="btn-outline">
            View All Services <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="py-24 bg-slate-50 anim-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">How We Work</span>
          <h2 className="section-title">
            A Process Designed for <span className="gradient-text">Clarity & Speed</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={step.num} className={`relative text-center group anim-reveal anim-delay-${(idx % 6) + 1}`}>
                {/* Connector */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-50%] h-px bg-slate-200" />
                )}
                <div className="w-16 h-16 bg-brand-600/20 border border-brand-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-600/40 transition-all">
                  <Icon className="w-7 h-7 text-brand-600" />
                </div>
                <p className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-1">{step.num}</p>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-10">
          <Link href="/process" className="btn-outline">
            Our Full Process <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function PortfolioSection() {
  return (
    <section className="py-24 bg-white anim-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">Our Work</span>
          <h2 className="section-title">
            Projects That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="section-subtitle">
            A selection of products we have designed, built, and shipped.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={project.title} className={`card card-tilt group overflow-hidden anim-reveal anim-delay-${(idx % 6) + 1}`}>
              {/* Project visual */}
              <div className="h-44 rounded-xl overflow-hidden relative mb-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-50`} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-brand-700 bg-brand-600/15 border border-brand-500/20 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/portfolio" className="btn-outline">
            View Full Portfolio <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function TechStackSection() {
  return (
    <section className="py-24 bg-slate-50 anim-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="section-tag">Tech Stack</span>
        <h2 className="section-title">
          Modern Tools for <span className="gradient-text">Scalable Products</span>
        </h2>
        <p className="section-subtitle mb-12">
          We use modern technologies to build fast, reliable, and maintainable products.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, idx) => (
            <div
              key={tech}
              className={`px-6 py-3 glass rounded-xl text-slate-700 font-semibold hover:text-slate-900 hover:border-brand-500/50 transition-all hover:-translate-y-0.5 anim-pop anim-delay-${(idx % 6) + 1}`}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-24 bg-white anim-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">Client Stories</span>
          <h2 className="section-title">
            What Our Clients <span className="gradient-text">Say About Us</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={t.name} className={`card card-tilt flex flex-col gap-4 anim-reveal anim-delay-${(idx % 6) + 1}`}>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-3"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </span>
                <div className="mt-3">
                  <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 relative overflow-hidden gradient-animate anim-reveal">
      <div className="absolute inset-0 bg-hero-grid opacity-10" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-sm font-semibold uppercase tracking-[0.1em] text-brand-200 mb-3">Start Today</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
          Tell us about your idea and we will respond within 24 hours. No obligation, no sales pressure.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-secondary text-base px-8 py-3.5">
            Submit Your Project <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
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
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TechStackSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  )
}
