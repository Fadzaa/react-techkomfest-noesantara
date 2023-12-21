import React from 'react';
import {traditionalFood} from "../../../utils/images.js";

function DetailTraditionalFood() {
    return (
        <div className="w-screen flex flex-col-reverse lg:h-screen lg:flex lg:flex-row">
            <div className=" lg:w-2/5 h-full bg-primary flex flex-col justify-center py-10 px-10 lg:px-16">
                <div className="font-milonga text-white text-[32px] lg:text-[54px] mb-10">
                    <h1>What is</h1>
                    <h1>Traditional Food?</h1>
                </div>
                <p className="font-urbanist text-white text-lg lg:text-xl leading-9">Makanan tradisional Indonesia mencakup beragam hidangan khas yang diwariskan dari generasi ke
                    generasi. Dikenal karena keberagaman rempah-rempahnya, makanan ini sering menggunakan bahan </p>
            </div>
            <img className="w-full lg:w-3/5 h-screen lg:h-full object-cover" src={traditionalFood} alt="Traditional Food Background Image"/>
        </div>
    );
}

export default DetailTraditionalFood;