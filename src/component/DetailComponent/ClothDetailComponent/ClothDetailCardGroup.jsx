import React from 'react';
import { clothCard1, clothCard2, clothCard3, clothCard4 } from '../../../utils/images.js';

const ClothDetailCardGroup = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 mx-auto">
        <div className="flex gap-6">
          <img src={clothCard1} alt="" className="rounded-t-[107px] rounded-bl-[107px] w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] hp:w-[195px] hp:h-[195px] md:w-[210px] md:h-[210px] lg:w-[240px] lg:h-[240px]" />
          <img src={clothCard4} alt="" className="rounded-t-[107px] rounded-br-[107px] w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] hp:w-[195px] hp:h-[195px] md:w-[210px] md:h-[210px] lg:w-[240px] lg:h-[240px]" />
        </div>
        <div className="flex gap-6">
          <img src={clothCard3} alt="" className="rounded-b-[107px] rounded-tl-[107px] w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] hp:w-[195px] hp:h-[195px] md:w-[210px] md:h-[210px] lg:w-[240px] lg:h-[240px]" />
          <img src={clothCard2} alt="" className="rounded-b-[107px] rounded-tr-[107px] w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] hp:w-[195px] hp:h-[195px] md:w-[210px] md:h-[210px] lg:w-[240px] lg:h-[240px]" />
        </div>
      </div>
    </>
  );
};

export default ClothDetailCardGroup;
