import {aboutPerson} from "../../../../utils/images.js";
import React from "react";

export default function PersonCard() {
    return (
        <>
            <img
                className="w-full lg:w-[460px] h-[60vh] lg:h-full object-cover rounded-l-lg me-10"
                src={aboutPerson}
                alt="About Person Image"/>
        </>
    )
}

