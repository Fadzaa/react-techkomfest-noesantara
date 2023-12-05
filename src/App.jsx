import React from 'react'
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './global_component/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App