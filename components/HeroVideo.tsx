'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'

type HeroVideoProps = {
  src: string
  /** Accessible description of the footage. */
  label: string
}

/**
 * Autoplaying, looping, muted hero video.
 *
 * `muted` is set imperatively because React does not reliably emit the
 * muted attribute during SSR — without it browsers block autoplay.
 * Autoplay is skipped entirely when the user prefers reduced motion.
 */
export default function HeroVideo({ src, label }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    video
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))
  }, [])

  function toggle() {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <div className="relative aspect-video bg-slate-900 group">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={label}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Pause video' : 'Play video'}
        className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-slate-900/60 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
      >
        {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>
    </div>
  )
}
