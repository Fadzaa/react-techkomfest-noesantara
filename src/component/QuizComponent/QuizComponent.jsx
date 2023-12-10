import React from 'react'
import { bgGallery5 } from '../../utils/images'
import AnswerComponent from './AnswerComponent'
import IndicatorBar from './IndicatorBar'

const QuizComponent = () => {
  return (
    <div className='w-screen h-screen relative flex flex-col items-center'>
      <img src={bgGallery5} alt="" className='w-full h-full object-cover' />
      <div className='absolute top-20 lg:top-28'>
        <p className='font-milonga  text-white text-center text-[32px] lg:text-[54px] lg:top-[110px]'>Quiz Budaya</p>
        <p className='font-urbanist text-xl mt-[47px] w-[332px] lg:text-4xl lg:w-[743px] lg:mt-[141px] text-white text-center '>Prestasi apa saja yang diraih oleh baju adat khas Jawa Tengah?</p>
        <div className='mt-[54px] lg:mt-[134px]'>
          <AnswerComponent/>
        </div>
        <div className='mt-[70px] lg:mt-[137px]'>
           <IndicatorBar/>
        </div>  
      </div>
     
    </div>
  )
}

export default QuizComponent
