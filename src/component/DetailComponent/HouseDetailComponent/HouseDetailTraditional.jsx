import React, { useEffect } from "react";
import { cardHouse1, cardHouse2 } from "../../../utils/images";
import AOS from "aos";

const HouseDetailTraditional = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="h-full ">
      <div className="w-screen relative py-[107px] px-5 flex flex-col-reverse lg:px-20 md:flex-row gap-4 lg:gap-10 justify-center  ">
        <div className="flex flex-col gap-3 lg:gap-24">
          <div
            data-aos="fade-right"
            className="font-milonga text-4xl  lg:text-[80px] lg:space-y-16 lg:w-[692px]"
          >
            <h1>What is</h1>
            <h1 className="text-primary ">Traditional House?</h1>
          </div>
          <p
            data-aos="fade-right"
            className="font-urbanist text-lg tracking-wide lg:text-2xl lg:w-[550px] w-full"
          >
            Rumah adat adalah rumah tradisional yang dibangun dengan cara yang
            sama dari generasi ke generasi dan tanpa atau sedikit sekali
            mengalami perubahan. Rumah adat merupakan bagian dari budaya dan
            identitas suatu masyarakat.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="relative flex flex-row w-full lg:w-[524px] md:w-[524px] sm:w-[474px] justify-center items-center"
        >
          <img src={cardHouse1} alt="" className=" w-full" />
          <img
            src={cardHouse2}
            alt=""
            className="absolute -left-5 -bottom-5 lg:w-[241px] md-[241px] sm:w-[191px]"
          />
        </div>
      </div>
    </div>
  );
};
export default HouseDetailTraditional;
