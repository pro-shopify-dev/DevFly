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
        <span className="section-tag section-tag-light">Our Work</span>
        <h1 className="text-[2.5rem] lg:text-6xl font-extrabold text-white leading-[1.05] tracking-[-0.033em] mb-6">
          Projects that <span className="gradient-text-light">drive real outcomes</span>
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
          We don&apos;t just write code — we solve business problems. Every project has a challenge, a solution, and a measured result.
        </p>
      </VideoHero>

      {/* Projects grid */}
      <section className="section-pad bg-white anim-reveal">
        <div className="container-wide">
          <div className="section-head">
            <div>
              <span className="section-tag">Case Studies</span>
              <h2 className="section-title">
                Selected <span className="gradient-text">client work</span>
              </h2>
            </div>
            <div className="section-head-aside">
              <p className="section-subtitle">
                Each build below started as a business problem. Open a case study to see the
                challenge, the approach we took, and what shipped.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {projects.map((project, idx) => (
              <article
                key={project.title}
                className={`group flex flex-col anim-reveal anim-delay-${(idx % 6) + 1}`}
              >
                {/* Visual */}
                <Link
                  href={`/portfolio/demo/${project.slug}`}
                  className="aspect-[16/10] rounded-[var(--radius-lg)] overflow-hidden relative block bg-slate-100"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40`} />
                </Link>

                {/* Content */}
                <div className="flex flex-col flex-1 border-t border-slate-900 mt-6 pt-6">
                  <span className={`text-[0.6875rem] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-[var(--radius-sm)] w-fit mb-4 ${project.category_color}`}>
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{project.desc}</p>

                  <dl className="border-t border-slate-200 mb-6 flex-1">
                    <div className="py-4 border-b border-slate-200">
                      <dt className="text-[0.6875rem] font-bold text-slate-500 uppercase tracking-[0.14em] mb-1.5">
                        Challenge
                      </dt>
                      <dd className="text-[0.9375rem] text-slate-700 leading-relaxed">{project.challenge}</dd>
                    </div>
                    <div className="py-4 border-b border-slate-200">
                      <dt className="text-[0.6875rem] font-bold text-accent-600 uppercase tracking-[0.14em] mb-1.5">
                        Outcome
                      </dt>
                      <dd className="text-[0.9375rem] text-slate-700 leading-relaxed">{project.outcome}</dd>
                    </div>
                  </dl>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[0.8125rem] font-semibold text-slate-500 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <Link
                      href={`/portfolio/demo/${project.slug}`}
                      className="flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors"
                      aria-label={`${project.title} demo`}
                    >
                      <ExternalLink className="w-4 h-4" /> View case study
                    </Link>
                    <a
                      href={project.codeHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                      aria-label={`${project.title} source code`}
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 anim-reveal">
        <div className="container-wide section-pad-sm grid lg:grid-cols-[1.15fr_auto] gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to build your project?
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl">
              Let&apos;s talk about your vision. We&apos;ll help you scope, architect, and ship it.
            </p>
          </div>
          <Link href="/contact" className="btn-primary text-base shrink-0">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
