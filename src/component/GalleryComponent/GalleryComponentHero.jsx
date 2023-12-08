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
      <div className="w-screen h-screen relative bg-black opacity-95">
        <div className="relative items-center">
          <img src={backgroundImages[currentBackgroundIndex]} alt="bggallery" className={`w-full h-full transition-opacity duration-500 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`} />
          <div className="absolute top-0 left-0 w-full h-ful transition  ease-in-out"></div>
          <div className="flex">
            <div className="absolute top-[290px] left-[103px]">
              <div className="flex items-center pl-4">
                <div className="h-[1px] w-8 bg-white"></div>
                <h3 className="font-yiBaiti text-[20px] text-white mx-3 tracking-widest">GALLERY INDONESIA</h3>
                <div className="h-[1px] w-8 bg-white"></div>
              </div>
              <h1 className="font-milonga text-[100px] text-white mb-8">Gallery</h1>
              <p className="mb-6 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero </p>
              <div className="border border-white w-[511px] h-[48px] rounded-3xl flex items-center gap-5 text-sm">
                <ion-icon name="search-outline" style={{ fontSize: '24px', margin: '0 10px', marginLeft: '20px', color: 'white' }}></ion-icon>
                <input type="text" placeholder="What do you want to see today?" className="bg-transparent text-white w-full h-[48px] rounded-3xl focus:outline-none" />
              </div>
            </div>
            <div className="flex-row absolute top-44 right-16">
              <GalleryTabBar />
            </div>
          </div>
          <p className="text-white font-urbanist text-base absolute bottom-4 text-center left-0 right-0 ">Copyright &copy; 2023 Lorem Ipsum Ltd.</p>
        </div>
      </div>
    </>
  );
};

export default GalleryComponentHero;
