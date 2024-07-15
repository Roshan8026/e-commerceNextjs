import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Router from 'next/router'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import "react-tooltip/dist/react-tooltip.css";
import Cookies from 'js-cookie'
import { Tooltip as ReactTooltip } from "react-tooltip";
import logo from '../../public/LogoImage.jpeg';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";





export default function Navbar({pos}) {
    const token = Cookies.get('token');
    const [curUser, setCurUser] = useState(false);
    const [scrolled , isScrolled]  = useState(false);

    useEffect(() => {
        if (token) {
            setCurUser(true)
        }
    }, [token])


    const logout = () => {
        Cookies.remove('token')
        localStorage.removeItem('user')
        localStorage.clear;
        window.location.reload();
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                isScrolled(true)
            } else {
                isScrolled(false)
            }
        })
        return () => {
            window.removeEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    isScrolled(true)
                } else {
                    isScrolled(false)
                }
            })
        }
    }, [scrolled])

    const hamburger = React.useRef(null);

    // function toggleMenu() {
    //   hamburger.current.classNameList.toggle('h-0');
    //   hamburger.current.classNameList.toggle('h-56');
    // }

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  

    return (
      <div>
        <header class="bg-white fixed top-0 w-full shadow-md z-50 hidden lg:flex xl:flex md:flex">
        <nav class="container mx-auto px-6 py-3 ">
            <div class="flex justify-between items-center">
                <Image
      src={logo}
      alt="Picture of the author"
      style={{
        width: '5%',
        height: '5%',
      }}
      onClick={() => Router.push('/frontend/landing')}
    />

<div className="md:hidden  flex items-center">
            <button className="text-gray-800 focus:outline-none" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
               
                <div  className={`lg:flex items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
                  
                <a
              className="text-gray-800 hover:text-blue-600 mx-3 flex text-sm"  onClick={toggleDropdown}
              href="#" 
            >
             
              {isOpen ? 'SHOP' :'SHOP'}
              <MdKeyboardArrowDown className="mt-1 ml-2" />
            </a>
            {isOpen && (
            <div className="absolute right-100 mt-10 top-10 rounded-md shadow-lg bg-gray-200 w-1/6">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">ALL</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">T-SHIRT</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">SHIRT</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">BOTTOM</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">BAG</a>
            </div>
            </div>

            )}         
                       <a href="#" class="text-gray-800 hover:text-blue-600 mx-3 text-sm">OUR STORY
                    </a>
                    <a href="#" class="text-gray-800 hover:text-blue-600 mx-3 text-sm">MATERIALS</a>
                    <div className="flex  justify-center mt-1">
            {/* <a className="block p-2 font-semibold text-gray-500 lg:block md:block sm:none"  href="#">
            <IoSearch/>

          </a> */}
            <a className="block p-2 font-semibold text-gray-500"  href="#">
            <FaUser />

          </a>
       
          <>
          <AiOutlineShoppingCart onClick={()  => Router.push('/frontend/cart')}  className='text-2xl  mx-4 hover:text-orange-600 transition-all duration-500 cursor-pointer' />
                {
                    curUser ? <BiLogOut id="logout" className='text-2xl  mx-4  hover:text-orange-600 transition-all duration-500 cursor-pointer' onClick={logout} /> : <BiLogIn id="login" className='text-2xl  mx-4  hover:text-orange-600 transition-all duration-500 cursor-pointer' onClick={() => Router.push('/login')}  />
                }

            <ReactTooltip
                anchorId="login"
                place="bottom"
                variant="info"
                content="LOGIN"
            />
            <ReactTooltip
                anchorId="logout"
                place="bottom"
                variant="info"
                content="LOGOUT"
            />
          </>
          </div>
                </div>
              
            </div>
          
        </nav>
    </header>


    {/*mobile header  */}
 
    <header className="bg-white fixed top-0 w-full shadow-md z-50 flex lg:hidden md:hidden">
  <nav className="container mx-auto px-2 py-3  items-center justify-between">
    <div className="flex items-center justify-between">
    <div className="md:hidden">
      <button className="text-gray-800 focus:outline-none" onClick={toggleMenu}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          )}
        </svg>
      </button>
    </div>
      <Image
        src={logo}
        alt="Logo"
        style={{
          width: '15%',
          height: 'auto', 
        }}
      />
     <div>
     <a className="block p-2 font-semibold text-gray-500 text-2xl" href="#">
          <HiShoppingBag />
        </a>
     </div>
    </div>


    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
      
      <div className="flex flex-col mt-4">
      <a
              className="text-gray-800 hover:text-blue-600 flex my-2 "  onClick={toggleDropdown}
              href="#" 
            >
             
              {isOpen ? 'SHOP' :'SHOP'}
              <MdKeyboardArrowDown className="mt-1 ml-2" />
            </a>
            {isOpen && (
 <div className="absolute right-100 mt-10 top-24 rounded-md shadow-lg bg-gray-200 w-1/4">
 <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">ALL</a>
   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">T-SHIRT</a>
   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">SHIRT</a>
   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">BOTTOM</a>
   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">BAG</a>
 </div>
</div>

            )} 
       
        <a href="#" className="text-gray-800 hover:text-blue-600  my-2">OUR STORY</a>
        <a href="#" className="text-gray-800 hover:text-blue-600  my-2">MATERIALS</a>
      </div>


      {/* <div className="flex ">
        <a className="block p-2 font-semibold text-gray-500" href="#">
          <IoSearch />
        </a>
        <a className="block p-2 font-semibold text-gray-500" href="#">
        <FaUser />
        </a>
        <a className="block p-2 font-semibold text-gray-500" href="#">
          <HiShoppingBag />
        </a>
      </div> */}
    </div>
  </nav>
</header>

      </div>
    )
}
