import React from 'react';
import { bgGallery1, bgGallery2, bgGallery3, bgGallery4, bgGallery5 } from '../../../utils/images.js';

const GalleryCardGroup = ({ images }) => {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center lg:gap-2 overflow-auto max-h-[250px] lg:max-h-[500px] ">
        <div className="flex flex-row gap-2 lg:gap-2">
          <img src={images} alt="" className="w-[136px] h-[89px] lg:w-[282px] lg:h-[186px] rounded-lg" />
          <img src={bgGallery2} alt="" className="w-[79px] h-[89px] lg:w-[164px] lg:h-[186px] rounded-lg" />
          <img src={bgGallery3} alt="" className="w-[74px] h-[89px]  lg:w-[155px] lg:h-[186px] rounded-lg" />
        </div>
        <div className="flex gap-2 lg:gap-2">
          <div className="flex flex-col gap-2  lg:gap-2">
            <img src={bgGallery3} alt="" className="w-[218px] h-[89px] lg:w-[453px] lg:h-[186px] object-cover rounded-lg" />
            <img src={bgGallery3} alt="" className="w-[218px] h-[51px] lg:w-[453px] lg:h-[107px] object-cover rounded-lg" />
          </div>
          <img src={bgGallery5} alt="" className="w-[74px] h-[144px] lg:w-[155px] lg:h-[300px] object-cover rounded-lg" />
        </div>
        <div className="flex flex-row gap-2 lg:gap-2">
          <img src={images} alt="" className="w-[136px] h-[89px] lg:w-[282px] lg:h-[186px] rounded-lg" />
          <img src={bgGallery2} alt="" className="w-[79px] h-[89px] lg:w-[164px] lg:h-[186px] rounded-lg" />
          <img src={bgGallery3} alt="" className="w-[74px] h-[89px]  lg:w-[155px] lg:h-[186px] rounded-lg" />
        </div>
        <div className="flex gap-2 lg:gap-2">
          <div className="flex flex-col gap-2  lg:gap-2">
            <img src={bgGallery3} alt="" className="w-[218px] h-[89px] lg:w-[453px] lg:h-[186px] object-cover rounded-lg" />
            <img src={bgGallery3} alt="" className="w-[218px] h-[51px] lg:w-[453px] lg:h-[107px] object-cover rounded-lg" />
          </div>
          <img src={bgGallery5} alt="" className="w-[74px] h-[144px] lg:w-[155px] lg:h-[300px] object-cover rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default GalleryCardGroup;
