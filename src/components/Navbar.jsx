import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Panaginip', href: '#featured' },
  { label: 'Connect', href: '#social' },
  { label: 'Booking', href: '#booking' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? 'rgba(0,0,0,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(128,0,0,0.15)' : '1px solid transparent',
          transition: 'all 0.4s ease',
          padding: scrolled ? '14px 0' : '22px 0',
        }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display italic font-bold text-white focus:outline-none"
            style={{ fontSize: '1.5rem', letterSpacing: '-0.01em' }}
          >
            nicole
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.slice(0, 3).map((l) => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className="text-sm tracking-wide focus:outline-none"
                style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >
                {l.label}
              </button>
            ))}
            <motion.button
              onClick={() => go('#booking')}
              className="btn-maroon text-sm font-semibold tracking-wide px-5 py-2 rounded-full focus:outline-none"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Booking
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden focus:outline-none"
            style={{ color: 'rgba(255,255,255,0.7)' }}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10"
            style={{ background: 'rgba(0,0,0,0.97)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((l, i) => (
              <motion.button
                key={l.label}
                onClick={() => go(l.href)}
                className="font-display italic text-3xl text-white focus:outline-none"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{ color: l.href === '#booking' ? '#b22222' : '#fff' }}
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
