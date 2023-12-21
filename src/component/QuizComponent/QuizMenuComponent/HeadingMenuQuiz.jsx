import React from 'react'

const HeadingMenuQuiz = () => {
  return (
    <>
     <div className='flex flex-col justify-center mt-5'>
     <h1 className='text-center font-milonga text-primary text-[36px] tracking-widest sm:text-[55px] md:text-[68px] lg:text-[70px]'>Interactive Quiz</h1>
        <div className="flex flex-row mx-auto items-center gap-6   lg:flex lg:flex-row lg:justify-center lg:items-center   lg;gap-6">
            <div className="bg-black w-6 h-[1px]"></div>
            <p className="font-yiBaiti text-xl tracking-widest lg:text-2xl text-black">QUIZ INDONESIA</p>
            <div className="bg-black w-6 h-[1px]"></div>
          </div>
     </div>
    </>
  )
}

export default HeadingMenuQuiz;