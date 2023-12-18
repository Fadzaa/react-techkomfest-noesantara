import React from 'react';
import DetailComponentHero from "../global_component/DetailComponentHero.jsx";
import {bgHeroFood} from "../utils/images.js";

function DetailFoodPage() {
    return (
        <div>
            <DetailComponentHero
                image={bgHeroFood}
                title={"Traditional Food"}
                subtitle={"Detail Budaya"}
                description={"Crafting Memorable Characters, Villains, Magic Systems, and Stories"} />
        </div>
    );
}

export default DetailFoodPage;