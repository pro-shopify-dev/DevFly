import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { siteUrl } from '@/lib/site'
import {
  Code2, Layers, Rocket, Server, Figma, ShoppingCart,
  CheckCircle, ArrowRight, ChevronRight,
  BrainCircuit,
} from 'lucide-react'
import VideoHero from '@/components/VideoHero'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Custom web applications, AI solutions, SaaS platforms, startup MVPs, e-commerce, API development, and UI/UX implementation by Codvoro.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Codvoro Services',
    description:
      'Explore Codvoro software development services: custom web apps, SaaS, startup MVPs, APIs, and e-commerce builds.',
    url: '/services',
    type: 'website',
  },
}

const services = [
  {
    id: 'ai',
    icon: BrainCircuit,
    title: 'AI Solutions & Automation',
    tagline: 'Useful AI built around your workflows and data.',
    desc: 'We design and ship secure AI features that solve a defined business problem, from internal knowledge assistants to document processing and workflow automation. Every system includes clear guardrails, human review where it matters, and measurable success criteria.',
    useCases: ['AI copilots and customer support assistants', 'Knowledge search with source-grounded answers', 'Document extraction, classification, and summarization', 'Automated workflows with human approval steps'],
    tech: ['OpenAI', 'Python', 'Next.js', 'PostgreSQL', 'Vector Search'],
    color: 'from-cyan-800 to-brand-900',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    id: 'web-apps',
    icon: Code2,
    title: 'Custom Web Applications',
    tagline: 'Full-stack apps that scale with your business.',
    desc: 'We architect and build complex, data-driven web applications using modern, battle-tested technologies. From internal tools to consumer-facing platforms, we deliver products that are fast, reliable, and maintainable.',
    useCases: [
      'Internal business dashboards & admin panels',
      'Customer-facing portals and self-service tools',
      'Data-intensive reporting applications',
      'Real-time collaborative platforms',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    color: 'from-brand-700 to-brand-900',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  },
  {
    id: 'mvp',
    icon: Rocket,
    title: 'Startup MVP Development',
    tagline: 'Go from idea to live product in weeks.',
    desc: 'We specialise in helping early-stage startups validate their core idea quickly and affordably. Our lean MVP process cuts scope to the essential features, enabling you to launch, learn, and iterate fast.',
    useCases: [
      'Validate a product idea before raising funds',
      'Launch quickly to capture market opportunity',
      'Build a demo for investor pitches',
      'Test pricing and product-market fit',
    ],
    tech: ['Next.js', 'Firebase', 'Stripe', 'Vercel'],
    color: 'from-purple-800 to-brand-800',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
  },
  {
    id: 'saas',
    icon: Layers,
    title: 'SaaS Platform Development',
    tagline: 'End-to-end SaaS products built to grow.',
    desc: 'Building a SaaS product requires expertise across authentication, billing, multi-tenancy, subscription management, and scalable infrastructure. We have done it before — and we know where the pitfalls are.',
    useCases: [
      'Multi-tenant B2B SaaS applications',
      'Subscription billing with Stripe',
      'Role-based access control and teams',
      'Usage metering and plan enforcement',
    ],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    color: 'from-emerald-800 to-brand-800',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce Platforms',
    tagline: 'High-converting storefronts and checkout flows.',
    desc: 'From headless commerce integrations to fully custom storefronts, we build e-commerce experiences that convert visitors into buyers. We handle product management, cart, checkout, payments, and order fulfillment.',
    useCases: [
      'Custom storefront with headless CMS',
      'Shopify/WooCommerce customisations & extensions',
      'B2B wholesale portals',
      'Subscription box and recurring purchase flows',
    ],
    tech: ['Next.js', 'Shopify', 'Stripe', 'Sanity', 'PostgreSQL'],
    color: 'from-orange-800 to-brand-800',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
  },
  {
    id: 'api',
    icon: Server,
    title: 'API & Backend Development',
    tagline: 'Reliable, documented, production-grade APIs.',
    desc: 'We design and build the backend systems that power your product — RESTful APIs, GraphQL services, microservices, event-driven architectures, and third-party integrations. Your data is safe, structured, and fast.',
    useCases: [
      'Public or private REST & GraphQL APIs',
      'Microservices and serverless functions',
      'Third-party integrations (Stripe, Twilio, etc.)',
      'Webhook processing and event pipelines',
    ],
    tech: ['Node.js', 'Python', 'Laravel', 'PostgreSQL', 'Redis', 'AWS'],
    color: 'from-sky-800 to-brand-800',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
  {
    id: 'ui',
    icon: Figma,
    title: 'UI/UX Implementation',
    tagline: 'Pixel-perfect interfaces from your Figma designs.',
    desc: 'Have designs but need an expert team to bring them to life? We implement Figma designs with precision, building accessible, responsive, and performant UI components that match your design system exactly.',
    useCases: [
      'Figma-to-code implementation',
      'Design system & component library build-out',
      'Responsive mobile-first UI',
      'Accessibility (WCAG 2.1) compliance',
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Radix UI', 'Storybook'],
    color: 'from-pink-800 to-brand-800',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
]

const servicesPageUrl = `${siteUrl}/services`

const faqItems = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Most MVP projects take 6 to 10 weeks. Larger SaaS or enterprise builds usually run in phased releases over several months.',
  },
  {
    question: 'Do you work with US timezone teams?',
    answer:
      'Yes. We work with US-based founders and teams and keep communication aligned with US business hours.',
  },
  {
    question: 'Can you build from Figma designs?',
    answer:
      'Yes. We can implement existing Figma designs with production-ready, responsive, and accessible front-end code.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer:
      'Yes. We provide post-launch support, bug fixes, optimization, and ongoing feature development retainers.',
  },
]

const servicesListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Codvoro Software Development Services',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.desc,
      serviceType: service.title,
      provider: {
        '@type': 'Organization',
        name: 'Codvoro',
        url: siteUrl,
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      url: `${servicesPageUrl}#${service.id}`,
    },
  })),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: servicesPageUrl,
    },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <VideoHero src="/stock-footage.mp4">
        <span className="section-tag section-tag-light">What We Build</span>
        <h1 className="text-[2.5rem] lg:text-6xl font-extrabold text-white leading-[1.05] tracking-[-0.033em] mb-6">
          Services engineered for <span className="gradient-text-light">real products</span>
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
          We cover the full software lifecycle — from idea to production — with a small, senior team that owns your project end-to-end.
        </p>
        <div className="flex flex-wrap gap-4 mt-9">
          <Link href="/contact" className="btn-primary">
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            See Our Work
          </Link>
        </div>
      </VideoHero>

      {/* Service index — a quick, scannable list before the detail sections */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-wide py-10 grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-16 items-center">
          <p className="text-[0.8125rem] font-semibold text-slate-500 uppercase tracking-[0.16em] lg:border-r lg:border-slate-300 lg:pr-16">
            Jump to
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {services.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="text-[0.9375rem] font-semibold text-slate-600 hover:text-brand-600 transition-colors"
              >
                {svc.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="container-wide">
          {services.map((svc, idx) => {
            const Icon = svc.icon
            const isEven = idx % 2 === 0
            return (
              <div
                id={svc.id}
                key={svc.id}
                className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center scroll-mt-32 py-16 lg:py-24 border-b border-slate-200 last:border-0"
              >
                {/* Visual */}
                <div className={`relative h-72 lg:h-[30rem] overflow-hidden rounded-[var(--radius-lg)] ${!isEven ? 'lg:order-2' : ''}`}>
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${svc.color} opacity-50`} />
                  <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-slate-950/55 backdrop-blur-sm px-6 py-5">
                    <p className="text-[0.6875rem] text-slate-300 font-semibold uppercase tracking-[0.16em] mb-3">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      {svc.tech.map((t) => (
                        <span key={t} className="text-sm text-white font-semibold">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <Icon className="w-8 h-8 text-brand-600" strokeWidth={1.5} />
                    <span className="text-sm font-semibold text-slate-300 tabular-nums">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-[2.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-3">
                    {svc.title}
                  </h2>
                  <p className="text-brand-600 font-semibold text-lg mb-5">{svc.tagline}</p>
                  <p className="text-slate-600 leading-relaxed mb-8 max-w-xl">{svc.desc}</p>
                  <ul className="border-t border-slate-200 mb-8 max-w-xl">
                    {svc.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-3 text-slate-700 py-3 border-b border-slate-200">
                        <CheckCircle className="w-4 h-4 text-accent-600 shrink-0 mt-1.5" />
                        {uc}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="link-arrow">
                    Discuss this service <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-slate-50 border-t border-slate-200">
        <div className="container-wide grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-10 lg:gap-20">
          <div>
            <span className="section-tag">Questions</span>
            <h2 className="section-title">Services FAQ</h2>
            <p className="section-subtitle mt-5">
              Something not covered here? Ask us directly — we answer within a day.
            </p>
          </div>
          <div className="border-t border-slate-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-7 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">{item.question}</h3>
                <p className="text-slate-600 leading-relaxed max-w-2xl">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950">
        <div className="container-wide section-pad-sm grid lg:grid-cols-[1.15fr_auto] gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Not sure which service fits your project?
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl">
              Book a free 30-minute consultation and we will map out the right approach for you.
            </p>
          </div>
          <Link href="/contact" className="btn-primary text-base shrink-0">
            Book a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
