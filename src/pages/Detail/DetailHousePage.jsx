import React from "react";
import DetailComponentHero from "../../global_component/DetailComponentHero.jsx";
import { bgHeroHouse } from "../../utils/images.js";
import HouseDetailTraditional from "../../component/DetailComponent/HouseDetailComponent/HouseDetailTraditional.jsx";
import HouseDetailCollection from "../../component/DetailComponent/HouseDetailComponent/HouseDetailCollection.jsx";
import HouseDetailWorld from "../../component/DetailComponent/HouseDetailComponent/HouseDetailWorld.jsx";
import Footer from "../../global_component/Footer.jsx";
function DetailHousePage() {
  return (
    <>
      <div className="overflow-x-hidden">
      <DetailComponentHero
        title={"Traditional House"}
        subtitle={"Detail Budaya"}
        image={bgHeroHouse}
        description={
          "sentuhan warisan budaya yang mewujud dalam setiap ukiran dan coraknya."
        }
      />
      <HouseDetailTraditional />
      <HouseDetailCollection />
      <HouseDetailWorld />
      <Footer/>
      </div>
    </>
  );
}

export default DetailHousePage;
