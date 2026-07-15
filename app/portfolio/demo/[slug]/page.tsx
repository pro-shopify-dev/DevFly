import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'
import { getProjectBySlug, projects } from '../../projects'
import { demoContentBySlug } from '../demoContent'
import ProjectDemoPlayground from './ProjectDemoPlayground'

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
    title: `${project.title} Demo`,
    description: project.demoSummary,
  }
}

export default function DemoProjectPage({ params }: DemoProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  const demoContent = demoContentBySlug[params.slug]

  if (!project || !demoContent) {
    notFound()
  }

  return (
    <>
      <section className="pt-28 pb-14 bg-white bg-hero-grid relative overflow-hidden">
        <div className="absolute -top-24 right-0 w-[26rem] h-[26rem] bg-brand-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
            <div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-4 inline-block ${project.category_color}`}>
                {project.category}
              </span>
              <h1 className="section-title text-4xl lg:text-5xl">{project.title}</h1>
              <p className="text-slate-700 text-lg leading-relaxed mt-4 max-w-2xl">{demoContent.intro}</p>

              <div className="grid sm:grid-cols-3 gap-3 mt-7">
                {project.metrics.map((item) => (
                  <div key={item.label} className="card p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                    <p className="text-lg font-bold text-slate-900 mt-1">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-7">
                <a
                  href={project.codeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  <Github className="w-4 h-4" /> Source Profile
                </a>
                <Link href="/contact" className="btn-primary text-sm">
                  Build Something Similar <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="card p-3">
              <div className="relative h-72 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-45`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          <div className="card lg:col-span-1">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Project Details</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-slate-500">Client Type</p>
                <p className="text-slate-800">{project.clientType}</p>
              </div>
              <div>
                <p className="text-slate-500">Delivery Timeline</p>
                <p className="text-slate-800">{project.timeline}</p>
              </div>
              <div>
                <p className="text-slate-500">Stack</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-brand-700 bg-brand-600/15 border border-brand-500/20 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="card lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Case Study Walkthrough</h2>
            <div className="space-y-5 text-sm leading-relaxed">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Challenge</p>
                <p className="text-slate-700">{project.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Solution</p>
                <ul className="space-y-2 text-slate-700 list-disc list-inside">
                  {project.solution.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Outcome</p>
                <p className="text-slate-700">{project.outcome}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-sm">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={project.codeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                Explore Profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Interactive Product Demo</h2>
          <ProjectDemoPlayground slug={project.slug} />

          <div className="h-px bg-slate-200 my-10" />

          <h2 className="text-2xl font-bold text-slate-900 mb-2">Demo Flow</h2>
          <p className="text-sm text-slate-600 mb-6">{demoContent.livePreviewLabel}</p>

          <div className="grid md:grid-cols-3 gap-4">
            {demoContent.scenarios.map((scenario) => (
              <article key={scenario.title} className="card p-5">
                <p className="text-sm font-semibold text-slate-900 mb-2">{scenario.title}</p>
                <p className="text-sm text-slate-700 leading-relaxed">{scenario.summary}</p>
                <p className="text-xs text-accent-600 mt-4 uppercase tracking-wide">{scenario.impact}</p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors">
              Explore more portfolio demos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}