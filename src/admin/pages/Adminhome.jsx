import React from 'react'
import Adminheader from '../components/Adminheader'
import Adminsidebar from '../components/Adminsidebar'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardQuestion, faListCheck, faWallet } from '@fortawesome/free-solid-svg-icons'

function Adminhome() {
  return (
    <>
    <Adminheader/>

    <div className='md:grid grid-cols-[1fr_5fr]'>

      <div><Adminsidebar/></div>


      {/* home page contents */}

      <div className='md:grid grid-cols-2 md:px-20 px-2 py-10 gap-x-20'>
        <div>

          <div className='py-5 px-10 flex justify-between items-center rounded-lg bg-stone-100 shadow-lg/50 md:mb-10 mb-3'>
            <div>
              <p className='font-semibold text-gray-600 mb-1'>Total Sales</p>
              <h1 className='font-bold text-lg mb-1'>$12,450</h1>
              <p className='text-green-900 text-sm'>+8.1% from last month</p>
            </div>
            <div className='w-[60px] h-[60px] rounded-full border border-green-200 flex items-center justify-center bg-green-100 text-emerald-800'>
              <FontAwesomeIcon icon={faWallet} className='text-2xl'/>
            </div>
          </div>

          <div className='py-5 px-10 flex justify-between items-center rounded-lg bg-stone-100 shadow-lg/50 md:mb-0 mb-3'>
            <div>
              <p className='font-semibold text-gray-600 mb-1'>Pending Sell Requests</p>
              <h1 className='font-bold text-lg mb-1'>12</h1>
              <p className='text-green-900 text-sm'>+15% from yesterday</p>
            </div>
            <div className='w-[60px] h-[60px] rounded-full border border-orange-200 flex items-center justify-center bg-orange-200 text-orange-900'>
              <FontAwesomeIcon icon={faClipboardQuestion} className='text-2xl'/>
            </div>
          </div>
        </div>

        <div>

          <div className='py-5 px-10 flex justify-between items-center rounded-lg bg-stone-100 shadow-lg/50 md:mb-10 mb-3'>
            <div>
              <p className='font-semibold text-gray-600 mb-1'>New Orders</p>
              <h1 className='font-bold text-lg mb-1'>40</h1>
              <p className='text-green-900 text-sm'>-2.5% from last week</p>
            </div>
            <div className='w-[60px] h-[60px] rounded-full border border-blue-200 flex items-center justify-center bg-blue-100 text-blue-800'>
              <FontAwesomeIcon icon={faListCheck} className='text-2xl'/>
            </div>
          </div>

          <div className='py-5 px-10 flex justify-between items-center rounded-lg bg-stone-100 shadow-lg/50 md:mb-0 mb-3'>
            <div>
              <p className='font-semibold text-gray-600 mb-1'>Active Products</p>
              <h1 className='font-bold text-lg mb-1'>800 +</h1>
              <p className='text-green-900 text-sm'>Total products listed</p>
            </div>
            <div className='w-[60px] h-[60px] rounded-full border border-violet-200 flex items-center justify-center bg-violet-200 text-violet-900'>
              <FontAwesomeIcon icon={faClipboardQuestion} className='text-2xl'/>
            </div>
          </div>
        </div>

      </div>

    </div>

    <Footer/>
    </>
  )
}

export default Adminhome