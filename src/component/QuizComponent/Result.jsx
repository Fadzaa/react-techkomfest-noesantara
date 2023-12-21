// Result.js
import React from 'react';

const Result = ({ userAnswers, correctAnswers }) => {
  const totalQuestions = userAnswers.length;
  const userScore = correctAnswers * 10;
  const percentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="w-full h-screen relative flex flex-col items-center">
      <h1 className="font-milonga text-black text-center text-4xl lg:text-5xl mt-10 lg:mt-20">
        Quiz Results
      </h1>
      <div className="mt-8 p-8 bg-white rounded-md shadow-lg max-w-lg text-center">
        <p className="text-2xl font-semibold text-black mb-4">
          Congratulations! You've completed the quiz.
        </p>
        <div className="mb-8">
          <p className="text-lg text-black">Correct Answers: {correctAnswers} / {totalQuestions}</p>
          <p className="text-lg text-black">Your Score: {userScore} / 100</p>
          <p className="text-lg text-black">Accuracy: {percentage.toFixed(2)}%</p>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
            Retake Quiz
          </button>
          <button className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600">
            Share Result
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
