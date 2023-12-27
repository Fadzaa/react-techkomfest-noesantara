import React from "react";
import LandingComponentHero from "../component/MainComponent/LandingComponent/LandingComponentHero";
import LandingComponentCulture from "../component/MainComponent/LandingComponent/LandingComponentCulture";
import LandingComponentIndonesia from "../component/MainComponent/LandingComponent/LandingComponentIndonesia";
import Footer from "../global_component/Footer";
import LandingComponentTestimony from "../component/MainComponent/LandingComponent/LandingComponentTestimony";

function LandingPage() {
  return (
    <>
      <div className="overflow-x-hidden">
      <LandingComponentHero />
      <LandingComponentCulture />
      <LandingComponentIndonesia />
      <LandingComponentTestimony />
      <Footer />
      </div>
    </>
  );
}

export default LandingPage;
