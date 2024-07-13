
import React from 'react';
import Image from 'next/image';

import shirt2 from '../public/shirt2.jpg';
import tshirts from '../public/tshirts.jpg';
import bag2 from '../public/bag2.jpg';
import bottoms from '../public/bottoms.jpg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const MenWears = () => {

  const items = [
    {
      image: shirt2,
      category: 'Category 1',
      title: 'Shirt',
      description: 'Men Check Shirt',
    },
    {
      image: tshirts,
      category: 'Category 2',
      title: 'T-Shirt',
      description: ' Men Plan T-Shirt',
    },
    {
      image: bag2,
      category: 'Category 3',
      title: 'Bag',
      description: 'Latest Bag',
    },
    {
      image: bottoms,
      category: 'Category 4',
      title: 'Bottoms',
      description: 'Bottoms design',
    },
  ];

  return (
    <>
    <Navbar/>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map((item, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                src={item.image}
                alt="Slider Image"
                width={500}
                height={200}
                layout="responsive"
              />         
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mt-3">{item.title}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2>
                <p className="leading-relaxed text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap -m-4">
          {items.map((item, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                src={item.image}
                alt="Slider Image"
                width={500}
                height={200}
                layout="responsive"
              />         
                     <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mt-3">{item.title}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2>
                <p className="leading-relaxed text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
        <Footer/>
        </>
  );
};

export default MenWears;
