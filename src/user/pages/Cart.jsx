import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
      <Header />

      <div className='md:my-20 my-10'>
        <h1 className='md:text-2xl text-lg font-bold mb-10 text-center'>YOUR CART</h1>

        <div className='grid md:grid-cols-[1fr_6fr_1fr] grid-cols-1 px-1 md:px-0'>
          <div></div>

          <div className="hidden md:block">
            <table className='w-full'>
              {/* TABLE HEAD */}
              <thead className='bg-stone-100'>
                <tr>
                  <th className='text-start text-gray-600 p-2 w-[500px]'>PRODUCT</th>
                  <th className='text-gray-600 p-2'>SIZE</th>
                  <th className='text-gray-600 p-2'>ACTION</th>
                  <th className='text-gray-600 p-2'>PRICE</th>
                </tr>
              </thead>

              {/* table body */}
              <tbody>
                {/* first row */}
                <tr className='border-b border-stone-300'>
                  <td className='w-[500px] p-5 flex items-center'>
                    <img src="https://m.media-amazon.com/images/I/91ssiobY8TL._UY1100_.jpg" alt="" className='w-[150px] h-[150px] object-cover' />
                    <h1 className='ms-5 font-semibold '>Boutique Wear floral Dress</h1>
                  </td>

                  <td className='text-center'>
                    <h1 className='text-gray-700 md:text-base text-sm'><i>Size XL</i></h1>
                  </td>

                  <td >
                    <div className='flex justify-center items-center flex-col'>

                      <Link to={'/view-product'}><button className='mb-5 px-4 py-2 bg-emerald-900 text-white hover:bg-white hover:text-emerald-800 hover:border hover:border-emerald-900 md:text-base text-sm'>View</button></Link>

                      <button className='mb-5 px-4 py-2 bg-stone-200 font-bold border border-stone-300 hover:text-white hover:bg-red-700 hover:border hover:border-red-700 md:text-base text-sm'>Remove</button>
                    </div>
                  </td>

                  <td className='text-center'>
                    <h1 className='text-gray-700 mb-5 md:text-base text-sm'><s>$ 200</s></h1>
                    <h1 className='text-gray-700 md:text-base text-sm'>$ 150</h1>
                  </td>

                </tr>

              </tbody>
            </table>
          </div>

          {/* Card layout for small screens */}
          <div className="block md:hidden space-y-4 mb-2"> {/*  visible only on small screens */}
            <div className="rounded-lg p-4 shadow-sm bg-white">
              <div className="flex items-center">
                <img src="https://m.media-amazon.com/images/I/91ssiobY8TL._UY1100_.jpg" alt="" className='w-[100px] h-[100px] object-cover rounded' />
                <div className="ml-4">
                  <h1 className="font-semibold text-base">Boutique Wear floral Dress</h1>
                  <p className="text-gray-600 text-sm"><i>Size XL</i></p>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h1 className="text-gray-700 text-sm mb-1"><s>$ 200</s></h1>
                  <h1 className="text-gray-700 text-sm">$ 150</h1>
                </div>
                <div className="flex flex-col gap-2">
                  <Link to={'/view-product'}>
                    <button className='px-3 py-1 bg-emerald-900 text-white text-sm hover:bg-white hover:text-emerald-800 hover:border hover:border-emerald-800'>View</button>
                  </Link>
                  <button className='px-3 py-1 bg-stone-200 text-sm font-bold border border-stone-300 hover:text-white hover:bg-red-700 hover:border-red-700'>Remove</button>
                </div>
              </div>
            </div>
          </div>


          <div></div>
        </div>

        {/* cart empty */}


        <div className="md:grid grid-cols-3 md:px-10 px-5 my-10  flex justify-center items-center">
          <div></div>
          <div className='flex justify-center items-center flex-col'>
            <img src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="no image" style={{ width: '200px', height: '200px' }} />
            <h1 className='text-center md:text-3xl text-xl mt-10'>Your cart is empty! <br /> Fill it with like-new styles.</h1>
            <Link to={'/collection-all'}><button className='my-5 bg-black text-white px-6 py-3 text-lg hover:bg-white hover:text-black hover:border hover:border-black'>SHOP NOW</button></Link>

          </div>
          <div></div>
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

      </div>

      <Footer />
    </>
  )
}

export default Cart