import React from 'react'
import Image from 'next/image'
import men from '../../../public/men.jpg'
import women from '../../../public/women.jpg'
import Link from 'next/link';

function Wears() {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px- py-12 md:flex-row flex-col items-center">
    <div className=" lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image
      src={men}
      alt="Picture of the author"
      style={{
        width: '100%',
        height: '100%',
      }}
    />  
    <div className='text-center'>
    <Link href="/MenWears" className="inline-block py-1 px-3 mt-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">MEN</Link>

    </div>

      </div>
    <div className=" lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image
      src={women}
      alt="Picture of the author"
      style={{
        width: '100%',
        height: '100%',
      }}
    /> 
<div className='text-center'>
<Link href="/WomenWears" className="inline-block py-1 px-3 mt-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">WOMEN</Link>

</div>
       </div>
  </div>
</section>
    </div>
  )
}

export default Wears
