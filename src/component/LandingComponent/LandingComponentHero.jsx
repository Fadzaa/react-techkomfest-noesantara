import React from 'react'
import { bgLandingHero, mistEffect } from '../../utils/images'

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
          <div className='h-full absolute w-full mt-28'>
            <img
              className="bottom-0 absolute w-full"
              src={mistEffect}
              alt="Mist Effect"
            />
          </div>
        </div>

        <div className="w-full h-full absolute flex flex-col items-center justify-center">
          <div className="flex items-center">
            <div className="h-[1px] w-8 bg-white"></div>
            <h3 className="font-yiBaiti text-[20px] text-white mx-3 tracking-widest">
              DISCOVER INDONESIA
            </h3>
            <div className="h-[1px] w-8 bg-white"></div>
          </div>
          <h1 className="font-milonga text-[100px] text-white mb-14">
            Neosantara
          </h1>
          <button className="w-[175px] h-[40px] border-[2px] border-white rounded-full font-urbanist text-white">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingComponentHero