import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Spotify } from './icons/SocialIcons'
import { Youtube } from './icons/SocialIcons'

// Confirmed Spotify track ID for "Panaginip" by nicole (Ivory Music, 2025)
const TRACK_ID = '6XHUlDl2PJMEecKyN6aAkO'
const SPOTIFY_TRACK_URL = `https://open.spotify.com/track/${TRACK_ID}`
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@nicolemusicph'

export default function FeaturedTrack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [embedReady, setEmbedReady] = useState(false)

  return (
    <section
      id="featured"
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'rgba(128,0,0,0.25)' }}
      />

      {/* Ambient glow behind the player */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 50% 50%, rgba(74,0,0,0.22) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ── Section label ── */}
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase mb-8"
          style={{ color: '#800000' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Track
        </motion.p>

        {/* ── Main layout: artwork info left, player right ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left — song identity ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          >
            {/* Cover art */}
            <div className="relative mb-8 inline-block">
              <div
                className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden"
                style={{ background: '#0d0000', border: '1px solid rgba(128,0,0,0.3)' }}
              >
                <img
                  src="https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36"
                  alt="Panaginip — nicole"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'brightness(0.85)' }}
                />
              </div>

              {/* Maroon glow under cover */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-8 rounded-full blur-2xl pointer-events-none"
                style={{ background: 'rgba(128,0,0,0.35)' }}
              />
            </div>

            {/* Song info */}
            <motion.h2
              className="font-display italic font-bold leading-none mb-2"
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 4rem)',
                color: '#fff',
                letterSpacing: '-0.01em',
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Panaginip
            </motion.h2>

            <motion.p
              className="font-mono text-sm mb-1"
              style={{ color: 'rgba(128,0,0,0.9)' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              nicole
            </motion.p>

            <motion.p
              className="font-mono text-xs mb-8"
              style={{ color: 'rgba(255,255,255,0.25)' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
            >
              Ivory Music · 2025 · 5:17
            </motion.p>

            {/* Links row */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <a
                href={SPOTIFY_TRACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs tracking-wide transition-all duration-200 hover:opacity-80"
                style={{ background: '#1DB954', color: '#000' }}
              >
                <Spotify className="w-3.5 h-3.5" />
                Open in Spotify
              </a>

              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs tracking-wide transition-all duration-200"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(128,0,0,0.4)',
                  color: 'rgba(255,255,255,0.55)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(178,34,34,0.7)'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(128,0,0,0.4)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                }}
              >
                <Youtube className="w-3.5 h-3.5" />
                Watch on YouTube
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right — Spotify embed player ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(128,0,0,0.2)' }}
            >
              {/* Loading shimmer shown until iframe fires onLoad */}
              {!embedReady && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl"
                  style={{ background: '#0d0000', minHeight: '232px' }}
                >
                  <div
                    className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
                    style={{ borderColor: 'rgba(128,0,0,0.5)', borderTopColor: '#800000' }}
                  />
                  <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    Loading player…
                  </p>
                </div>
              )}

              <iframe
                title="Panaginip by nicole — Spotify"
                src={`https://open.spotify.com/embed/track/${TRACK_ID}?utm_source=generator&theme=0`}
                width="100%"
                height="232"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                onLoad={() => setEmbedReady(true)}
                style={{
                  display: 'block',
                  borderRadius: '16px',
                  opacity: embedReady ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                }}
              />
            </div>

            {/* Subtle caption */}
            <p
              className="font-mono text-xs mt-3 text-center"
              style={{ color: 'rgba(255,255,255,0.18)' }}
            >
              Stream via Spotify · No autoplay
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
