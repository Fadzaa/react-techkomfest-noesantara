import React from 'react';
import { bgDetailCloth } from '../../utils/images';

const ClothDetailHero = () => {
  return (
    <>
      <div className="w-screen h-screen relative">
        <img src={bgDetailCloth} alt="" className="w-full h-full object-cover lg:w-full lg:h-full lg:object-cover" />
          <div className="flex flex-row justify-center items-center gap-6 absolute top-[104px] left-[55px] lg:flex lg:flex-row lg:justify-center lg:items-center lg:absolute lg:top-[103px] lg:left-[574px] lg;gap-6">
            <div className="bg-white w-6 h-[1px]"></div>
            <p className="font-yiBaiti text-xl tracking-widest text-white">QUIZ INDONESIA</p>
            <div className="bg-white w-6 h-[1px]"></div>
          </div>
          <div className="flex flex-col ml-5 absolute top-[203px] justify-center items-center lg:absolute lg:top-[221px] lg:left-[239px] text-white">
            <p className="font-milonga text-[38px] lg:text-[113px]">Traditional Clothes</p>
            <p className="font-urbanist w-[304px] text-center lg:w-[957px] text-[18px] mt-[29px] lg:text-[32px] lg:mt-[21px]">Crafting Memorable Characters, Villains, Magic Systems, and Stories</p>
            <a href="#" className= "text-7xl mt-[106px] lg:text-7xl lg;mt-[119px]">
              <ion-icon name="arrow-down-circle-outline"></ion-icon>
            </a>
          </div>
        </div>
    </>
  );
};

export default ClothDetailHero;
