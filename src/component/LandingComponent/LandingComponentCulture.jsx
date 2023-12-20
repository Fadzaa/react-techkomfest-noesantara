import React, { useState } from "react";
import { cultureClothes, cultureFood, cultureHouse, cultureWeapon } from "../../utils/images";
import CultureCard from "../../global_component/CultureCard";

function LandingComponentCulture() {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    { title: "Food", image: cultureFood },
    { title: "Clothes", image: cultureClothes },
    { title: "Weapon", image: cultureWeapon },
    { title: "House", image: cultureHouse },
  ];

  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="w-screen lg:h-screen bg-white  flex flex-col items-start  py-4 px-8 md:flex md:flex-row md:py-24 md:px-36 md:justify-between md:items-center">
      <div>
        <h1 className="font-milonga text-primary text-[40px] lg:text-[84px]">
          Culture
        </h1>
        <h3 className="font-yiBaiti tracking-widest text-primaryText  mb-3 ps-1 mt-[-5px] lg:mb-10 lg:ps-3 lg:mt-[-15px]">
          INDONESIA CULTURES
        </h3>
        <p className="font-urbanist font-normal text-primaryText  text-xs leading-6 ps-1 lg:ps-3 lg:text-2xl  lg:leading-9 lg:w-96 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
          nec gravida ipsum pulvinar vel non.
        </p>
      </div>

      <div className="flex mt-7 lg:ms-11 ">
        {cards.map((card, index) => (
          <CultureCard
            key={index}
            image={card.image}
            title={card.title}
            isActive={index === activeCard}
            onHover={() => handleCardHover(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default LandingComponentCulture;
