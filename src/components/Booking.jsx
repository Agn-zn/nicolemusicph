import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TICKETING_URL = 'https://vivarecords.helixpay.ph/'

export default function Booking() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="booking"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'rgba(128,0,0,0.25)' }}
      />

      {/* Faint maroon glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(74,0,0,0.22) 0%, transparent 70%)',
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
          Events &amp; Tickets
        </motion.p>

        {/* ── Headline ── */}
        <motion.h2
          className="font-display italic font-bold text-white leading-none mb-6"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          See You at the
          <br />
          <span style={{ color: '#b22222' }}>Next Events.</span>
        </motion.h2>

        {/* ── Subtext ── */}
        <motion.p
          className="text-sm leading-relaxed mb-16 max-w-md"
          style={{ color: 'rgba(255,255,255,0.4)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
        >
          Discover nicole's upcoming performances, live events, and special
          appearances. Get your tickets and experience the music live.
        </motion.p>

        {/* ── Ticketing card ── */}
        <motion.div
          className="max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(128,0,0,0.2)',
            }}
          >
            {/* Platform label */}
            <p
              className="font-mono text-xs tracking-[0.25em] uppercase mb-1"
              style={{ color: 'rgba(128,0,0,0.7)' }}
            >
              Official Ticketing Platform
            </p>

            {/* Platform name */}
            <p
              className="font-display italic font-bold text-white text-2xl mb-2"
            >
              VIVA Records
            </p>

            <p
              className="font-mono text-xs mb-1"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Events &amp; Tickets
            </p>

            {/* Thin maroon divider */}
            <div
              className="my-6 h-px w-10"
              style={{ background: 'rgba(128,0,0,0.4)' }}
            />

            <p
              className="text-sm mb-7"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              Browse available events and ticket options.
            </p>

            {/* CTA button */}
            <motion.a
              href={TICKETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white tracking-wide"
              style={{ background: '#800000' }}
              whileHover={{ background: '#b22222', scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Events &amp; Buy Tickets
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.a>

            {/* Disclaimer */}
            <p
              className="font-mono text-xs mt-5 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.2)' }}
            >
              External ticketing website. Ticket availability and purchasing
              are handled by VIVA Records.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
