import React from "react";

const TestimonyCard = ({
  width,
  height,
  name,
  role,
  marginTop,
  text,
  image,
}) => {
  const customStyle = `w-${width} h-${height} mt-${marginTop} text-sm border-2 border-BorderGray rounded-3xl p-8`;
  return (
    <div className={customStyle}>
      <div className="flex gap-4 ">
        <img
          src={image}
          alt="people"
          className="w-[42px] h-[42px] rounded-full object-cover"
        />
        <div className="flex-col">
          <p className="font-bold font-urbanist text-base text-primaryText">
            {name}
          </p>
          <p className="font-urbanist text-xs text-[#7D7A7A] ">{role}</p>
          <p className="font-urbanist text-sm text-primaryText mt-5 ">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
