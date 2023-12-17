import React from 'react';
import {bgHeroFood} from "../utils/images.js";
import {iconArrowDown} from "../utils/icon.js";
import Navbar from "./Navbar.jsx";

function DetailComponentHero({image, title, subtitle, description }) {
    return (
        <div className="w-screen h-screen relative">
            <Navbar/>
            <img className="absolute w-full h-full object-cover" src={image} alt="Background Hero Detail Food"/>
            <div className="absolute w-full h-full flex flex-col justify-center items-center">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="flex items-center">
                        <div className="w-6 h-[1px] bg-white"></div>
                        <h3 className="font-yiBaiti font-normal uppercase text-base lg:text-xl text-white tracking-widest mx-6">{subtitle}</h3>
                        <div className="w-6 h-[1px] bg-white"></div>
                    </div>
                    <h1 className="font-milonga text-white text-[38px] lg:text-[100px] my-5">{title}</h1>
                    <p className="font-urbanist font-light text-white text-center text-lg lg:text-[24px]">{description}</p>
                    <img className="h-[50px] mt-16" src={iconArrowDown} alt="Icon Arrow Down"/>
                </div>
            </div>
        </div>

    );
}

export default DetailComponentHero;