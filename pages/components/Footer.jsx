import Image from 'next/image'
import React ,{useState} from 'react'
import Link from 'next/link'
import { BiPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  const [activeAccordion, setActiveAccordion] = useState();

  const toggleAccordion = (index) => {
    setActiveAccordion(index === activeAccordion ? -1 : index);
  };
    return (

      <div>
        <footer className="text-white body-font px-2 bg-black">
        <section className="text-gray-600 body-font">
  <div className="container px-5 mx-auto border-b">
    <div className="w-full mx-auto">
    
      <div className=" mt-10">
        <div className="w-full text-center text-white sm:pr-8 sm:py-8">
         <p>Dhan Mill Compound Shed No. 8

Chhatarpur Hills, New Delhi

</p>
<span className="font-bold text-white">Store Locator</span>
     
        </div>
    
      </div>
    </div>
  </div>
</section>
{/* mobile section */}
<div id="accordionExample">
      {/* First Accordion Item */}
      <div className=" border border-neutral-200 bg-black dark:border-neutral-600 dark:bg-body-dark mt-4  lg:hidden md:hidden xl:hidden">
        <h2 className="mb-0" id="headingOne">
          <button
            className={`group relative flex w-full items-center border-b bg-black px-5 py-4 text-left text-base transition ${activeAccordion === 0 ? 'bg-black text-primary shadow-border-b' : 'dark:bg-body-dark text-white'} focus:outline-none`}
            type="button"
            onClick={() => toggleAccordion(0)}
            aria-expanded={activeAccordion === 0}
            aria-controls="collapseOne"
          >
            Assistance
            <span className={`-me-1 ms-auto h-5 w-5 shrink-0 rotate-${activeAccordion === 0 ? '0' : '-180'} transition-transform duration-200 ease-in-out`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id="collapseOne"
          className={`px-5 py-2 ${activeAccordion === 0 ? 'visible' : 'hidden'}`}
          aria-labelledby="headingOne"
        >
         <p>Shipping and Returns</p>
         <p>Payment Methods</p>
        </div>
      </div>

      {/* Second Accordion Item */}
      <div className="border border-neutral-200 bg-black dark:border-neutral-600 dark:bg-body-dark mt-3  lg:hidden md:hidden xl:hidden">
        <h2 className="mb-0" id="headingTwo">
          <button
            className={`group relative flex w-full items-center border-b bg-black px-5 py-4 text-left text-base  transition ${activeAccordion === 1 ? 'bg-black text-primary shadow-border-b' : 'text-white'} focus:outline-none`}
            type="button"
            onClick={() => toggleAccordion(1)}
            aria-expanded={activeAccordion === 1}
            aria-controls="collapseTwo"
          >
          Contact Us
            <span className={`-me-1 ms-auto h-5 w-5 shrink-0 rotate-${activeAccordion === 1 ? '0' : '-180'} transition-transform duration-200 ease-in-out`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className={`px-5 py-2 ${activeAccordion === 1 ? 'visible' : 'hidden'}`}
          aria-labelledby="headingTwo"
        >
        <p>Call Us</p>
        <p>Email Us</p>
        <p>Watsapp Us</p>
        </div>
      </div>

      {/* Third Accordion Item */}
      <div className=" border border-neutral-200 bg-black dark:border-neutral-600 dark:bg-body-dark mt-3  lg:hidden md:hidden xl:hidden">
        <h2 className="mb-0" id="headingThree">
          <button
            className={`group relative flex w-full items-center border-b bg-black px-5 py-4 text-left text-base transition ${activeAccordion === 2 ? 'bg-black text-primary shadow-border-b' : 'text-white'} focus:outline-none`}
            type="button"
            onClick={() => toggleAccordion(2)}
            aria-expanded={activeAccordion === 2}
            aria-controls="collapseThree"
          >
          company
            <span className={`-me-1 ms-auto h-5 w-5 shrink-0 rotate-${activeAccordion === 2 ? '0' : '-180'} transition-transform duration-200 ease-in-out`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id="collapseThree"
          className={`px-5 py-2 ${activeAccordion === 2 ? 'visible' : 'hidden'}`}
          aria-labelledby="headingThree"
        >
        <p>About Us</p>
        <p>The Resurrected Line </p>
        <p>Confessional</p>
        </div>
      </div>

      {/* forth  */}
      <div className=" border border-neutral-200 bg-black dark:border-neutral-600 dark:bg-body-dark mt-3  lg:hidden md:hidden xl:hidden">
        <h2 className="mb-0" id="headingFour">
          <button
            className={`group relative flex w-full items-center border-b bg-black px-5 py-4 text-left text-base transition ${activeAccordion === 3 ? 'bg-black text-primary shadow-border-b' : 'text-white'} focus:outline-none`}
            type="button"
            onClick={() => toggleAccordion(3)}
            aria-expanded={activeAccordion === 3}
            aria-controls="collapseThree"
          >
       Follow
            <span className={`-me-1 ms-auto h-5 w-5 shrink-0 rotate-${activeAccordion === 3 ? '0' : '-180'} transition-transform duration-200 ease-in-out`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id="collapseFour"
          className={`px-5 py-2 ${activeAccordion === 3 ? 'visible' : 'hidden'}`}
          aria-labelledby="headingFour"
        >

          <FaInstagram className="text-2xl mb-3" />
        <IoLogoLinkedin className="text-2xl mb-3"/>
        <IoLogoYoutube className="text-2xl mb-3"/>
        </div>
      </div>
    </div>



  <div className="container px-5 py-8 mx-auto hidden lg:block md:block xl:block bg-black">
    <div className="flex flex-wrap text-left -mb-10 -mx-4 ">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Assistance</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="/Contact" className="ttext-white hover:text-orange-500">Contact Us</Link>
          </li>
          <li>
            <a className="text-white hover:text-orange-500">Shipping, Returns and Payment Methods</a>
          </li>
          <li>
            <a className="text-white hover:text-orange-500">Returns</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Contact Us</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-orange-500 "><BiPhoneCall className="mb-2 text-2xl"/></a>
          </li>
          <li>
            <a className="text-white hover:text-orange-500 "><TfiEmail className="mb-2 text-2xl" /></a>
          </li>
          <li>
            <a className="text-white hover:text-orange-500"><FaWhatsapp className="mb-2 text-2xl"/></a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Company</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-orange-500">About Us</a>
          </li>
          <li>
            <a className="text-white hover:text-orange-500">The Resurrected Line</a>
          </li>
          <li>
            <a className="text-white hover:text-orange-500">Confessional</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Follow</h2>
        <nav className="list-none mb-10">
        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="ttext-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
        </nav>
      </div>
   
    </div>
  </div>

  <div className="bg-black mt-3 border-t">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" className="text-text ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-white text-sm">Enamel pin tousled raclette tacos irony</span>
    </div>
  </div>
</footer>
      </div>

    )
}
