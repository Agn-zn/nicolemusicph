import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Faint maroon line top */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'rgba(128,0,0,0.25)' }} />

      {/* Subtle right-side glow */}
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

          {/* Bio */}
          <motion.p
            className="text-lg md:text-xl leading-relaxed font-light"
            style={{ color: 'rgba(255,255,255,0.75)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            nicole is a 21-year-old Filipino singer-songwriter from Quezon City.
            His debut single <em>"Panaginip"</em> went viral on TikTok, charted on Billboard
            Philippines, and earned him <strong style={{ color: '#fff' }}>Best New Artist</strong> at
            the 39th Awit Awards — making him one of OPM's most compelling new voices.
          </motion.p>

          {/* Thin divider */}
          <motion.div
            className="my-8 h-px w-16"
            style={{ background: 'rgba(128,0,0,0.5)' }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  )
}
