import React from 'react'
import Sidebar_com from '../components/Sidebar_com'
import {  useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileBase from 'react-file-base64'
import { add_banner  } from '@/services/admin'



export default function addBanner({data}) {
    const [formData, setFormData] = useState({ banner_image  : '' })


    const handleSubmit = async (e) => {
        e.preventDefault();


        const res = await add_banner(formData)
        if (res.msg) {
            toast.success(res.msg);
            window.location.reload();
        }
        else {
            toast.error(res.error);
        }
    }

    return (
        <div className='w-full h-screen bg-slate-900 flex'>
            <Sidebar_com />
            <div className='w-10/12 h-full text-white flex flex-col items-center overflow-auto'>
                <div className='w-full p-4  mt-10 mb-4 flex items-center justify-center'>
                    <h1 className='text-4xl font-semibold tracking-widest border-b p-2 uppercase'>Add  Product</h1>
                </div>

                <form className='text-white' onSubmit={handleSubmit}>
                    
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Banner Image</label>
                        <FileBase onDone={({ base64 }) => setFormData({ ...formData, image: base64 })} type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required placeholder='Slug' />
                    </div>
                    <button type="submit" class="text-white bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-orange-600">Submit</button>
                </form>


            </div>
            <ToastContainer />
        </div>
    )
}

