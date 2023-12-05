import React from 'react';
import { indonesia1, indonesia2, rainbowShape } from '../../utils/images';

function LandingComponentIndonesia() {
  return (
    <>
      <div className="w-screen h-screen bg-GreenWhite flex py-24 px-36 items-center relative">
        <div>
          <img src={rainbowShape} alt="rainbowShape" />
          <h1 className="font-milonga text-primary text-[84px]">Indonesia</h1>
          <h3 className="font-yiBaiti tracking-widest text-primaryText mb-10 ps-3 mt-[-15px]">ABOUT INDONESIA</h3>
          <p className="font-urbanist font-normal ps-3 text-2xl text-primaryText w-[430px] leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum.</p>
          <div className="border border-primary p-6 mt-14">
            <div>
              <p className="bg-primary p-4 text-white w-[839px]">
                “The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H. Rackham.”“The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
                et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.”
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 absolute top-0 right-[115px]">
          <img src={indonesia1} alt="gambar1" className="w-[256px] h-[527px] rounded-b-[70px]" />
          <img src={indonesia2} alt="gambar2" className="w-[256px] h-[740px] rounded-b-[70px]" />
        </div>
      </div>
    </>
  );
}

export default LandingComponentIndonesia;
