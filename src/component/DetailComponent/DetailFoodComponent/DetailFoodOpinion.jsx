import React, { useEffect } from "react";
import { peopleFood } from "../../../utils/images.js";
import AOS from "aos";
import "aos/dist/aos.css";

function DetailFoodOpinion() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="w-screen  bg-[#FAF8ED] px-11 py-10 lg:px-32 lg:py-32 lg:flex lg:flex-row-reverse lg:justify-between">
      <img
        className="w-full lg:w-[429px] h-[532px] lg:h-[80vh] object-cover rounded-tl-[80px] rounded-br-[80px]"
        src={peopleFood}
        alt="People Opinion about Indonesian Traditional Food"
        data-aos="fade-up"
      />
      <div
        data-aos="fade-up"
        className="flex flex-col lg:w-[45%] lg:py-10 lg:justify-center"
      >
        <h1 className="font-milonga font-light text-primary text-3xl lg:text-[96px] mt-[30px] mb-4 lg:leading-normal lg:whitespace-pre-line lg:mb-10">
          What people say?
        </h1>
        <p className="font-urbanist font-normal text-primaryText text-lg lg:text-2xl leading-9 tracking-wide lg:leading-10">
          Chef Internasional tertarik dengan makanan Indonesia, terutama makanan
          khas Bali yang kaya rempah-rempah. Mereka memuji bahan dasar lokal dan
          mempelajari bumbu dasar seperti merah, kuning, oranye, dan sambal{" "}
        </p>
      </div>
    </div>
  );
}

export default DetailFoodOpinion;
