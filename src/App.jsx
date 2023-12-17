import React from 'react'
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import InformativePage from './pages/InformativePage';
import QuizComponent from './component/QuizComponent/QuizComponent';
import GalleryTabBar from './component/GalleryComponent/GalleryTabBar';
import ClothDetailWorld from './component/ClothDetailComponent/ClothDetailWorld';
import ClothDetailTraditional from './component/ClothDetailComponent/ClothDetailTraditional';
import AboutPage from "./pages/AboutPage.jsx";
import DetailFoodPage from "./pages/DetailFoodPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/informative" element={<InformativePage />} />
        <Route path="/tabbar" element={<GalleryTabBar />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/traditional" element={<ClothDetailTraditional />} />
        <Route path="/world" element={<ClothDetailWorld />} />
        <Route path="/food" element={<DetailFoodPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App