import React from 'react';
import DetailComponentHero from "../global_component/DetailComponentHero.jsx";
import {bgHeroWeapon} from "../utils/images.js";
import TraditionalWeaponComponent
    from "../component/DetailComponent/DetailWeaponComponent/TraditionalWeaponComponent.jsx";
import RecordWeaponComponent from "../component/DetailComponent/DetailWeaponComponent/RecordWeaponComponent.jsx";
import CollectionWeaponComponent
    from "../component/DetailComponent/DetailWeaponComponent/CollectionWeaponComponent.jsx";
import Footer from "../global_component/Footer.jsx";

function DetailWeaponPage() {
    return (
        <>
            <DetailComponentHero image={bgHeroWeapon} title="Traditional Weapon" subtitle={"DETAIL BUDAYA"} description={"menyimpan kejayaan di setiap mata pisau dan gagangnya."}/>
            <TraditionalWeaponComponent/>
            <CollectionWeaponComponent/>
            <RecordWeaponComponent/>
            <Footer/>
        </>
    );
}

export default DetailWeaponPage;