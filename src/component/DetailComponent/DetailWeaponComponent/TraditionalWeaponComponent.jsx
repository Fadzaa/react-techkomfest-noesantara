import React from 'react';
import {peopleFood, traditionalWeapon} from "../../../utils/images.js";

function TraditionalWeaponComponent() {
    return (
        <div
            className="w-screen h-screen bg-white px-11 py-10 lg:ps-32 lg:px-0 lg:flex lg:flex-row-reverse lg:justify-between">
            <ImageExplanation/>
            <TextExplanation/>
        </div>
    );
}

export default TraditionalWeaponComponent;

function TextExplanation() {
    return (
        <div className="flex flex-col lg:w-[45vw] lg:py-10 lg:justify-center">
            <h1 className="font-milonga font-light text-primary text-3xl lg:text-[80px] mt-[30px] mb-4 lg:leading-normal lg:whitespace-pre-line lg:mb-10">What
                Is Traditional Weapon?</h1>
            <p className="font-urbanist font-normal text-primaryText text-lg lg:text-2xl leading-9 tracking-wide lg:leading-10 lg:w-[35vw]">Chef
                Senjata adat Indonesia adalah senjata yang telah digunakan oleh masyarakat Indonesia sejak zaman dahulu. Senjata adat Indonesia memiliki berbagai macam bentuk dan fungsi, mulai dari senjata untuk berperang, berburu, hingga upacara adat. </p>
        </div>
    )
}

function ImageExplanation() {
    return (
        <div className="w-full h-[532px] bg-[#FAF8ED] rounded-[80px] lg:rounded-full flex justify-center items-center lg:w-[50vw] lg:h-full">
            <img className="w-4/5 h-4/5 object-cover rounded-full " src={traditionalWeapon}
                 alt="People Opinion about Indonesian Traditional Food"/>
        </div>
    )
}