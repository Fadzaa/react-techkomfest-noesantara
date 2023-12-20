import React, { useState, useEffect } from 'react';
import { bgGallery1, bgGallery2, bgGallery3, bgGallery4, bgGallery5, bgGallery6, bgGallery7 } from '../../utils/images';
import GalleryTabBar from './GalleryTabBar';

const GalleryComponentHero = () => {
  const [backgroundImages, setBackgroundImages] = useState([bgGallery5, bgGallery2, bgGallery6, bgGallery4]);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setCurrentBackgroundIndex((prevIndex) => (prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1));
        setFade(false);
      }, 500);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [backgroundImages]);

  

  return (
    <>
      <div className="w-screen h-screen relative bg-black  opacity-95">
        <div className="relative w-screen h-screen items-center">
          <img src={backgroundImages[currentBackgroundIndex]} alt="bggallery" className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`} />
          <div className="absolute top-0 left-0 w-full h-full transition  ease-in-out"></div>
          <div className="flex flex-col justify-center items-center lg:flex">
            <div className="absolute top-[137px] lg:top-[290px] lg:left-[103px]">
              <div className="flex justify-center items-center lg:items-center gap-5">
                <div className="h-[1px] w-[50px] lg:h-[1px] lg:w-8 bg-white"></div>
                <h3 className="font-yiBaiti mx-3 lg:text-[20px] text-white lg:mx-3 tracking-widest">GALLERY INDONESIA</h3>
                <div className="h-[1px] w-[50px] lg:h-[1px] lg:w-8 bg-white"></div>
              </div>
              <h1 className="font-milonga mt-4 ml-[30px] text-[55px] lg:text-[100px] text-white lg:mb-8">Gallery</h1>
              <p className="w-[300px] lg:mb-6 lg:mt-3 mt-3 ml-[30px] text-white"> Tiap gambar adalah pintu ajaib ke budaya dan keindahan yang tak terlupakan. </p>
              <div className="border border-white mt-[55px] ml-[30px] w-[300px] h-[39px] rounded-[20px] flex lg:w-[511px] lg:h-[48px] lg:rounded-3xl lg:flex items-center gap-1 lg:gap-5 lg:text-sm">
                <ion-icon name="search-outline" style={{ fontSize: '24px', margin: '0 10px', marginLeft: '20px', color: 'white' }}></ion-icon>
                <input type="text" placeholder="What do you want to see today?" className="bg-transparent text-white w-full text-[10px] lg:text-base lg:h-[48px] rounded-3xl focus:outline-none" />
              </div>
            </div>
            <div className="lg:flex-row absolute lg:top-44 lg:right-16 top-[409px] mt-[28px]">
              <GalleryTabBar />
            </div>
          </div>
          <p className="lg:text-white lg:font-urbanist lg:text-base lg:absolute lg:bottom-4 lg:text-center lg:left-0 lg:right-0 hidden lg:block">Copyright &copy; 2023 Lorem Ipsum Ltd.</p>
        </div>
      </div>
    </>
  );
};

export default GalleryComponentHero;
