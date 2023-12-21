import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  clothCard1,
  clothCard2,
  clothCard3,
  clothCard4,
} from "../../utils/images";

const ClothDetailCardSlider = () => {
  const settings = {
    className: "center",
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    centerMode : true,
    slidesToScroll: 3,
    arrows: true,
    centerPadding: "100px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,  
          centerMode : true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          centerMode : true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode : true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="w-full lg:w-[1200px] md:w-screen sm:w-screen mx-auto   ">
      <Slider {...settings}>
        <div className="w-[300px] lg:w-[368px] px-2">
          <div className="relative">
            <img
              src={clothCard1}
              alt=""
              className="object-cover h-[323px] w-[300px] lg:h-[544px] lg:w-[368px]"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h1 className="font-milonga lg:text-2xl">Kebaya Gajah Mada</h1>
              <h2 className="font-urbanist lg:text-xl">Bali, Indonesia</h2>
            </div>
          </div>
        </div>
        <div className="w-[300px] lg:w-[368px] px-2">
          <div className="relative">
            <img
              src={clothCard1}
              alt=""
              className="object-cover h-[323px] w-[300px] lg:h-[544px] lg:w-[368px]"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h1 className="font-milonga lg:text-2xl">Kebaya Gajah Mada</h1>
              <h2 className="font-urbanist lg:text-xl">Bali, Indonesia</h2>
            </div>
          </div>
        </div>
        <div className="w-[300px] lg:w-[368px] px-2">
          <div className="relative">
            <img
              src={clothCard1}
              alt=""
              className="object-cover h-[323px] w-[300px] lg:h-[544px] lg:w-[368px]"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h1 className="font-milonga lg:text-2xl">Kebaya Gajah Mada</h1>
              <h2 className="font-urbanist lg:text-xl">Bali, Indonesia</h2>
            </div>
          </div>
        </div>
        <div className="w-[300px] lg:w-[368px] px-2">
          <div className="relative">
            <img
              src={clothCard1}
              alt=""
              className="object-cover h-[323px] w-[300px] lg:h-[544px] lg:w-[368px]"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h1 className="font-milonga lg:text-2xl">Kebaya Gajah Mada</h1>
              <h2 className="font-urbanist lg:text-xl">Bali, Indonesia</h2>
            </div>
          </div>
        </div>
        <div className="w-[300px] lg:w-[368px] px-2">
          <div className="relative">
            <img
              src={clothCard1}
              alt=""
              className="object-cover h-[323px] w-[300px] lg:h-[544px] lg:w-[368px]"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h1 className="font-milonga lg:text-2xl">Kebaya Gajah Mada</h1>
              <h2 className="font-urbanist lg:text-xl">Bali, Indonesia</h2>
            </div>
          </div>
        </div>
        <div className="w-[300px] lg:w-[368px] px-2">
          <div className="relative">
            <img
              src={clothCard1}
              alt=""
              className="object-cover h-[323px] w-[300px] lg:h-[544px] lg:w-[368px]"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h1 className="font-milonga lg:text-2xl">Kebaya Gajah Mada</h1>
              <h2 className="font-urbanist lg:text-xl">Bali, Indonesia</h2>
            </div>
          </div>
        </div>
       
      </Slider>
    </div>
  );
};

export default ClothDetailCardSlider;
