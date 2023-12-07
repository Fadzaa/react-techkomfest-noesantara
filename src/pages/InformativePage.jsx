import React from 'react'
import Navbar from '../global_component/Navbar'
import { bgInformative1 } from '../utils/images'
import { Splide, SplideSlide } from '@splidejs/react-splide'
// Default theme
import '@splidejs/react-splide/css';

// or only core styles
import '@splidejs/react-splide/css/core';


function InformativePage() {
  return (
    <div className="h-screen w-screen bg-black relative">
      <img
        className="absolute"
        src={bgInformative1}
        alt="Background Informative Page"
      />
      <div className="absolute flex h-screen items-center justify-center ps-16">
        <div className="flex flex-col">
          <h1 className="font-milonga text-[80px] text-white mb-4">
            Jawa Tengah
          </h1>
          <p className="font-urbanist font-normal text-base text-white w-1/2 pe-16 mb-11">
            This text presents my research journey on the topic of Music and
            Tourism Imaginaries and gives the context which led to the
            publication of this special issue of Via Tourism Review.
          </p>
          <button className="w-36 h-11 border-[1px] border-white rounded-full text-white font-urbanist">
            See More
          </button>
        </div>
        <Splide
          options={{
            rewind: true,
            width: 800,
            gap: "1rem",
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img src="image1.jpg" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="image2.jpg" alt="Image 2" />
          </SplideSlide>
        </Splide>
      </div>
      <Navbar />
    </div>
  );
}

export default InformativePage