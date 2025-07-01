import React, { useState } from 'react'
import Adminheader from '../components/Adminheader'
import Footer from '../../components/Footer'
import Adminsidebar from '../components/Adminsidebar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Adminorders() {

  const [modalStatus, setmodalStatus] = useState(false)
  return (
    <>
      <Adminheader />

      <div className='md:grid grid-cols-[1fr_5fr]'>

        <div><Adminsidebar /></div>

        <div className='my-10 md:p-5 p-3'>
          <h1 className='text-2xl font-bold'>All Orders</h1>

          <div className="mt-5 w-full overflow-x-auto">
            <table className='w-full min-w-[700px]'>
              {/* TABLE HEAD */}
              <thead className='bg-stone-200'>
                <tr>
                  <th className='text-start text-gray-600 p-2'>ORDER ID</th>
                  <th className='text-gray-600 p-2'>PRODUCT ID</th>
                  <th className='text-gray-600 p-2'>CUSTOMER</th>
                  <th className='text-gray-600 p-2'>TOTAL</th>
                  <th className='text-gray-600 p-2'>ACTIONS</th>
                </tr>
              </thead>

              {/* table body */}
              <tbody>
                {/* first row */}
                <tr className='border-b border-stone-300'>
                  <td className='p-8'>
                    <h1 className='text-black font-semibold md:text-lg text-sm '>ORD1001</h1>
                  </td>

                  <td className='text-center p-8'>
                    <h1 className='text-gray-700 md:text-base text-sm'><i>PRD5427</i></h1>
                  </td>

                  <td className='text-center p-8'>
                    <h1 className='text-gray-700 md:text-base text-sm'>Alice Johnson</h1>
                  </td>

                  <td className='text-center p-8'>
                    <h1 className='text-black md:text-lg text-sm font-semibold'>$89.99</h1>
                  </td>

                  <td className='text-center p-8'>
                    <button type='button' onClick={() => setmodalStatus(true)} className='my-2 px-5 py-1 bg-blue-400 text-blue-950 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900 md:text-base text-sm'>View Details</button>

                  </td>
                </tr>

                {/* second row */}
              </tbody>
            </table>
          </div>

          {modalStatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                  <div className="bg-white">

                    {/* header of modal */}

                    <div className='bg-emerald-800 p-4 text-white flex justify-between items-center'>
                      <p className='text-xl'>Order ID: ORD1001</p>
                      < FontAwesomeIcon icon={faXmark} className='fa-2x cursor-pointer' onClick={() => setmodalStatus(false)} />
                    </div>
                    {/* body of modal */}
                    <div className='p-4'>

                      <div className='md:flex md:gap-x-50'>
                        <div>
                          <p className='text-gray-800 font-bold text-lg'>Customer: Alice Johnson</p>
                          <p className='text-gray-800 text-lg'>Total Amount: <span className='text-xl text-emerald-800 font-bold ms-3'>$89.99</span></p>
                        </div>

                        <div className='mt-5 md:mt-0'>
                          <p className='text-gray-800 font-bold text-lg'>Shipping Address:</p>
                          <p className='text-gray-800 text-lg'>123 Main St, Anytown, CA 90210</p>
                          <p className='text-gray-800 font-bold text-lg mt-3' >Payment Method:</p>
                          <p className='text-gray-800 text-lg'>Credit Card</p>
                        </div>  
                      </div>
                      
                      <div className='mt-5'>
                        <p className='text-xl font-semibold mb-3'>Ordered Items:</p>

                        <div className='flex items-center gap-5'>
                          <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSz-mxdMnf79g14ht2p5olnhVMlDgb8PgweNGi9nwlT1P5GG3msjbcF5xPWofYBe7X1eu_yPI6mqWDSdU41Es4Jz44wZ1TGBNtZV5-Wkjo" alt="" className='w-[150px] h-[150px]'/>

                          <div>
                            <h1 className='text-lg'>Bohemian Maxi Dress</h1>
                            <p className='text-gray-800'>Qty: 1 | Price: $79.99</p>
                          </div>

                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>}

        </div>

      </div>

      <Footer />
    </>
  )
}

export default Adminorders