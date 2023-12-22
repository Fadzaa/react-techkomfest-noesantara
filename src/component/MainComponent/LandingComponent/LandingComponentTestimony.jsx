import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  testimony1,
  testimony2,
  testimony3,
  testimony4,
  testimony5,
  testimony6,
  testimony7,
  testimony8
} from '../../../utils/images.js';
import { davidBechkam, markZuckeberg, people } from '../../../utils/images.js';
import TestimonyCard from '../../../global_component/TestimonyCard.jsx';
import { useResponsive } from "../../../hooks/useResponsive.js";

const LandingComponentTestimony = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can adjust the duration as needed
  }, []);

  const isMobile = useResponsive(640);

  return (
    isMobile ? <TestimonyMobile /> : <TestimonyDesktop />
  );
};

export default LandingComponentTestimony;

function TestimonyDesktop() {
  return (
    <>
      <div className="mb-[195px]" data-aos="fade-up">
        <div>
          <h1 className="font-milonga text-primary text-[84px] mt-20 text-center">Testimony</h1>
          <h1 className="font-yiBaiti text-primaryText text-lg text-center">ABOUT INDONESIA</h1>
        </div>
        <div className="mx-16">
          <div className="flex flex-row gap-5 mt-16" data-aos="fade-up">

            <div className="flex flex-col ml-8 gap-4">

              <div className="flex flex-col  w-[294px] h-[429px] border-2 border-BorderGray rounded-3xl pt-0 pb-3" data-aos="fade-up">
                <img src={testimony1} className="w-full h-1/2 object-cover rounded-3xl" />

                <div className="w-full h-full px-6 flex flex-col justify-between">

                  <p className="mt-4 text-xs font font-urbanist text-[#232527] leading-5">"Indonesia is a beautiful country with a rich culture. The people are very friendly and welcomed me with open arms. I am very impressed with the natural beauty of Indonesia, especially Bali. I will always remember my experience in Indonesia."</p>

                  <div className="font-urbanist text-sm ">
                    <p className="font-bold">David Beckham</p>
                    <p className="text-TextSecondary">Ex Football Player</p>
                  </div>

                </div>

              </div>

              <TestimonyCard
                image={testimony3}
                width={'[294px]'}
                name={"Beyoncé"}
                role={"singer from the United States"}
                text={"Gamelan is a very beautiful and enchanting music. I am very impressed with the skill of Indonesian gamelan players. Indonesian people are also very friendly and welcomed me with open arms. I will always remember my experience in Indonesia."}
              />

            </div>

            <div>
              <div className="flex flex-row gap-5 border-BorderGray border-2 rounded-3xl w-[595px]" data-aos="fade-up">
                <div>
                  <img src={testimony2} alt="people" className="w-[500px] h-[254px] rounded-3xl object-cover" />
                </div>
                <div className="flex flex-col gap-16 pt-4 " data-aos="fade-up">
                  <p className="text-xs font font-urbanist text-[#232527] leading-5">"I am very impressed with the entrepreneurial spirit of the Indonesian people. They are very resilient and never give up. I am also very impressed with the economic growth of Indonesia. Indonesia has great potential to become a developed country."</p>
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
                text={'"Pencak silat is a martial art that is very beautiful and enchanting. I am very impressed with the skill of Indonesian Pencak Silat warriors. Indonesian people are also very friendly and welcomed me with open arms. I will always remember my experience in Indonesia."'}
              />
              <TestimonyCard
                width={'[595px]'}
                height={'[185px]'}
                image={testimony8}
                name={"Justin Bieber"}
                role={"Singer"}
                marginTop={4}
                text={'"Indonesian music and dance really captivated me. I once watched a beautiful and elegant traditional Balinese dance performance. The movements of the dancers are so charming and meaningful. Gamelan and keroncong music also have unique and soul-touching sounds."'}
              />
            </div>

            <div>
              <TestimonyCard
                width={'[323px]'}
                height={'[241px]'}
                image={testimony4}
                name={"Oprah Winfrey"}
                role={"American talk show host"}
                text={'"Indonesia is a very diverse country. Each region has a unique and interesting culture. I am also very impressed with the natural beauty of Indonesia, especially Raja Ampat. Raja Ampat is one of the most beautiful places I have ever visited."'}
              />
              <TestimonyCard
                width={'[323px]'}
                height={'[241px]'}
                marginTop={4}
                image={testimony7}
                name={"Lionel Messi"}
                role={"football player from Argentina"}
                text={'"Raja Ampat is one of the most beautiful places I have ever visited. Its natural beauty is truly extraordinary. Indonesian people are also very friendly and welcomed me with open arms. I will always remember my experience in Indonesia."'}
              />
              <TestimonyCard
                width={'[330px]'}
                height={'[138px]'}
                marginTop={4}
                image={testimony5}
                name={"Gordon Ramsay"}
                role={"International Chef"}
                text={'"Indonesian cuisine really stimulates the palate. From simple fried rice to richly spiced rendang, every dish has a unique and delicious flavor. The creativity and innovation of Indonesian chefs in using local ingredients are commendable."'}
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
    <div className="w-screen px-[30px]" data-aos="fade-up">
      <h1 className="font-milonga text-[40px] text-primary mb-2">Testimony</h1>
      <h3 className="font-urbanist font-semibold text-primary text-xs flex justify-end mb-5">See More</h3>
      <TestimonyCardMobile
        image={testimony1}
        name={"David Beckham"}
        role={"Former English football player"}
        source={"source: www.youtube.com"}
        description={"\"Indonesia is a beautiful country with a rich culture. The people are very friendly and welcomed me with open arms. I am very impressed with the natural beauty of Indonesia, especially Bali. I will always remember my experience in Indonesia.\""}
      />
      <TestimonyCardMobile
        image={testimony2}
        name={"Mark Zuckerberg"}
        role={"Founder Facebook"}
        source={"source: www.youtube.com"}
        description={"\"I am very impressed with the entrepreneurial spirit of the Indonesian people. They are very resilient and never give up. I am also very impressed with the economic growth of Indonesia. Indonesia has great potential to become a developed country.\""}
      />
      <TestimonyCardMobile
        image={testimony3}
        name={"Beyoncé"}
        role={"singer from the United States"}
        source={"source: www.youtube.com"}
        description={"\"Gamelan is a very beautiful and enchanting music. I am very impressed with the skill of Indonesian gamelan players. Indonesian people are also very friendly and welcomed me with open arms. I will always remember my experience in Indonesia.\""}
      />
    </div>
  )
}

function TestimonyCardMobile({ image, name, role, source, description }) {
  return (
    <div className="w-full  border border-[#C4C4C4] rounded-xl p-4 mb-5" data-aos="fade-up">
      <div className="flex justify-between w-full ">
        <div className="w-[90vw] me-3">
          <img className="bg-black w-12 h-12 rounded-full object-cover" src={image} alt="" />
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
