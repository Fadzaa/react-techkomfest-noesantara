import React from 'react';
import {
  people,
  testimony1,
  testimony2,
  testimony3,
  testimony4, testimony5,
  testimony6,
  testimony7,
  testimony8
} from '../../../utils/images.js';
import {davidBechkam, markZuckeberg, people} from '../../../utils/images.js';
import TestimonyCard from '../../../global_component/TestimonyCard.jsx';
import {useResponsive} from "../../../hooks/useResponsive.js";

const LandingComponentTestimony = () => {
  const isMobile = useResponsive(640)
  return (
      isMobile ? <TestimonyMobile/> : <TestimonyDesktop/>
  );
};

export default LandingComponentTestimony;


function TestimonyDesktop() {
  return (
      <>
        <div className="mb-[195px]">
          <div>
            <h1 className="font-milonga text-primary text-[84px] mt-20 text-center">Testimony</h1>
            <h1 className="font-yiBaiti text-primaryText text-lg text-center">ABOUT INDONESIA</h1>
          </div>
          <div className="mx-16">
            <div className="flex flex-row gap-5 mt-16">

              <div className="flex flex-col ml-8 gap-4">

                <div className="flex flex-col  w-[294px] h-[429px] border-2 border-BorderGray rounded-3xl pt-0 pb-3">
                  <img src={testimony1} className="w-full h-1/2 object-cover rounded-3xl"/>

                  <div className="w-full h-full px-6 flex flex-col justify-between">

                    <p className="mt-4 text-xs font font-urbanist text-[#232527] leading-5">"Indonesia adalah negara yang
                      indah dengan budaya yang kaya. Masyarakatnya sangat ramah dan menyambut saya dengan tangan terbuka.
                      Saya sangat terkesan dengan keindahan alam Indonesia, terutama Bali. Saya akan selalu mengingat
                      pengalaman saya di Indonesia,"</p>

                    <div className="font-urbanist text-sm ">
                      <p className="font-bold">David Beckham</p>
                      <p className="text-TextSecondary">Mantan pemain sepak bola inggris</p>
                    </div>

                  </div>

                </div>

                <TestimonyCard
                    image={testimony3}
                    width={'[294px]'}
                    name={"Beyoncé"}
                    role={"singer from the United States"}
                    text={"Gamelan adalah musik yang sangat indah dan mempesona. Saya sangat terkesan dengan keahlian para pemain gamelan Indonesia. Masyarakat Indonesia juga sangat ramah dan menyambut saya dengan tangan terbuka. Saya akan selalu mengingat pengalaman saya di Indonesia,"}/>

              </div>

              <div>
                <div className="flex flex-row gap-5 border-BorderGray border-2 rounded-3xl w-[595px]">
                  <div>
                    <img src={testimony2} alt="people" className="w-[500px] h-[254px] rounded-3xl object-cover"/>
                  </div>
                  <div className="flex flex-col gap-16 pt-4 ">
                    <p className="text-xs font font-urbanist text-[#232527] leading-5">"Saya sangat terkesan dengan semangat kewirausahaan masyarakat Indonesia. Mereka sangat gigih dan tidak pernah menyerah. Saya juga sangat terkesan dengan pertumbuhan ekonomi Indonesia. Indonesia memiliki potensi yang sangat besar untuk menjadi negara maju,"</p>
                    <div>
                      <p className="font-bold">Mark Zuckerberg</p>
                      <p className="text-TextSecondary">Founder Facebook</p>
                    </div>
                  </div>
                </div>
                <TestimonyCard
                    width={'[595px]'}
                    height={'[185px]'}
                    image={testimony6}
                    name={"Jackie Chan"}
                    role={"action actor from Hong Kong"}
                    marginTop={4}
                    text={'"Pencak silat adalah seni bela diri yang sangat indah dan mempesona. Saya sangat terkesan dengan keahlian para pendekar pencak silat Indonesia. Masyarakat Indonesia juga sangat ramah dan menyambut saya dengan tangan terbuka. Saya akan selalu mengingat pengalaman saya di Indonesia,"'}
                />
                <TestimonyCard
                    width={'[595px]'}
                    height={'[185px]'}
                    image={testimony8}
                    name={"Justin Bieber"}
                    role={"Singer"}
                    marginTop={4}
                    text={'"Musik dan tari Indonesia benar-benar memukau saya. Pernah nonton pertunjukan tari tradisional Bali yang begitu indah dan elegan. Gerakan para penari begitu memesona dan penuh makna. Musik gamelan dan keroncong juga memiliki suara yang unik dan menyentuh jiwa."'}
                />
              </div>

              <div>
                <TestimonyCard
                    width={'[323px]'}
                    height={'[241px]'}
                    image={testimony4}
                    name={"Oprah Winfrey"}
                    role={"American talk show host"}
                    text={'"Indonesia adalah negara yang sangat beragam. Setiap daerah memiliki budaya yang unik dan menarik. Saya juga sangat terkesan dengan keindahan alam Indonesia, terutama Raja Ampat. Raja Ampat adalah salah satu tempat terindah yang pernah saya kunjungi,"'}
                />
                <TestimonyCard
                    width={'[323px]'}
                    height={'[241px]'}
                    marginTop={4}
                    image={testimony7}
                    name={"Lionel Messi"}
                    role={"football player from Argentina"}
                    text={'"Raja Ampat adalah salah satu tempat terindah yang pernah saya kunjungi. Keindahan alamnya sangat luar biasa. Masyarakat Indonesia juga sangat ramah dan menyambut saya dengan tangan terbuka. Saya akan selalu mengingat pengalaman saya di Indonesia,"'}
                />
                <TestimonyCard
                    width={'[330px]'}
                    height={'[138px]'}
                    marginTop={4}
                    image={testimony5}
                    name={"Gordon Ramsay"}
                    role={"Chef Internasional"}
                    text={'"Kuliner Indonesia benar-benar menggugah selera. Dari nasi goreng yang sederhana hingga rendang yang kaya rempah, setiap hidangan memiliki cita rasa yang unik dan lezat. Kreativitas dan inovasi para koki Indonesia dalam mengolah bahan-bahan lokal patut diacungi jempol."'}
                />
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

function TestimonyMobile() {
  return (
      <div className=" w-screen px-[30px]">
        <h1 className="font-milonga text-[40px] text-primary mb-2">Testimony</h1>
        <h3 className="font-urbanist font-semibold text-primary text-xs flex justify-end mb-5">See More</h3>
        <TestimonyCardMobile
            image={testimony1}
            name={"David Beckham"}
            role={"Mantan pemain sepak bola inggris"}
            source={"source : www.youtube.com"}
            description={"\"Indonesia adalah negara yang indah dengan budaya yang kaya. Masyarakatnya sangat ramah dan menyambut saya dengan tangan terbuka. Saya sangat terkesan dengan keindahan alam Indonesia, terutama Bali. Saya akan selalu mengingat pengalaman saya di Indonesia,\""}
        />
        <TestimonyCardMobile
            image={testimony1}
            name={"David Beckham"}
            role={"Mantan pemain sepak bola inggris"}
            source={"source : www.youtube.com"}
            description={"\"Indonesia adalah negara yang indah dengan budaya yang kaya. Masyarakatnya sangat ramah dan menyambut saya dengan tangan terbuka. Saya sangat terkesan dengan keindahan alam Indonesia, terutama Bali. Saya akan selalu mengingat pengalaman saya di Indonesia,\""}
        /><TestimonyCardMobile
          image={testimony1}
          name={"David Beckham"}
          role={"Mantan pemain sepak bola inggris"}
          source={"source : www.youtube.com"}
          description={"\"Indonesia adalah negara yang indah dengan budaya yang kaya. Masyarakatnya sangat ramah dan menyambut saya dengan tangan terbuka. Saya sangat terkesan dengan keindahan alam Indonesia, terutama Bali. Saya akan selalu mengingat pengalaman saya di Indonesia,\""}
      />

      </div>
  )
}

function TestimonyCardMobile({image, name, role, source, description}) {
  return (
      <div className="w-full  border border-[#C4C4C4] rounded-xl p-4 mb-5">
        <div className="flex justify-between w-full ">
          <div className="w-[90vw] me-3">
            <img className="bg-black w-12 h-12 rounded-full object-cover" src={image} alt=""/>
          </div>
          <div className="flex flex-col font-urbanist ">

            <h1 className="text-[13px] font-semibold text-primaryText">{name}</h1>
            <h3 className="text-xs text-[#7D7A7A] mb-4">{role}</h3>

            <p className="text-[#C4C4C4] text-xs mb-4">{source}</p>

            <p className="text-xs text-primaryText leading-[22px]">{description}</p>

          </div>
        </div>
      </div>
  )
}
