import React from 'react'
import Image from 'next/image'
import men from '../../../public/men.jpg'
import women from '../../../public/women.jpg'


function Wears() {
  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div class=" lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image
      src={men}
      alt="Picture of the author"
      style={{
        width: '100%',
        height: '100%',
      }}
    />  
    <div className='text-center'>
    <span class="inline-block py-1 px-3 mt-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest center">MENSWEAR</span>

    </div>

      </div>
    <div class=" lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image
      src={women}
      alt="Picture of the author"
      style={{
        width: '100%',
        height: '100%',
      }}
    /> 
<div className='text-center'>
<span class="inline-block py-1 px-3 mt-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">WOMENSWEAR</span>

</div>
       </div>
  </div>
</section>
    </div>
  )
}

export default Wears
