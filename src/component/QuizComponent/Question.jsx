import React from 'react';

const Question = ({ question }) => {
  return (
      <div>
          <p className='font-milonga text-black text-center text-[32px] lg:text-[54px] lg:top-[110px]'>Quiz Budaya</p>
          <p className='font-urbanist text-xl mt-[47px] w-[332px] lg:text-4xl lg:w-[743px] lg:mt-[141px] text-black text-center mx-auto'>
              {question}
          </p>
      </div>
  );
};

export default Question;
