import React from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Bottoms() {
  return (
    <>
      <Header />

      {/* filter dress  */}

      <h1 className='my-10 text-center font-bold md:text-xl text-lg'>BOTTOMS FOR WOMEN</h1>

      <div className="md:grid grid-cols-[1fr_4fr] md:px-10 px-5 mb-30">

        {/* first filter grid portion */}
        <div className='md:mb-0 mb-10'>

          <h1 className='font-bold text-lg my-2'>SHOPPING BY :</h1>
          <button className='p-2 bg-emerald-700 rounded text-sm font-semibold text-white'>Women Clothing Bottoms</button>

          <h1 className='font-bold text-lg my-6'>Filter By Categories :</h1>

          <div className='my-2 flex'>
            <input type="checkbox" id='Bottoms' name='filter' className="w-5 h-5 accent-emerald-700" checked='true'/>
            <label htmlFor="Bottoms" className='ms-3'>Bottoms</label>
          </div>

          {/* size */}

          <h1 className='font-bold text-lg my-6'>Size :</h1>

          <div className='my-2 flex'>
            <input type="checkbox" id='XS' name='filter' className="w-5 h-5 accent-emerald-700" />
            <label htmlFor="XS" className='ms-3'>XS</label>
          </div>

          <div className='my-2 flex'>
            <input type="checkbox" id='S' name='filter' className="w-5 h-5 accent-emerald-700" />
            <label htmlFor="S" className='ms-3'>S</label>
          </div>

          <div className='my-2 flex'>
            <input type="checkbox" id='M' name='filter' className="w-5 h-5 accent-emerald-700" />
            <label htmlFor="M" className='ms-3'>M</label>
          </div>

          <div className='my-2 flex'>
            <input type="checkbox" id='L' name='filter' className="w-5 h-5 accent-emerald-700" />
            <label htmlFor="L" className='ms-3'>L</label>
          </div>

          <div className='my-2 flex'>
            <input type="checkbox" id='XL' name='filter' className="w-5 h-5 accent-emerald-700" />
            <label htmlFor="XL" className='ms-3'>XL</label>
          </div>

          {/* price */}
          <h1 className='font-bold text-lg my-6'>Price :</h1>

          <div className="w-full max-w-md pe-6">
            <label htmlFor="priceRange" className="block text-sm font-medium">
              ₹0 - ₹5000
            </label>
            <input
              id="priceRange"
              type="range"
              min="0"
              max="5000"
              step="100"
              className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-emerald-700" />
          </div>

        </div>

        {/* second card grid */}

        <div className='md:grid grid-cols-4 gap-x-5'>

          <div className='p-5 flex justify-center items-center flex-col md:mb-5 mb-10 shadow-lg/30'>
            <img src="https://www.jiomart.com/images/product/original/rvsaholqqg/fashion-dream-women-sky-printed-georgette-dress-dresses-women-dress-maxi-dresses-dress-for-women-maxi-dresses-for-women-women-casual-dress-tiered-dress-maxi-printed-dress-product-images-rvsaholqqg-0-202306090202.jpg?im=Resize=(500,630)" alt="book image" style={{ width: '100%', height: '300px' }} />

            <h1 className='font-bold mt-5'>AMZ Red Dress</h1>
            <p className='text-sm '>Size L</p>

            <p><s>$9.99 </s><span className='text-red-500 ms-5'>$4.99</span></p>

            <Link to={'/view-product'} className='w-full'><button className='bg-emerald-700 w-full p-2 text-white mt-3 hover:bg-white hover:border hover:border-emerald-700 hover:text-emerald-800'>View</button></Link>

          </div>

          <p className='text-center text-xl'>Loading Content.....</p>


        </div>

      </div>

      {/* if not login */}

      {/* <div className="md:grid grid-cols-3 md:px-10 px-5 my-10  flex justify-center items-center">
          <div></div>
          <div className='flex justify-center items-center flex-col'>
            <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="no image" style={{ width: '200px', height: '200px' }} />
            <h1 className='text-center md:text-3xl text-xl mt-10'>Please <Link to={'/login'} className='text-blue-500 underline'>Login</Link> to Explore More...</h1>
          </div>
          <div></div>
        </div> */}

      <Footer />
    </>
  )
}

export default Bottoms