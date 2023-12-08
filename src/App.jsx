import React from 'react'
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingComponentTestimony from './component/LandingComponent/LandingComponentTestimony';
import GalleryPage from './pages/GalleryPage';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimony" element={<LandingComponentTestimony />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App