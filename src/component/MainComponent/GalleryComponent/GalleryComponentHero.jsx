import React, { useState, useEffect } from 'react';
import { bgGallery1, bgGallery2, bgGallery3, bgGallery4, bgGallery5, bgGallery6, bgGallery7 } from '../../../utils/images.js';
import GalleryTabBar from './GalleryTabBar.jsx';
import Navbar from "../../../global_component/Navbar.jsx";
import {useTranslation} from "react-i18next";
import axios from "axios";

const GalleryComponentHero = () => {
  const {t} = useTranslation();
  const [backgroundImages, setBackgroundImages] = useState([bgGallery5, bgGallery2, bgGallery6, bgGallery3]);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };




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
      <div className="w-screen h-screen relative">
        <Navbar/>
        <div className="absolute w-full h-full bg-black opacity-95"></div>
        <img src={backgroundImages[currentBackgroundIndex]} alt="bggallery"
             className={`w-full h-full object-cover absolute transition-opacity duration-500 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}/>

        <div className="absolute w-full flex flex-col px-5 lg:flex lg:flex-row lg:w-full lg:h-full lg:ps-20 lg:pe-10 lg:gap-5 ">

          <div className="h-20 lg:h-0"></div>
          <div className="flex flex-col  lg:h-full lg:w-1/2 lg:justify-center lg:pe-5">

            <div className="flex w-full items-center justify-center lg:justify-start lg:gap-5">
              <div className="h-[1px] w-[50px] lg:h-[1px] lg:w-8 bg-white"></div>
              <h3 className="font-yiBaiti mx-3 lg:text-[20px] text-white lg:mx-3 tracking-widest">GALLERY INDONESIA</h3>
              <div className="h-[1px] w-[50px] lg:h-[1px] lg:w-8 bg-white"></div>
            </div>

            <h1 className="font-milonga mt-4 ml-[-3px]  text-[55px] lg:text-[100px] text-white lg:mb-8">Gallery</h1>
            {/*INI*/}
            <p className="lg:mb-6 lg:mt-3 mt-3 font-urbanist font-medium text-[#DADADA] leading-6 text-xs lg:text-base">{t('galleryDescription')}  </p>

            <div className="border border-white border-opacity-70 mt-[55px] h-[39px] rounded-[20px] flex  lg:h-[48px] lg:rounded-3xl lg:flex items-center gap-1 lg:gap-5 lg:text-sm">
              <ion-icon name="search-outline"
                        style={{fontSize: '24px', margin: '0 10px', marginLeft: '20px', color: 'white'}}></ion-icon>
              <input type="text"
                     placeholder={t('galleryInput')}
                     value={searchQuery}
                     onChange={handleSearchChange}
                     className="bg-transparent font-urbanist text-white w-full text-[10px] lg:text-base lg:h-[48px] rounded-3xl focus:outline-none"/>
            </div>
            {/*INI*/}
          </div>

          <div className="lg:flex lg:right-16 lg:h-full lg:w-1/2 lg:justify-center lg:items-start lg:pt-[20vh]">
            <GalleryTabBar searchQuery={searchQuery} />
          </div>
        </div>



        <p className="lg:text-[#D1D1D1] lg:font-urbanist lg:text-base lg:absolute lg:bottom-4 lg:text-center lg:ps-20 lg:left-0 hidden lg:block">Copyright &copy; 2023
          Lorem Ipsum Ltd.</p>
      </div>
  );
};

export default GalleryComponentHero;
