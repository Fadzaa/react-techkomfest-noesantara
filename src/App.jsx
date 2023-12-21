import React from 'react'
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import InformativePage from './pages/InformativePage';
import QuizComponent from './component/QuizComponent/QuizComponent';
import GalleryTabBar from './component/MainComponent/GalleryComponent/GalleryTabBar';
import ClothDetailTraditional from './component/DetailComponent/ClothDetailComponent/ClothDetailTraditional';
import AboutPage from "./pages/AboutPage.jsx";
import DetailFoodPage from "./pages/DetailFoodPage.jsx";
import DetailWeaponPage from "./pages/DetailWeaponPage.jsx";
import AutoPlay from './component/DetailComponent/HouseDetailComponent/HouseDetailCollection.jsx';
import { QuizMenuComponent } from './component/QuizComponent/QuizMenuComponent/QuizMenuComponent';
import Sidebar from './component/DetailComponent/InformativeDetailComponent/Sidebar.jsx';
import InformativeDetailMain from './component/DetailComponent/InformativeDetailComponent/InformativeDetailMain.jsx';
import InformativeDetailPage from './pages/InformativeDetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/informative" element={<InformativePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/tabbar" element={<GalleryTabBar />} />

        <Route path="/traditional" element={<ClothDetailTraditional />} />
        <Route path="/house" element={<AutoPlay />} />
        <Route path="/food" element={<DetailFoodPage />} />
        <Route path="/weapon" element={<DetailWeaponPage />} />
        <Route path="/menu" element={<QuizMenuComponent />} />
        <Route path="/detail" element={<InformativeDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App