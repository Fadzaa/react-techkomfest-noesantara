import React from "react";
import DetailComponentHero from "../../global_component/DetailComponentHero.jsx";
import { bgDetailCloth } from "../../utils/images.js";
import ClothDetailCollection from "../../component/DetailComponent/ClothDetailComponent/ClothDetailCollection.jsx";
import ClothDetailWorld from "../../component/DetailComponent/ClothDetailComponent/ClothDetailWorld.jsx";
import ClothDetailTraditional from "../../component/DetailComponent/ClothDetailComponent/ClothDetailTraditional.jsx";
import Footer from "../../global_component/Footer.jsx";
import Navbar from "../../global_component/Navbar.jsx";

function DetailClothPage() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
      <DetailComponentHero
        image={bgDetailCloth}
        title={"Traditional Cloth"}
        subtitle={"Detail Budaya"}
        description={
          "sentuhan warisan budaya yang mewujud dalam setiap ukiran dan coraknya."
        }
      />
      <ClothDetailTraditional />
      <ClothDetailCollection />
      <ClothDetailWorld />
      <Footer />
      </div>
    </>
  );
}

export default DetailClothPage;
