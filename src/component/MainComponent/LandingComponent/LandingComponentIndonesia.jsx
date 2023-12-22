import React from 'react';
import { indonesia1, indonesia2, rainbowShape } from '../../../utils/images.js';
import AOS from "aos";
import "aos/dist/aos.css";  

function LandingComponentIndonesia() {
  return (
    <>
      <div className="w-screen h-[784px] lg:h-[1024px] relative bg-GreenWhite flex mb-[54px] lg:py-24 lg:px-36 items-center mt-14">
        <div>
          <h1 className="font-milonga text-primary absolute top-[178px] left-[30px] lg:left-[120px] lg:top-[292px] text-[35px] lg:text-[84px]" data-aos="fade-up">Indonesia</h1>
          <h3 className="font-yiBaiti tracking-widest text-primaryText absolute top-[220px] left-[33px] text-xs lg:text-xl lg:mb-10  lg:mt-[-15px] lg:top-[420px] lg:left-[127px] " data-aos="fade-up">ABOUT INDONESIA</h3>
          <p className="font-urbanist font-normal md:w-[300px]  absolute text-xs w-[197px] top-[237px] left-[33px] lg:text-2xl text-primaryText lg:w-[595px] lg:top-[457px] lg:left-[125px] lg:leading-9" data-aos="fade-up">Indonesia, the magnificent archipelagic country, is known for its breathtaking natural beauty, diverse culture, and the friendliness of its people.</p>
          <div className="border border-primary p-6 absolute top-[335px] left-8 bg-white lg:top-[600px]  lg:left-[120px]  lg:p-6 mr-5 lg:mt-14">
            <div> 
              <p className="bg-primary text-left p-3 font-urbanist font-light italic text-xs lg:text-xl w-full sm:w-[300px] leading-[21px] lg:p-4 text-white lg:w-[839px]" data-aos="fade-up">
              "Indonesia, an enchanting tropical paradise, presents an indescribable natural beauty. From exotic islands with long stretches of white sandy beaches to majestic mountains that touch the sky, Indonesia offers a variety of captivating panoramas. Lush rainforests, tranquil lakes, and stunning coral reefs on the ocean floor all come together in a charming natural wealth. Combined with cultural diversity rooted in a long history, Indonesia is a destination that delights the eyes, celebrating the beauty of nature and an unparalleled cultural heritage."
              </p>
            </div>
          </div>
        </div>
        <div className="flex absolute top-0 gap-4 right-[30px] lg:gap-10 lg:right-[115px]">
          <img src={indonesia1} alt="image1" className="w-[90px] h-[165px] rounded-b-[30px] sm:w-[156px] sm:h-[307px] md:w-[206px] md:h-[477px] lg:w-[236px]  xl:w-[256px] xl:h-[527px] lg:rounded-b-[70px] object-cover" data-aos="fade-up" />
          <img src={indonesia2} alt="image2" className="w-[90px] h-[294px] rounded-b-[30px]  sm:w-[156px] sm:h-[640px] md:w-[206px] md:h-[690px] xl:w-[236px] xl:h-[710px] lg:rounded-b-[70px] object-cover" data-aos="fade-up"/>
        </div>
      </div>
    </>
  );
}

export default LandingComponentIndonesia;
