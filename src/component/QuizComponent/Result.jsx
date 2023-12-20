import React from 'react';

const Result = ({ userAnswers, correctAnswers }) => {
  const totalQuestions = userAnswers.length;
  const userScore = correctAnswers * 10;

  return (
    <div className="w-full h-screen relative flex flex-col items-center">
      <h1 className="font-milonga text-black text-center text-3xl lg:text-5xl lg:top-20 lg:mt-[110px]">
        Result Quiz
      </h1>
      <div className="mt-8">
        <p className="text-xl text-black">
          Jawaban Benar :  {correctAnswers}
        </p>
        <p className="text-xl text-black">Your Score: {userScore}</p>
      </div>
    </div>
  );
};

export default Result;
