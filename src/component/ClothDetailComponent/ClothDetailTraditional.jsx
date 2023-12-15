import React from 'react';
import ClothDetailCardGroup from './ClothDetailCardGroup';

const ClothDetailTraditional = () => {
  return (
    <>
      <div className="flex gap-[90px]">
        <div className="pl-[86px] pt-[176px] pb-[176px]">
          <p className="font-milonga text-[80px] text-primary w-[671px]">What is traditional clothes?</p>
          <p className="font-urbanist text-[32px] w-[651px] mt-[32px] leading-[42px]">
            Baju adat Indonesia mencerminkan kekayaan budaya dengan ciri khas dan makna. Terbuat dari kain tradisional seperti batik, tenun, dan sutra, dihiasi motif flora, fauna, dan geometris. Sebagai simbol identitas budaya, menarik
            perhatian dunia internasional.
          </p>
        </div>
        <div className="pt-[176px]">
          <ClothDetailCardGroup />
        </div>
      </div>
    </>
  );
};

export default ClothDetailTraditional;
