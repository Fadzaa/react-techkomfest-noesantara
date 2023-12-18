import React from 'react'
import AboutComponentLetter from "../component/AboutComponent/AboutComponentLetter.jsx";
import AboutHeroComponent from "../component/AboutComponent/AboutHeroComponent.jsx";
import AboutComponentMission from "../component/AboutComponent/AboutComponentMission.jsx";
import AboutComponentTeam from "../component/AboutComponent/AboutComponentTeam/AboutComponentTeam.jsx";
import Footer from "../global_component/Footer.jsx";

function AboutPage() {
  return (
      <>
          <AboutHeroComponent/>
          <AboutComponentLetter/>
          <AboutComponentMission/>
          <AboutComponentTeam/>
          <Footer/>
      </>
  )
}

export default AboutPage