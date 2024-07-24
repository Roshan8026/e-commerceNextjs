import React from 'react'
import Image from 'next/image'
import men from '../../../public/wear1.jpg'
import men2 from '../../../public/wear2.jpg'
import Link from 'next/link';

function Wears({flip}) {
  console.log('sdfas',flip);

  if(flip) {
return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex md:flex-row flex-col items-center">
 <div className=" lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
          <div className="lg:ml-8 ml-4">

              <h1 className="text-black text-4xl font-bold lg:mb-8 mb-2">KNITWEAR</h1>
              <p>Hand-Knitting is an integral part of our creative and manufacturing process.</p>
              <p>
              Every season, we work with our all women's community in Jhanjeli, india for<br/>  cart 

              our Knitwear and have been working with them for about 5 year's now.</p>

              <button class=" text-white bg-black border-0 py-2 px-8 lg:my-8 mt-3 focus:outline-none hover:bg-gray-600 rounded text-lg">Learn More</button>
              
          </div>
          {/* <Image
            src={women}
            alt="Picture of the author"
            style={{
              width: '100%',
              height: '100%',
            }}
          />  */}
      {/* <div className='text-center'>
      <Link href="/WomenWears" className="inline-block py-1 px-3 mt-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">WOMEN</Link>

      </div> */}
          </div>

          <div className=" lg:w-full md:w-1/2 w-full lg:mb-10 mb-4">
          <Image
            src={men}
            alt="Picture of the author"
            style={{
              width: '100%',
              height: '',
            }}
          />  
            </div>
         
        </div>
      </section>
          </div>
        )
  } else {
    return (
      <div>
        <section className="text-gray-600 body-font">
    <div className="container mx-auto flex py-4 md:flex-row flex-col items-center">
      <div className=" lg:w-full md:w-1/2 w-full mb-10 md:mb-0 ">
      <Image
        src={men2}
        alt="Picture of the author"
        style={{
          width: '100%',
          height: '',
        }}
      />  
      {/* <div className='text-center'>
      <Link href="/MenWears" className="inline-block py-1 px-3 mt-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">MEN</Link>
  
      </div> */}
  
        </div>
      <div className=" lg:w-full md:w-1/2 w-full lg:mb-10 mb-2 ">
      <div className="lg:ml-8 ml-4 ">
  
  <h1 className="text-black text-4xl font-bold lg:mb-8 mb-3">KNITWEAR</h1>
  <p>Hand-Knitting is an integral part of our creative and manufacturing process.</p>
  <p>
  Every season, we work with our all women's community in Jhanjeli, india for <br/> cart
  
  our Knitwear and have been working with them for about 5 year's now.</p>
  
            <button class=" text-white bg-black border-0 py-2 px-8 lg:my-8 mt-3 focus:outline-none hover:bg-gray-600 rounded text-lg">Learn More</button>
          
      </div>
      {/* <Image
        src={women}
        alt="Picture of the author"
        style={{
          width: '100%',
          height: '100%',
        }}
      />  */}
  {/* <div className='text-center'>
  <Link href="/WomenWears" className="inline-block py-1 px-3 mt-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">WOMEN</Link>
  
  </div> */}
         </div>
    </div>
  </section>
      </div>
    )

  }
}

export default Wears
