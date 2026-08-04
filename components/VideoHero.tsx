'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type VideoHeroProps = {
  /** Path to the background video, e.g. "/team.mp4". */
  src: string
  /** Hero header content rendered on top of the video. */
  children: ReactNode
  /** Tailwind min-height class. Defaults to inner-page height. */
  minHeightClass?: string
  /** Max width of the content column. */
  contentWidthClass?: string
  /** Optional strip rendered edge-to-edge along the bottom of the hero. */
  footerBar?: ReactNode
}

/**
 * Full-bleed background video hero.
 *
 * Content is set left in a wide gutter so the page opens like a magazine
 * spread rather than a centred splash screen. The scrim is directional —
 * heaviest on the left where the type sits, so the footage stays visible
 * on the right.
 *
 * `muted` is assigned imperatively because React does not reliably emit the
 * muted attribute during SSR — without it browsers refuse to autoplay.
 * Autoplay is skipped when the user prefers reduced motion; the poster frame
 * still renders, so the hero never looks broken.
 */
export default function VideoHero({
  src,
  children,
  minHeightClass = 'min-h-[68vh]',
  contentWidthClass = 'max-w-3xl',
  footerBar,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    video.play().catch(() => {
      /* Autoplay blocked — the first frame remains visible. */
    })
  }, [])

  return (
    <section className={`relative w-full ${minHeightClass} flex flex-col justify-end overflow-hidden bg-slate-900`}>
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />
      {/* Legibility scrim — weighted left, where the headline sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/72 to-slate-900/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/55" />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-wide w-full py-20 lg:py-28">
          <div className={contentWidthClass}>{children}</div>
        </div>
      </div>

      {footerBar && (
        <div className="relative z-10 border-t border-white/15 bg-slate-950/45 backdrop-blur-sm">
          <div className="container-wide">{footerBar}</div>
        </div>
      )}
    </section>
  )
}
