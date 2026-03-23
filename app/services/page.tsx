import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { siteUrl } from '@/lib/site'
import {
  Code2, Layers, Rocket, Server, Figma, ShoppingCart,
  CheckCircle, ArrowRight, ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Custom web applications, SaaS platforms, startup MVPs, e-commerce, API development, and UI/UX implementation by DevFly.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'DevFly Services',
    description:
      'Explore DevFly software development services: custom web apps, SaaS, startup MVPs, APIs, and e-commerce builds.',
    url: '/services',
    type: 'website',
  },
}

const services = [
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
  name: 'DevFly Software Development Services',
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
        name: 'DevFly',
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
      <section className="py-24 bg-dark-900 bg-hero-grid relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">What We Build</span>
          <h1 className="section-title text-5xl lg:text-6xl">
            Services Engineered for <span className="gradient-text">Real Products</span>
          </h1>
          <p className="section-subtitle mx-auto text-lg mt-4">
            We cover the full software lifecycle — from idea to production — with a small, senior team that owns your project end-to-end.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" className="btn-primary">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((svc, idx) => {
            const Icon = svc.icon
            const isEven = idx % 2 === 0
            return (
              <div
                id={svc.id}
                key={svc.id}
                className={`grid lg:grid-cols-2 gap-10 items-center scroll-mt-20 ${!isEven ? 'lg:[direction:rtl] [&>*]:[direction:ltr]' : ''}`}
              >
                {/* Visual */}
                <div className="h-64 lg:h-80 rounded-2xl overflow-hidden relative">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${svc.color} opacity-50`} />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass rounded-xl p-4">
                      <p className="text-xs text-gray-300 font-medium mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {svc.tech.map((t) => (
                          <span key={t} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-md font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="w-12 h-12 bg-brand-600/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h2 className="text-3xl font-black text-white mb-2">{svc.title}</h2>
                  <p className="text-brand-400 font-semibold mb-4">{svc.tagline}</p>
                  <p className="text-gray-400 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.useCases.map((uc) => (
                      <li key={uc} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-accent-400 shrink-0" />
                        {uc}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary text-sm">
                    Discuss This Service <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-dark-900 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-10">
            Services FAQ
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="card">
                <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                <p className="text-gray-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Not sure which service fits your project?
          </h2>
          <p className="text-gray-400 mb-8">
            Book a free 30-minute consultation and we will map out the right approach for you.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Book a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
