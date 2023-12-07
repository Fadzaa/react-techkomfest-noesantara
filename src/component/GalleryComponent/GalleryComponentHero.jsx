import React, { useState, useEffect } from 'react';
import { bgGallery1, bgGallery2, bgGallery3, bgGallery4, bgGallery5, bgGallery6, bgGallery7 } from '../../utils/images';

const GalleryComponentHero = () => {
  const [backgroundImages, setBackgroundImages] = useState([bgGallery1, bgGallery2, bgGallery3, bgGallery4, bgGallery5, bgGallery6, bgGallery7]);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [backgroundImages]);

  return (
    <div className="w-screen h-screen relative">
      <div className="relative">
        <img src={backgroundImages[currentBackgroundIndex]} alt="bggallery" className="w-full h-full transition-opacity duration-1000 ease-in-out" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity duration-1000 ease-in-out"></div>
        <div className="absolute top-[290px] left-[103px]">
          <div className="flex items-center">
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
      </div>
    </div>
  );
};

export default GalleryComponentHero;
