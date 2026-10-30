import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Spotify, Instagram, Youtube } from './icons/SocialIcons'
import TikTokIcon from './icons/TikTokIcon'

const platforms = [
  { name: 'Spotify',   icon: Spotify,    href: 'https://open.spotify.com/artist/64c6qxJIkcvJP3glpCkWHp', handle: 'nicole' },
  { name: 'Instagram', icon: Instagram,  href: 'https://www.instagram.com/nicolemusicph/',                handle: '@nicolemusicph' },
  { name: 'TikTok',    icon: TikTokIcon, href: 'https://www.tiktok.com/@nicolemusicph',                  handle: '@nicolemusicph' },
  { name: 'YouTube',   icon: Youtube,    href: 'https://www.youtube.com/@nicolemusicph',                  handle: '@nicolemusicph' },
]

export default function SocialMedia() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="social"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: '#000' }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'rgba(128,0,0,0.25)' }} />

      {/* Faint maroon glow — mirrors Booking */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(74,0,0,0.18) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Label */}
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase mb-8"
          style={{ color: '#800000' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Connect
        </motion.p>

        {/* Headline — same style as Booking */}
        <motion.h2
          className="font-display italic font-bold text-white leading-none mb-6"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Follow
          <br />
          <span style={{ color: '#b22222' }}>nicole.</span>
        </motion.h2>

        <motion.p
          className="text-sm leading-relaxed mb-14 max-w-md"
          style={{ color: 'rgba(255,255,255,0.4)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
        >
          Stream the music and stay up to date across all platforms.
        </motion.p>

        {/* Platform rows — same card style as Booking contact rows */}
        <div className="flex flex-col gap-4 max-w-lg">
          {platforms.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 py-5 px-6 rounded-2xl transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(128,0,0,0.2)',
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.6 }}
                whileHover={{
                  borderColor: 'rgba(178,34,34,0.5)',
                  backgroundColor: 'rgba(128,0,0,0.07)',
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                aria-label={`${p.name} — ${p.handle}`}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(128,0,0,0.25)' }}
                >
                  <Icon className="w-4 h-4" style={{ color: '#b22222' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(128,0,0,0.7)' }}>
                    {p.name}
                  </p>
                  <p className="text-white text-sm font-medium truncate">{p.handle}</p>
                </div>
                <span
                  className="font-mono text-xs tracking-widest uppercase transition-all duration-200 group-hover:text-white group-hover:translate-x-1 flex-shrink-0"
                  style={{ color: 'rgba(255,255,255,0.2)' }}
                >
                  Follow →
                </span>
              </motion.a>
            )
          })}
        </div>

        {/* Fan community row — same quiet style */}
        <motion.div
          className="mt-4 max-w-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          <a
            href="https://www.instagram.com/nicolets.official/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 py-5 px-6 rounded-2xl transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(128,0,0,0.12)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(178,34,34,0.35)'
              e.currentTarget.style.backgroundColor = 'rgba(128,0,0,0.05)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(128,0,0,0.12)'
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(128,0,0,0.15)' }}
            >
              <Instagram className="w-4 h-4" style={{ color: 'rgba(178,34,34,0.6)' }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-mono text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(128,0,0,0.5)' }}>
                Fan Community
              </p>
              <p className="text-sm font-medium truncate" style={{ color: 'rgba(255,255,255,0.5)' }}>
                @nicolets.official
              </p>
            </div>
            <span
              className="font-mono text-xs tracking-widest uppercase flex-shrink-0 transition-all duration-200 group-hover:text-white"
              style={{ color: 'rgba(255,255,255,0.15)' }}
            >
              Follow →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
