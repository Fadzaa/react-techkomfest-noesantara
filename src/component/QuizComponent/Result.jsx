// Result.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ userAnswers, correctAnswers }) => {
  if (!userAnswers || !userAnswers.length) {
    // If userAnswers is not available, you can handle it accordingly
    return <div>Loading...</div>;
  }

  const totalQuestions = userAnswers.length;
  const userScore = correctAnswers * 20;
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
        <div className="flex justify-center items-center space-x-4 ">
          <Link to="/" className="bg-primary text-white px-9 py-3 rounded-md">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
