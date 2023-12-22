import { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Question";
import Options from "./Options";
import ProgressBar from "./ProgressBar";
import Result from "./Result";

const QuizComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://zell-techkomfest.000webhostapp.com/api/quiz",
        );
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAnswerClick = (selectedOption) => {
    const isCorrect = selectedOption.isCorrect;

    setUserAnswers([...userAnswers, { question: currentQuestion, isCorrect }]);
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  useEffect(() => {
    if (quizCompleted) {
      console.log("Quiz completed!"); // You can perform any actions related to quiz completion here
    }
  }, [quizCompleted]);

  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-between py-12">
      {!quizCompleted && questions.length > 0 && (
        <>
          <div>
            <Question question={questions[currentQuestion].question} />
            <Options
              options={questions[currentQuestion].options}
              handleAnswerClick={handleAnswerClick}
              userAnswers={userAnswers}
              currentQuestion={currentQuestion}
            />
          </div>
          <ProgressBar
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
          />
        </>
      )}
      {quizCompleted && (
        <Result userAnswers={userAnswers} correctAnswers={correctAnswers} />
      )}
    </div>
  );
};

export default QuizComponent;
