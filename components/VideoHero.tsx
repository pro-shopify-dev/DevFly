'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type VideoHeroProps = {
  /** Path to the background video, e.g. "/team.mp4". */
  src: string
  /** Hero header content rendered on top of the video. */
  children: ReactNode
}

/**
 * Full-bleed background video hero.
 *
 * `muted` is assigned imperatively because React does not reliably emit the
 * muted attribute during SSR — without it browsers refuse to autoplay.
 * Autoplay is skipped when the user prefers reduced motion; the poster frame
 * still renders, so the hero never looks broken.
 */
export default function VideoHero({ src, children }: VideoHeroProps) {
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
    <section className="relative w-full min-h-[62vh] flex items-center overflow-hidden bg-slate-900">
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
      {/* Legibility scrim — keeps header text readable over any footage */}
      <div className="absolute inset-0 bg-slate-900/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/85" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {children}
      </div>
    </section>
  )
}
