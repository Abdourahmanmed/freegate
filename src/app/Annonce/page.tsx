import HeroSection from '@/components/EntroposageSection/HeroSection'
import SecondeSection from '@/components/EntroposageSection/SecondeSection'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navaigation'
import React from 'react'

const page = () => {
  return (
    <>
    {/* Barre de navigation */}
    <Navigation />
    <HeroSection />
    <SecondeSection />
    <Footer />
    </>
  )
}

export default page