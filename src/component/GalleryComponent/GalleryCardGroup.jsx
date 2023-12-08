import React from 'react';
import { bgGallery1, bgGallery2, bgGallery3, bgGallery4, bgGallery5 } from '../../utils/images';

const GalleryCardGroup = ({images}) => {
  return (
    <>
      <div className="flex flex-col gap-2 ">
        <div className="flex flex-row gap-2">
          <img src={images} alt="" className="w-[282px] h-[186px] rounded-lg" />
          <img src={bgGallery2} alt="" className="w-[164px] h-[186px] rounded-lg" />
          <img src={bgGallery3} alt="" className="w-[155px] h-[186px] rounded-lg" />
        </div>
        <div className='flex gap-2'>
        <div className='flex flex-col gap-2'>
            <img src={bgGallery3} alt="" className='w-[453px] h-[186px] object-cover rounded-lg'/>
            <img src={bgGallery3} alt="" className='w-[453px] h-[107px] object-cover rounded-lg'/>
          </div>
          <img src={bgGallery5} alt="" className='w-[155px] h-[300px] object-cover rounded-lg' />
      </div>
        </div>
    </>
  );
};

export default GalleryCardGroup;
