import {iconGithub, iconInstagram, iconLinkedin} from "../../../../utils/icon.js";
import React from "react";

export default function PersonBiodata({name, role, github, linkedin, instagram}) {
    return (
        <div className="w-full mt-3">
            <div className="flex lg:flex-col justify-between items-center lg:items-start">
                <div className="flex flex-col">
                    <h1 className="font-urbanist font-semibold text-[28px] lg:text-4xl text-primaryText">{name}</h1>
                    <h3 className="font-urbanist font-semibold text-lg lg:text-2xl text-primaryText opacity-50">{role}</h3>
                </div>
                <div className="flex lg:mt-7">
                    <SocialMediaCard iconPath={iconLinkedin} alt="Icon Linkedin" url={linkedin}/>
                    <div className="w-4"></div>
                    <SocialMediaCard iconPath={iconGithub} alt="Icon Github" url={github}/>
                    <div className="w-4"></div>
                    <SocialMediaCard iconPath={iconInstagram} alt="Icon Instagram" url={instagram}/>
                </div>
            </div>

        </div>
    )
}

function SocialMediaCard({iconPath, alt, url}) {
    return (
        <div className="h-10 w-10 rounded-full bg-[#FAF8ED] flex justify-center items-center">
            <a href={url}><img src={iconPath} alt={alt}/></a>
        </div>
    )
}