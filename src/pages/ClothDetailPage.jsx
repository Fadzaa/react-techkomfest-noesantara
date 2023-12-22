import React from 'react'
import ClothDetailHero from '../component/DetailComponent/ClothDetailComponent/ClothDetailHero'
import ClothDetailTraditional from '../component/DetailComponent/ClothDetailComponent/ClothDetailTraditional'
import ClothDetailWorld from '../component/DetailComponent/ClothDetailComponent/ClothDetailWorld'

const ClothDetailPage = () => {
  return (
    <div className='relative'>
        <ClothDetailHero/>
        <ClothDetailWorld/>
        <ClothDetailTraditional/>
    </div>
  )
}

export default ClothDetailPage