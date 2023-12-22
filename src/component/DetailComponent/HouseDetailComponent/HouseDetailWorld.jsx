import React from 'react';
import { cardHouse1, mbaruNiang } from '../../../utils/images';

const HouseDetailWorld = () => {
  return (
    <div className=" mx-auto bg-GreenWhite">
      <h1 className="font-milonga text-primary text-4xl py-8 text-center">World's Record</h1>
      <div className='flex flex-col md:flex-row w-[287px]' >
        <img src={mbaruNiang} alt="mbaruNiang" className="w-full h-[359px] object-cover rounded-[20px]" />
        <div className="">
          <h1 className="font-urbanist font-bold text-[30px] py-5">Rumah adat Mbaru Niang</h1>
          <p className="font-urbanist text-[18px] font-semibold">Nusa Tenggara Timur, Indonesia</p>
          <p className="font-urbanist text-base py-6 ">
            Rumah adat Mbaru Niang adalah rumah adat suku Manggarai yang terletak di Kampung Adat Wae Rebo, Kabupaten Manggarai Barat, Nusa Tenggara Timur. Rumah ini merupakan salah satu rumah adat tertinggi di Indonesia, dengan ketinggian
            mencapai 15 meter
          </p>
          <p className="font-urbanist text-base py-3">Berikut adalah beberapa rprestasi yang telah diraih oleh rumah adat Mbaru Niang:</p>
          <ul className="font-urbanist text-base list-disc list-inside pb-[64px]">
            <li>Dinobatkan sebagai salah satu situs warisan dunia oleh UNESCO pada tahun 2012.</li>
            <li>Menjadi salah satu destinasi wisata populer di Nusa Tenggara Timur.</li>
            <li>Menjadi sumber inspirasi bagi para desainer dan arsitek.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HouseDetailWorld;
