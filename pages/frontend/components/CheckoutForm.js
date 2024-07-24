import React, { useState } from 'react';
import { create_order, delete_cart_data } from '@/services/admin'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Router from 'next/router';


export default function CheckoutForm({ onClose , cartItem , userID}) {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    console.log('user',userID);
    
     const delete_cart = async (data) => {
        console.log('data',data);
        try {
            const deleteCart = await delete_cart_data(data);                
            } catch (error) {
                console.log(error.response.data.error)
                toast.error(error.response.data.error)
            } 
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ address, city, postalCode, state, email , phone});
        console.log('cartItem',cartItem);
        let createOder = {
            user: userID,
            products: cartItem.map(item => ({
                    product: item.productID,
                    quantity: item.productQuantity
                })),
            name: name,
            email: email,
            phone: phone,
            address:address,
            state: state,
            city: city,
            postalCode: postalCode
        }

        console.log('createOder',createOder);
          try {
            const createOrder = await create_order(createOder);
                console.log('createOrder', createOrder)
                if(createOrder.error) {
                    toast.error(createOrder.error)
                } else {
                    toast.success(createOrder.msg)
                }
            } catch (error) {
                console.log(error)
                toast.error(error)
            } 

              // Send email
                await fetch('/api/sendEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        name,
                        address,
                        city,
                        state,
                        postalCode,
                        phone,
                        products: createOder.products,
                    }),
                });
             const deletePromises = cartItem.map(item => delete_cart(item));

            // Wait for all promises to resolve
            await Promise.all(deletePromises);
            setTimeout(() => {
                Router.push('/frontend/landing')
            }, 4000);
        }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Name</label>
                        <input 
                            type="text" 
                            className="w-full p-2 border border-gray-300 rounded"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Email Address</label>
                        <input 
                            type="text" 
                            className="w-full p-2 border border-gray-300 rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Phone Number</label>
                        <input 
                            type="number" 
                            className="w-full p-2 border border-gray-300 rounded"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Address</label>
                        <input 
                            type="text" 
                            className="w-full p-2 border border-gray-300 rounded"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">City</label>
                        <input 
                            type="text" 
                            className="w-full p-2 border border-gray-300 rounded"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>
                     <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">State</label>
                        <input 
                            type="text" 
                            className="w-full p-2 border border-gray-300 rounded"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Postal Code</label>
                        <input 
                            type="text" 
                            className="w-full p-2 border border-gray-300 rounded"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            required
                        />
                    </div>
                   
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="text-gray-500 mr-4">Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Place Order</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
        
    );
}
