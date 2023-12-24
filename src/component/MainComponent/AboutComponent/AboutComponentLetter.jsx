import React, { useEffect, useState } from "react";
import {
  letterDecoration,
  letterDecorationmobile,
} from "../../../utils/images.js";
import AOS from "aos";
import {useTranslation} from "react-i18next";

const AboutComponentLetter = () => {
  const {t} = useTranslation();
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
          <p className="text-[38px] lg:text-[80px] text-primary">{t('letter')}</p>
          <p className="text-[28px] lg:text-[45px]">{t('fromOurTeams')}</p>
        </div>
        <div className="flex flex-col gap-2  lg:text-[28px] lg:gap-9 lg:leading-9 mt-7 mx-[30px] lg:mx-[80px] font-urbanist text-sm">
          <p data-aos="fade-up">
            {t('letterParagraph1')}
          </p>
          <p data-aos="fade-up">
            {t('letterParagraph2')}
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
