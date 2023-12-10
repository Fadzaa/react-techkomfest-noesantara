import React from 'react'

const AnswerComponent = () => {
  return (
    <>
    <div className='flex justify-center items-center lg:mt-9'>
         <div className=' text-white font-urbanist font-semibold text-2xl flex flex-col gap-[19px] lg:grid lg:grid-cols-2 lg:gap-7  '>
        <div><a href="#"><button className='border border-white w-[300px] h-[67px] lg:w-[400px] lg:h-[67px] rounded-xl lg:hover:bg-[#EAF2E2] lg:hover:text-primary lg:hover:border-primary'>A</button></a></div>
        <div><a href="#"><button className='border border-white w-[300px] h-[67px] lg:w-[400px] lg:h-[67px] rounded-xl lg:hover:bg-[#EAF2E2] lg:hover:text-primary lg:hover:border-primary'>B</button></a></div>
        <div><a href="#"><button className='border border-white w-[300px] h-[67px] lg:w-[400px] lg:h-[67px] rounded-xl lg:hover:bg-[#EAF2E2] lg:hover:text-primary lg:hover:border-primary'>C</button></a></div>
        <div><a href="#"><button className='border border-white w-[300px] h-[67px] lg:w-[400px] lg:h-[67px] rounded-xl lg:hover:bg-[#EAF2E2] lg:hover:text-primary lg:hover:border-primary'>D</button></a></div>
    </div>
    </div>
   
    </>
  )
}

export default AnswerComponent 