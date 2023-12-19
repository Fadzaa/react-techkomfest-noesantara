import React from 'react';
import { kebaya, payasAgung, ulos } from '../../../utils/images.js';

const ClothDetailWorld = () => {
  return (
    <>
      <div className="relative">
        <p className="font-milonga text-primary text-[36px] absolute top-[50px] left-[56px] lg:text-[64px] lg:left-[500px]">World's Record</p>
        <div className="flex flex-row gap-[40px]">
          <div className="flex flex-col mt-[71px] pl-[77px]">
            <p className="font-milonga text-[36px] absolute top-[501px] left-[41px] lg:top-[186px] lg:left-[77px] lg:text-[80px]">Ulos</p>
            <p className="font-urbanist text-[26px] absolute top-[557px] left-[41px] lg:text-[32px] lg:top-[286px] lg:left-[77px] font-medium">Batak, Sumatra Utara, Indonesia</p>
            <p className="font-urbanist text-[16px] absolute top-[642px] left-[41px] mt-[23px] w-[280px] lg:top-[359px] lg:left-[77px] lg:text-2xl lg:w-[585px] ">
              Chef Internasional tertarik dengan makanan Indonesia, terutama makanan khas Bali yang kaya rempah-rempah. Mereka memuji bahan dasar lokal dan mempelajari bumbu dasar seperti merah, kuning, oranye, dan sambal{' '}
            </p>
            <div className="flex flex-row gap-[41px]">
              <div>
                <img src={kebaya} alt="" className="absolute top-[900px] left-[18px] w-[161px] h-[70px] lg:w-[393px] lg:h-[137px] lg:top-[642px] lg:left-[77px]" />
                <p className="font-urbanist text-white text-base lg:text-[40px] font-semibold absolute top-[925px] lg:top-[687px] lg:left-[208px]">Kebaya</p>
              </div>
              <div>
                <img src={payasAgung} alt="" className="w-[161px] h-[70px] right-[18px] absolute top-[900px] lg:w-[393px] lg:h-[137px] lg:top-[642px] lg:left-[511px]" />
                <p className="font-urbanist text-white text-base lg:text-[40px] font-semibold absolute top-[925px] right-[51px] lg:top-[687px] lg:left-[592px]">Payas Agung</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[146px] left-[41px] lg:top-[186px] lg:left-[944px]">
            <img src={ulos} alt="" className="w-[279px] h-[336px] object-cover rounded-[50px] lg:w-[420px] lg:h-[606px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClothDetailWorld;
