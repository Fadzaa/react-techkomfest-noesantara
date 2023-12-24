import React, { useEffect } from "react";
import AOS from "aos";
import {useTranslation} from "react-i18next";

const AboutComponentMission = () => {
  const {t} = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="w-screen mb-12 lg:mb-24">
        <div className="flex flex-col pt-[42px]">
          <div
            data-aos="fade-right"
            className="flex flex-row font-milonga gap-2 text-[28px] lg:text-[64px] mx-[30px] lg:mx-[80px]"
          >
            <p className="text-primary">{t('ourMission')}</p>
          </div>
          <div className="bg-primary w-[272px] h-[5px] mt-[38px] lg:w-[887px] mx-[30px] lg:mx-[80px] lg:mt-2"></div>
          <div className="flex flex-col gap-4 mt-4 mx-[30px] lg:mx-[80px] lg:text-2xl lg:mt-[32px] lg:flex lg:flex-col lg:items-center">
            <div
              data-aos="fade-up"
              className="font-urbanist lg:flex lg:gap-[56px]"
            >
              <p className="text-base font-semibold lg:w-[320px] lg:text-2xl">
                {t('mission1')}
              </p>
              <p className="mt-1 lg:w-[905px]">
                {t('mission1Description')}
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="font-urbanist lg:flex lg:gap-[56px]"
            >
              <p className="text-base font-semibold lg:w-[320px] lg:text-2xl">
                {t('mission2')}
              </p>
              <p className="mt-1 lg:w-[905px]">
                {t('mission2Description')}
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="font-urbanist  lg:flex lg:gap-[56px]"
            >
              <p className="text-base font-semibold lg:w-[320px] lg:text-2xl">
                {t('mission3')}
              </p>
              <p className="mt-1 lg:w-[905px]">
                {t('mission3Description')}
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="font-urbanist  lg:flex lg:gap-[56px]"
            >
              <p className="text-base font-semibold lg:w-[320px] lg:text-2xl">
                {t('mission4')}
              </p>
              <p className="mt-1 lg:w-[905px]">
                {t('mission4Description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComponentMission;
