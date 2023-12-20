// QuizComponent.js
import React, { useState, useEffect } from 'react';
import Question from './Question';
import Options from './Options';
import ProgressBar from './ProgressBar';
import Result from './Result';

const QuizComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: '1. Apa nama pakaian adat tradisional dari Jawa Barat?',
      options: [
        { text: 'Kebaya', isCorrect: false },
        { text: 'Ulos', isCorrect: false },
        { text: 'Bodo', isCorrect: false },
        { text: 'Baju Bodo', isCorrect: true },
      ],
    },
    {
      question: '2. Apa nama alat musik tradisional dari suku Jawa?',
      options: [
        { text: 'Angklung', isCorrect: false },
        { text: 'Gamelan', isCorrect: true },
        { text: 'Sasando', isCorrect: false },
        { text: 'Kolintang', isCorrect: false },
      ],
    },
    {
      question: '3. Tari tradisional yang berasal dari daerah Sumatera Utara adalah?',
      options: [
        { text: 'Reog', isCorrect: false },
        { text: 'Jaipongan', isCorrect: false },
        { text: 'Tari Tor-Tor', isCorrect: true },
        { text: 'Zapin', isCorrect: false },
      ],
    },
    {
      question: '4. Wayang kulit merupakan seni tradisional dari daerah?',
      options: [
        { text: 'Jawa Tengah', isCorrect: false },
        { text: 'Bali', isCorrect: false },
        { text: 'Jawa Timur', isCorrect: true },
        { text: 'Aceh', isCorrect: false },
      ],
    },
    {
      question: '5. Apa nama rumah adat tradisional dari Papua?',
      options: [
        { text: 'Rumah Gadang', isCorrect: false },
        { text: 'Honai', isCorrect: true },
        { text: 'Rumah Panggung', isCorrect: false },
        { text: 'Rumah Bubungan Tinggi', isCorrect: false },
      ],
    },
    {
      question: '6. Lagu daerah yang berasal dari Kalimantan Selatan?',
      options: [
        { text: 'Es Lilin', isCorrect: false },
        { text: 'Apuse', isCorrect: false },
        { text: 'Rasa Sayange', isCorrect: false },
        { text: 'Gending Sriwijaya', isCorrect: true },
      ],
    },
    {
      question: '7. Senjata tradisional dari suku Dayak Kalimantan?',
      options: [
        { text: 'Keris', isCorrect: false },
        { text: 'Parang', isCorrect: false },
        { text: 'Mandau', isCorrect: true },
        { text: 'Kujang', isCorrect: false },
      ],
    },
    {
      question: '8. Apa nama tarian tradisional dari suku Minangkabau?',
      options: [
        { text: 'Lenggang Nyai', isCorrect: false },
        { text: 'Pendet', isCorrect: false },
        { text: 'Ratoh Jaroe', isCorrect: true },
        { text: 'Jaranan', isCorrect: false },
      ],
    },
    {
      question: '9. Makanan khas dari daerah Sulawesi Selatan?',
      options: [
        { text: 'Sate Padang', isCorrect: false },
        { text: 'Coto Makassar', isCorrect: true },
        { text: 'Papeda', isCorrect: false },
        { text: 'Bika Ambon', isCorrect: false },
      ],
    },
    {
      question: '10. Upacara adat dari suku Bali?',
      options: [
        { text: 'Tedak Siten', isCorrect: false },
        { text: 'Ma’nene', isCorrect: false },
        { text: 'Ngaben', isCorrect: true },
        { text: 'Mappacci', isCorrect: false },
      ],
    },
  ];

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
      console.log('Quiz completed!'); // You can perform any actions related to quiz completion here
    }
  }, [quizCompleted]);

  return (
    <div className="w-full h-screen relative flex flex-col items-center">
      {!quizCompleted && (
        <>
          <Question question={questions[currentQuestion].question} />
          <Options
            options={questions[currentQuestion].options}
            handleAnswerClick={handleAnswerClick}
            userAnswers={userAnswers}
            currentQuestion={currentQuestion}
          />
          <ProgressBar currentQuestion={currentQuestion} totalQuestions={questions.length} />
        </>
      )}
      {quizCompleted && <Result userAnswers={userAnswers} correctAnswers={correctAnswers} />}
    </div>
  );
};

export default QuizComponent;
