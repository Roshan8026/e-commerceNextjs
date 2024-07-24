import React from 'react'
import Image from 'next/image'
import herob from '../../../public/footer-top-img.jpg';



function BannerSection() {
  return (
    <div>
        <div className='banner'>
        <Image
      src={herob}
      alt="Picture of the author"
      style={{
        width: '100%',
       
      }}
    />
        </div>
      
    </div>
  )
}

export default BannerSection
