import React from 'react';
import {recordWeapon1, recordWeapon2, recordWeapon3} from "../../../utils/images.js";
import {rainbowShape} from "../../../utils/icon.js";

function RecordWeaponComponent() {
    return (
        <div className="w-screen bg-[#FAF8ED] px-[40px] lg:px-[80px] py-10 flex flex-col items-center relative">
            <h1 className="font-milonga text-4xl lg:text-[80px] text-primary mb-10">World's Record</h1>
            <div className="w-full flex flex-col-reverse justify-between lg:flex-row ">
                <div className="flex flex-col w-full mt-7 lg:w-1/2">
                    <TextExplanation/>
                    <div className="h-8"></div>
                    <CardExplanation/>
                </div>
                <div className="w-[10vw]"></div>

                <div className="flex w-full lg:w-1/2 flex-col justify-between items-center ">
                    <ImageSection/>

                    <img className="w-72 hidden lg:static lg:flex" src={rainbowShape} alt="Rainbow Shape"/>
                </div>


            </div>
        </div>
    );
}

export default RecordWeaponComponent;

function TextExplanation() {
    const textDescription = "Keris merupakan senjata khas Indonesia yang telah diakui oleh UNESCO sebagai salah satu warisan budaya\n" +
        "                takbenda dunia. Keris memiliki bentuk yang unik dan ragam hias yang indah. Keris biasanya digunakan\n" +
        "                sebagai senjata untuk berperang, berburu, atau upacara adat."
    return (
        <div className="flex flex-col">
            <h1 className="font-milonga text-[32px] lg:text-[54px] text-primaryText mb-3">Keris</h1>
            <p className="font-urbanist text-primaryText text-base lg:text-[24px] leading-[45px]">{textDescription}</p>
        </div>
    )
}

function CardExplanation() {
    const listExplanation = [
        "Koleksi Museum Louvre, Paris, Prancis: Keris menjadi salah satu koleksi senjata berharga di Museum Louvre yang terkenal di dunia. Ini menunjukkan pengakuan terhadap nilai budaya dan keindahan keris.",
        "Diskusi Pecinta Senjata: Keris menjadi topik diskusi yang menarik di kalangan pecinta senjata internasional karena estetika dan nilai seninya yang tinggi.",
        "Warisan Budaya Takbenda UNESCO: Keris diakui oleh UNESCO sebagai salah satu warisan budaya takbenda dunia pada tahun 2008, mengukuhkan pentingnya keris bagi identitas dan warisan budaya Indonesia.",
        "Kompetisi Senjata Tradisional: Keris pernah meraih penghargaan dalam kompetisi senjata tradisional internasional, seperti kemenangan Mandau (senjata Dayak yang dipengaruhi keris) di AS. Ini menunjukkan kualitas teknik pembuatan dan estetika keris."
    ]
    return (
        <div className="bg-primary rounded-xl py-4 px-3">

            <div className="flex flex-col">
                {listExplanation.map((item, index) => {
                    return (
                        <div key={index} className="flex mb-4">
                            <div className="w-1 h-1 rounded-full bg-white me-4 mt-3"></div>
                            <p className="font-urbanist font-light text-[16px] text-white w-full leading-7">{item}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function ImageSection() {
    return (

        <div className="flex h-[70vh]">
            <img className="w-1/2 h-full rounded-xl shadow-xl  object-cover" src={recordWeapon1}
                 alt="Record Weapon 1"/>
            <div className="w-10"></div>
            <div className="flex flex-col">
                <img className="w-full h-1/2 rounded-xl shadow-xl object-cover" src={recordWeapon2}
                     alt="Record Weapon 2"/>
                <div className="h-10"></div>
                <img className="w-full h-1/2 rounded-xl shadow-xl object-cover" src={recordWeapon3}
                     alt="Record Weapon 3"/>
            </div>
        </div>


    )
}

