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
import { PiUsersThreeFill } from "react-icons/pi";
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

    function toggleMenu() {
      hamburger.current.classNameList.toggle('h-0');
      hamburger.current.classNameList.toggle('h-56');
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>
          <header className="py-3 z-50  sticky">
      <section className="max-w-8xl mx-auto w-11/12 sm:flex sm:justify-between sm:items-center z-50">
        <div className="flex items-center justify-between sm:block"> 
          <section className="w-20 border-4 border-black overflow-hidden flex items-center">
          <Image
      src={logo}
      alt="Picture of the author"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
          </section>
          <button
            onClick={toggleMenu}
            className="hamburger rounded-md cursor-pointer py-5 sm:hidden"
          >
   <FaBarsStaggered />
          </button>
        </div>
        <nav
          ref={hamburger}
          className="overflow-hidden h-0 transition-all duration-300 sm:h-auto"
        >
          <div className="bg-gray-100 rounded-md p-4 border-8 mt-3 text-center sm:bg-transparent sm:p-0 sm:border-none sm:flex sm:m-0 sm:text-left">
              <a
              className="block p-2 font-semibold hover:bg-gray-200 rounded-md flex text-sm"  onClick={toggleDropdown}
              href="#" 
            >
             
              {isOpen ? 'SHOP' :'SHOP'}
              <MdKeyboardArrowDown className="mt-1 ml-2" />
            </a>
            {isOpen && (
 <div className="absolute right-100 mt-10 rounded-md shadow-lg bg-gray-200 w-1/6">
 <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">ALL</a>
   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">T-SHIRT</a>
   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">SHIRT</a>
   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">BOTTOM</a>
   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">BAG</a>
 </div>
</div>

            )}
             
            <a
              className="block p-2 font-semibold hover:bg-gray-200 rounded-md text-sm"
              href="#"
            >
              OUR STORY
            </a>
            <a
              className="block p-2 font-semibold hover:bg-gray-200 rounded-md text-sm"
              href="#"
            >
              MATERIALS
            </a>
       
            
       <div className="flex  justify-center mt-1">
            <a className="block p-2 font-semibold text-gray-500"  href="#">
            <IoSearch/>

          </a>
            <a className="block p-2 font-semibold text-gray-500"  href="#">
            <PiUsersThreeFill/>

          </a>
       
          <a className="block p-2 font-semibold text-gray-500"  href="#">
          <HiShoppingBag/>
          </a>
          </div>
          </div>
        </nav>
      </section>
    </header>
      </div>
    )
}
