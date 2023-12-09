import React from 'react'

const IndicatorBar = () => {
  return (
    <>
    <div className='flex gap-3 justify-center items-center'>
        <div className='w-16 h-2 bg-green-400 rounded-lg'></div>
        <div className='w-16 h-2 bg-green-400 rounded-lg'></div>
        <div className='w-16 h-2 bg-white rounded-lg'></div>
        <div className='w-16 h-2 bg-white rounded-lg'></div>
    </div>
    </>
  )
}

export default IndicatorBar