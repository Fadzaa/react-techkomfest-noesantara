// import React from 'react';
import React from 'react';

function CultureCard({ image, title, isActive, onHover, onClick }) {
  return (
    <div onClick={onClick}
      className={`group ${
        isActive ? "w-24 lg:w-[387px] cursor-pointer" : "w-[55px] lg:w-[120px]"
      } h-[200px] lg:h-[473px] rounded-lg lg:rounded-2xl flex flex-col justify-end relative overflow-hidden me-3 lg:ms-4 transition-all duration-500`}
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
            ? "bg-[#343434] w-20 h-11 lg:w-[280px] lg:h-24  mb-4 lg:mb-8 px-2 lg:px-7 py-2 lg:py-4 absolute tracking-wider rotate-0 transform transition-all duration-500"
            : "bg-[#343434] w-20 h-11 lg:w-[94px] lg:h-24  mb-4 lg:mb-8 px-2 lg:px-7 py-1 lg:py-2 absolute tracking-wider -rotate-90 transform transition-all duration-500"
        }
      >
        <h1 className="font-urbanist font-medium text-sm lg:text-[32px] leading-4 lg:leading-10 text-white">
          {isActive ? `Traditional ${title}` : title}
        </h1>
      </div>
    </div>
  );
}

export default CultureCard;


