import React, { useState } from 'react';

export default function CheckoutForm({ onClose }) {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ address, city, postalCode, state });
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
                <form onSubmit={handleSubmit}>
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
        </div>
    );
}
