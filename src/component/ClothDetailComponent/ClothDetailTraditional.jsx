import React from 'react';
import ClothDetailCardGroup from './ClothDetailCardGroup';

const ClothDetailTraditional = () => {
  return (
    <>
      <div className="relative">
        <div>
          <p className="font-milonga text-[36px] text-primary w-[306px] mt-[59px] ml-[27px] lg:text-[80px] lg:w-[671px] lg:absolute lg:top-[176px] lg:left-[86px]">What is traditional clothes?</p>
          <div className="mt-[57px] lg:absolute lg:top-[176px] lg:right-[83px]">
            <ClothDetailCardGroup />
          </div>
          <p className="font-urbanist text-xl leading-[33px] tracking-wider w-[306px] mt-[48px] ml-[27px] pb-[132px] lg:text-[32px] lg:w-[651px] lg:leading-[55px] lg:absolute lg:top-[440px] lg:left-[86px]">
            Baju adat Indonesia mencerminkan kekayaan budaya dengan ciri khas dan makna. Terbuat dari kain tradisional seperti batik, tenun, dan sutra, dihiasi motif flora, fauna, dan geometris. Sebagai simbol identitas budaya, menarik
            perhatian dunia internasional.
          </p>
        </div>
      </div>
    </>
  );
};

export default ClothDetailTraditional;
