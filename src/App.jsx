import React from 'react'
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import QuizComponent from './component/QuizComponent/QuizComponent';
import AnswerComponent from './component/QuizComponent/AnswerComponent';
import IndicatorBar from './component/QuizComponent/IndicatorBar';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/answer" element={<IndicatorBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App