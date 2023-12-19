import React from 'react'
import { bgLandingHero, mistEffect } from '../../../utils/images.js'
import Navbar from '../../../global_component/Navbar.jsx';

function LandingComponentHero() {
  return (
    <div className="h-screen w-screen relative">
      <div>
        <div className="w-full h-full absolute">
          <img
            className="top-0 object-cover w-full h-full absolute"
            src={bgLandingHero}
            alt="hero"
          />
          <div className="h-full absolute w-full mt-8 lg:mt-28">
            <img
              className="bottom-0 absolute w-full"
              src={mistEffect}
              alt="Mist Effect"
            />
          </div>
        </div>
        
        <div className="w-full h-full absolute flex flex-col items-center justify-center">
          <div className="flex items-center">
            <div className="h-[1px] w-4 lg:w-8 bg-white"></div>
            <h3 className="font-yiBaiti text-xs lg:text-[20px] text-white mx-3 tracking-widest">
              DISCOVER INDONESIA
            </h3>
            <div className="h-[1px] w-4 lg:w-8 bg-white"></div>
          </div>
          <h1 className="font-milonga text-5xl lg:text-[100px] text-white mb-14">
            Neosantara
          </h1>
          <button className="w-[157px] lg:w-[175px] h-[40px] border-[2px] border-white rounded-full font-urbanist text-white text-sm lg:text-base">
            Explore Now
          </button>
        </div>

        <Navbar />
      </div>
    </div>
  );
}

export default LandingComponentHero