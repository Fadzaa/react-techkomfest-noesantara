import React, { useEffect } from "react";
import { traditionalFood } from "../../../utils/images.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function DetailTraditionalFood() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="w-screen flex flex-col-reverse lg:h-screen lg:flex lg:flex-row">
      <div className=" lg:w-2/5 h-full bg-primary flex flex-col justify-center py-10 px-10 lg:px-16">
        <div
          data-aos="fade-right"
          className="font-milonga text-white text-[32px] lg:text-[54px] mb-10"
        >
          <h1>{t("traditionalFoodWhat")}</h1>
          <h1>{t("traditionalFoodWhatis")}</h1>
        </div>
        <p
          data-aos="fade-right"
          className="font-urbanist text-white text-lg lg:text-xl leading-9"
        >
          {t("traditionalFoodDesc")}
        </p>
      </div>
      <img
        className="w-full lg:w-3/5 h-screen lg:h-full object-cover"
        src={traditionalFood}
        alt="Traditional Food Background Image"
      />
    </div>
  );
}

export default DetailTraditionalFood;
