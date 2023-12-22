import React from 'react'
import Navbar from '../global_component/Navbar'
import { bgInformative1, informativeBali, informativeJakarta, informativeJawaBarat, informativeJawaTengah, informativePapua } from '../utils/images'
import { Splide, SplideSlide } from '@splidejs/react-splide'
// Default theme
import '@splidejs/react-splide/css';

// or only core styles
import '@splidejs/react-splide/css/core';
import {useResponsive} from "../hooks/useResponsive.js";


function InformativePage() {
    const isMobile = useResponsive(640)
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
      isMobile ?  <InformativeMobile cardList={cardList}/> : <InformativeDesktop cardList={cardList}/>
  );
}

export default InformativePage


function InformativeDesktop({cardList}) {
    return (
        <div className="h-screen w-screen relative">
            <img
                className="h-full w-full absolute object-cover"
                src={informativeBali}
                alt="Background Informative Page"
            />
            <div className="absolute flex h-screen items-center justify-center px-16">
                <div className="w-1/2 pe-8">
                    <div className="flex flex-col">
                        <div
                            className="border border-white border-opacity-70 mt-[55px] h-[39px] rounded-[20px] flex  lg:h-[48px] lg:rounded-3xl lg:flex items-center gap-1 lg:gap-5 lg:text-sm lg:mb-5">
                            <ion-icon name="search-outline"
                                      style={{
                                          fontSize: '24px',
                                          margin: '0 10px',
                                          marginLeft: '20px',
                                          color: 'white'
                                      }}></ion-icon>
                            <input type="text"
                                   placeholder="What do you want to learn today?"
                                // value={searchQuery}
                                // onChange={handleSearchChange}
                                   className="bg-transparent font-urbanist text-white w-full text-[10px] lg:text-base lg:h-[48px] rounded-3xl focus:outline-none"/>
                        </div>

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
                    <div className="flex justify-between w-full mb-5">

                        <div className="flex w-3/4">
                            <div
                                className="w-full border border-white rounded-xl h-10 flex justify-between py-2 px-5 me-4">
                                <div className="font-urbanist text-white font-medium">Pulau</div>
                                <div className="w-4 h-4 bg-white"></div>
                            </div>
                            <div className="w-full border border-white rounded-xl h-10 flex justify-between py-2 px-5">
                                <div className="font-urbanist text-white font-medium">Pulau</div>
                                <div className="w-4 h-4 bg-white"></div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4  my-4 lg:my-0">
                            <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center">
                                <svg className="w-3 lg:w-4 rotate-180" viewBox="0 0 26 37" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.91932 -5.12479e-05L26 18.101L3.91932 36.2021L8.34617e-07 32.9892L18.1614 18.101L8.34617e-07 3.21289L3.91932 -5.12479e-05Z"
                                        fill="#646464"/>
                                </svg>
                            </div>
                            <div
                                className="bg-white h-10 w-10 rounded-full flex justify-center items-center">
                                <svg className="w-3 lg:w-4" viewBox="0 0 26 37" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.91932 -5.12479e-05L26 18.101L3.91932 36.2021L8.34617e-07 32.9892L18.1614 18.101L8.34617e-07 3.21289L3.91932 -5.12479e-05Z"
                                        fill="#646464"/>
                                </svg>
                            </div>
                        </div>

                    </div>
                    <Splide
                        options={{
                            type: "loop",
                            focus: -1,
                            rewind: true,
                            width: 800,
                            height: 500,
                            gap: "1.5rem",
                            perPage: 2,
                            perMove: 1,
                            pagination: false,
                            arrows: false,
                            autoplay: true,
                            interval: 1000,
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
            <Navbar/>
        </div>
    )
}

function InformativeMobile({cardList}) {
    return (
        <div className="h-screen w-screen relative">
            <Navbar/>

            <img className="h-full w-full absolute object-cover" src={informativeBali} alt="Background Informative Page"/>

            <div className="absolute h-full w-full">
                <div className="w-full px-5 pt-16">
                    <div
                        className="border border-white w-full border-opacity-70  h-[39px] rounded-[20px] flex items-center gap-1">
                        <ion-icon name="search-outline"
                                  style={{
                                      fontSize: '24px',
                                      margin: '0 10px',
                                      marginLeft: '20px',
                                      color: 'white'
                                  }}></ion-icon>
                        <input type="text"
                               placeholder="What do you want to learn today?"
                            // value={searchQuery}
                            // onChange={handleSearchChange}
                               className="bg-transparent font-urbanist text-white w-full text-[10px] lg:text-base lg:h-[48px] rounded-3xl focus:outline-none"/>
                    </div>

                    <div className="flex justify-between items-center w-full mb-2">

                        <div className="flex w-3/4">
                            <div
                                className="w-full border border-white rounded-xl h-10 flex justify-between py-2 px-5 me-4">
                                <div className="font-urbanist text-white font-medium">Pulau</div>
                                <div className="w-4 h-4 bg-white"></div>
                            </div>
                            <div className="w-full border border-white rounded-xl h-10 flex justify-between py-2 px-5">
                                <div className="font-urbanist text-white font-medium">Pulau</div>
                                <div className="w-4 h-4 bg-white"></div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4  my-4 lg:my-0">
                            <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center">
                                <svg className="w-3 lg:w-4 rotate-180" viewBox="0 0 26 37" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.91932 -5.12479e-05L26 18.101L3.91932 36.2021L8.34617e-07 32.9892L18.1614 18.101L8.34617e-07 3.21289L3.91932 -5.12479e-05Z"
                                        fill="#646464"/>
                                </svg>
                            </div>
                            <div
                                className="bg-white h-10 w-10 rounded-full flex justify-center items-center">
                                <svg className="w-3 lg:w-4" viewBox="0 0 26 37" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.91932 -5.12479e-05L26 18.101L3.91932 36.2021L8.34617e-07 32.9892L18.1614 18.101L8.34617e-07 3.21289L3.91932 -5.12479e-05Z"
                                        fill="#646464"/>
                                </svg>
                            </div>
                        </div>

                    </div>

                    <Splide
                        options={{
                            type: "loop",
                            focus: -1,
                            rewind: true,

                            height: 300,
                            gap: "1.5rem",
                            perPage: 2,
                            perMove: 1,
                            pagination: false,
                            arrows: false,
                            autoplay: true,
                            interval: 1000,
                        }}
                    >
                        {cardList.map((card, index) => (
                            <SplideSlide key={index}>
                                <img
                                    className={`${
                                        index != 0
                                            ? "w-full h-[356px] rounded-2xl mt-10"
                                            : "w-full h-[405px] rounded-3xl  "
                                    } object-cover`}
                                    src={card.image}
                                    alt={`Informative Slide ${index}`}
                                />
                            </SplideSlide>
                        ))}
                    </Splide>

                    <h1 className="font-milonga text-[44px] text-white mt-4">Bali</h1>
                    <p className="font-urbanist font-normal text-sm text-white pe-16 mb-5">
                        This text presents my research journey on the topic of Music and
                        Tourism Imaginaries and gives the context which led to the
                        publication of this special issue of Via Tourism Review.
                    </p>
                    <button className="w-36 h-11 border-[1px] border-white rounded-full text-white font-urbanist">
                        See More
                    </button>


                </div>
            </div>


        </div>
    )
}