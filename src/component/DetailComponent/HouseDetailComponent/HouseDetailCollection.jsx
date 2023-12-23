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
      <div className=' w-screen relative  flex flex-col justify-center py-10 bg-white lg:py-32'>
        <h1 className="w-full flex items-center justify-center font-milonga text-center text-primary text-[32px] lg:text-[64px]">Best Collection Of Traditional House</h1>
        <div className="relative overflow-hidden bg-white h-[20vh] lg:h-[50vh]">
          <img className='h-36 lg:h-48 w-full absolute z-10 -top-28' src={barrierImage} alt=""/>
          <Slider {...settings}>
            {houseImages.map((house, index) => (
                <div className='w-[154px] h-[152px] lg:w-[349px] lg:h-[345px]' key={index}>
                  <img className='w-full h-[152px]  lg:h-[345px] object-cover' src={house} alt={`House ${index + 1}`}/>
                </div>
            ))}
          </Slider>
          <img className='h-32  lg:h-52 w-full absolute z-10 -bottom-20' src={barrierImage} alt=""/>
        </div>
      </div>
  );
};

export default HouseDetailCollection;
