import {aboutPerson} from "../../../../utils/images.js";
import React from "react";

export default function PersonCard({image}) {
    return (
        <>
            <img
                className="w-full lg:w-[460px] h-[60vh] lg:h-[100vh] object-cover rounded-l-lg bg-black"
                src={image}
                alt="About Person Image"/>
        </>
    )
}

