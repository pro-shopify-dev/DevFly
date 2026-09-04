import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'
import { getProjectBySlug, projects } from '../../projects'
import PortfolioGalleryCarousel from '@/components/PortfolioGalleryCarousel'
import { siteUrl } from '@/lib/site'

type DemoProjectPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: DemoProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Project Demo Not Found',
    }
  }

  return {
    title: project.title,
    description: project.demoSummary,
    alternates: { canonical: `/portfolio/demo/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.demoSummary,
      type: 'article',
      url: `/portfolio/demo/${project.slug}`,
      images: [{ url: project.image, alt: project.title }],
    },
  }
}

export default function DemoProjectPage({ params }: DemoProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const projectJsonLd = {
    '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.title,
    description: project.demoSummary,
    image: project.image.startsWith('http') ? project.image : `${siteUrl}${project.image}`,
    url: `${siteUrl}/portfolio/demo/${project.slug}`,
    creator: { '@type': 'Organization', name: 'Codvoro', url: siteUrl },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }} />
      <section className="pt-16 pb-14 bg-white bg-hero-grid relative overflow-hidden">
        <div className="absolute -top-24 right-0 w-[26rem] h-[26rem] bg-brand-500/10 rounded-full blur-3xl" />
        <div className="relative container-wide">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>

          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <span className={`text-[0.6875rem] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-[var(--radius-sm)] w-fit mb-5 inline-block ${project.category_color}`}>
                {project.category}
              </span>
              <h1 className="section-title">{project.title}</h1>
              <p className="lede mt-6 max-w-2xl">{project.demoSummary}</p>

              <dl className="grid sm:grid-cols-3 rule-grid mt-10">
                {project.metrics.map((item) => (
                  <div key={item.label} className="px-6 py-5">
                    <dt className="text-[0.6875rem] uppercase tracking-[0.14em] font-bold text-slate-500">{item.label}</dt>
                    <dd className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1.5">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link href="/contact" className="btn-primary">
                  Build Something Similar <ArrowRight className="w-4 h-4" />
                </Link>
                {project.codeHref && (
                  <a href={project.codeHref} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <Github className="w-4 h-4" /> Source Profile
                  </a>
                )}
              </div>
            </div>

            <div className="relative h-80 lg:h-[26rem] rounded-[var(--radius-lg)] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-45`} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-sm bg-white border-t border-slate-200">
        <div className="container-wide grid lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] gap-12 lg:gap-20">
          <div>
            <span className="section-tag">Project Details</span>
            <dl className="border-t border-slate-200">
              <div className="py-4 border-b border-slate-200">
                <dt className="text-[0.6875rem] font-bold text-slate-500 uppercase tracking-[0.14em] mb-1">Client Type</dt>
                <dd className="text-slate-800">{project.clientType}</dd>
              </div>
              <div className="py-4 border-b border-slate-200">
                <dt className="text-[0.6875rem] font-bold text-slate-500 uppercase tracking-[0.14em] mb-1">Delivery Timeline</dt>
                <dd className="text-slate-800">{project.timeline}</dd>
              </div>
              <div className="py-4 border-b border-slate-200">
                <dt className="text-[0.6875rem] font-bold text-slate-500 uppercase tracking-[0.14em] mb-2">Stack</dt>
                <dd className="flex flex-wrap gap-x-4 gap-y-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[0.8125rem] font-semibold text-slate-500 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <span className="section-tag">Case Study Walkthrough</span>
            <div className="border-t border-slate-200">
              <div className="py-6 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-2">Challenge</h2>
                <p className="text-slate-600 leading-relaxed max-w-2xl">{project.problem}</p>
              </div>
              <div className="py-6 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-3">Solution</h2>
                <ul className="space-y-2.5 text-slate-600 max-w-2xl">
                  {project.solution.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-brand-500 shrink-0" aria-hidden="true">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-6 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-2">Outcome</h2>
                <p className="text-slate-600 leading-relaxed max-w-2xl">{project.outcome}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              {project.codeHref && (
                <a href={project.codeHref} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Explore Profile <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className="relative overflow-hidden bg-slate-950 border-y border-white/10">
          <div className="absolute inset-0 bg-hero-grid opacity-[0.06]" />
          <div className="absolute -top-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-brand-600/20 blur-3xl" />
          <div className="relative container-wide py-10 lg:py-12">
            <div className="mx-auto max-w-6xl grid lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] gap-4 lg:gap-16 items-end mb-7">
              <div>
                <span className="section-tag section-tag-light">Inside the Product</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-[-0.035em] leading-[1.04] max-w-3xl">
                  Explore the product experience.
                </h2>
              </div>
              <div className="lg:border-l lg:border-white/15 lg:pl-10">
                <p className="text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Move through the workflow builder, execution monitoring, analytics, and integrations.
                </p>
              </div>
            </div>
            <PortfolioGalleryCarousel items={project.gallery} />
          </div>
        </section>
      )}

    </>
  )
}
