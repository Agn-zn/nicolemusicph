import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const PARAGRAPHS = [
  `nicole is a singer-songwriter who brought the track "Panaginip" into the mainstream, a chart-topping hit in the Philippines that also took over several editorial playlists on Spotify Philippines.`,
  `With his first-ever digital release, which turned into an instant hit, the talented musician put himself on the music radar, and for him it is truly a dream that became reality. Even though he may still be seen as a rookie in the music industry, he maintained the momentum by putting out more music.`,
  `His discography keeps growing with "Tulala," "Gabi," and "Panaginip (Stripped)," which have already collected millions of streams.`,
  `As he continues to build his career with Viva Music Group under Ivory Music, nicole at last earned recognition for his music by winning Best New Artist at the 39th Awit Awards.`,
  `Now, with a brand-new relapse-worthy track, "Kalendaryo," nicole enlisted the help of Red Ridao, the writer behind Cup of Joe's historic hit "Multo." The song invites listeners to look back on the good old days and dwell on the bittersweet memories while pleading for closure after a breakup with someone they still love.`,
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [expanded, setExpanded] = useState(false)

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 pb-10 overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'rgba(128,0,0,0.25)' }}
      />

      {/* Subtle right glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(128,0,0,0.12) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">

          {/* Label */}
          <motion.p
            className="font-mono text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: '#800000' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            About
          </motion.p>

          {/* First paragraph — always visible */}
          <motion.p
            className="text-lg md:text-xl leading-relaxed font-light"
            style={{ color: 'rgba(255,255,255,0.75)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            {PARAGRAPHS[0]}
          </motion.p>

          {/* Expandable paragraphs */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div className="space-y-5 pt-5">
                  {PARAGRAPHS.slice(1).map((para, i) => (
                    <p
                      key={i}
                      className="text-base md:text-lg leading-relaxed font-light"
                      style={{ color: 'rgba(255,255,255,0.65)' }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Thin maroon divider */}
          <motion.div
            className="mt-8 mb-5 h-px w-16"
            style={{ background: 'rgba(128,0,0,0.5)' }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />

          {/* See more / See less toggle */}
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="font-mono text-xs tracking-[0.2em] uppercase focus:outline-none transition-colors duration-200"
            style={{ color: expanded ? 'rgba(178,34,34,0.7)' : '#800000' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#b22222')}
            onMouseLeave={e =>
              (e.currentTarget.style.color = expanded
                ? 'rgba(178,34,34,0.7)'
                : '#800000')
            }
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.55, duration: 0.5 }}
            aria-expanded={expanded}
          >
            {expanded ? 'See Less' : 'See More...'}
          </motion.button>

        </div>
      </div>
    </section>
  )
}
