import React from 'react'
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


