import React from 'react';
import { mbaruNiang, mbaruNiang2 } from '../../utils/images';

const HouseDetailWorld = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 w-screen h-screen relative bg-GreenWhite">
      <div className="pt-[41px]">
        <p className="font-milonga text-4xl lg:text-8xl text-center lg:absolute lg:right-[390px] lg:top-3 text-primary">World’s Record</p>
        <div>
          <img src={mbaruNiang2} alt="" className="hidden lg:absolute lg:block lg:top-0 lg:left-0 lg:opacity-50+ lg:w-[291px] h-[1026px] lg:object-cover" />
          <div className="hidden lg:bg-primary lg:absolute lg:block lg:top-0 lg:left-0 lg:opacity-50 lg:w-[291px] lg:h-[1026px] "></div>
          <img src={mbaruNiang} alt="" className="w-[261px] h-[360px] object-cover rounded-[20px] mt-6 lg:w-[473px] lg:h-[650px] lg:absolute lg:top-[277px] lg:left-[60px] " />
        </div>
        <div className=" lg:absolute lg:right-[233px] lg:top-[258px]">
          <p className="font-urbanist font-bold text-[30px] w-[283px] mt-5 lg:text-[52px] lg:w-[603px] lg:font-semibold">Rumah adat Mbaru Niang</p>
          <p className="font-urbanist font-semibold text-lg text-[#252525] mt-1 lg:text-[28px] lg:mt-0 ">Nusa Tenggara Timur, Indonesia</p>
        </div>
        <div className="lg:absolute top-[380px] lg:right-[73px]">
          <p className="font-urbanist text-base mt-2 lg:text-[32px] lg:mt-6 lg:w-[763px] lg:leading-10">
            Rumah adat Mbaru Niang adalah rumah adat suku Manggarai yang terletak di Kampung Adat Wae Rebo, Kabupaten Manggarai Barat, Nusa Tenggara Timur. Rumah ini merupakan salah satu rumah adat tertinggi di Indonesia, dengan ketinggian
            mencapai 15 meter.
          </p>
          <p className="font-urbanist text-base mt-1 lg:text-[32px] lg:mt-6 lg:w-[763px] lg:leading-10">Berikut adalah beberapa prestasi yang telah diraih oleh rumah adat Mbaru Niang:</p>
          <ul className="font-urbanist text-base mt-1  lg:text-[32px] lg:mt-6 lg:w-[763px] lg:leading-10 list-disc list-inside">
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
