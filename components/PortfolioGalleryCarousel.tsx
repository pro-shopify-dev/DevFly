'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

type GalleryItem = {
  src: string
  alt: string
  caption: string
}

export default function PortfolioGalleryCarousel({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState(0)
  const current = items[active]

  const previous = () => setActive((current) => (current - 1 + items.length) % items.length)
  const next = () => setActive((current) => (current + 1) % items.length)

  return (
    <div className="mx-auto max-w-5xl">
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-white/15 bg-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.38)]">
        <div className="flex h-11 items-center justify-between border-b border-white/10 bg-slate-900 px-4 sm:px-5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-slate-500">
            Product view {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
        </div>

        <div className="relative aspect-[16/9] bg-white overflow-hidden">
          <div
            className="absolute inset-0 flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={item.src} className="relative h-full w-full shrink-0">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 64rem"
                />
              </div>
            ))}
          </div>

          <button type="button" onClick={previous} aria-label="Previous product screen" className="absolute z-20 left-3 sm:left-5 top-1/2 -translate-y-1/2 h-11 w-11 sm:h-12 sm:w-12 rounded-full border border-white/30 bg-slate-950/80 text-white backdrop-blur-md flex items-center justify-center transition-colors hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-300">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={next} aria-label="Next product screen" className="absolute z-20 right-3 sm:right-5 top-1/2 -translate-y-1/2 h-11 w-11 sm:h-12 sm:w-12 rounded-full border border-white/30 bg-slate-950/80 text-white backdrop-blur-md flex items-center justify-center transition-colors hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-300">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-3 md:gap-8 items-start border-t border-white/10 bg-slate-900 px-5 py-5 sm:px-7 sm:py-6">
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-brand-300 whitespace-nowrap">
            Screen {String(active + 1).padStart(2, '0')}
          </span>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">{current.caption}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5" role="tablist" aria-label="Choose product screen">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(index)}
            role="tab"
            aria-selected={active === index}
            aria-label={`Show screen ${index + 1}: ${item.alt}`}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2 focus:ring-offset-slate-950 ${
              active === index
                ? 'w-12 bg-brand-400'
                : 'w-6 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
