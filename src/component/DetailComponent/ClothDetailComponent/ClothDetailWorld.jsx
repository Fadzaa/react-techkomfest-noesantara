import React, { useEffect, useState } from "react";
import { kebaya, payasAgung, ulos } from "../../../utils/images.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const ClothDetailWorld = () => {
  const { t } = useTranslation();
  const [selectedCloth, setSelectedCloth] = useState({
    image: ulos,
    title: "Ulos",
    description: t("ulosDesc"),
    origin: "Batak, Sumatra Utara, Indonesia",
  });

  const handleImageClick = (image, title, description, origin) => {
    setSelectedCloth({
      image,
      title,
      description,
      origin,
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="mb-10">
        <h1
          data-aos="fade-up"
          className="text-primary text-[36px] lg:text-[64px] text-center font-milonga"
        >
          World's Record
        </h1>
        <div className="flex flex-col items-center mt-12 w-[279px] mx-auto lg:flex-row-reverse justify-center lg:gap-10 lg:w-[1287px] ">
          <img
            data-aos="fade-left"
            className="w-full h-[336px] object-cover rounded-[50px] lg:w-[420px] lg:h-[606px] md:w-[370px] md:h-[370px] "
            src={selectedCloth.image}
            alt={selectedCloth.title}
          />
          <div>
            <div>
              <div>
                <div className="text-left flex flex-col pt-3">
                  <h1
                    data-aos="fade-up"
                    className="text-[36px] font-milonga lg:text-[80px]"
                  >
                    {selectedCloth.title}
                  </h1>
                  <h2
                    data-aos="fade-up"
                    className="text-[26px] font-urbanist font-medium "
                  >
                    {selectedCloth.origin}
                  </h2>
                </div>
                <p
                  data-aos="fade-up"
                  className="font-urbanist text-base pt-4 lg:text-[24px] lg:tracking-wide lg:leading-8"
                >
                  {selectedCloth.description}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center mt-8 gap-2 lg:gap-6">
              <div
                data-aos="fade-up"
                className="w-[161px] h-[70px] relative lg:w-[393px] lg:h-[137px]"
                onClick={() =>
                  handleImageClick(
                    kebaya,
                    "Kebaya",
                    t("kebayaDesc"),
                    "Jawa Tengah, Indonesia",
                  )
                }
              >
                <img
                  className="h-full w-full object-cover  rounded-xl  "
                  src={kebaya}
                  alt="Kebaya"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black opacity-50  rounded-xl"></div>
                  <h1 className="relative z-10 text-white text-center font-urbanist text-[16px] font-semibold lg:text-[40px]">
                    Kebaya
                  </h1>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="w-[161px] h-[70px] relative lg:w-[393px] lg:h-[137px]"
                onClick={() =>
                  handleImageClick(
                    payasAgung,
                    "Payas Agung",
                    t("payasDesc"),
                    "Bali, Indonesia",
                  )
                }
              >
                <img
                  className="h-full w-full object-cover  rounded-xl  "
                  src={payasAgung}
                  alt="Payas Agung"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black opacity-50  rounded-xl"></div>
                  <h1 className="relative z-10 text-white text-center font-urbanist text-[16px] font-semibold lg:text-[40px]">
                    Payas Agung
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClothDetailWorld;
