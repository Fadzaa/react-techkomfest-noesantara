import React, { useEffect } from "react";
import { mbaruNiang } from "../../../utils/images";
import AOS from "aos";
import { useTranslation } from "react-i18next";


const HouseDetailWorld = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const { t } = useTranslation();

  const achievementsList = t('achievementsListMbaru', { returnObjects: true });


  return (
    <div className=" bg-GreenWhite w-screen px-8 relative  py-12">
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
            {t("imageAltMbaru")}
          </h1>
          <p
            data-aos="fade-up"
            className="font-urbanist text-[18px] font-semibold lg:text-2xl"
          >
            {t("locationMbaru")}
          </p>
          <p
            data-aos="fade-up"
            className="font-urbanist text-base py-6 lg:text-xl"
          >
            {t("descriptionMbaru")}
          </p>
          <p
            data-aos="fade-up"
            className="font-urbanist text-base py-3 lg:text-xl"
          >
            {t("achievementsTitleMbaru")}
          </p>
          <ul
            data-aos="fade-up"
            className="font-urbanist text-base list-disc list-inside pb-[64px] lg:text-xl"
          >
            {achievementsList.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HouseDetailWorld;
