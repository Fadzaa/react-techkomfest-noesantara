import React, { useEffect, useState } from "react";
import {
  foodGudeg,
  foodGudegDesktop,
  foodRendang,
  foodRendangDesktop,
  foodSatai,
  foodSataiDesktop,
  foodTempe,
  foodTempeDesktop,
} from "../../../utils/images.js";
import { iconThropy } from "../../../utils/icon.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function DetailWorldRecord() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 640;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  const { t } = useTranslation();
  const worldRecordDesktop = (
    <>
      <div data-aos="fade-up" className="relative h-[50vh] w-full">
        <img
          className="absolute h-full w-full"
          src={foodRendangDesktop}
          alt="Test"
        />
        <div className="absolute w-full h-full px-8 py-4 flex flex-col ">
          <div className=" flex flex-col items-end mb-9">
            <h1 className="font-milonga text-white text-[64px]">Rendang</h1>
            <h1 className="font-urbanist font-semibold text-white text-lg">
              Minangkabau, Sumatra barat, Indonesia
            </h1>
          </div>
          <div className="flex items-end">
            <img
              className="mb-7 me-2"
              src={iconThropy}
              alt="Icon Thropy Desktop"
            />
            <h1 className=" font-urbanist font-semibold text-lg text-white rotate-[5deg] mb-1 ">
              The World's Most Delicious Food by CNN International in 2011,
              2017, and 2022.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[448px]">
        <div data-aos="fade-down-right" className="w-1/3 mt-[-90px] relative ">
          <img
            className="absolute h-full w-full"
            src={foodSataiDesktop}
            alt=""
          />
          <div className="absolute h-full w-full py-10 px-8 flex flex-col justify-between">
            <div className="flex rotate-6 mt-3">
              <img className="me-4" src={iconThropy} alt="Icon Thropy" />
              <h3 className="font-urbanist font-semibold text-white text-base ">
                Makanan Terpopuler di Dunia oleh TasteAtlas 2019
              </h3>
            </div>
            <div>
              <h1 className="font-milonga text-white text-[36px]">Satai</h1>
              <h1 className="font-urbanist font-semibold text-white text-xl">
                Ponorogo, Jawa Timur, Indonesia
              </h1>
            </div>
          </div>
        </div>

        <div data-aos="fade-down-right" className="w-1/3 mt-[-35px] relative ">
          <img
            className="absolute h-full w-full"
            src={foodGudegDesktop}
            alt=""
          />
          <div className="absolute h-full w-full py-10 px-8 flex flex-col justify-between">
            <div className="flex rotate-6 mt-3 ps-10">
              <img className="me-4" src={iconThropy} alt="Icon Thropy" />
              <h3 className="font-urbanist font-semibold text-white text-base ">
                Makanan Terlezat Di Asia oleh CNN International 2016
              </h3>
            </div>
            <div>
              <h1 className="font-milonga text-white text-[36px]">Gudeg</h1>
              <h1 className="font-urbanist font-semibold text-white text-xl">
                Yogyakarta, DIY, Indonesia
              </h1>
            </div>
          </div>
        </div>

        <div data-aos="fade-down-right" className="w-1/3 mt-3 relative">
          <img
            className="absolute h-full w-full"
            src={foodTempeDesktop}
            alt=""
          />
          <div className="absolute h-full w-full py-10 px-8 flex flex-col justify-between">
            <div className="flex rotate-6 mt-3 ps-10">
              <img className="me-4" src={iconThropy} alt="Icon Thropy" />
              <h3 className="font-urbanist font-semibold text-white text-base ">
                Makanan Tersehat Di Dunia oleh CNN International 2019
              </h3>
            </div>
            <div>
              <h1 className="font-milonga text-white text-[36px]">Tempe</h1>
              <h1 className="font-urbanist font-semibold text-white text-xl">
                Jawa Tengah, Indonesia
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const worldRecordMobile = (
    <>
      <FoodCard
        image={foodRendang}
        name={"Rendang"}
        place={"Minangkabau, Sumatra barat,"}
        award={
          "The World's Most Delicious Food by CNN International in 2011, 2017, and 2022."
        }
      />
      <FoodCard
        image={foodSatai}
        name={"Satai"}
        place={"Ponorogo, Jawa Timur, "}
        award={"Makanan Terpopuler di Dunia oleh TasteAtlas 2019"}
      />
      <FoodCard
        image={foodGudeg}
        name={"Gudeg"}
        place={"Yogyakarta, DIY,"}
        award={"Makanan Terlezat di Asia oleh CNN International 2016"}
      />
      <FoodCard
        image={foodTempe}
        name={"Tempe"}
        place={"Jawa Tengah,"}
        award={"Makanan Tersehat di Dunia oleh CNN International 2019"}
      />
    </>
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="w-screen  flex flex-col items-center p-8 lg:p-20">
      <h1
        data-aos="fade-up"
        className="font-milonga text-4xl lg:text-[96px] text-primary mb-4 lg:mb-10"
      >
        {t("worldRecord")}
      </h1>
      <p
        data-aos="fade-up"
        className="font-urbanist text-base lg:text-2xl text-primaryText text-center leading-8 mb-6"
      >
        {t("worldRecordDesc")}
      </p>
      {width < breakpoint ? worldRecordMobile : worldRecordDesktop}
    </div>
  );
}

export default DetailWorldRecord;

function FoodCard({image, place, name, award}) {
  return (
    <div className="w-full h-[140px]  relative rounded-xl overflow-hidden mb-6">
      <img
        className="absolute w-full h-full object-cover"
        src={image}
        alt="Makanan Rendang"
      />
      <div className="absolute h-full p-4 pb-2 flex flex-col justify-between">
        <div>
          <h1 className="font-milonga text-lg text-white">{name}</h1>
          <div className="font-urbanist font-medium text-xs text-white">
            <h3>{place}</h3>
            <h3>Indonesia</h3>
          </div>
        </div>
        <div className="flex">
          <img className="w-5 me-2" src={iconThropy} alt="Icon Thropy" />
          <p className="font-urbanist font-medium text-white text-[10px]">
            {award}
          </p>
        </div>
      </div>
    </div>
  );
}
