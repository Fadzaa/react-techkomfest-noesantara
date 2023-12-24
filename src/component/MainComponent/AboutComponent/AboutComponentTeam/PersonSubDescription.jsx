import React from "react";

export default function PersonSubDescription({title, description}) {
    return (
        <div className="w-full flex flex-col mt-12 lg:mt-4 ">
            <h1 className="font-urbanist font-bold text-lg text-primaryText mb-2 transform transition-opacity duration-500">{title}</h1>
            <div className="font-urbanist font-normal text-sm text-primaryText opacity-50">
                <p>{description}</p>

            </div>
        </div>
    )
}