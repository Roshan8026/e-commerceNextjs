import { getCategoriesData, getProductsData } from '@/services/admin';
import React from 'react'
import Navbar from '../components/Navbar';
import Categories from './components/Categories';
import Intro from './components/Intro';
import Products from './components/Products';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import BannerSection from './components/BannerSection';
import Wears from './components/Wears';
import SliderSection from './components/SliderSection';



export async function getStaticProps() {
    
    const category = await getCategoriesData() || [];
    const totalProduct = await getProductsData() || [];

    // filtering featured products
    const filterProduct = totalProduct.filter((item) => {
        return item.featured === true;
    })
    
    // 
    const product = filterProduct.slice(0, 8);


    return {
        props: { category, product }

    }

}


export default function Landing({ category, product }) {
    console.log(category, product)
    return (
        <div className='w-full h-screen '>
            <Navbar pos={"fixed"}/>
            <Intro/>
            {/* <SliderSection/>  */}
            {/* <Categories/> */}
            <Products product={product} />
            <Wears/>
            <h3><b>Natural dyeing </b></h3>
             <Wears/>
            <BannerSection/>
            <Footer/>
            <ToastContainer />
        </div>
    )
}
