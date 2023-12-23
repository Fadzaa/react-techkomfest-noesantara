import React, { useEffect, useState } from "react";
import {
  letterDecoration,
  letterDecorationmobile,
} from "../../../utils/images.js";
import AOS from "aos";

const AboutComponentLetter = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedImage, setSelectedImage] = useState(
    windowWidth <= 360 ? letterDecorationmobile : letterDecoration,
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setSelectedImage(
        width <= 360 ? letterDecorationmobile : letterDecoration,
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="pt-[100px] relative mb-12 lg:mb-24">
        <div
          data-aos="fade-right"
          className="font-milonga mx-[30px] lg:mx-[80px]"
        >
          <p className="text-[38px] lg:text-[80px] text-primary">Letter</p>
          <p className="text-[28px] lg:text-[45px]">From Our Teams</p>
        </div>
        <div className="flex flex-col gap-2  lg:text-[28px] lg:gap-9 lg:leading-9 mt-7 mx-[30px] lg:mx-[80px] font-urbanist text-sm">
          <p data-aos="fade-up">
            Neosantara berkomitmen menjadi platform pendidikan teknologi
            terkemuka, menumbuhkan bakat digital berstandar global. Upaya kami
            didedikasikan untuk mempercepat kemajuan Indonesia menuju puncak
            dalam ranah digital.
          </p>
          <p data-aos="fade-up">
            Dalam semangat komitmen ini, kami mengundang Anda untuk menjelajahi
            Neosantara sebuah website digital yang menghidupkan kembali kekayaan
            budaya Indonesia melalui pengalaman inovatif dan mendalam. Temukan
            perpaduan tradisi dan teknologi, di mana masa lalu bertemu dengan
            masa depan digital. Bersama-sama, mari kita merayakan perpaduan
            tradisi dan teknologi, membuka jalan bagi kepemimpinan digital
            Indonesia.
          </p>
        </div>
        <img
          src={selectedImage}
          alt=""
          className="absolute right-0 top-[50px]"
        />
      </div>
    </>
  );
};

export default AboutComponentLetter;
