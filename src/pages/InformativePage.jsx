import React, {useEffect, useRef, useState} from 'react'
import Navbar from '../global_component/Navbar'
import { bgInformative1, informativeBali, informativeJakarta, informativeJawaBarat, informativeJawaTengah, informativePapua } from '../utils/images'
import { Splide, SplideSlide } from '@splidejs/react-splide'
// Default theme
import '@splidejs/react-splide/css';

// or only core styles
import '@splidejs/react-splide/css/core';
import {useResponsive} from "../hooks/useResponsive.js";
import Slider from "react-slick";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';
import CircularProgress from "@mui/joy/CircularProgress";

function InformativePage() {
    const isMobile = useResponsive(640)
    const [cardList, setCardList] = useState([{}]);
    const [detailId, setDetailId] = useState(0)
    const [loading, setLoading] = useState(true); // A
    const fetchData = async () => {
        try {
            const response = await axios.get('https://zell-techkomfest.000webhostapp.com/api/informative');
            setCardList(response.data.data);
            setLoading(false);
            console.log(cardList)
        } catch (error) {
            setLoading(false);
            console.error('Error fetching data:', error);
        }
    };


    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, [cardList]);

  return (
      <>
          {loading ? (
              <div className="h-screen w-screen flex items-center justify-center">
                  <CircularProgress />
              </div>// Display CircularProgress while loading
          ) : (
              isMobile ? <InformativeMobile cardList={cardList} /> : <InformativeDesktop cardList={cardList} />
          )}
      </>
  );
}

export default InformativePage


function InformativeDesktop({cardList}) {
    const navigate = useNavigate()
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const isCurrentSlide = (index) => index === currentSlide;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
        className: "me-5",
        slidesToScroll: 1,
        afterChange: (index) => {
            setCurrentSlide(index);
            console.log("What is the current slide : "  + currentSlide)
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    useEffect(() => {

    }, []);


    const handleSeeMore = () => {
        const selectedCardId = cardList[currentSlide].id;
        const selectedCardImage = cardList[currentSlide].image

        navigate('/detail', { state: { selectedCardId, selectedCardImage } });
    };


    return (
        <div className="h-screen w-screen relative">
            <img
                className="h-full w-full absolute object-cover"
                src={cardList[currentSlide].image}
                alt="Background Informative Page"
            />
            <div className="h-full w-full absolute object-cover bg-black bg-opacity-50"></div>

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

                        <h1 className="font-milonga text-[80px] text-white mb-4">{cardList[currentSlide].province}</h1>
                        <p className="font-urbanist font-normal text-base text-white pe-16 mb-11">
                            {cardList[currentSlide].description}
                        </p>
                            <button
                                onClick={handleSeeMore}
                                className="w-36 h-11 border-[1px] border-white rounded-full text-white font-urbanist">
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
                            <div onClick={previous}
                                 className="bg-white h-10 w-10 rounded-full flex justify-center items-center">
                                <svg className="w-3 lg:w-4 rotate-180" viewBox="0 0 26 37" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.91932 -5.12479e-05L26 18.101L3.91932 36.2021L8.34617e-07 32.9892L18.1614 18.101L8.34617e-07 3.21289L3.91932 -5.12479e-05Z"
                                        fill="#646464"/>
                                </svg>
                            </div>
                            <div onClick={next}
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


                    <div className="w-[50vw] ">
                        <Slider ref={sliderRef}  {...settings}>
                            {cardList.map((card, index) => (
                                    <img
                                        className={`w-1/2 ${isCurrentSlide() ? "h-[205px]" : "h-[505px]"} rounded-3xl object-cover pe-5`}
                                        src={card.image}
                                        alt={`Informative Slide ${index}`}
                                    />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <Navbar/>
        </div>
    )
}


function InformativeMobile({cardList}) {
    const navigate = useNavigate()
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const isCurrentSlide = (index) => index === currentSlide;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
        slidesToScroll: 1,
        afterChange: (index) => {
            setCurrentSlide(index);
            console.log("What is the current slide : "  + currentSlide)
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    useEffect(() => {

    }, []);


    const handleSeeMore = () => {
        const selectedCardId = cardList[currentSlide].id;
        const selectedCardImage = cardList[currentSlide].image

        navigate('/detail', { state: { selectedCardId, selectedCardImage } });
    };
    return (
        <div className="h-screen w-screen relative">
            <Navbar/>

            <img className="h-full w-full absolute object-cover" src={cardList[currentSlide].image}
                 alt="Background Informative Page"/>
            <div className="h-full w-full absolute object-cover bg-black bg-opacity-50"></div>

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
                            <div
                                onClick={previous}
                                className="bg-white h-10 w-10 rounded-full flex justify-center items-center">
                                <svg className="w-3 lg:w-4 rotate-180" viewBox="0 0 26 37" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.91932 -5.12479e-05L26 18.101L3.91932 36.2021L8.34617e-07 32.9892L18.1614 18.101L8.34617e-07 3.21289L3.91932 -5.12479e-05Z"
                                        fill="#646464"/>
                                </svg>
                            </div>
                            <div
                                onClick={next}
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

                    <div className="w-full">
                        <Slider ref={sliderRef}  {...settings}>
                            {cardList.map((card, index) => (
                                <img
                                    className={`w-[50vw] ${isCurrentSlide() ? "h-[205px]" : "h-[405px]"} rounded-3xl object-cover`}
                                    src={card.image}
                                    alt={`Informative Slide ${index}`}
                                />
                            ))}
                        </Slider>
                    </div>

                    <h1 className="font-milonga text-[44px] text-white mt-4">{cardList[currentSlide].province}</h1>
                    <p className="font-urbanist font-normal text-sm text-white pe-16 mb-5">
                        {cardList[currentSlide].description}
                    </p>

                    <button onClick={handleSeeMore}
                            className="w-36 h-11 border-[1px] border-white rounded-full text-white font-urbanist">
                        See More
                    </button>

                </div>
            </div>


        </div>
    )
}

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div

        />
    );
}