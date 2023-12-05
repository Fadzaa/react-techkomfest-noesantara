import React from 'react'
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './global_component/Navbar';
import LandingComponentIndonesia from './component/LandingComponent/LandingComponentIndonesia';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/indonesia" element={<LandingComponentIndonesia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App