import { motion } from 'framer-motion'
import { Spotify, Instagram, Youtube } from './icons/SocialIcons'
import TikTokIcon from './icons/TikTokIcon'

const socials = [
  { icon: Spotify,    href: 'https://open.spotify.com/artist/64c6qxJIkcvJP3glpCkWHp', label: 'Spotify' },
  { icon: Instagram,  href: 'https://www.instagram.com/nicolemusicph/',                label: 'Instagram' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@nicolemusicph',                  label: 'TikTok' },
  { icon: Youtube,    href: 'https://www.youtube.com/@nicolemusicph',                  label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer
      className="relative py-10 overflow-hidden"
      style={{ borderTop: '1px solid rgba(128,0,0,0.2)', background: '#000' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <p className="font-display italic font-bold text-white text-2xl">nicole</p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: 'rgba(255,255,255,0.35)',
                }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-3.5 h-3.5" />
              </motion.a>
            )
          })}
        </div>

        {/* Copyright */}
        <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>
          © {new Date().getFullYear()} nicole
        </p>
      </div>
    </footer>
  )
}
