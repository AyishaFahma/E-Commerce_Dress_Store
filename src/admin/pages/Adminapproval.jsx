import React, { useState } from 'react'
import Adminheader from '../components/Adminheader'
import Adminsidebar from '../components/Adminsidebar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Adminapproval() {

  //modal clicking state for view details button
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <Adminheader />

      <div className='md:grid grid-cols-[1fr_5fr]'>

        <div><Adminsidebar /></div>

        <div className='md:m-10 m-2 bg-slate-50 shadow-xl rounded-lg md:px-10 px-3 py-5'>

          <h1 className='md:text-2xl text-xl font-bold mb-2'>All Sell Requests</h1>
          <label className='text-gray-700 font-semibold me-5'>Sort by:</label>
          <input type="text" value='Newest First' className='border border-gray-400 p-1 rounded-lg outline-0' readOnly />

          <div className='md:grid grid-cols-2 md:my-10 my-5 gap-x-20'>
            {/* first column */}

            <div className='mb-5 p-5 bg-stone-50 rounded-lg shadow-lg/20 border border-stone-200'>
              <div className='flex justify-between items-center'>
                <h1 className='text-xl font-bold'>Summer Floral Midi Dress</h1>
                <button className=' p-3 rounded-full bg-amber-100 text-amber-900 font-bold'>Pending</button>
              </div>

              <div className='mt-3'>
                <img src="https://hips.hearstapps.com/hmg-prod/images/amazon-winter-dress-2183276870-6736192f0484c.jpg?crop=0.492xw:0.984xh;0.250xw,0&resize=640:*" alt="" className='w-full h-[200px] object-cover rounded-xl' />

                <p className='mt-4 mb-2 text-gray-700 font-bold'>User:<span className='text-lg text-black ms-3'> Jane Smith</span></p>
                <p className='text-gray-700 font-bold'>Proposed Price: <span className='ms-3 text-emerald-800 text-lg'>$45.00</span></p>
              </div>

              <div className='mt-5 flex justify-end'>
                <button onClick={()=>setModalStatus(true)} className='me-5 bg-blue-200 px-3 py-2 rounded-lg text-blue-700'>View Details</button>
                <button className='bg-green-700 px-3 py-2 rounded-lg text-white'>Accept</button>
              </div>
              <div className='flex justify-end mt-3'><button className='bg-red-700 px-3 py-2 rounded-lg text-white '>Reject</button></div>
            </div>

            {/* second column */}
            <div className='mb-5 p-5 bg-stone-50 rounded-lg shadow-lg/20 border border-stone-200'>
              <div className='flex justify-between items-center'>
                <h1 className='text-xl font-bold'>Summer Floral Midi Dress</h1>
                <button className=' p-3 rounded-full bg-green-100 text-green-900 font-bold'>Accepted</button>
              </div>

              <div className='mt-3'>
                <img src="https://www.alamodelabel.in/cdn/shop/files/775FEF49-B998-4706-A24D-3D9A6FCA9595_800x.jpg?v=1749207263" alt="" className='w-full h-[200px] object-cover rounded-xl' />

                <p className='mt-4 mb-2 text-gray-700 font-bold'>User:<span className='text-lg text-black ms-3'> Jane Smith</span></p>
                <p className='text-gray-700 font-bold'>Proposed Price: <span className='ms-3 text-emerald-800 text-lg'>$45.00</span></p>
              </div>

              <div className='mt-5 flex justify-end'>
                <button onClick={()=>setModalStatus(true)} className='bg-blue-200 px-3 py-2 rounded-lg text-blue-700'>View Details</button>
              </div>

            </div>

            {/* third item */}

            <div className='mb-5 p-5 bg-stone-50 rounded-lg shadow-lg/20 border border-stone-200'>
              <div className='flex justify-between items-center'>
                <h1 className='text-xl font-bold'>Summer Floral Midi Dress</h1>
                <button className=' p-3 rounded-full bg-red-100 text-red-900 font-bold'>Rejected</button>
              </div>

              <div className='mt-3'>
                <img src="https://img.kwcdn.com/product/fancy/b002b2e9-4837-47a8-aac8-a7c9dcff2fe6.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" alt="" className='w-full h-[200px] object-cover rounded-xl' />

                <p className='mt-4 mb-2 text-gray-700 font-bold'>User:<span className='text-lg text-black ms-3'> Jane Smith</span></p>
                <p className='text-gray-700 font-bold'>Proposed Price: <span className='ms-3 text-emerald-800 text-lg'>$45.00</span></p>
              </div>

              <div className='mt-5 flex justify-end'>
                <button onClick={()=>setModalStatus(true)} className='bg-blue-200 px-3 py-2 rounded-lg text-blue-700'>View Details</button>
              </div>

            </div>
          </div>

          {modalStatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                  <div className="bg-white">

                    {/* header of modal */}

                    <div className='bg-emerald-800 p-4 text-white flex justify-between items-center'>
                      <p className='text-xl'>Summer Floral Midi Dress</p>
                      < FontAwesomeIcon icon={faXmark} className='fa-2x cursor-pointer' onClick={() => setModalStatus(false)} />
                    </div>
                    {/* body of modal */}
                    <div className='p-4'>
                      
                      <div className='flex flex-col md:flex-row md:justify-between items-center gap-1'>  
                        <img src="https://hips.hearstapps.com/hmg-prod/images/amazon-winter-dress-2183276870-6736192f0484c.jpg?crop=0.492xw:0.984xh;0.250xw,0&resize=640:*" alt="no image" className='w-[250px] h-[250px] object-cover'/>

                        <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689787958-612gMNDkbcL.jpg?crop=0.889xw:1xh;center,top&resize=980:*" alt="no image" className='w-[250px] h-[250px] object-cover'/>

                        <img src="https://img.kwcdn.com/product/fancy/b002b2e9-4837-47a8-aac8-a7c9dcff2fe6.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" alt="no image" className='w-[250px] h-[250px] object-cover'/>   
                      </div>
                      <div className='p-4'>

                        <p className='text-gray-800'>Lightweight cotton midi dress with a vibrant floral print, perfect for summer. Features a V-neck and adjustable spaghetti straps. Excellent used condition, no visible flaws.</p>

                        <p className='text-gray-800 mt-2'>Category: Dresses</p>
                        <p className='text-gray-800 '>Size: M</p>
                        <p className='text-gray-800 '>Condition: Excellent Used</p>
                        <p className='text-gray-800 '>Material:</p>
                        
                      </div>

                      <div className='p-4'>
                        <p className='text-gray-800'>User: Jane Smith</p>
                        <p className='text-gray-800'>Actual Price:<span className='text-emerald-800 font-bold ms-5 text-lg'> $85.00</span></p>
                        <p className='text-gray-800'>Proposed Price:<span className='text-emerald-800 font-bold ms-5 text-xl'> $45.00</span></p>
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

export default Adminapproval