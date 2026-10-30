import { motion } from 'framer-motion'
import { Spotify, Instagram, Youtube } from './icons/SocialIcons'
import TikTokIcon from './icons/TikTokIcon'

const ARTIST_IMG = '/images/nicole-hero.jpg'

const socials = [
  { icon: Spotify,    href: 'https://open.spotify.com/artist/64c6qxJIkcvJP3glpCkWHp', label: 'Spotify' },
  { icon: Instagram,  href: 'https://www.instagram.com/nicolemusicph/',                label: 'Instagram' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@nicolemusicph',                  label: 'TikTok' },
  { icon: Youtube,    href: 'https://www.youtube.com/@nicolemusicph',                  label: 'YouTube' },
]

export default function Hero() {
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Faded background photo ── */}
      <div className="absolute inset-0">
        <img
          src={ARTIST_IMG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'grayscale(30%) brightness(0.38) contrast(1.05)' }}
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
        {/* Gradient vignette — heavy at bottom so text reads */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom,
                rgba(0,0,0,0.45) 0%,
                rgba(0,0,0,0.1)  35%,
                rgba(0,0,0,0.55) 65%,
                rgba(0,0,0,0.96) 100%
              ),
              linear-gradient(to right,
                rgba(0,0,0,0.5) 0%,
                transparent 60%
              )
            `,
          }}
        />
        {/* Very subtle maroon tint at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(74,0,0,0.25) 0%, transparent 100%)' }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 pt-40">
        {/* Award chip */}
        <motion.div
          className="inline-flex items-center gap-2 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span
            className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: 'rgba(128,0,0,0.35)', color: 'rgba(255,180,180,0.9)', border: '1px solid rgba(128,0,0,0.5)' }}
          >
            Best New Artist — 39th Awit Awards
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-display italic font-bold text-white leading-none mb-4"
          style={{ fontSize: 'clamp(4.5rem, 14vw, 11rem)', letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9, ease: 'easeOut' }}
        >
          nicole
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-sm md:text-base tracking-widest uppercase font-mono mb-10"
          style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.25em' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          Filipino Singer-Songwriter
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <motion.a
            href="https://open.spotify.com/artist/64c6qxJIkcvJP3glpCkWHp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
            style={{ background: '#1DB954', color: '#000' }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Spotify className="w-4 h-4" />
            Listen on Spotify
          </motion.a>

          <motion.button
            onClick={() => go('#booking')}
            className="btn-ghost px-6 py-3 rounded-full font-semibold text-sm"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Book nicole
          </motion.button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.45)',
                }}
                whileHover={{ scale: 1.15, color: '#fff' }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            )
          })}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={() => go('#about')}
        className="absolute bottom-7 right-8 focus:outline-none"
        style={{ color: 'rgba(255,255,255,0.2)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-label="Scroll"
      >
        <motion.div
          className="flex flex-col items-center gap-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">scroll</span>
          <div className="w-px h-6" style={{ background: 'linear-gradient(to bottom, rgba(128,0,0,0.6), transparent)' }} />
        </motion.div>
      </motion.button>
    </section>
  )
}
