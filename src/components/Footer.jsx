import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>

      <div className='md:grid grid-cols-4 gap-20 md:px-20 py-10 bg-stone-100'>

        <div className='p-5 flex justify-center items-center flex-col'>
          <h1 className='font-bold text-lg mb-5'>CONTACT INFO</h1>
          <p className='text-sm text-center'>Unit no. 106, 1st floor, Parvati Estate,Sun Mill Compound,Lower Parel (W),Mumbai - 400013</p>
          <h1 className='font-bold my-5'>Follow us</h1>
          <div className=' w-full flex justify-evenly text-xl'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>

        <div className='p-5 flex justify-center items-center flex-col'>
          <h1 className='font-bold text-lg mb-5'>QUICK LINKS</h1>
          <h1 className='text-sm'>About us</h1>
          <h1 className='text-sm'>Contact</h1>
          <h1 className='text-sm'>Blogs</h1>
          <h1 className='text-sm'>Swap With Us</h1>
          <h1 className='text-sm'>Sell With Us</h1>
          <h1 className='text-sm'>Press Release</h1>
          <h1 className='text-sm'>Influencer Coverage</h1>
          <h1 className='text-sm'>Media Coverage</h1>
        </div>

        <div className='p-5 flex justify-center items-center flex-col'>
          <h1 className='font-bold text-lg mb-5 md:mt-[-40px]'>HELP & SUPPORT</h1>
          <h1 className='text-sm'>Phone/WA:+91 85910 98029</h1>
          <h1 className='text-sm'>Email:admin@swapfashions.com</h1>
          <h1 className='text-sm'>Privacy Policy</h1>
          <h1 className='text-sm'>Shipping & Return</h1>
          <h1 className='text-sm'>Terms & Conditions</h1>
          <h1 className='text-sm'>FAQs</h1>
        </div>

        <div className='p-5 flex justify-center items-center flex-col'>
          <h1 className='font-bold text-lg mb-5 md:mt-[-80px]'>SHOP BY CATEGORIES</h1>

          <Link to={'/collection-tops'}><h1 className='text-sm'>Tops</h1></Link>

          <Link to={'/collection-bottoms'}><h1 className='text-sm'>Bottoms</h1></Link>

          <Link to={'/collection-dresses'}><h1 className='text-sm'>Dresses</h1></Link>

          <Link to={'/collection-all'}><h1 className='text-sm'>Shop All</h1></Link>
        </div>

      </div>

      <div className='bg-emerald-950 p-5'>
        <h1 className='text-white text-center'>© 2025 Swap Fashions. All Rights Reserved. Designed <FontAwesomeIcon icon={faHeart} className='text-amber-400'/> by Ayisha Fahma</h1>
      </div>


    </>
  )
}

export default Footer