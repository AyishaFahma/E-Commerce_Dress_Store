import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <>

      <div className='md:p-20 p-2 mb-10'>
        <div className='md:grid grid-cols-[2fr_3fr] gap-x-10 md:p-10 p-5 bg-slate-50 rounded-lg shadow-lg/30'>

          <div className='rounded-lg mb-5 md:mb-0'>
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/online-discount-shopping-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--offer-e-commerce-illustrations-4322922.png" alt="" className='rounded-lg h-full'/>
          </div>


          <div className='rounded-lg bg-slate-200 flex justify-center items-center flex-col'>
            {register? <h1 className='text-center md:text-2xl text-xl font-bold my-10'>REGISTER</h1> 
            :
            <h1 className='text-center md:text-2xl text-xl font-bold my-10'>LOGIN</h1>}

            {register && <input type="text" placeholder='User Name' className='p-2 bg-white rounded md:w-3/5 w-5/6 outline-0 border border-stone-300 mb-4' />}

            <input type="text" placeholder='Email' className='p-2 bg-white rounded md:w-3/5 w-5/6 outline-0 border border-stone-300 mb-4' />

            <input type="text" placeholder='Password' className='p-2 bg-white rounded md:w-3/5 w-5/6 outline-0 border border-stone-300 mb-5' />

            {register? <button className='my-5 bg-emerald-800 text-white md:px-8 px-3 py-2 text-lg hover:bg-emerald-700  hover:border hover:border-emerald-800'>SIGN UP</button>
                :
            <button className='my-5 bg-emerald-800 text-white md:px-8 px-3 py-2 text-lg hover:bg-emerald-700  hover:border hover:border-emerald-800'>SIGN IN</button>}

            {register? <p className='my-5 font-semibold md:text-base text-sm text-center'>If you already have an account with us,<br /> please <Link to={'/login'} className='underline text-blue-500'>LOGIN</Link></p>
                     :
            <p className='my-5 font-semibold md:text-base text-sm text-center'>Are you a New User? <Link to={'/register'} className='underline text-blue-500'>Register</Link></p>}


          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Auth