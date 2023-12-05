import React from 'react'
import LandingComponentHero from '../component/LandingComponent/LandingComponentHero'
import LandingComponentCulture from '../component/LandingComponent/LandingComponentCulture'
import LandingComponentIndonesia from '../component/LandingComponent/LandingComponentIndonesia'
import Footer from '../global_component/Footer'

function LandingPage() {
  return (
      <>
      <LandingComponentHero/>
      <LandingComponentCulture/>
      <LandingComponentIndonesia/>
      <Footer/>
      </>
  )
}

export default LandingPage