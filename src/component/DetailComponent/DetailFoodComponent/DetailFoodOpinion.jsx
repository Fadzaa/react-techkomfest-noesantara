import React from 'react';
import {peopleFood} from "../../../utils/images.js";

function DetailFoodOpinion() {
    return (
        <div className="w-screen h-screen bg-[#FAF8ED] px-11 py-10 lg:px-32 lg:flex lg:flex-row-reverse lg:justify-between">
                <img className="w-full lg:w-[429px] h-[532px] lg:h-full object-cover rounded-tl-[80px] rounded-br-[80px]"
                     src={peopleFood} alt="People Opinion about Indonesian Traditional Food"/>
            <div className="flex flex-col lg:w-[45%] lg:py-10 lg:justify-center">
                <h1 className="font-milonga font-light text-primary text-3xl lg:text-[96px] mt-[30px] mb-4 lg:leading-normal lg:whitespace-pre-line lg:mb-10">What people say?</h1>
                <p className="font-urbanist font-normal text-primaryText text-lg lg:text-2xl leading-9 tracking-wide lg:leading-10">Chef
                    Internasional tertarik dengan makanan Indonesia, terutama makanan khas Bali yang kaya rempah-rempah.
                    Mereka memuji bahan dasar lokal dan mempelajari bumbu dasar seperti merah, kuning, oranye, dan
                    sambal </p>
            </div>
        </div>
    );
}

export default DetailFoodOpinion;