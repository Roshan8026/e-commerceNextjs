import React, { useState, useRef } from 'react';
import Image from 'next/image'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import heroImg1 from '../../../public/banner.jpg';
import heroImg2 from '../../../public/hero.jpg';
import heroImg3 from '../../../public/hero2.jpg';



export default function Intro() {

  return (
  <div>
  
  <Carousel>
                <div>
                <Image
      src={heroImg1}
      alt="Picture of the author"
      style={{
        width: '100%',
        height: '85vh',
      }}
    />
                </div>
                <div>
                <Image
      src={heroImg2}
      alt="Picture of the author"
      style={{
        width: '100%',
        height: '85vh',
      }}
    />
                </div>
                <div>
                <Image
      src={heroImg3}
      alt="Picture of the author"
      style={{
        width: '100%',
        height: '85vh',
      }}
    />
                </div>
            </Carousel>
   

  </div>
  )
}
