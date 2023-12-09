import React from 'react'
import { bgGallery5 } from '../../utils/images'
import AnswerComponent from './AnswerComponent'
import IndicatorBar from './IndicatorBar'

const QuizComponent = () => {
  return (
    <div className='w-screen h-screen relative flex flex-col items-center'>
      <img src={bgGallery5} alt="" className='w-full h-full' />
      <div className='absolute top-28'>
        <p className='font-milonga text-[54px] text-white text-center mb-[141px] '>Quiz Budaya</p>
        <p className='font-urbanist text-4xl w-[743px] text-white text-center '>Prestasi apa saja yang diraih oleh baju adat khas Jawa Tengah?</p>
        <div className='mt-[134px]'>
          <AnswerComponent/>
        </div>
        <div className='mt-[137px]'>
           <IndicatorBar/>
        </div>
       
      </div>
     
    </div>
  )
}

export default QuizComponent
