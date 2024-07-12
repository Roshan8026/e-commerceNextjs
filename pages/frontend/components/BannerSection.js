import React from 'react'
import Image from 'next/image'
import herob from '../../../public/hero.jpg';



function BannerSection() {
  return (
    <div>
        <div className='banner'>
        <Image
      src={herob}
      alt="Picture of the author"
      style={{
        width: '100%',
        height: '85vh',
      }}
    />
        </div>
      
    </div>
  )
}

export default BannerSection
