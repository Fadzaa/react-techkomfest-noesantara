import React,{ useEffect, useState } from 'react';
import { letterDecoration, letterDecorationmobile } from '../../utils/images';

const AboutComponentLetter = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedImage, setSelectedImage] = useState(windowWidth <= 360 ? letterDecorationmobile : letterDecoration);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setSelectedImage(width <= 360 ? letterDecorationmobile : letterDecoration);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="pt-[100px] relative">
        <div className="font-milonga ml-[30px]">
          <p className="text-[38px] lg:text-[80px] text-primary">Letter</p>
          <p className="text-[28px] lg:text-[45px]">From Our Teams</p>
        </div>
        <div className="flex flex-col gap-2 w-[300px] lg:w-[1325px] lg:text-[28px] lg:gap-9 lg:leading-9 mt-7 ml-[30px] font-urbanist text-sm">
          <p>Neosantara berkomitmen menjadi platform pendidikan teknologi terkemuka, menumbuhkan bakat digital berstandar global. Upaya kami didedikasikan untuk mempercepat kemajuan Indonesia menuju puncak dalam ranah digital.</p>
          <p>
            Dalam semangat komitmen ini, kami mengundang Anda untuk menjelajahi Neosantara sebuah website digital yang menghidupkan kembali kekayaan budaya Indonesia melalui pengalaman inovatif dan mendalam. Temukan perpaduan tradisi dan
            teknologi, di mana masa lalu bertemu dengan masa depan digital. Bersama-sama, mari kita merayakan perpaduan tradisi dan teknologi, membuka jalan bagi kepemimpinan digital Indonesia.
          </p>
        </div>
        <img src={selectedImage} alt="" className="absolute right-0 top-[50px]" />
      </div>
    </>
  );
};

export default AboutComponentLetter;
