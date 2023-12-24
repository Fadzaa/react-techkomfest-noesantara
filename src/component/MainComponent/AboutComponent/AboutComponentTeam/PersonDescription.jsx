import React from "react";

export default function PersonDescription({descriptionTop, descriptionBottom}) {
    return (
        <div className="w-full lg:w-2/3 lg:pe-16 flex flex-col  mt-4 h-[32vh]">
            <h1 className="font-urbanist font-bold text-lg text-primaryText mb-2">On How To Get Here</h1>
            <div className="font-urbanist font-normal text-sm text-primaryText opacity-50 lg:text-[18px]">
                <p>{descriptionTop}</p>
                <br/>
                <p>{descriptionBottom}</p>
            </div>
        </div>
    )
}