import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import InformativePage from "./pages/InformativePage";
import QuizComponent from "./component/QuizComponent/QuizComponent";
import GalleryTabBar from "./component/MainComponent/GalleryComponent/GalleryTabBar";
import AboutPage from "./pages/AboutPage.jsx";
import DetailFoodPage from "./pages/Detail/DetailFoodPage.jsx";
import DetailWeaponPage from "./pages/Detail/DetailWeaponPage.jsx";
import { QuizMenuComponent } from "./component/QuizComponent/QuizMenuComponent/QuizMenuComponent";
import DetailHousePage from "./pages/Detail/DetailHousePage.jsx";
import DetailClothPage from "./pages/Detail/DetailClothPage.jsx";
import InformativeDetailPage from "./pages/InformativeDetailPage";
import Result from "./component/QuizComponent/Result";
import ClothDetailCardSlider from "./component/DetailComponent/ClothDetailComponent/ClothDetailCardSlider.jsx";

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
        <Route path="/house" element={<DetailHousePage />} />
        <Route path="/food" element={<DetailFoodPage />} />
        <Route path="/weapon" element={<DetailWeaponPage />} />
        <Route path="/clothes" element={<DetailClothPage />} />
        <Route path="/menu" element={<QuizMenuComponent />} />
        <Route path="/detail" element={<InformativeDetailPage />} />
        <Route path="/resultquiz" element={<Result />} />
        <Route path="/slider" element={<ClothDetailCardSlider />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
