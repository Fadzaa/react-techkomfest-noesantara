import React from 'react';
import Slider from "react-slick";
import {foodGudeg, foodRendang, foodSatai, foodTempe} from "../../../utils/images.js";
import ClothDetailCardSlider from "./ClothDetailCardSlider.jsx";

const ClothDetailCollection = () => {
    const settings = {
        className: "",
        centerMode: false,
        infinite: true,

        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500
    };

  return (
    <>
      <div className="bg-GreenWhite w-screen h-[658px] lg:h-screen mx-auto">
        <div>
          <p className=" font-milonga text-primary lg:text-[64px] pt-[53px] text-[36px] text-center">Best Collection Of Traditional Clothes</p>

            <ClothDetailCardSlider/>
        </div>
      </div>
    </>
  );
};

export default ClothDetailCollection;
