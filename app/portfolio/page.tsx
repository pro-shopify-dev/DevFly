import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import VideoHero from '@/components/VideoHero'
import { projects } from './projects'
import { siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Case studies and featured projects built by Codvoro — web apps, SaaS platforms, and startup MVPs.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Codvoro Portfolio',
    description:
      'Browse Codvoro case studies across web apps, SaaS platforms, and startup MVP delivery projects.',
    url: '/portfolio',
    type: 'website',
  },
}

const portfolioPageUrl = `${siteUrl}/portfolio`

const portfolioBreadcrumbJsonLd = {
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
      name: 'Portfolio',
      item: portfolioPageUrl,
    },
  ],
}

const portfolioProjectsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Codvoro Portfolio',
  url: portfolioPageUrl,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.desc,
        image: project.image,
        url: `${siteUrl}/portfolio/demo/${project.slug}`,
      },
    })),
  },
}

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioProjectsJsonLd) }}
      />

      {/* Hero */}
      <VideoHero src="/showreel.mp4">
        <span className="inline-block text-sm font-semibold uppercase tracking-[0.1em] text-brand-200 mb-3">
          Our Work
        </span>
        <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4">
          Projects That <span className="gradient-text-light">Drive Real Outcomes</span>
        </h1>
        <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
          We don&apos;t just write code — we solve business problems. Every project has a challenge, a solution, and a measured result.
        </p>
      </VideoHero>

      {/* Projects grid */}
      <section className="py-16 bg-white anim-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={project.title} className={`card card-tilt group flex flex-col anim-reveal anim-delay-${(idx % 6) + 1}`}>
                {/* Visual */}
                <div className="h-44 rounded-xl overflow-hidden relative mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40`} />
                </div>

                {/* Content */}
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3 ${project.category_color}`}>
                  {project.category}
                </span>
                <h2 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>

                <div className="bg-slate-100 rounded-xl p-4 mb-4 space-y-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Challenge</p>
                    <p className="text-xs text-slate-700 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-accent-600 uppercase mb-1">Outcome</p>
                    <p className="text-xs text-slate-700 leading-relaxed">{project.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-brand-700 bg-brand-600/15 border border-brand-500/20 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5">
                  <a
                    href={project.codeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors py-1"
                    aria-label={`${project.title} source code`}
                  >
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                  <Link
                    href={`/portfolio/demo/${project.slug}`}
                    className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors py-1"
                    aria-label={`${project.title} demo`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 anim-reveal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Ready to build your project?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Let&apos;s talk about your vision. We&apos;ll help you scope, architect, and ship it.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Contact Us to Build Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
