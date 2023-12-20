import React from 'react';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  const progressBarItems = Array.from({ length: totalQuestions }).map((_, index) => (
    <div
      key={index}
      className={`w-10 h-2 rounded-lg ${index < currentQuestion ? 'bg-green-400' : 'bg-gray-200'}`}
    ></div>
  ));

  return (
    <div className="mt-[20px] lg:mt-[70px]">
      <div className="flex gap-3 justify-center items-center flex-wrap mx-16">{progressBarItems}</div>
    </div>
  );
};

export default ProgressBar;
