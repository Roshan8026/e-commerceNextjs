import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CartCard from './components/CartCard'
import { get_cart_data } from '@/services/admin'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import { BsCartPlusFill } from 'react-icons/bs'


export default function cart() {
    const [cartItem, setCartItem] = useState([]);
    const [userID, setUserID] = useState(undefined);

    const getLatestCartData = async () => {
        const getUser = localStorage.getItem('user')
        const user = JSON.parse(getUser);
        setUserID(user?._id);
        const data = await get_cart_data(user?._id);
        setCartItem(data);
    }

    useEffect(() => {
        getLatestCartData();
    }, [])


    // calculating Price 
    let totalPrice = 0;
    for (let i = 0; i < cartItem.length; i++) {
        const item = cartItem[i];
        
        const itemPrice = parseInt(item.productPrice) * parseInt(item.productQuantity);
        totalPrice += itemPrice;
    }


    return (
        <div className='w-full h-screen bg-slate-900'>
            <Navbar pos={""} />
            <div className='w-full h-full bg-white flex flex-col lg:px-4 px-0 py-24'>
                <h1 className='text-2xl font-bold mb-4 text-center mt-4'>MY CART ITEMS</h1>
                {
                    cartItem?.length === 0 ? (
                        <div className='w-full h-full overflow-auto px-4 py-2 flex items-center justify-center flex-col'>
                            <h1 className='text-2xl font-bold mb-4 '>No Items in Cart</h1>
                            <Link href='/frontend/landing' className='w-40 h-12 bg-orange-600 text-xl font-bold text-white flex items-center justify-center text-center rounded-xl'><BsCartPlusFill className='text-xl' />Start Shopping</Link>
                        </div>
                    ) : (
                        <div className='w- h-full  overflow-auto px-4 py-2'>
                            {
                                cartItem?.map((item) => {
                                    return (
                                        <CartCard item={item} key={item._id} userID={userID} reupdate={getLatestCartData} />
                                    )
                                })
                            }
                        </div>
                    )
                }


                <div className='w-full lg:w-1/4 ml-auto p-2 flex  flex-col justify-center mt-4'>
                    <h1 className='uppercase text-2xl font-bold py-3 border-b-2 border-gray-900 '>Total Price</h1>
                    <p className='text-2xl font-semibold p-2'>$ {totalPrice}</p>
                    <button className='text-lg font-semibold bg-orange-600 text-white uppercase px-4  py-2 cursor-pointer border-2 border-orange-600 rounded-xl hover:bg-transparent hover:text-black duration-700 transition'>CheckOut</button>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div >
    )
}
