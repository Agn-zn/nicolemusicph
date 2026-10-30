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

      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: '#800000' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Follow
        </motion.p>

        {/* Minimal platform list */}
        <div className="flex flex-col divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
          {platforms.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 transition-all duration-200"
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                aria-label={`${p.name} — ${p.handle}`}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:bg-maroon-dark"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <Icon className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.45)' }} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm group-hover:text-white transition-colors">{p.name}</p>
                    <p className="font-mono text-xs mt-0.5" style={{ color: 'rgba(128,0,0,0.8)' }}>{p.handle}</p>
                  </div>
                </div>

                <span
                  className="font-mono text-xs tracking-widest uppercase transition-all duration-200 group-hover:text-white group-hover:translate-x-1"
                  style={{ color: 'rgba(255,255,255,0.2)' }}
                >
                  Follow →
                </span>
              </motion.a>
            )
          })}
        </div>

        {/* Fan community — single quiet line */}
        <motion.div
          className="mt-10 pt-8 flex items-center justify-between"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div>
            <p className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: 'rgba(128,0,0,0.7)' }}>
              Fan Community
            </p>
            <p className="text-white/50 text-sm">The nicolets</p>
          </div>
          <a
            href="https://www.instagram.com/nicolets.official/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase transition-colors duration-200 hover:text-white"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            @nicolets.official →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
