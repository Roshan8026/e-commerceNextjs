import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { delete_cart_data, update_cart_data } from '@/services/admin'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function OrderCard({ item, userID, reupdate }) {

    const [Curquantity, setCurQuantity] = useState(1);

    useEffect(() => {
        setCurQuantity(item.productQuantity)
        },[])
   
        console.log('sd',item);


    const delete_cart = async (data) => {
        console.log('data',data);
        try {
            const deleteCart = await delete_cart_data(data);
                console.log('deleteCart',deleteCart)
                if(deleteCart.error) {
                    toast.error(deleteCart.error)
                } else {
                    toast.success(deleteCart.msg)
                }
            } catch (error) {
                console.log(error.response.data.error)
                toast.error(error.response.data.error)
            } 
    }


    const updateQuantity = async (data) => {
        console.log('data',data);
        try {
            const updateCart = await update_cart_data(data);
                console.log('updateCart',updateCart)
                if(updateCart.error) {
                    toast.error(updateCart.error)
                } else {
                    toast.success(updateCart.msg)
                }
            } catch (error) {
                console.log(error.response.data.error)
                toast.error(error.response.data.error)
            } 
    }

    const handleAdd = (data) => {
       setCurQuantity(Curquantity + 1)
       data.productQuantity = Curquantity + 1
        updateQuantity(data)
    }

    const handleSubtract = () => {
        if(Curquantity > 1 ){
            setCurQuantity(Curquantity - 1)
        }
    }


    return (
        <div className='text-white w-full h-32  flex justify-around items-center bg-slate-900 rounded-xl my-4'>
            {
                item.products?.map((data,index) => { 
                    return (
                    <div className="w-full flex row" key={index}>
                        {console.log('cjdd', data)}
                        <div className='w-1/3 h-full flex items-center justify-center'>
                            <Image src={data.product.front_image} alt="hello" height={100} width={100} />
                        </div>
                        <div className='w-1/3 h-full flex items-center justify-center'>
                            <p className='lg:text-xl font-semibold text-md'>Quantity: {data.product.quantity}</p>
                        </div>
                        <div className='w-1/3 h-full flex items-center justify-center'>
                            <p className='lg:text-xl font-semibold text-md'>₹ {data.product.price}</p>
                        </div>
                    </div>
                    )
                })
            }
            <h3>{item.status}</h3>&nbsp;&nbsp;
        </div>
    )
}
