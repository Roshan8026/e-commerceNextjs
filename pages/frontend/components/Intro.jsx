import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import heroImg1 from '../../../public/banner.jpg';
import heroImg2 from '../../../public/hero.jpg';
import heroImg3 from '../../../public/hero2.jpg';
import { getBannerData} from '@/services/admin'

export async function getStaticProps() {
    const data = await getBannerData() || [];

    return {
        props: { data }
    }

}

export default function Intro({ data }) {
const [finalData, setFinalData] = useState(data);

    useEffect(() => {
            getBannerData().then((newData) => {
                setFinalData(newData);
            });
    }, []);

  console.log('finalData', finalData);

  return (
  <div>
  
  <Carousel>

                {/* <div>
                  <Image
                      src={heroImg1}
                      alt="Picture of the author"
                      style={{
                        width: '100%',
                        height: '95vh',
                      }}
                    />
                </div>
                <div>
                <Image
                    src={heroImg2}
                    alt="Picture of the author"
                    style={{
                      width: '100%',
                      height: '95vh',
                    }}
                  />
                </div>
                <div>
                <Image
                    src={heroImg3}
                    alt="Picture of the author"
                    style={{
                      width: '100%',
                      height: '95vh',
                    }}
                  />
                </div> */}

                 {finalData?.map((image, index) => (
                    <div key={index}>
                        <Image
                            src={image.image} // Assuming `image` contains a `url` property with image path
                            alt={`Image ${index + 1}`}
                            layout="responsive"
                            width={1920} // Set the width according to your image or container
                            height={1080} // Set the height according to your image or container
                            style={{
                                width: '100%',
                                height: '95vh',
                            }}
                        />
                    </div>
                ))}
            </Carousel>
   

  </div>
  )
}
