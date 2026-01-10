import React from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Works from './components/Works'
import Footer from './components/Footer'
import Services from './components/Services'
import { getHero } from '@/lib/queries'

async function Home() {
  const heroData = await getHero();
  return (
    <>
      <Nav />
      <Hero heroData={heroData} />
      <Services />
      <Works />
      <Footer />
    </>
  )
}

export default Home