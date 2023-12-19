import React from 'react';
import { cardHouse } from '../../../utils/images.js';

const HouseDetailTraditional = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:relative'>
      <div>
        <div className='font-milonga text-4xl mt-[107px] lg:text-[80px] lg:absolute lg:top-[187px] lg:left-[116px]'>
          <p>What is</p>
          <p className='text-primary lg:mt-10'>Traditional House?</p>
        </div>
        <img src={cardHouse} alt="" className='mt-[29px] lg:w-[655px] lg:absolute lg:top-[187px] lg:right-[61px]' />
        <p className='font-urbanist text-lg w-[319px] mt-6 lg:text-[32px] lg:w-[594px] lg:absolute lg:top-[476px] lg:left-[116px] lg:leading-10'>Rumah adat adalah rumah tradisional yang dibangun dengan cara yang sama dari generasi ke generasi dan tanpa atau sedikit sekali mengalami perubahan. Rumah adat merupakan bagian dari budaya dan identitas suatu masyarakat.</p>
      </div>
    </div>
  );
};

export default HouseDetailTraditional;
