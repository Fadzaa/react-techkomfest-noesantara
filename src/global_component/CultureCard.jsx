// import React from 'react';
import React from 'react';

function CultureCard({ image, title, isActive, onHover }) {
  return (
    <div
      className={`group ${
        isActive ? "w-[387px]" : "w-[127px]"
      }h-[473px] rounded-2xl flex flex-col justify-end relative overflow-hidden ms-7 transition-all duration-500`}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      <img
        className="h-full w-full absolute object-cover transform group-hover:scale-110 transition-transform duration-500"
        src={image}
        alt={title}
      />

      <div
        className={
          isActive
            ? "w-[280px] h-24 bg-[#343434] mb-8 px-7 py-4 absolute tracking-wider rotate-0 transform transition-all duration-500"
            : "w-[94px] h-24 bg-[#343434] mb-8 px-7 py-2 absolute tracking-wider -rotate-90 transform transition-all duration-500"
        }
      >
        <h1 className="font-urbanist font-medium text-[32px] leading-10 text-white">
          {isActive ? `Traditional ${title}` : title}
        </h1>
      </div>
    </div>
  );
}

export default CultureCard;


