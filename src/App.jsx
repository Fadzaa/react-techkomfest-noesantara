import React from 'react'
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import InformativePage from './pages/InformativePage';
import QuizComponent from './component/QuizComponent/QuizComponent';
import GalleryTabBar from './component/GalleryComponent/GalleryTabBar';
import AboutComponentLetter from './component/AboutComponent/AboutComponentLetter';
import ClothDetailCollection from './component/ClothDetailComponent/ClothDetailCollection';
import PauseOnHover from './component/ClothDetailComponent/ClothDetailCardSlider';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/informative" element={<InformativePage />} />
        <Route path="/tabbar" element={<GalleryTabBar />} />
        <Route path="/about" element={<AboutComponentLetter />} />
        <Route path="/detailcloth" element={<ClothDetailCollection />} />
        <Route path="/slider" element={<PauseOnHover />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App