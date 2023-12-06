import React from 'react'
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GalleryComponentHero from './component/GalleryComponent/GalleryComponentHero';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryComponentHero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App