import React from 'react'

const AnswerComponent = () => {
  return (
    <>
    <div className='flex justify-center items-center mt-9'>
         <div className='grid grid-cols-2 gap-7 text-white font-urbanist font-semibold text-2xl  '>
        <div><a href="#"><button className='border border-white w-[400px] h-[67px] rounded-xl hover:bg-[#EAF2E2] hover:text-primary hover:border-primary'>A</button></a></div>
        <div><a href="#"><button className='border border-white w-[400px] h-[67px] rounded-xl hover:bg-[#EAF2E2] hover:text-primary hover:border-primary'>B</button></a></div>
        <div><a href="#"><button className='border border-white w-[400px] h-[67px] rounded-xl hover:bg-[#EAF2E2] hover:text-primary hover:border-primary'>C</button></a></div>
        <div><a href="#"><button className='border border-white w-[400px] h-[67px] rounded-xl hover:bg-[#EAF2E2] hover:text-primary hover:border-primary'>D</button></a></div>
    </div>
    </div>
   
    </>
  )
}

export default AnswerComponent