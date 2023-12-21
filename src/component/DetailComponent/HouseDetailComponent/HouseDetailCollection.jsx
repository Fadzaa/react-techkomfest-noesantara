import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { barrierDesktop, barrierMobile, house1, house2, house3, house4 } from '../../../utils/images.js';

const houseImages = [house1, house2, house3, house4];

const HouseDetailCollection = () => {
  const [barrierImage, setBarrierImage] = useState(barrierMobile);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    responsive : [
      {
        breakpoint : 1024,
        settings :{
        slidesToShow : 3,
        }
      },
      {
        breakpoint : 600,
        settings :{
        slidesToShow : 2,
        }
      },
      {
        breakpoint : 550,
        settings :{
        slidesToShow : 3,
        }
      },
      {
        breakpoint : 480,
        settings :{
        slidesToShow : 2,
        }
      }
    ]
  };

  useEffect(() => {
    const handleResize = () => {
      setBarrierImage(window.innerWidth >= 1024 ? barrierDesktop : barrierMobile);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='mx-auto items-center w-full relative container'>
      <img className='absolute -top-14 sm:-top-36 lg:-top-10 hp:-top-20 md:-top-40 z-10 w-full xl:-top-40' src={barrierImage} alt="" />
      <Slider {...settings}>
        {houseImages.map((house, index) => (
          <div className='w-[154px] h-[152px] lg:w-[349px] lg:h-[345px]' key={index}>
            <img className='w-full h-[152px]  lg:h-[345px] object-cover' src={house} alt={`House ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <img className='absolute -bottom-14 sm:-bottom-36 hp:-bottom-20 lg:-bottom-10 xl:-bottom-40 z-10 w-full' src={barrierImage} alt="" />
    </div>
  );
};

export default HouseDetailCollection;
