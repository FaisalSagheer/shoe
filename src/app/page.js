'use client'
import Contact from '@/components/Contact'
import Designer from '@/components/Designer'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import LogoCloud from '@/components/LogoCloud'
import Navbar from '@/components/Navbar'
import Shop from '@/components/Shop'
import Testimonials from '@/components/Testimonials'
import TopSales from '@/components/TopSales'
import VideoAd from '@/components/VideoAd'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <LogoCloud/>
      <TopSales/>
      <Shop/>
      <Designer/>
      <VideoAd/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
