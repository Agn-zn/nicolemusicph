import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#000' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className="font-display italic font-bold text-white"
        style={{ fontSize: 'clamp(3rem, 10vw, 6rem)' }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        nicole
      </motion.p>

      {/* thin maroon progress bar */}
      <motion.div
        className="mt-6 h-px w-24 rounded-full"
        style={{ background: '#4a0000' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: '#800000' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}
