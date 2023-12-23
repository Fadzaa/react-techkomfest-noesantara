import React from "react";
import DetailComponentHero from "../../global_component/DetailComponentHero.jsx";
import { bgHeroFood } from "../../utils/images.js";
import DetailFoodOpinion from "../../component/DetailComponent/DetailFoodComponent/DetailFoodOpinion.jsx";
import DetailTraditionalFood from "../../component/DetailComponent/DetailFoodComponent/DetailTraditionalFood.jsx";
import DetailWorldRecord from "../../component/DetailComponent/DetailFoodComponent/DetailWorldRecord.jsx";
import Footer from "../../global_component/Footer.jsx";
import Navbar from "../../global_component/Navbar.jsx";

function DetailFoodPage() {
  return (
    <>
      <Navbar />
      <DetailComponentHero
        image={bgHeroFood}
        title={"Traditional Food"}
        subtitle={"DetailComponent Budaya"}
        description={
          "Crafting Memorable Characters, Villains, Magic Systems, and Stories"
        }
      />
      <DetailFoodOpinion />
      <DetailTraditionalFood />
      <DetailWorldRecord />
      <Footer />
    </>
  );
}

export default DetailFoodPage;
