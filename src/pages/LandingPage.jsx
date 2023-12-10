import React from 'react'
import LandingComponentHero from '../component/LandingComponent/LandingComponentHero'
import LandingComponentCulture from '../component/LandingComponent/LandingComponentCulture'
import LandingComponentIndonesia from '../component/LandingComponent/LandingComponentIndonesia'
import Footer from '../global_component/Footer'
import LandingComponentTestimony from '../component/LandingComponent/LandingComponentTestimony'

function LandingPage() {
  return (
      <>
      {/* <LandingComponentHero/> */}
      <LandingComponentCulture/>
      {/* <LandingComponentIndonesia/>
      <LandingComponentTestimony/>
      <Footer/> */}
      </>
  )
}

export default LandingPage