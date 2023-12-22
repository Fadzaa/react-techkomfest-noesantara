import React from 'react';
import {davidBechkam, markZuckeberg, people} from '../../../utils/images.js';
import TestimonyCard from '../../../global_component/TestimonyCard.jsx';

const LandingComponentTestimony = () => {
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
              <div className="flex flex-col items-left w-[294px] h-[429px] border-2 border-BorderGray rounded-3xl pt-0  ">
                <img src={davidBechkam} className="w-full h-full object-fill rounded-3xl" />
                <div className="mx-auto px-6 pb-8">
                  <p className="mt-4 text-sm">"Indonesia adalah negara yang indah dengan budaya yang kaya. Masyarakatnya sangat ramah dan menyambut saya dengan tangan terbuka. Saya sangat terkesan dengan keindahan alam Indonesia, terutama Bali. Saya akan selalu mengingat pengalaman saya di Indonesia,"</p>
                  <div className="font-urbanist text-sm mt-[28px]">
                    <p className="font-bold">David Beckham</p>
                    <p className="text-TextSecondary">Mantan pemain sepak bola inggris</p>
                  </div>
                </div>
              </div>
              <TestimonyCard width={'[294px]'} text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam'} />
            </div>
            <div>
              <div className="flex flex-row gap-5 border-BorderGray border-2 rounded-3xl w-[595px]">
                <div>
                  <img src={markZuckeberg} alt="people" className="w-[500px] h-[254px] rounded-3xl object-cover" />
                </div>
                <div className="flex flex-col  pt-4 ">
                  <p className="text-sm w-[225px]">"Saya sangat terkesan dengan semangat kewirausahaan masyarakat Indonesia. Mereka sangat gigih dan tidak pernah menyerah. Saya juga sangat terkesan dengan pertumbuhan ekonomi Indonesia. Indonesia memiliki potensi yang sangat besar untuk menjadi negara maju,"</p>
                  <div>
                    <p className="font-bold">Mark Zuckeberg</p>
                    <p className="text-TextSecondary">Founder Facebook</p>
                  </div>
                </div>
              </div>
              <TestimonyCard
                width={'[595px]'}
                height={'[185px]'}
                marginTop={4}
                text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
              />
              <TestimonyCard
                width={'[595px]'}
                height={'[185px]'}
                marginTop={4}
                text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
              />
            </div>

            <div>
              <TestimonyCard width={'[323px]'} height={'[241px]'} text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt '} />
              <TestimonyCard
                width={'[323px]'}
                height={'[241px]'}
                marginTop={4}
                text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt '}
              />
              <TestimonyCard width={'[330px]'} height={'[138px]'} marginTop={4} text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor d'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingComponentTestimony;
