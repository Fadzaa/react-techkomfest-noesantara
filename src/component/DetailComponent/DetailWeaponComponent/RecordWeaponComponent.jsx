import React, { useEffect } from "react";
import {
  recordWeapon1,
  recordWeapon2,
  recordWeapon3,
} from "../../../utils/images.js";
import { rainbowShape } from "../../../utils/icon.js";
import AOS from "aos";
import { useTranslation } from "react-i18next";

function RecordWeaponComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const { t } = useTranslation();
  return (
    <div className="w-screen bg-[#FAF8ED] px-[40px] lg:px-[80px] py-10 lg:py-20 flex flex-col items-center relative">
      <h1
        data-aos="fade-up"
        className="font-milonga text-4xl lg:text-[80px] text-primary mb-10 lg:mb-28"
      >
        {t("worldRecord")}
      </h1>
      <div className="w-full flex flex-col-reverse justify-between lg:flex-row ">
        <div className="flex flex-col w-full mt-7 lg:w-1/2">
          <TextExplanation />
          <div className="h-8"></div>
          <CardExplanation />
        </div>
        <div className="w-[10vw]"></div>

        <div className="flex w-full lg:w-1/2 flex-col justify-between items-center ">
          <ImageSection />

          <img
            className="w-72 hidden lg:static lg:flex"
            src={rainbowShape}
            alt="Rainbow Shape"
          />
        </div>
      </div>
    </div>
  );
}

export default RecordWeaponComponent;

function TextExplanation() {
  const { t } = useTranslation();
  const textDescription = t("worldWeaponDesc");
  return (
    <div className="flex flex-col">
      <h1
        data-aos="fade-right"
        className="font-milonga text-[32px] lg:text-[54px] text-primaryText mb-3"
      >
        Keris
      </h1>
      <p
        data-aos="fade-right"
        className="font-urbanist text-primaryText text-base lg:text-[24px] leading-[45px]"
      >
        {textDescription}
      </p>
    </div>
  );
}

function CardExplanation() {
  const { t } = useTranslation();
  const listExplanation = [
    t("listExplanation1"),
    t("listExplanation2"),
    t("listExplanation3"),
    t("listExplanation4"),
  ];
  return (
    <div data-aos="fade-up" className="bg-primary rounded-xl py-4 px-3">
      <div className="flex flex-col">
        {listExplanation.map((item, index) => {
          return (
            <div key={index} className="flex mb-4">
              <div className="w-1 h-1 rounded-full bg-white me-4 mt-3"></div>
              <p className="font-urbanist font-light text-[16px] text-white w-full leading-7">
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ImageSection() {
  return (
    <div data-aos="fade-left" className="flex h-[70vh]">
      <img
        className="w-1/2 h-full rounded-xl shadow-xl  object-cover"
        src={recordWeapon1}
        alt="Record Weapon 1"
      />
      <div className="w-10"></div>
      <div className="flex flex-col">
        <img
          className="w-full h-1/2 rounded-xl shadow-xl object-cover"
          src={recordWeapon2}
          alt="Record Weapon 2"
        />
        <div className="h-10"></div>
        <img
          className="w-full h-1/2 rounded-xl shadow-xl object-cover"
          src={recordWeapon3}
          alt="Record Weapon 3"
        />
      </div>
    </div>
  );
}
