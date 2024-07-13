import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import shirt2 from '../public/shirt2.jpg'
import Navbar from './components/Navbar';
import Footer from './components/Footer';






function ProductDetails() {
 
  return (
    <div>
      <Navbar/>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-25 bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
          
            <h2 className="text-gray-900 text-lg title-font font-medium">ALCHEMICAL SYMBOL SHIRT</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Featuring motifs derived from Wassily Kadinsky’s synesthetic interpretation of alchemy, colour and spirituality. Crafted in Cotton Twill.</p>
            <h2 className="text-gray-900 text-sm title-font font-medium mt-4">
            Delivery timeline for this piece is 2-3 weeks.</h2>

          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
          <Image
                src={shirt2}
                alt="Image"
                width={500}
                height={200}
              />
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-25 bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-gray-900 text-lg title-font font-medium">₹8,500</h2>
          </div>
          <div className="flex-grow">
            <div className="flex gap-8 text-sm">
                <p>XS</p>
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
                <p>XXL</p>
                <p>XXXL</p>
            </div>
            <button className=" mt-8 text-white bg-black border-0 py-2 w-full text-center focus:outline-none hover:bg-gray-600 rounded text-sm font-bold">ADD TO CARD</button>

            <a className="mt-3 text-indigo-500 inline-flex items-center">SIZE GUID 
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>

    </div>
  );
}

export default ProductDetails;
