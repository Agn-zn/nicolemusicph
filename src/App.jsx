import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SocialMedia from './components/SocialMedia'
import Booking from './components/Booking'
import Footer from './components/Footer'
import Loader from './components/Loader'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#000' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SocialMedia />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}
