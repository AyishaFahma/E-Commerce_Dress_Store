import React from 'react'
import Adminheader from '../components/Adminheader'
import Footer from '../../components/Footer'
import Adminsidebar from '../components/Adminsidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function Adminsettings() {
  return (
    <>
      <Adminheader />

      <div className='md:grid grid-cols-[1fr_5fr]'>

        <div><Adminsidebar /></div>

        <div className='md:grid grid-cols-[2fr_4fr_2fr]'>
          <div></div>
          <div className='md:px-10 px-5 mt-20'>
            <form className='bg-stone-200 p-5 rounded'>

              <div className='my-10 flex items-center justify-center'>
                <div className='bg-emerald-950 w-[180px] h-[180px] rounded-full flex justify-center items-center flex-col'>
                  <img src="https://cdn-icons-png.flaticon.com/512/4596/4596668.png" alt="no image" style={{ width: '120px', height: '120px', borderRadius: '50%', marginTop: '-40px' }} />
                  <h1 className='font-bold text-white'>SWAP FASHIONS</h1>
                </div>
              </div>

              <div className="mb-3">
                <input type="text" placeholder='Username' className='bg-white p-2 w-full  rounded' />
              </div>

              <div className="mb-3">
                <input type="text" placeholder='Password' className='bg-white p-2 w-full rounded' />
              </div>

              <div className="mb-3">
                <input type="text" placeholder='Confirm Password' className='bg-white p-2 w-full rounded' />
              </div>

              <div className="flex justify-between mt-5">
                <button className='bg-amber-600 text-white p-4 w-1/2 rounded hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white'>Reset</button>
                <button className='bg-emerald-900 text-white p-4 w-1/2 rounded hover:border hover:border-green-700 hover:text-green-700 hover:bg-white ms-4'>Submit</button>
              </div>

            </form>
          </div>
          
          <div></div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Adminsettings