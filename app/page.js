import React from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Works from './components/Works'
import Footer from './components/Footer'
import Services from './components/Services'
import { getHero } from '@/lib/queries'
import { ReactLenis, useLenis } from 'lenis/react'

async function Home() {
  const heroData = await getHero();
  return (
    <>
      <Nav />
      <ReactLenis root>
        <Hero heroData={heroData} />
        <Services />
        <Works />
      </ReactLenis>
      <Footer />
    </>
  )
}

export default Home