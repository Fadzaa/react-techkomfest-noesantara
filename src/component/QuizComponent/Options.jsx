import React from 'react';

const Options = ({ options, handleAnswerClick, userAnswers, currentQuestion }) => {
  return (
    <div className="flex justify-center items-center lg:mt-9 mt-14">
      <div className="text-primary font-urbanist font-semibold text-2xl flex flex-col gap-[19px] lg:grid lg:grid-cols-2 lg:gap-7">
        {options.map((option, index) => (
          <div key={index}>
            <button
              onClick={() => handleAnswerClick(option)}
              className={`border border-primary w-[300px] h-[67px] lg:w-[400px] lg:h-[67px] rounded-xl  lg:hover:bg-[#EAF2E2] lg:hover:text-primary lg:hover:border-primary`}
            >
              {option.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
