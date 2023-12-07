import React from 'react'
import Navbar from '../global_component/Navbar'
import { bgInformative1, informativeBali, informativeJakarta, informativeJawaBarat, informativeJawaTengah, informativePapua } from '../utils/images'
import { Splide, SplideSlide } from '@splidejs/react-splide'
// Default theme
import '@splidejs/react-splide/css';

// or only core styles
import '@splidejs/react-splide/css/core';


function InformativePage() {
  const cardList = [
    {
      title: "Bali",
      description:
        "This text presents my research journey on the topic of Music and Tourism Imaginaries...",
      image: informativeBali,
    },
    {
      title: "Jakarta",
      description:
        "This text presents my research journey on the topic of Music and Tourism Imaginaries...",
      image: informativeJakarta,
    },
    {
      title: "Jawa Tengah",
      description:
        "This text presents my research journey on the topic of Music and Tourism Imaginaries...",
      image: informativeJawaBarat,
    },
    // Add more cards as needed
  ];
  return (
    <div className="h-screen w-screen bg-black relative">
      <img
        className="absolute"
        src={informativeBali}
        alt="Background Informative Page"
      />
      <div className="absolute flex h-screen items-center justify-center px-16">
        <div className="w-1/2 ">
          <div className="flex flex-col">
            <h1 className="font-milonga text-[80px] text-white mb-4">Bali</h1>
            <p className="font-urbanist font-normal text-base text-white pe-16 mb-11">
              This text presents my research journey on the topic of Music and
              Tourism Imaginaries and gives the context which led to the
              publication of this special issue of Via Tourism Review.
            </p>
            <button className="w-36 h-11 border-[1px] border-white rounded-full text-white font-urbanist">
              See More
            </button>
          </div>
        </div>
        <div className="w-1/2 mt-32">
          <Splide
            options={{
              rewind: true,
              width: 800,
              height: 500,
              gap: "1.5rem",
              perPage: 2,
              perMove: 1,
              pagination: false,
              arrows: false,
              autoplay: true,
              interval: 3000,
            }}
          >
            {cardList.map((card, index) => (
              <SplideSlide key={index}>
                <img
                  className={`${
                    index != 0
                      ? "w-[288px] h-[356px] rounded-2xl mt-10"
                      : "w-[328] h-[405px] rounded-3xl  "
                  } object-cover`}
                  src={card.image}
                  alt={`Informative Slide ${index}`}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default InformativePage