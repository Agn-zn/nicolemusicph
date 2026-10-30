import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

const EMAIL = 'vivamusicbookings@viva.com.ph'
const PHONE = '0998-575-3307'
const PHONE_TEL = '09985753307'

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
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'rgba(128,0,0,0.25)' }} />

      {/* Faint maroon center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(74,0,0,0.25) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Label */}
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase mb-8"
          style={{ color: '#800000' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Bookings &amp; Inquiries
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="font-display italic font-bold text-white leading-none mb-6"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Let's Make
          <br />
          <span style={{ color: '#b22222' }}>Something Happen.</span>
        </motion.h2>

        <motion.p
          className="text-sm leading-relaxed mb-14 max-w-md"
          style={{ color: 'rgba(255,255,255,0.4)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
        >
          For bookings, events, collaborations, and inquiries, contact nicole's management directly.
        </motion.p>

        {/* Contact rows */}
        <div className="flex flex-col gap-4 max-w-lg">
          <motion.a
            href={`mailto:${EMAIL}`}
            className="group flex items-center gap-5 py-5 px-6 rounded-2xl transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(128,0,0,0.2)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            whileHover={{ borderColor: 'rgba(178,34,34,0.5)', backgroundColor: 'rgba(128,0,0,0.07)', y: -2 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Email ${EMAIL}`}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(128,0,0,0.25)' }}
            >
              <Mail className="w-4 h-4" style={{ color: '#b22222' }} />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(128,0,0,0.7)' }}>Email</p>
              <p className="text-white text-sm font-medium truncate">{EMAIL}</p>
            </div>
          </motion.a>

          <motion.a
            href={`tel:${PHONE_TEL}`}
            className="group flex items-center gap-5 py-5 px-6 rounded-2xl transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(128,0,0,0.2)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.6 }}
            whileHover={{ borderColor: 'rgba(178,34,34,0.5)', backgroundColor: 'rgba(128,0,0,0.07)', y: -2 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Call ${PHONE}`}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(128,0,0,0.25)' }}
            >
              <Phone className="w-4 h-4" style={{ color: '#b22222' }} />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(128,0,0,0.7)' }}>Phone</p>
              <p className="text-white text-sm font-medium">{PHONE}</p>
            </div>
          </motion.a>
        </div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.a
            href={`mailto:${EMAIL}`}
            className="btn-maroon flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="w-4 h-4" />
            Email for Bookings
          </motion.a>
          <motion.a
            href={`tel:${PHONE_TEL}`}
            className="btn-ghost flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone className="w-4 h-4" />
            Call for Inquiries
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
