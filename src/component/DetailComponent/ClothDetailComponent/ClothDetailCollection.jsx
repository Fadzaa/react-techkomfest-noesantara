import React from 'react';
import Slider from "react-slick";
import {foodGudeg, foodRendang, foodSatai, foodTempe} from "../../../utils/images.js";

const ClothDetailCollection = () => {
    const settings = {
        className: "",
        centerMode: false,
        infinite: true,

        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500
    };

    const cardList = [
        {
            title: 'Card 1',
            description: 'This is the first card.',
            imageUrl: foodRendang,
        },
        {
            title: 'Card 2',
            description: 'This is the second card.',
            imageUrl: foodGudeg,
        },
        {
            title: 'Card 3',
            description: 'This is the third card.',
            imageUrl: foodSatai,
        },
        {
            title: 'Card 3',
            description: 'This is the third card.',
            imageUrl: foodTempe,
        },
        {
            title: 'Card 3',
            description: 'This is the third card.',
            imageUrl: foodRendang,
        },
        {
            title: 'Card 3',
            description: 'This is the third card.',
            imageUrl: foodRendang,
        },
        {
            title: 'Card 3',
            description: 'This is the third card.',
            imageUrl: foodRendang,
        },
        // Add more cards as needed
    ];
  return (
    <>
      <div className="bg-GreenWhite w-screen h-screen">
        <div>
          <p className="w-[905px] font-milonga text-primary text-[64px] pt-[53px] ml-[268px] text-center">Best Collection Of Traditional Clothes</p>

            <Slider   {...settings}>
                {cardList.map((card, index) => (
                    <div>
                        <h1>{index}</h1>
                    </div>
                ))}
            </Slider>
        </div>
      </div>
    </>
  );
};

export default ClothDetailCollection;
