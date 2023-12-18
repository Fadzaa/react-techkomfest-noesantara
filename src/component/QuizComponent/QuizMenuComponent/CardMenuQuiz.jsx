import React, { useState } from "react";
import {
  clothesMenu,
  foodMenu,
  houseMenu,
  weaponMenu,
} from "../../../utils/images";

const categories = [
  { image: foodMenu, title: "Traditional Food" },
  { image: clothesMenu, title: "Traditional Clothes" },
  { image: weaponMenu, title: "Traditional Weapon" },
  { image: houseMenu, title: "Traditional House" },
];

const CardMenuQuiz = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (index) => {
    if (selectedCategories.includes(index)) {
      // Deselect category
      setSelectedCategories(selectedCategories.filter((i) => i !== index));
    } else {
      // Select category
      setSelectedCategories([...selectedCategories, index]);
    }
  };

  return (
    <div className="flex relative mt-8">
      <div className="mx-auto flex-col items-center relative">
        <div className="font-urbanist absolute left-4 top-0">
          <h1 className="font-semibold text-md md:text-lg lg:text-2xl">
            Choose your topic below
          </h1>
          <h3 className="font-regular text-sm md:text-md lg:text-lg">
            *You can choose more than 1 category
          </h3>
        </div>
        <div className="mt-14 lg:mt-24 flex flex-wrap gap-5 justify-center max-w-fit">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`w-[155px] h-[155px] lg:w-[310px] lg:h-[310px] md:w-[250px] md:h-[250px] sm:w-[180px] sm:h-[180px] border border-gray-300 rounded-2xl relative ${
                selectedCategories.includes(index) ? "border-primary" : ""
              }`}
              onClick={() => toggleCategory(index)}
            >
              <div className="absolute inset-0 flex flex-col items-center">
                <img
                  src={category.image}
                  alt=""
                  className="w-[115px] mx-auto lg:w-[310px] lg:h-[230px] md:w-[260px] md:h-[180px] sm:w-[210px] sm:h-[130px]"
                />
                <h3
                  className={`font-milonga text-center pt-6 lg:text-[24px] md:text-[24px] ${
                    selectedCategories.includes(index) ? "text-primary" : ""
                  }`}
                >
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <button className="absolute -bottom-32 right-2 bg-white border border-primary rounded-full text-primary text-[16px] px-[40px] py-[11px] lg:px-[75px] lg:py-[16px] lg:text-[20px] lg:right-0 hover:bg-primary hover:text-white ">
          Next
        </button>
      </div>
    </div>
  );
};

export default CardMenuQuiz;
