import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, TrendingUp } from 'lucide-react'
import { posts } from '@/lib/posts'

export const metadata: Metadata = { title: 'Insights', description: 'Practical notes on software delivery, freelance partnerships, and building client relationships.', alternates: { canonical: '/blog' } }

export default function BlogPage() {
  const [featured, ...articles] = posts
  return <>
    <section className="bg-white section-pad-sm border-b border-slate-200">
      <div className="container-wide">
        <span className="section-tag">The Codvoro Journal</span>
        <div className="grid lg:grid-cols-[1.25fr_.75fr] gap-8 lg:gap-20 items-end">
          <h1 className="text-[2.8rem] sm:text-6xl font-extrabold text-slate-950 leading-[1.03] tracking-[-0.04em] max-w-4xl">Ideas for building better work—and <span className="gradient-text">better partnerships.</span></h1>
          <p className="text-lg text-slate-600 leading-relaxed">Field notes on software delivery, freelance revenue, client relationships, and the practical details that keep business clear.</p>
        </div>
      </div>
    </section>
    <section className="section-pad-sm bg-slate-50 border-b border-slate-200">
      <div className="container-wide">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-brand-600 mb-7">Featured story</p>
        <article className="grid lg:grid-cols-2 bg-slate-950 text-white overflow-hidden rounded-[var(--radius-lg)]">
          <div className="min-h-[22rem] lg:min-h-[31rem] p-8 lg:p-14 flex flex-col justify-between bg-gradient-to-br from-brand-800 via-slate-900 to-slate-950 relative">
            <div className="absolute inset-0 bg-hero-grid opacity-20"/><div className="relative flex justify-between text-xs font-bold uppercase tracking-[.15em] text-brand-200"><span>{featured.category}</span><span>{featured.number}</span></div><TrendingUp className="relative h-28 w-28 text-white/10" strokeWidth={1}/><p className="relative text-sm text-slate-400">Codvoro · Practical Growth</p>
          </div>
          <div className="p-8 lg:p-14 flex flex-col justify-center"><div className="flex items-center gap-3 text-xs text-slate-400"><span>{featured.date}</span><span className="h-1 w-1 rounded-full bg-slate-600"/><Clock className="h-3.5 w-3.5"/>{featured.readTime}</div><h2 className="mt-6 text-3xl lg:text-4xl font-extrabold leading-tight">{featured.title}</h2><p className="mt-5 text-slate-300 leading-relaxed">{featured.excerpt}</p><Link href={`/blog/${featured.slug}`} className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-300 hover:text-white">Read the full story <ArrowRight className="h-4 w-4"/></Link></div>
        </article>
      </div>
    </section>
    <section className="section-pad bg-white"><div className="container-wide">
      <div className="grid lg:grid-cols-[1fr_18rem] gap-12 lg:gap-20">
        <div><div className="flex items-end justify-between border-b border-slate-900 pb-5 mb-2"><h2 className="text-3xl font-extrabold">Latest articles</h2><span className="text-sm text-slate-500">{articles.length} stories</span></div>
          {articles.map((post, index) => <article key={post.slug} className="grid sm:grid-cols-[9rem_1fr] gap-6 py-8 border-b border-slate-200 group">
            <div className={`h-32 sm:h-full min-h-[9rem] p-5 flex flex-col justify-between ${index % 3 === 0 ? 'bg-brand-50' : index % 3 === 1 ? 'bg-emerald-50' : 'bg-slate-100'}`}><span className="text-xs font-bold tracking-[.14em] text-slate-500">{post.number}</span><span className="text-xs font-bold uppercase tracking-[.12em] text-brand-700">{post.category}</span></div>
            <div><div className="flex gap-3 items-center text-xs text-slate-500"><span>{post.date}</span><span>·</span><span>{post.readTime}</span></div><h3 className="mt-3 text-2xl font-extrabold leading-tight group-hover:text-brand-700 transition-colors"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p className="mt-3 text-[.9375rem] text-slate-600 leading-relaxed">{post.excerpt}</p><Link href={`/blog/${post.slug}`} className="link-arrow mt-5 text-sm">Continue reading <ArrowRight className="h-4 w-4"/></Link></div>
          </article>)}
        </div>
        <aside><div className="sticky top-36 border-t-2 border-slate-900 pt-5"><p className="text-xs font-bold uppercase tracking-[.16em] text-slate-500">Explore topics</p><div className="mt-5 flex flex-wrap gap-2">{['Partnership','Growth','Finance','Operations','Client Success'].map(topic=><span key={topic} className="px-3 py-2 bg-slate-100 text-sm font-semibold text-slate-700">{topic}</span>)}</div><div className="mt-10 border-l-2 border-brand-500 pl-5"><p className="font-extrabold text-slate-900">A note from our team</p><p className="mt-2 text-sm leading-relaxed text-slate-600">We write from real delivery experience and favor useful detail over generic advice.</p></div></div></aside>
      </div></div></section>
    <section className="section-pad-sm bg-slate-100"><div className="container-wide flex flex-col lg:flex-row lg:items-center justify-between gap-8"><div><span className="section-tag">Work Together</span><h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Interested in becoming a partner?</h2><p className="mt-3 text-slate-600 max-w-2xl">See exactly how the model works, what each side handles, and whether it fits you.</p></div><Link href="/partner" className="btn-primary shrink-0">Explore the partnership <ArrowRight className="h-4 w-4"/></Link></div></section>
  </>
}
