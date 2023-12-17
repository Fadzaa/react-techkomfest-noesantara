import React from 'react';
import { kebaya, payasAgung, ulos } from '../../utils/images';

const ClothDetailWorld = () => {
  return (
    <>
      <div className="relative">
        <p className="font-milonga text-primary text-[64px] text-center pt-[50px]">World's Record</p>
        <div className='flex flex-row gap-[40px]'>
          <div className="flex flex-col mt-[71px] pl-[77px]">
            <p className="font-milonga text-[80px]">Ulos</p>
            <p className="font-urbanist text-[32px] font-medium">Batak, Sumatra Utara, Indonesia</p>
            <p className="font-urbanist text-2xl w-[585px] mt-[35px]">
              Chef Internasional tertarik dengan makanan Indonesia, terutama makanan khas Bali yang kaya rempah-rempah. Mereka memuji bahan dasar lokal dan mempelajari bumbu dasar seperti merah, kuning, oranye, dan sambal{' '}
            </p>
            <div className="flex flex-row gap-[41px]">
              <div>
                <img src={kebaya} alt="" className="mt-[73px]" />
                <p className="font-urbanist text-white text-[40px] font-semibold absolute top-[687px] left-[208px]">Kebaya</p>
              </div>
              <div>
                <img src={payasAgung} alt="" className="mt-[73px]" />
                <p className="font-urbanist text-white text-[40px] font-semibold absolute top-[687px] left-[592px]">Payas Agung</p>
              </div>
            </div>
          </div>
          <div className='mt-[71px]'>
            <img src={ulos} alt="" className="w-[420px] h-[606px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClothDetailWorld;
