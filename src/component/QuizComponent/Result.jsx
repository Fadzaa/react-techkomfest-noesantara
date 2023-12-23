// Result.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
    leftBottomDecoration,
    leftBottomDecorMobile,
    leftTopDecoration, leftTopDecorMobile,
    rightBottomDecoration, rightBottomDecorMobile,
    rightTopDecoration, rightTopDecorMobile
} from "../../utils/icon.js";
import {useResponsive} from "../../hooks/useResponsive.js";

const Result = ({ userAnswers, correctAnswers, wrongAnswers }) => {
  const isMobile = useResponsive()
  if (!userAnswers || !userAnswers.length) {
    // If userAnswers is not available, you can handle it accordingly
    return <div>Loading...</div>;
  }

  const totalQuestions = userAnswers.length;
  const userScore = correctAnswers * 20;
  const percentage = (correctAnswers / totalQuestions) * 100;

  return (
      <div className="w-screen h-screen relative  ">
          {isMobile
              ? <>
                  <img className="absolute top-0 left-0" src={leftTopDecorMobile} alt="Left Top Decoration"/>
                  <img className="absolute top-0 right-0" src={rightTopDecorMobile} alt="Right Top Decoration"/>
                  <img className="absolute bottom-0 left-0" src={leftBottomDecorMobile} alt="Left Bottm Decoration"/>
                  <img className="absolute bottom-0 right-0" src={rightBottomDecorMobile} alt="Right Bottom Decoration"/>
              </>
              : <>
                  <img className="absolute top-0 left-0" src={leftTopDecoration} alt="Left Top Decoration"/>
                  <img className="absolute top-0 right-[4vw]" src={rightTopDecoration} alt="Right Top Decoration"/>
                  <img className="absolute bottom-0 left-[4vw]" src={leftBottomDecoration} alt="Left Bottm Decoration"/>
                  <img className="absolute bottom-4 right-0" src={rightBottomDecoration} alt="Right Bottom Decoration"/>
              </>
          }

          <div className="w-full h-full flex flex-col items-center justify-center px-6 lg:px-0">
              <h1 className="font-milonga text-primary text-center text-[32px] mb-8 lg:text-[64px] lg:mb-16">
                  Quiz Results
              </h1>
              <p className="font-urbanist text-primary font-normal text-base lg:text-[40px] mb-6 lg:mb-12">
                  Congratulations! You've completed the quiz.
              </p>
              <div className="flex font-urbanist text-primary font-light text-xs gap-4 lg:text-lg lg:gap-7 lg:mb-12">
                  <div className="flex gap-2">
                      <p className="">Correct Answers:</p>
                      <p className=""> {correctAnswers} / {totalQuestions}</p>
                  </div>
                  <div className="flex gap-2">
                      <p className="">Wrong Answers:</p>
                      <p className=""> {wrongAnswers} / {totalQuestions}</p>
                  </div>
              </div>

              <h1 className="text-primary text-[60px] my-[10vh] lg:mb-12">{userScore}</h1>


                  <button
                      className=" w-full h-[40px] lg:w-[30vw] lg:h-[50px] border border-primary rounded-full text-primary font-urbanist text-base lg:text-lg">
                      <Link to="/" > Back to Home    </Link>
                  </button>


          </div>





      </div>
  );
};

export default Result;
