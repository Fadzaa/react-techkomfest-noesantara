import React, {useState} from 'react';
import PersonCard from "./PersonCard.jsx";
import PersonBiodata from "./PersonBiodata.jsx";
import PersonDescription from "./PersonDescription.jsx";
import PersonSubDescription from "./PersonSubDescription.jsx";
import {aboutPerson, fattah} from "../../../../utils/images.js";
import teamData from "../../../../utils/teamData.js";


function AboutComponentTeam() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? teamData.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === teamData.length - 1 ? 0 : prevIndex + 1));
    };

    const currentPerson = teamData[currentIndex];

    return (
        <div className="w-screen px-6 pt-6 lg:px-16 relative mb-12 lg:mb-24">
            <div className="flex flex-col items-center">
                <h1 className=" font-milonga text-[40px] lg:text-[80px] text-primary">Our Team</h1>
                <div className="w-2/3 lg:w-3/5 h-[2px] lg:h-[5px] bg-primary mb-10 lg:mb-16"></div>
            </div>
            <div className="lg:flex lg:border-black lg:border-opacity-30 lg:border-[1px] lg:rounded-xl">
                <PersonCard image={fattah}/>
                <div className="lg:flex flex-col lg:py-20 lg:justify-between lg:px-8">
                    <div className="flex justify-end gap-4  my-4 lg:my-0">
                        <div onClick={handlePrevClick} className="bg-GreenWhite h-10 w-10 rounded-full flex justify-center items-center">
                            <svg className="w-3 lg:w-4 rotate-180" viewBox="0 0 26 37" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.91932 -5.12479e-05L26 18.101L3.91932 36.2021L8.34617e-07 32.9892L18.1614 18.101L8.34617e-07 3.21289L3.91932 -5.12479e-05Z"
                                    fill="#646464"/>
                            </svg>
                        </div>
                        <div onClick={handleNextClick}
                             className="bg-GreenWhite h-10 w-10 rounded-full flex justify-center items-center">
                            <svg className="w-3 lg:w-4" viewBox="0 0 26 37" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.91932 -5.12479e-05L26 18.101L3.91932 36.2021L8.34617e-07 32.9892L18.1614 18.101L8.34617e-07 3.21289L3.91932 -5.12479e-05Z"
                                    fill="#646464"/>
                            </svg>
                        </div>
                    </div>
                    <div>

                        <PersonBiodata
                            name={currentPerson.name}
                            role={currentPerson.role}
                            linkedin={currentPerson.socialMedia.linkedin}
                            github={currentPerson.socialMedia.github}
                            instagram={currentPerson.socialMedia.instagram}
                        />


                        <div className="lg:flex mt-10">
                            <PersonDescription descriptionTop={currentPerson.description[0]} descriptionBottom={currentPerson.description[1]}/>
                            <div className="lg:flex lg:flex-col lg:justify-between lg:w-1/3">
                                <PersonSubDescription title={"Experience"} description={currentPerson.experience[0]}/>
                                <PersonSubDescription title={"Education"} description={"SMK Raden Umar Said"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponentTeam;
