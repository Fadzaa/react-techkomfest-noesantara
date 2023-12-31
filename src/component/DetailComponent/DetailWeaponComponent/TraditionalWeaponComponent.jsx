import React, { useEffect } from "react";
import { traditionalWeapon } from "../../../utils/images.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function TraditionalWeaponComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="w-screen bg-white px-11 py-10 mt-10 mb-24 lg:ps-32 lg:px-0 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
      <ImageExplanation />
      <TextExplanation />
    </div>
  );
}

export default TraditionalWeaponComponent;

function TextExplanation() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col lg:w-[45vw] lg:py-10 lg:justify-center">
      <h1
        data-aos="fade-right"
        className="font-milonga font-light text-primary text-3xl lg:text-[80px] mt-[30px] mb-4 lg:leading-normal lg:whitespace-pre-line lg:mb-10"
      >
        {t("traditionalWeapon")}
      </h1>
      <p
        data-aos="fade-right"
        className="font-urbanist font-normal text-primaryText text-lg lg:text-2xl leading-9 tracking-wide lg:leading-10 lg:w-[35vw]"
      >
        {t("traditionalWeaponDesc")}
      </p>
    </div>
  );
}

function ImageExplanation() {
  return (
    <div className="w-[360px] h-[532px] bg-[#FAF8ED] rounded-[80px] lg:rounded-full flex justify-center items-center lg:w-[50vw] lg:h-[85vh]">
      <img
        data-aos="fade-left"
        className="w-4/5 h-4/5 object-cover rounded-full "
        src={traditionalWeapon}
        alt="People Opinion about Indonesian Traditional Food"
      />
    </div>
  );
}
