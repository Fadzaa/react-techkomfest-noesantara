import React from 'react'
import Navbar from "../../global_component/Navbar.jsx";
import {bgHeroAbout} from "../../utils/images.js";

function AboutHeroComponent() {
  return (
      <div className="w-screen h-[70vh] relative">
        <Navbar/>
        {/*Background Image*/}
        <img className="absolute h-full w-full object-cover" src={bgHeroAbout} alt="Background Hero About"/>
        <div className="absolute h-full w-full bg-black bg-opacity-50"></div>

        {/*Content*/}
        <div className="absolute h-full w-full flex flex-col justify-center items-center">
          {/*About Us*/}
          <div className="flex font-milonga font-normal text-[40px] lg:text-[80px] mb-8">
            <h1 className="text-white me-5">About</h1>
            <h1 className="text-primary">Us</h1>
          </div>

          {/*About Our Team*/}
          <div className="flex items-center mb-12 lg:mb-16">
            <div className="w-[40px] lg:w-[70px] h-[1px] bg-white"></div>
            <h3 className="font-yiBaiti text-white text-sm lg:text-xl tracking-widest mx-7">ABOUT OUR TEAM</h3>
            <div className="w-[40px] lg:w-[70px] h-[1px] bg-white"></div>
          </div>

          {/*Button*/}
          <button className="px-6 lg:px-10 py-2 lg:py-3 border-2 border-white rounded-full">
            <p className="font-urbanist text-white font-normal text-sm">Check Here</p>
          </button>

        </div>
      </div>
  )
}

export default AboutHeroComponent