import React, { useEffect } from "react";
import {
  weaponCollection1,
  weaponCollection2,
  weaponCollection3,
  weaponCollection4,
  weaponCollection5,
  weaponCollection6,
  weaponCollection7,
} from "../../../utils/images.js";
import { wavesDown, wavesTop } from "../../../utils/icon.js";
import { useResponsive } from "../../../hooks/useResponsive.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function CollectionWeaponComponent() {
  const isMobile = useResponsive(640);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className=" w-screen bg-white flex flex-col items-center mb-16 lg:mb-32 px-[20px] lg:px-[96px] text-primaryText">
      {isMobile ? (
        <>
          <HeadingSection />
          <ImageSection />
        </>
      ) : (
        <>
          <HeadingSectionDesktop />
          <ImageSectionDesktop />
        </>
      )}
    </div>
  );
}

export default CollectionWeaponComponent;

function HeadingSection() {
  const { t } = useTranslation();
  return (
    <>
      <h1
        data-aos="fade-up"
        className="font-milonga text-[36px] text-center mb-6"
      >
        {t("traditionalWeaponCollMobile")}
      </h1>
      <p data-aos="fade-up" className="font-urbanist text-base mb-10">
        {t("traditionalWeaponCollDesc")}
      </p>
    </>
  );
}

function HeadingSectionDesktop() {
  const { t } = useTranslation();
  return (
    <div className="h-[40vh] w-full relative flex flex-col items-center mb-10">
      <div className="w-full h-full absolute">
        <img className="absolute top-0 left-0" src={wavesTop} alt="Waves Top" />
        <img
          className="absolute right-0 bottom-0"
          src={wavesDown}
          alt="Waves Down"
        />
      </div>
      <div className="font-milonga text-[72px] text-center mb-6">
        <h1 data-aos="fade-up">{t("traditionalWeaponColl")}</h1>
        <h1 data-aos="fade-up">{t("traditionalWeaponCollection")}</h1>
      </div>

      <p data-aos="fade-up" className="font-urbanist text-xl mb-10">
        {t("traditionalWeaponCollDesc")}
      </p>
    </div>
  );
}

function ImageSection() {
  return (
    <div data-aos="fade-up" className="flex w-full h-[40vh] gap-2">
      <div className="flex flex-col w-1/3 gap-2">
        <img
          className="h-1/2 object-cover rounded-xl"
          src={weaponCollection1}
          alt="Weapon Collection 1"
        />
        <img
          className="h-1/2 object-cover rounded-xl"
          src={weaponCollection2}
          alt="Weapon Collection 2"
        />
      </div>
      <img
        className="w-1/3 object-cover rounded-xl"
        src={weaponCollection3}
        alt="Weapon Collection 3"
      />
      <div className="flex flex-col w-1/3 gap-2">
        <img
          className="h-1/2 object-cover rounded-xl"
          src={weaponCollection4}
          alt="Weapon Collection 4"
        />
        <img
          className="h-1/2 object-cover rounded-xl"
          src={weaponCollection5}
          alt="Weapon Collection 5"
        />
      </div>
    </div>
  );
}

function ImageSectionDesktop() {
  return (
    <div
      data-aos="fade-up"
      className="flex w-full h-[60vh] gap-4 items-center justify-center"
    >
      <div className="w-1/6 h-full flex flex-col">
        <div className="h-2 w-full bg-primaryText rounded"></div>
        <div className="h-1/3"></div>
        <img
          className=" h-1/2 object-cover rounded-xl"
          src={weaponCollection1}
          alt="Weapon Collection 6"
        />
      </div>

      <div className="w-1/6 h-full flex flex-col gap-4 pb-8">
        <img
          className="h-1/2 object-cover rounded-xl"
          src={weaponCollection4}
          alt="Weapon Collection 1"
        />
        <img
          className="h-1/2 object-cover rounded-xl"
          src={weaponCollection2}
          alt="Weapon Collection 2"
        />
      </div>

      <img
        className="w-1/5 h-full object-cover rounded-xl "
        src={weaponCollection3}
        alt="Weapon Collection 3"
      />

      <div className="w-1/6 h-full flex flex-col gap-4 pt-8">
        <img
          className="h-1/2 object-cover rounded-xl"
          src={weaponCollection5}
          alt="Weapon Collection 4"
        />
        <img
          className="h-1/2 object-cover rounded-xl"
          src={weaponCollection6}
          alt="Weapon Collection 5"
        />
      </div>

      <div className="w-1/6 h-full flex flex-col justify-center items-end ">
        <img
          className="h-1/2 object-cover rounded-xl mb-10"
          src={weaponCollection7}
          alt="Weapon Collection 7"
        />
        <div className="h-2 w-1/2 bg-primaryText rounded-xl"></div>
      </div>
    </div>
  );
}
