import React from 'react'
import Navbar from '../../../global_component/Navbar'
import CardMenuQuiz from './CardMenuQuiz'
import HeadingMenuQuiz from './HeadingMenuQuiz'

export const QuizMenuComponent = () => {
  return (
    <div>
        <HeadingMenuQuiz/>
        <div className='relative'>
        <CardMenuQuiz/>
        </div>
    </div>
  )
}


