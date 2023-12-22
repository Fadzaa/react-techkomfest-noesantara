import React from 'react'
import AboutComponentLetter from "../component/MainComponent/AboutComponent/AboutComponentLetter.jsx";
import AboutHeroComponent from "../component/MainComponent/AboutComponent/AboutHeroComponent.jsx";
import AboutComponentMission from "../component/MainComponent/AboutComponent/AboutComponentMission.jsx";
import AboutComponentTeam from "../component/MainComponent/AboutComponent/AboutComponentTeam/AboutComponentTeam.jsx";
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