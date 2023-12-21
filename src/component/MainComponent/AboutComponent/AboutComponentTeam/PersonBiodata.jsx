import {iconGithub, iconInstagram, iconLinkedin} from "../../../../utils/icon.js";
import React from "react";

export default function PersonBiodata() {
    return (
        <div className="w-full mt-3">
            <div className="flex lg:flex-col justify-between items-center lg:items-start">
                <div className="flex flex-col">
                    <h1 className="font-urbanist font-semibold text-[28px] lg:text-4xl text-primaryText">Udin</h1>
                    <h3 className="font-urbanist font-semibold text-lg lg:text-2xl text-primaryText opacity-50">UI/UX Designer</h3>
                </div>
                <div className="flex lg:mt-7">
                    <SocialMediaCard iconPath={iconLinkedin} alt="Icon Linkedin"/>
                    <div className="w-4"></div>
                    <SocialMediaCard iconPath={iconGithub} alt="Icon Github"/>
                    <div className="w-4"></div>
                    <SocialMediaCard iconPath={iconInstagram} alt="Icon Instagram"/>
                </div>
            </div>

        </div>
    )
}

function SocialMediaCard({iconPath, alt}) {
    return (
        <div className="h-10 w-10 rounded-full bg-[#FAF8ED] flex justify-center items-center">
            <img src={iconPath} alt={alt}/>
        </div>
    )
}