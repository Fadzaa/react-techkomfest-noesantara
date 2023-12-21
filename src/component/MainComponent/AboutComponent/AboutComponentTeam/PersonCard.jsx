import {aboutPerson} from "../../../../utils/images.js";
import React from "react";

export default function PersonCard({image}) {
    return (
        <>
            <img
                className="w-full lg:w-[460px] h-[60vh] lg:h-full object-cover rounded-l-lg"
                src={image}
                alt="About Person Image"/>
        </>
    )
}

