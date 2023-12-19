import React from 'react';
import DetailComponentHero from "../global_component/DetailComponentHero.jsx";
import {bgHeroFood} from "../utils/images.js";
import DetailFoodOpinion from "../component/DetailFoodComponent/DetailFoodOpinion.jsx";
import DetailTraditionalFood from "../component/DetailFoodComponent/DetailTraditionalFood.jsx";
import DetailWorldRecord from "../component/DetailFoodComponent/DetailWorldRecord.jsx";
import Footer from "../global_component/Footer.jsx";

function DetailFoodPage() {
    return (
        <div>
            <DetailComponentHero image={bgHeroFood} title={"Traditional Food"} subtitle={"Detail Budaya"} description={"Crafting Memorable Characters, Villains, Magic Systems, and Stories"} />
            <DetailFoodOpinion/>
            <DetailTraditionalFood/>
            <DetailWorldRecord/>
            <Footer/>
        </div>

    );
}

export default DetailFoodPage;