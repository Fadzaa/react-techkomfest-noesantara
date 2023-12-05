import React from 'react'

function LandingComponentCulture() {
  return (
    <div className="w-screen h-screen bg-white flex py-24 px-36 items-center">
      <div>
        <h1 className="font-milonga text-primary text-[84px]">Culture</h1>
        <h3 className="font-yiBaiti tracking-widest text-primaryText mb-10 ps-3 mt-[-15px]">
          INDONESIA CULTURES
        </h3>
        <p className="font-urbanist font-normal ps-3 text-2xl text-primaryText w-96 leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
          nec gravida ipsum pulvinar vel non.
        </p>
      </div>
      <div className="flex w-full ms-16">
              <div className="w-[384px] h-[473px] rounded-2xl flex flex-col justify-end relative overflow-hidden">
                  {/* temporary image template */}
                  <div className='bg-yellow-100 h-full w-full absolute'></div> 
                  
          <div className="w-[280px] h-24 bg-[#343434] mb-8 px-7 py-2 absolute">
            <h1 className="font-urbanist font-medium text-[32px] leading-10 text-white">
              Traditional Food
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingComponentCulture