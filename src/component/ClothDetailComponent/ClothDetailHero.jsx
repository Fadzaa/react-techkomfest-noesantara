import React from 'react';
import { bgDetailCloth } from '../../utils/images';

const ClothDetailHero = () => {
  return (
    <>
      <div className="w-screen h-screen relative">
        <img src={bgDetailCloth} alt="" className="w-full h-full object-cover" />
          <div className="flex flex-row justify-center items-center absolute top-[103px] left-[574px] gap-6">
            <div className="bg-white w-6 h-[1px]"></div>
            <p className="font-yiBaiti text-xl tracking-widest text-white">QUIZ INDONESIA</p>
            <div className="bg-white w-6 h-[1px]"></div>
          </div>
          <div className="flex flex-col justify-center items-center absolute top-[221px] left-[239px] text-white">
            <p className="font-milonga text-[113px]">Traditional Clothes</p>
            <p className="font-urbanist text-[32px] mt-[21px]">Crafting Memorable Characters, Villains, Magic Systems, and Stories</p>
            <a href="#" className="text-7xl mt-[119px]">
              <ion-icon name="arrow-down-circle-outline"></ion-icon>
            </a>
          </div>
        </div>
    </>
  );
};

export default ClothDetailHero;
