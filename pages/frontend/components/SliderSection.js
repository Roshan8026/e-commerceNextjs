import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';


// Import your images
import shirt2 from '../../../public/shirt2.jpg';
import tshirts from '../../../public/tshirts.jpg';
import bag2 from '../../../public/bag2.jpg';
import bottoms from '../../../public/bottoms.jpg';

function SliderSection({product}) {

  console.log('sdaf',product);
  // Define your slide data
  const slides = [
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

  const settings = {
    infinite: true,
    speed: 100,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className=" mb-1 text-4xl uppercase font-bold text-center">
      New Arrivals
      </h1>

      <Slider {...settings}>
        {product.map((slide, index) => (
          <Link href={`/frontend/components/products/${slide._id}`}>
          <div key={index} className="p-4 w-full">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-all duration-500 hover:scale-110 shadow-lg">
              <Image
                src={slide.front_image}
                alt="Slider Image"
                width={500}
                height={200}
                layout="responsive"
              />
              <div className="p-6">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {slide.category}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {slide.title}
                </h1> */}
                <p className="leading-relaxed mb-3">{slide.name}</p>
                <p className="leading-relaxed mb-3">{slide.description}</p>
                <p className="leading-relaxed mb-3">₹{slide.price}</p>
                {/* <div className="flex items-center flex-wrap">
                  <Link href="/ProductDetails" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    $44
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  
                </div> */}
              </div>
            </div>
          </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default SliderSection;
