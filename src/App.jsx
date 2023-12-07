import React from 'react'
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GalleryComponentHero from './component/GalleryComponent/GalleryComponentHero';
import InformativePage from './pages/InformativePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryComponentHero />} />
        <Route path="/testimony" element={<LandingComponentTestimony />} />
        <Route path="/informative" element={<InformativePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App