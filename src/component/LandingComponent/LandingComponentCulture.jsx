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
    <div className="w-screen h-screen bg-white flex py-24 px-36 items-center justify-between">
      <div>
        <h1 className="font-milonga text-primary text-[84px]">Culture</h1>
        <h3 className="font-yiBaiti tracking-widest text-primaryText mb-10 ps-3 mt-[-15px]">
          INDONESIA CULTURES
        </h3>
        <p className="font-urbanist font-normal ps-3 text-2xl text-primaryText w-96 leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
          nec gravida ipsum pulvinar vel non.
        </p>
      </div>
      <div className="flex ms-16 justify-end">
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
