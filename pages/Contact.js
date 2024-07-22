import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function Contact() {
  return (
    <div>
        <Navbar/>
        <section className="text-gray-600 body-font overflow-hidden px-4 lg:px-20 pt-12 lg:pt-24">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>

      <div className="py-8 flex flex-wrap md:flex-nowrap">
        
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">PHONE</h2>
          <p className="leading-relaxed  pr-5">Our Sales Assistants are available Monday through Sunday, 12:00PM – 8:00PM (IST), excluding holidays.

</p>
        
        </div>
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mt-7">
          <span className="font-semibold title-font text-gray-700">CALL US AT: +8015468175</span>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">LIVE CHAT</h2>
          <p className="leading-relaxed pr-5">Our Sales Assistants are available to chat Monday through Sunday, 12:00PM – 8:00PM (IST), excluding holidays. The option to chat <br/>will become active during these hours once an advisor is available.</p>
         
        </div>
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mt-5">
            <button className="btn bg-gray-200 text-gray-400 px-5 py-4">CHAT UNAVAILABLE</button>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap"> 
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">WHATSAPP US</h2>
          <p className="leading-relaxed pr-5">Our Sales Assistants are available to answer your your Whatsapp messages Monday through Sunday, 12:00PM – 8:00PM (IST), excluding holidays.</p>
        
        </div>
        <a href="https://wa.me/8015468175">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mt-5">
        <button className="btn bg-black text-white px-5 py-4">MESSAGE US</button>
        </div></a>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap"> 
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">EMAIL US</h2>
          <p className="leading-relaxed pr-5">For any queries regarding orders, payments, sourcing and collaboration, click ‘Email Us’ to provide your details and contact information.</p>
        
        </div>
        <a href="mailto:info@crclestudio.com">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mt-5">
        <button className="btn bg-black text-white px-5 py-4">EMAIL US</button>
        </div></a>
      </div>
    </div>
    <hr className="mt-[45px]"/>
  </div>
</section>
        <Footer/>
      
    </div>
  )
}

export default Contact
