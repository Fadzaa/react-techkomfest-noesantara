import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Question from "./Question";
import Options from "./Options";
import ProgressBar from "./ProgressBar.jsx";
import Result from "./Result";
import CircularProgress from "@mui/joy/CircularProgress";

const QuizComponent = () => {
  const navigate = useNavigate();

  const initialState = {
    currentQuestion: 0,
    userAnswers: [],
    correctAnswers: 0,
    wrongAnswers: 0,
    quizCompleted: false,
    questions: [],
  };

  const [quizState, setQuizState] = useState({ ...initialState });
  const [loading, setLoading] = useState(true);

  const getRandomQuestions = (allQuestions, count) => {
    const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, count);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://zell-techkomfest.000webhostapp.com/api/quiz"
        );
        const randomQuestions = getRandomQuestions(response.data, 5);
        setQuizState({ ...initialState, questions: randomQuestions });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const handleAnswerClick = (selectedOption) => {
    const isCorrect = selectedOption.isCorrect;

    setQuizState((prev) => ({
      ...prev,
      userAnswers: [...prev.userAnswers, { question: prev.currentQuestion, isCorrect }],
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      wrongAnswers: !isCorrect ? prev.wrongAnswers + 1 : prev.wrongAnswers,
      currentQuestion: prev.currentQuestion < prev.questions.length - 1 ? prev.currentQuestion + 1 : prev.currentQuestion,
      quizCompleted: prev.currentQuestion === prev.questions.length - 1,
    }));

    if (quizState.quizCompleted) {
      navigate('/result');
    }
  };

  useEffect(() => {
    if (quizState.quizCompleted) {
      console.log("Quiz completed!"); 
    }
  }, [quizState.quizCompleted]);

  const handleRetakeQuiz = () => {
    setQuizState({ ...initialState });
    navigate('/quiz');
  };

  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-between ">
      {loading && (
        <CircularProgress style={{ color: 'primary', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      )}
      {!loading && !quizState.quizCompleted && quizState.questions.length > 0 && (
        <>
          <div className="py-12">
            <Question question={quizState.questions[quizState.currentQuestion].question} />
            <Options
              options={quizState.questions[quizState.currentQuestion].options}
              handleAnswerClick={handleAnswerClick}
              userAnswers={quizState.userAnswers}
              currentQuestion={quizState.currentQuestion}
            />
          </div>
          <ProgressBar
            currentQuestion={quizState.currentQuestion}
            totalQuestions={quizState.questions.length}
          />
        </>
      )}
      {!loading && quizState.quizCompleted && (
        <Result
            userAnswers={quizState.userAnswers}
            correctAnswers={quizState.correctAnswers}
            wrongAnswers={quizState.wrongAnswers}
            onRetakeQuiz={handleRetakeQuiz} />
      )}
    </div>
  );
};

export default QuizComponent;
