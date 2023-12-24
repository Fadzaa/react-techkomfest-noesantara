import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  cultureClothes,
  cultureFood,
  cultureHouse,
  cultureWeapon,
} from "../../../utils/images.js";
import CultureCard from "../../../global_component/CultureCard.jsx";
import { useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next";

function LandingComponentCulture() {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of AOS animations (in milliseconds)
    });
  }, []);

  const cards = [
    { title: t('food'), image: cultureFood, path: "/food" },
    { title: t('clothes'), image: cultureClothes, path: "/clothes" },
    { title: t('weapon'), image: cultureWeapon, path: "/weapon" },
    { title: t('house'), image: cultureHouse, path: "/house" },
  ];

  const navigate = useNavigate();

  const handleNavigate = (title) => {
    navigate(`${title.toLowerCase()}`);
    window.scrollTo(0, 0);
  };

  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="w-screen lg:h-screen bg-white  flex flex-col items-start  py-4 px-8 md:flex md:flex-row md:py-24 md:px-36 md:justify-between md:items-center">
      <div>
        <h1
          className="font-milonga text-primary text-[40px] lg:text-[84px]"
          data-aos="fade-up"
        >
          {t('culture')}
        </h1>
        <h3
          className="font-yiBaiti tracking-widest text-primaryText  mb-3 ps-1 mt-[-5px] lg:mb-10 lg:ps-3 lg:mt-[-15px]"
          data-aos="fade-up"
        >
          INDONESIAN CULTURES
        </h3>
        <p
          className="font-urbanist font-normal text-primaryText  text-xs leading-6 ps-1 lg:ps-3 lg:text-2xl  lg:leading-9 lg:w-96 "
          data-aos="fade-up"
        >
          {t('cultureDescription')}
        </p>
      </div>

      <div className="flex mt-7 lg:ms-11 " data-aos="fade-up">
        {cards.map((card, index) => (
          <CultureCard
            key={index}
            image={card.image}
            title={card.title}
            onClick={() => handleNavigate(card.path)}
            isActive={index === activeCard}
            onHover={() => handleCardHover(index)}
            data-aos="fade-up"
          />
        ))}
      </div>
    </div>
  );
}

export default LandingComponentCulture;
