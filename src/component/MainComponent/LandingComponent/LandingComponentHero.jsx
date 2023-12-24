import React from 'react';
import { bgLandingHero, mistEffect } from '../../../utils/images.js';
import Navbar from '../../../global_component/Navbar.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link as ScrollLink } from 'react-scroll';
import {useTranslation} from "react-i18next";

function LandingComponentHero() {
  const {t} = useTranslation();
  return (
    <div className="h-screen w-screen relative">
      <div>
        <div className="w-full h-full absolute">
          <img
            className="top-0 object-cover w-full h-full absolute"
            src={bgLandingHero}
            alt="hero"
            loading="lazy"
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
          <div className="flex items-center " data-aos="fade-up">
            <div className="h-[1px] w-4 lg:w-8 bg-white"></div>
            <h3 className="font-yiBaiti text-xs lg:text-[20px] text-white mx-3 tracking-widest"  >
              WONDERFUL INDONESIA
            </h3>
            <div className="h-[1px] w-4 lg:w-8 bg-white"></div>
          </div>
          <h1 className="font-milonga text-5xl lg:text-[100px] text-white mb-14" data-aos="fade-up">
            Neosantara
          </h1>
          <ScrollLink
            to="landingComponentIndonesia" // Use the ID of the target component
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your layout
            duration={500}
          >
            <button className="px-8 lg: h-[40px] border-[2px] border-white rounded-full font-urbanist text-white text-sm lg:text-base transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg" data-aos="fade-up">
              {t('explore')}
            </button>
          </ScrollLink>
        </div>

        <Navbar />
      </div>
    </div>
  );
}

export default LandingComponentHero;
