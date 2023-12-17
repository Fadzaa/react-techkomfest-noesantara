import React from "react";

export default function PersonSubDescription({title}) {
    return (
        <div className="w-full flex flex-col  mt-4">
            <h1 className="font-urbanist font-bold text-lg text-primaryText mb-2">{title}</h1>
            <div className="font-urbanist font-normal text-sm text-primaryText opacity-50">
                <p>UI/UX Designer in PT Nuri Gaya Citra (Internship)</p>

            </div>
        </div>
    )
}