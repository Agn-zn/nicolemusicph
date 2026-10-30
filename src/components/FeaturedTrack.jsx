import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const TRACK_ID = '6XHUlDl2PJMEecKyN6aAkO'

export default function FeaturedTrack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [embedReady, setEmbedReady] = useState(false)

  return (
    <section
      id="featured"
      ref={ref}
      className="relative py-16 overflow-hidden"
      style={{ background: '#000' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'rgba(128,0,0,0.25)' }}
      />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(128,0,0,0.2)' }}
        >
          {/* Loading state */}
          {!embedReady && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              style={{ background: '#0d0000', minHeight: '152px' }}
            >
              <div
                className="w-6 h-6 rounded-full border-2 animate-spin"
                style={{ borderColor: 'rgba(128,0,0,0.4)', borderTopColor: '#800000' }}
              />
            </div>
          )}

          <iframe
            title="Panaginip by nicole"
            src={`https://open.spotify.com/embed/track/${TRACK_ID}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            onLoad={() => setEmbedReady(true)}
            style={{
              display: 'block',
              opacity: embedReady ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
