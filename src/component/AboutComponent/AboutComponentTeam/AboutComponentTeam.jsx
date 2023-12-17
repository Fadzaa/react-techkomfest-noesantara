import React from 'react';
import {aboutPerson, iconGithub, iconInstagram, iconLinkedin} from "../../../utils/images.js";
import PersonCard from "./PersonCard.jsx";
import PersonBiodata from "./PersonBiodata.jsx";
import PersonDescription from "./PersonDescription.jsx";
import PersonSubDescription from "./PersonSubDescription.jsx";

function AboutComponentTeam() {
    return (
        <div className="w-screen h-screen px-6 pt-6 lg:px-16 ">
            <div className="flex flex-col items-center">
                <h1 className=" font-milonga text-[40px] lg:text-[80px] text-primary">Our Team</h1>
                <div className="w-2/3 lg:w-3/5 h-[2px] bg-primary mb-10 lg:mb-16"></div>
            </div>
            <div className="lg:flex lg:border-black lg:border-opacity-30 lg:border-[1px] lg:rounded-xl">
                <PersonCard/>
                <div className="lg:flex-flex-col lg:py-32">
                    <PersonBiodata/>
                    <div className="lg:flex mt-10">
                        <PersonDescription/>
                        <div className="lg:flex lg:flex-col lg:justify-between">
                            <PersonSubDescription title={"Experience"}/>
                            <PersonSubDescription title={"Education"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponentTeam;
