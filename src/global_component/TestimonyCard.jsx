import React from 'react';
import { people } from '../utils/images';


const TestimonyCard = ({width, height, marginTop, text}) => {
  const customStyle = `w-${width} h-${height} mt-${marginTop} text-sm border-2 border-BorderGray rounded-3xl p-8`;
  return ( 
    <div className={customStyle}>
      <div className="flex gap-4 ">
        <img src={people} alt="people" className="w-[42px] h-[42px] rounded-full object-cover" />
        <div className="flex-col">
          <p className="font-bold">Istiak Ahmed</p>
          <p className="text-TextSecondary">CEO,Avito</p>
          <p className="mt-5 text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
