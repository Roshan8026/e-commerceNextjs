import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Router from 'next/router'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import "react-tooltip/dist/react-tooltip.css";
import Cookies from 'js-cookie'
import { Tooltip as ReactTooltip } from "react-tooltip";
import logo from '../../public/LogoImage.jpeg';


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
      hamburger.current.classList.toggle('h-0');
      hamburger.current.classList.toggle('h-56');
    }

    return (
      <div>
          <header class="py-3">
      <section class="max-w-5xl mx-auto w-11/12 sm:flex sm:justify-between sm:items-center">
        <div class="flex items-center justify-between sm:block">
          <section class="w-16  border-4 border-black overflow-hidden flex items-center">
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
            class="hamburger rounded-md cursor-pointer py-5 px-4 bg-gray-300 sm:hidden"
          >
            <span />
          </button>
        </div>
        <nav
          ref={hamburger}
          class="overflow-hidden h-0 transition-all duration-300 sm:h-auto"
        >
          <div class="bg-gray-100 rounded-md p-4 border-8 mt-3 text-center sm:bg-transparent sm:p-0 sm:border-none sm:flex sm:m-0 sm:text-left">
            <a
              class="block p-2 font-semibold hover:bg-gray-200 rounded-md"
              href="#"
            >
              SHOP
            </a>
            <a
              class="block p-2 font-semibold hover:bg-gray-200 rounded-md"
              href="#"
            >
              OUR STORY
            </a>
            <a
              class="block p-2 font-semibold hover:bg-gray-200 rounded-md"
              href="#"
            >
              MATERIALS
            </a>
          
          </div>
        </nav>
      </section>
    </header>
      </div>
    )
}
