import React, { useState } from 'react'
import Adminheader from '../components/Adminheader'
import Footer from '../../components/Footer'
import Adminsidebar from '../components/Adminsidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

function Adminproducts() {
  const [addproductStatus, setaddproductStatus] = useState(true)
  const [viewproductStatus, setviewproductStatus] = useState(false)

  //modal clicking state for view details button
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <Adminheader />

      <div className='md:grid grid-cols-[1fr_5fr]'>

        <div><Adminsidebar /></div>

        <div>
          <div className='md:grid grid-cols-3'>
            <div></div>
            <div className='mt-10 flex items-center justify-between px-2'>
              <button onClick={() => { setaddproductStatus(true), setviewproductStatus(false) }} className={addproductStatus ? 'px-4 py-2 bg-emerald-700 text-white font-bold rounded-lg' : 'bg-green-100 border border-green-200 text-emerald-900 px-4 py-2 font-bold rounded-lg'} >Add New Product</button>

              <button onClick={() => { setaddproductStatus(false), setviewproductStatus(true) }} className={viewproductStatus ? 'px-4 py-2 bg-emerald-700 text-white font-bold rounded-lg' : 'bg-green-100 border border-green-200 text-emerald-900 px-4 py-2 font-bold rounded-lg'} >View Products</button>
            </div>
            <div></div>
          </div>

          {/* add product form */}

          {addproductStatus && <div className='md:px-30 px-2 py-10 mt-5'>
            <div className='bg-stone-200 md:p-10 p-3 rounded'>
              <h1 className='text-3xl font-bold text-center text-emerald-700'>Add New Product</h1>

              <div className="md:grid grid-cols-2 gap-x-5">
                <div className='my-10'>

                  <div className="mb-3">
                    <input type="text" placeholder='Title | eg. Elegant Floral Summer Dress' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input type="text" placeholder='Size - XS , S , M , L , XL' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input type="text" placeholder='Category' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <p className='text-lg text-gray-600 mb-2 mt-10'>Product Details</p>

                  <div className="mb-3">
                    <input type="text" placeholder='Colour' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input type="text" placeholder='Condition' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input type="text" placeholder='Material' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input type="text" placeholder='Bust' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input type="text" placeholder='Waist' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input type="text" placeholder='Hip' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input type="text" placeholder='SKU' className='p-2 bg-white rounded w-full outline-0' />
                  </div>


                </div>


                <div className='my-10 px-2'>

                  <div className="mb-3">
                    <input type="text" placeholder='Rating' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input type="text" placeholder='Front Length' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input type="text" placeholder='Back Length' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input type="text" placeholder='$ Price' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input type="text" placeholder='$ Discount Price' className='p-2 bg-white rounded w-full outline-0' />
                  </div>


                  <div className='flex justify-center items-center mt-10 flex-col'>

                    <label htmlFor="uploadBookImg">
                      <input type="file" id='uploadBookImg' style={{ display: 'none' }} />
                      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/add-new-photo-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-picture-empty-states-vol-1-pack-seo-web-icons-9656036.png" alt="no image" style={{ width: '200px', height: '200px' }} />
                    </label>

                    {/* <img src="" alt="no image" style={{ width: '200px', height: '200px' }} /> */}


                    {/* uploaded book images max 3 */}

                    <div className='mt-10 flex items-center'>


                      <img src="https://img.kwcdn.com/product/fancy/b002b2e9-4837-47a8-aac8-a7c9dcff2fe6.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" alt="no image" style={{ width: '50px', height: '50px' }} className='mx-2' />

                      {/* here max image is 3 */}


                      <label htmlFor="uploadBookImg">
                        <input type="file" id='uploadBookImg' style={{ display: 'none' }} />

                        <FontAwesomeIcon icon={faPlus} className='p-2 shadow-lg/30 bg-gray-300 border border-gray-300 ms-4 cursor-pointer' />

                      </label>
                    </div>

                  </div>

                </div>
              </div>

              <div className="flex justify-end ">
                <button type='button' className='bg-amber-700 text-white px-5 py-3 rounded hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white cursor-pointer'>Reset</button>
                <button type='button' className='bg-emerald-800 text-white px-5 py-3 rounded hover:border hover:border-emerald-800 hover:text-emerald-800 hover:bg-white ms-4 cursor-pointer'>Submit</button>
              </div>

            </div>
          </div>}


          {/* view products */}

          {viewproductStatus && <div className='md:m-10 m-2 my-20 bg-stone-50 shadow-xl rounded-lg md:px-10 px-3 py-5 border border-stone-200'>

            <h1 className='md:text-2xl text-xl font-bold mb-2'>All Products</h1>
            <label className='text-gray-700 font-semibold me-5'>Sort by:</label>
            <input type="text" value='Newest First' className='border border-gray-400 p-1 rounded-lg outline-0' readOnly />

            <label htmlFor='categoryFilter' className="text-gray-700 font-semibold me-3 ms-10 mt-5">Filter by Category:</label>
            <select id="categoryFilter" className="mt-5 p-2 border border-gray-400 rounded-lg  text-sm focus:ring-green-500 focus:border-green-500">
              <option value="all">All</option>
              <option value="Dresses">Dresses</option>
              <option value="Tops">Tops</option>
              <option value="Bottoms">Bottoms</option>
            </select>

            <div className='md:grid grid-cols-3 md:my-10 my-5 gap-x-10'>
              {/* first column */}

              <div className='mb-5 p-5 bg-stone-50 rounded-lg shadow-lg/20 border border-stone-200'>

                <div>
                  <img src="https://hips.hearstapps.com/hmg-prod/images/amazon-winter-dress-2183276870-6736192f0484c.jpg?crop=0.492xw:0.984xh;0.250xw,0&resize=640:*" alt="" className='w-full h-[200px] object-cover rounded-xl' />

                  <h1 className='text-xl font-bold my-3'>Summer Floral Midi Dress </h1>

                  <p className='text-gray-700 font-bold'>SKU : SFMD-M-RED</p>
                  <p className='text-gray-700 font-bold'>Category: Dresses</p>
                  <p className='text-gray-700 font-bold'>Price: <span className='ms-3 text-emerald-800 text-lg'>$45.00</span></p>
                </div>

                <div className='mt-5 flex justify-end'>
                  <button onClick={() => setModalStatus(true)} className='bg-blue-200 px-3 py-2 rounded-lg text-blue-700'>View Details</button>
                </div>
              </div>

              {/* second column */}
              <div className='mb-5 p-5 bg-stone-50 rounded-lg shadow-lg/20 border border-stone-200'>

                <div>
                  <img src="https://hips.hearstapps.com/hmg-prod/images/amazon-winter-dress-2183276870-6736192f0484c.jpg?crop=0.492xw:0.984xh;0.250xw,0&resize=640:*" alt="" className='w-full h-[200px] object-cover rounded-xl' />

                  <h1 className='text-xl font-bold my-3'>Summer Floral Midi Dress </h1>

                  <p className='text-gray-700 font-bold'>SKU : SFMD-M-RED</p>
                  <p className='text-gray-700 font-bold'>Category: Dresses</p>
                  <p className='text-gray-700 font-bold'>Price: <span className='ms-3 text-emerald-800 text-lg'>$45.00</span></p>
                </div>

                <div className='mt-5 flex justify-end'>
                  <button onClick={() => setModalStatus(true)} className='bg-blue-200 px-3 py-2 rounded-lg text-blue-700'>View Details</button>
                </div>
              </div>

              {/* third item */}

              <div className='mb-5 p-5 bg-stone-50 rounded-lg shadow-lg/20 border border-stone-200'>

                <div>
                  <img src="https://hips.hearstapps.com/hmg-prod/images/amazon-winter-dress-2183276870-6736192f0484c.jpg?crop=0.492xw:0.984xh;0.250xw,0&resize=640:*" alt="" className='w-full h-[200px] object-cover rounded-xl' />

                  <h1 className='text-xl font-bold my-3'>Summer Floral Midi Dress </h1>

                  <p className='text-gray-700 font-bold'>SKU : SFMD-M-RED</p>
                  <p className='text-gray-700 font-bold'>Category: Dresses</p>
                  <p className='text-gray-700 font-bold'>Price: <span className='ms-3 text-emerald-800 text-lg'>$45.00</span></p>
                </div>

                <div className='mt-5 flex justify-end'>
                  <button onClick={() => setModalStatus(true)} className='bg-blue-200 px-3 py-2 rounded-lg text-blue-700'>View Details</button>
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
                          <img src="https://hips.hearstapps.com/hmg-prod/images/amazon-winter-dress-2183276870-6736192f0484c.jpg?crop=0.492xw:0.984xh;0.250xw,0&resize=640:*" alt="no image" className='w-[250px] h-[250px] object-cover' />

                          <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689787958-612gMNDkbcL.jpg?crop=0.889xw:1xh;center,top&resize=980:*" alt="no image" className='w-[250px] h-[250px] object-cover' />

                          <img src="https://img.kwcdn.com/product/fancy/b002b2e9-4837-47a8-aac8-a7c9dcff2fe6.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" alt="no image" className='w-[250px] h-[250px] object-cover' />
                        </div>
                        <div className='p-4'>

                          <p className='text-gray-800 mt-2'>SKU: BOHM-001</p>
                          <p className='text-gray-800 '>Category: Dresses</p>
                          <p className='text-gray-800 '>Size: M</p>
                          <p className='text-gray-800 '>Material:</p>

                          <p className='text-gray-800'>Price:<span className='text-emerald-800 font-bold ms-5 text-lg'> $85.00</span></p>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>}


          </div>}



        </div>
      </div>

      <Footer />
    </>
  )
}

export default Adminproducts