import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OrderCard from './components/OrderCard'
import { get_my_order } from '@/services/admin'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import { BsCartPlusFill } from 'react-icons/bs'
import CheckoutForm from './components/CheckoutForm';


export default function myOrder() {
    const [orderItem, setOrderItem] = useState([]);
    const [userID, setUserID] = useState(undefined);
    const [showCheckout, setShowCheckout] = useState(false);

    const getLatestCartData = async () => {
        const getUser = localStorage.getItem('user')
        const user = JSON.parse(getUser);
        setUserID(user?._id);
        const data = await get_my_order('668ed00f6fb0bc84a38fd902');
        console.log('my order',data);
        setOrderItem(data);
    }
  
    useEffect(() => {
        getLatestCartData();
    }, [])

    console.log('orderItem',orderItem);

    


    return (
        <div className='w-full h-screen bg-slate-900'>
            <Navbar pos={""} />
            <div className='w-full h-full bg-white flex flex-col lg:px-4 px-0 py-24'>
                <h1 className='text-2xl font-bold mb-4 text-center mt-4'>MY Order</h1>
                {
                    orderItem?.length === 0 ? (
                        <div className='w-full h-full overflow-auto px-4 py-2 flex items-center justify-center flex-col'>
                            <h1 className='text-2xl font-bold mb-4 '>No Order Found</h1>
                            <Link href='/frontend/landing' className='w-40 h-12 bg-orange-600 text-xl font-bold text-white flex items-center justify-center text-center rounded-xl'><BsCartPlusFill className='text-xl' />Start Shopping</Link>
                        </div>
                    ) : (
                        <div className='w- h-full  overflow-auto px-4 py-2'>
                            {
                                orderItem?.map((item) => {
                                    return (
                                        <OrderCard item={item} key={item._id} userID={userID} reupdate={getLatestCartData} />
                                    )
                                })
                            }
                        </div>
                    )
                }
{/* 
                {cartItem?.length === 0 ? <> </> : (
                <div className='w-full lg:w-1/4 ml-auto p-2 flex  flex-col justify-center mt-4'>
                    <h1 className='uppercase text-2xl font-bold py-3 border-b-2 border-gray-900 '>Total Price</h1>
                    <p className='text-2xl font-semibold p-2'>₹ {totalPrice}</p>
                    <button className='text-lg font-semibold bg-orange-600 text-white uppercase px-4  py-2 cursor-pointer border-2 border-orange-600 rounded-xl hover:bg-transparent hover:text-black duration-700 transition' onClick={() => setShowCheckout(true)}>CheckOut</button>
                </div>
                )} */}
            </div>
            <Footer />
            <ToastContainer />
        </div >
    )
}
