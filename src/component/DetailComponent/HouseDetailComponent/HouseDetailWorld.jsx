import React, { useEffect } from "react";
import { mbaruNiang } from "../../../utils/images";
import AOS from "aos";

const HouseDetailWorld = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className=" bg-GreenWhite w-screen px-8 relative">
      <h1
        data-aos="fade-up"
        className="font-milonga text-primary text-4xl py-8 text-center lg:text-5xl"
      >
        World's Record
      </h1>
      <div className="flex flex-col md:flex-row w-[287px  mx-auto md:gap-8  ">
        <img
          src={mbaruNiang}
          alt="mbaruNiang"
          className="w-full h-[359px] lg:w-[473px] lg:h-[650px] md:w-[423px] md:h-[600px] object-cover rounded-[20px]"
          data-aos="fade-right"
        />
        <div>
          <h1
            data-aos="fade-up"
            className="font-urbanist font-bold text-[30px] lg:text-4xl py-5 lg:py-2"
          >
            Rumah adat Mbaru Niang
          </h1>
          <p
            data-aos="fade-up"
            className="font-urbanist text-[18px] font-semibold lg:text-2xl"
          >
            Nusa Tenggara Timur, Indonesia
          </p>
          <p
            data-aos="fade-up"
            className="font-urbanist text-base py-6 lg:text-xl"
          >
            Rumah adat Mbaru Niang adalah rumah adat suku Manggarai yang
            terletak di Kampung Adat Wae Rebo, Kabupaten Manggarai Barat, Nusa
            Tenggara Timur. Rumah ini merupakan salah satu rumah adat tertinggi
            di Indonesia, dengan ketinggian mencapai 15 meter
          </p>
          <p
            data-aos="fade-up"
            className="font-urbanist text-base py-3 lg:text-xl"
          >
            Berikut adalah beberapa rprestasi yang telah diraih oleh rumah adat
            Mbaru Niang:
          </p>
          <ul
            data-aos="fade-up"
            className="font-urbanist text-base list-disc list-inside pb-[64px] lg:text-xl"
          >
            <li>
              Dinobatkan sebagai salah satu situs warisan dunia oleh UNESCO pada
              tahun 2012.
            </li>
            <li>
              Menjadi salah satu destinasi wisata populer di Nusa Tenggara
              Timur.
            </li>
            <li>Menjadi sumber inspirasi bagi para desainer dan arsitek.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HouseDetailWorld;
