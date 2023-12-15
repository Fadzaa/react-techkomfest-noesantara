import React from 'react';
import { clothCard1, clothCard2, clothCard3, clothCard4 } from '../../utils/images';

const ClothDetailCardGroup = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex gap-6">
          <img src={clothCard1} alt="" className="rounded-t-[107px] rounded-bl-[107px]" />
          <img src={clothCard4} alt="" className="rounded-t-[107px] rounded-br-[107px]" />
        </div>
        <div className="flex gap-6">
          <img src={clothCard3} alt="" className="rounded-b-[107px] rounded-tl-[107px]" />
          <img src={clothCard2} alt="" className="rounded-b-[107px] rounded-tr-[107px]" />
        </div>
      </div>
    </>
  );
};

export default ClothDetailCardGroup;
