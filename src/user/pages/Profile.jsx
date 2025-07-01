import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faMap, faRightFromBracket, faSpinner, faTable, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Profile() {

  const [profile, setprofile] = useState(true)
  const [order, setorder] = useState(false)
  const [sellstatus, setsellstatus] = useState(false)
  const [logout, setlogout] = useState(false)

  return (
    <>
      <Header />

      <div className='md:p-20 p-2 my-10'>
        <div className='md:grid grid-cols-[2fr_5fr] p-5 gap-x-10 border border-stone-200 shadow-lg/40 rounded-xl'>

          <div className='p-5 flex items-start flex-col bg-neutral-200 rounded-lg'>

            <button className={profile ? 'mb-5 px-5 py-3 bg-emerald-700 text-white font-bold rounded-lg' : 'bg-green-100 border border-green-200 text-emerald-900 mb-5 px-5 py-3 font-bold rounded-lg'} onClick={() => { setprofile(true); setorder(false); setsellstatus(false); setlogout(false) }}><FontAwesomeIcon icon={faUser} className='me-3 text-xl' />PROFILE</button>

            <button className={order ? 'mb-5 px-5 py-3 bg-emerald-700 text-white font-bold rounded-lg' : 'bg-green-100 border border-green-200 text-emerald-900 mb-5 px-5 py-3 font-bold rounded-lg'} onClick={() => { setprofile(false); setorder(true); setsellstatus(false); setlogout(false) }}><FontAwesomeIcon icon={faTable} className='me-3 text-xl' />ORDER HISTORY</button>

            <button className={sellstatus ? 'mb-5 px-5 py-3 bg-emerald-700 text-white font-bold rounded-lg' : 'bg-green-100 border border-green-200 text-emerald-900 mb-5 px-5 py-3 font-bold rounded-lg'} onClick={() => { setprofile(false); setorder(false); setsellstatus(true); setlogout(false) }}><FontAwesomeIcon icon={faSpinner} className='me-3 text-xl' />SELL STATUS</button>

            <button className={logout ? 'mb-5 px-5 py-3 bg-emerald-700 text-white font-bold rounded-lg' : 'bg-green-100 border border-green-200 text-emerald-900 mb-5 px-5 py-3 font-bold rounded-lg'} onClick={() => { setprofile(false); setorder(false); setsellstatus(false); setlogout(true) }}><FontAwesomeIcon icon={faRightFromBracket} className='me-3 text-xl' />LOGOUT</button>

          </div>

          {/* profile */}
          {profile && <div className='my-10'>

            <h2 className='text-3xl font-bold'>Profile Settings</h2>
            <div className='w-[80px] h-[5px] bg-emerald-600'></div>

            <p className='mt-10 text-gray-800 mb-2'>Name</p>
            <input type="text" value='Jhon' className='p-2 bg-stone-100 rounded md:w-1/2 w-full outline-0 border border-stone-300' />

            <p className='mt-5 text-gray-800 mb-2'>Email Address</p>
            <input type="text" value='jhon@gmail.com' readOnly className='p-2 bg-stone-100 rounded md:w-1/2 w-full outline-0 border border-stone-300' />
            <p className='mt-1 text-gray-600 mb-5'>Email cannot be changed from here.</p>

            <input type="text" placeholder='Password' className='p-2 bg-stone-100 rounded md:w-1/2 outline-0 border border-stone-300' />
            <br />
            <input type="text" placeholder='Confirm Password' className='mb-15 mt-3 p-2 bg-stone-100 rounded md:w-1/2 outline-0 border border-stone-300' />


            <h2 className='text-3xl font-bold mb-2'>Shipping Address</h2>
            <div className='w-[80px] h-[5px] bg-emerald-600'></div>

            <p className='mt-10 text-gray-800 mb-2'>Address Line</p>
            <input type="text" placeholder='123 Fashion Lane' className='p-2 bg-stone-100 rounded md:w-1/2 w-full outline-0 border border-stone-300' />

            <div className='flex justify-between'>
              <p className='w-1/4 mt-5 text-gray-800 mb-2 text-sm md:text-base'>City</p>
              <p className='w-1/4 mt-5 text-gray-800 mb-2 text-sm md:text-base'>State / Province</p>
              <p className='w-1/4 mt-5 text-gray-800 mb-2 text-sm md:text-base'>Zip / Postal Code</p>
            </div>

            <div className='flex justify-between '>
              <input type="text" placeholder='Fashionville' className='p-2 bg-stone-100 rounded w-1/4 outline-0 border border-stone-300' />

              <input type="text" placeholder='CA' className='p-2 bg-stone-100 rounded w-1/4 outline-0 border border-stone-300' />

              <input type="text" placeholder='90210' className='p-2 bg-stone-100 rounded w-1/4 outline-0 border border-stone-300' />
            </div>

            <div className='flex justify-end gap-x-5 mt-20'>
              <button className='px-4 py-2 font-bold rounded-lg bg-green-100 border border-green-200 text-emerald-900' >Cancel</button>
              <button className='px-4 py-2 bg-emerald-700 text-white font-bold rounded-lg  hover:bg-green-100 hover:border hover:border-green-200 hover:text-emerald-900' >Save Changes</button>
            </div>
          </div>}

          {/* order history */}

          {order && <div>
            {/* this below div is loop based on the item */}
            <div className="rounded-lg p-4 shadow-sm flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img src="https://m.media-amazon.com/images/I/91ssiobY8TL._UY1100_.jpg" alt="" className='w-[150px] h-[150px] object-cover rounded' />
                <div className="ml-4">
                  <h1 className="font-semibold text-base">Boutique Wear floral Dress</h1>
                  <p className="text-gray-600 text-sm"><i>Size XL</i></p>
                  <h1 className="text-gray-700 text-sm">$ 150</h1>
                </div>
              </div>

              <div>
                <button className='px-5 py-2 bg-orange-400 text-white text-sm hover:bg-white hover:text-orange-800 hover:border hover:border-orange-800'><FontAwesomeIcon icon={faCompass} className='me-2' />Track</button>
              </div>
            </div>

            {/* if no order yet */}
            <div className="md:grid grid-cols-3 md:px-10 px-5 my-10  flex justify-center items-center">
              <div></div>
              <div className='flex justify-center items-center flex-col'>
                <img src="https://assets-v2.lottiefiles.com/a/626eb1a2-1184-11ee-959c-637bd66df669/JMo8cCTp0M.gif" alt="no image" style={{ width: '200px', height: '200px' }} />
                <h1 className='text-center text-xl mt-10'>You Haven't Placed any Ordered Yet!!!</h1>
                <Link to={'/collection-all'}><button className='my-5 bg-black text-white px-5 py-2 text-lg hover:bg-white hover:text-black hover:border hover:border-black'>SHOP NOW</button></Link>

              </div>
              <div></div>
            </div>
            {/* this is the end of no item yet */}

          </div>}


          {/* sell status */}

          {sellstatus && <div>
            {/* this below div is loop based on the item */}
            <div className="rounded-lg p-4 shadow-sm flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img src="https://m.media-amazon.com/images/I/91ssiobY8TL._UY1100_.jpg" alt="" className='w-[150px] h-[150px] object-cover rounded' />
                <div className="ml-4">
                  <h1 className="font-semibold text-base">Boutique Wear floral Dress</h1>
                  <p className="text-gray-600 text-sm"><i>Size XL</i></p>
                  <h1 className="text-gray-700 text-sm">$ 150</h1>
                </div>
              </div>

              <div>
                {/* pending image */}
                <img src="https://png.pngtree.com/png-vector/20230830/ourmid/pngtree-pending-imminent-rubber-stamp-image_9932560.png" alt="" className='w-[100px] h-[80px]' />
                {/* accepted */}
                <img src="https://png.pngtree.com/png-vector/20220622/ourmid/pngtree-accepted-received-sign-acknowledged-vector-png-image_18870198.png" alt="" className='w-[100px] h-[80px]' />
                {/* rejected */}
                <img src="https://freepngimg.com/thumb/categories/1838.png" alt="" className='w-[100px] h-[80px]' />

                <div className='flex justify-end'><button className='bg-red-700 px-3 py-2 rounded-lg text-white w-full'>Delete</button></div>
              </div>
            </div>

            {/* if no order yet */}
            <div className="md:grid grid-cols-3 md:px-10 px-5 my-10  flex justify-center items-center">
              <div></div>
              <div className='flex justify-center items-center flex-col'>
                <img src="https://assets-v2.lottiefiles.com/a/626eb1a2-1184-11ee-959c-637bd66df669/JMo8cCTp0M.gif" alt="no image" style={{ width: '200px', height: '200px' }} />
                <h1 className='text-center text-xl mt-10'>You Haven't sell any Products Yet!!!</h1>
                <Link to={'/sell-item'}><button className='my-5 bg-black text-white px-5 py-2 text-lg hover:bg-white hover:text-black hover:border hover:border-black'>SELL NOW</button></Link>

              </div>
              <div></div>
            </div>
            {/* this is the end of no item yet */}

          </div>}

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Profile