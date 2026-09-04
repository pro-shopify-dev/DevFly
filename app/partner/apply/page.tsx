import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import PartnerApplicationForm from './PartnerApplicationForm'

export const metadata: Metadata = { title: 'Partner Application', description: 'Apply to build a transparent freelance delivery partnership with Codvoro.', alternates: { canonical: '/partner/apply' } }

export default function ApplyPage() {
  return <>
    <section className="section-pad-sm bg-slate-950 text-white"><div className="container-wide"><Link href="/partner" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"><ArrowLeft className="h-4 w-4"/>Partnership overview</Link><span className="section-tag section-tag-light mt-10">Partner Application</span><h1 className="text-[2.6rem] sm:text-6xl font-extrabold leading-[1.05] tracking-[-.035em] max-w-4xl">Let&apos;s see if we&apos;re a <span className="gradient-text-light">strong fit</span></h1><p className="mt-7 text-lg text-slate-300 max-w-2xl">This application helps us understand your professional background, channel status, availability, and expectations.</p></div></section>
    <section className="section-pad-sm bg-white"><div className="container-wide grid lg:grid-cols-[.65fr_1.35fr] gap-12 lg:gap-20"><aside><span className="section-tag">Before You Apply</span><h2 className="text-3xl font-extrabold">What we look for</h2><ul className="mt-7 border-t border-slate-200">{['An established, accurately represented professional profile','Reliable availability and internet access','Confidence communicating with clients','Commitment to platform rules and transparent records','Interest in a long-term working relationship'].map(x=><li key={x} className="flex gap-3 py-4 border-b border-slate-200 text-sm text-slate-700"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent-600"/>{x}</li>)}</ul><p className="mt-7 text-sm leading-relaxed text-slate-500">Submitting an application does not create a partnership. Final terms are reviewed together and documented in a written agreement.</p></aside><PartnerApplicationForm/></div></section>
  </>
}
