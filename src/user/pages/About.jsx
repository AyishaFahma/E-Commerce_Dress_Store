import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faEarthAmericas, faHandsBubbles, faMagnifyingGlassPlus, faMoneyCheckDollar, faPersonDressBurst, faShoppingBag, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>

    <Header/>

    <div className='md:my-20 my-10'>

      <h1 className='text-center text-2xl font-bold md:mb-10 mb-5'>About Us</h1>

      <div className="md:grid grid-cols-2">
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='w-full '/>
        </div>
        <div className='bg-gray-200 flex justify-center items-center flex-col px-10'>
          <h1 className='text-lg font-semibold mt-5 md:mt-0 mb-5'>WHY THRIFT PRELOVED?</h1>
          <h1 className='text-justify text-sm mb-5'>Thrifting pre-loved, helps you to get great fashion at affordable rates. It not only increases the shelf life of an outfit, it also reduces the demand for new clothes in the market, thus preserving the precious resources of our environment.</h1>

          <Link to={'/collection-all'}><button className='bg-emerald-950 text-white p-3 hover:bg-white hover:text-emerald-950 hover:border hover:border-emerald-950 mb-5 md:mb-0'>Shop Now</button></Link>

        </div>
      </div>


      <h1 className='text-center text-2xl font-bold md:mt-10 mt-5 md:mb-0 mb-5'>Our Store</h1>

      <div className="grid md:grid-cols-4 grid-cols-2 md:p-20 p-2 md:gap-x-5 gap-x-3 gap-y-3 md:gap-y-0">
        <div className='md:h-[300px] h-[250px]'>
          <img src="https://static.wixstatic.com/media/7d1919_8a220090a1cd48c5a765c2bbf1d0d4cb~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7d1919_8a220090a1cd48c5a765c2bbf1d0d4cb~mv2.jpg" alt="" className='h-full w-full rounded'/>
        </div>

        <div className='md:h-[300px] h-[250px]'>
          <img src="https://t3.ftcdn.net/jpg/03/93/61/60/360_F_393616055_l4Z29uCNSAslCCSnFkCrojbP571qwSQX.jpg" alt="" className='h-full w-full rounded'/>
        </div>

        <div className='md:h-[300px] h-[250px]'>
          <img src="https://media.istockphoto.com/id/1715503993/photo/woman-shopping-at-a-clothing-store-with-the-help-of-a-saleswoman.jpg?s=612x612&w=0&k=20&c=URqDHQ1Yn5UNI1dF42OLABYQuZ240EeD6YFZoQjyABk=" alt="" className='h-full w-full rounded'/>
        </div>

        <div className='md:h-[300px] h-[250px]'>
          <img src="https://media.istockphoto.com/id/1386175867/photo/cheerful-clothing-store-owner-assisting-a-female-customer.jpg?s=612x612&w=0&k=20&c=_JZWcvUI-TPtpnYE1u4-7TFPqo1iSTLAxBDbg2nDYtc=" alt="" className='h-full w-full rounded'/>
        </div>
      </div>

      <h1 className='text-center md:text-2xl text-xl font-bold md:mt-10 mt-5 mb-10'>WHY SWAP FASHIONS?</h1>

      <div className="grid md:grid-cols-4 grid-cols-2 p-2 md:gap-x-5 gap-x-1 gap-y-1 md:gap-y-0">

        <div className='bg-gray-400 flex justify-center items-center flex-col py-20'>
          <FontAwesomeIcon icon={faEarthAmericas} className='md:text-5xl text-3xl'/>
          <h1 className='md:text-3xl text-2xl font-semibold mt-5 text-center'>Sustainable</h1>
        </div>

        <div className='bg-stone-400 flex justify-center items-center flex-col py-20'>
          <FontAwesomeIcon icon={faPersonDressBurst} className='md:text-5xl text-emerald-900 text-3xl'/> 
          <h1 className='md:text-3xl text-2xl font-semibold mt-5 text-emerald-900 text-center'>High-end Fashion</h1>
        </div>

        <div className='bg-gray-400 flex justify-center items-center flex-col py-20'>
          <FontAwesomeIcon icon={faMoneyCheckDollar} className='md:text-5xl text-3xl'/>
          <h1 className='md:text-3xl text-2xl text-center font-semibold mt-5'>Pocket Friendly</h1>
        </div>

        <div className='bg-stone-400 flex justify-center items-center flex-col py-20'>
          <FontAwesomeIcon icon={faShoppingBag} className='md:text-5xl text-emerald-900 text-3xl'/> 
          <h1 className='md:text-3xl text-2xl text-center font-semibold mt-5 text-emerald-900'>Guilt-free Shopping</h1>
        </div>

      </div>


      <h1 className='text-center md:text-2xl text-lg font-bold mt-20 mb-20'>EVERY ITEM HAS GONE THROUGH..</h1>

      <div className="grid md:grid-cols-3 md:py-10 md:gap-x-5 gap-x-1 gap-y-1 md:gap-y-0 bg-stone-100 ">

        <div className='flex justify-center items-center flex-col py-20'>
          <FontAwesomeIcon icon={faMagnifyingGlassPlus} className='md:text-5xl text-3xl text-emerald-900'/>
          <h1 className='md:text-3xl text-2xl font-semibold mt-5 text-center text-emerald-900'>Intense Quality Inspection</h1>
        </div>

        <div className='flex justify-center items-center flex-col py-20'>
          <FontAwesomeIcon icon={faHandsBubbles} className='md:text-5xl text-emerald-900 text-3xl'/> 
          <h1 className='md:text-3xl text-2xl font-semibold mt-5 text-emerald-900 text-center'>Laundry Wash</h1>
        </div>

        <div className='flex justify-center items-center flex-col py-20'>
          <FontAwesomeIcon icon={faTemperatureHigh} className='md:text-5xl text-emerald-900 text-3xl'/> 
          <h1 className='md:text-3xl text-2xl font-semibold mt-5 text-emerald-900 text-center'>Steam Iron</h1>
        </div>

        

        

      </div>




    
    </div>


    <Footer/>
    </>
  )
}

export default About