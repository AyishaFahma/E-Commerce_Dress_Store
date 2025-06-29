import React from 'react'

function Adminheader() {
  return (
    <>

    <nav className='bg-emerald-950 flex items-center px-5 py-2'>
        <div className='flex items-center'>
            <img src="https://cdn-icons-png.flaticon.com/512/4596/4596668.png" alt="no logo image" className="w-15 h-15 md:w-[80px] md:h-[80px]" />
            <h1 className='text-white md:text-2xl font-bold'>SWAP FASHIONS</h1>
        </div>
        <div className='ms-auto'>
        <button className='border border-emerald-600 bg-emerald-600 p-2 text-white rounded-lg font-bold cursor-pointer'>LOGOUT</button>
        </div>
    </nav>
    <div className='bg-stone-300 p-2'>
        <h1 className='text-center font-bold'>Welcome, Admin! You're all set to manage and monitor the system. Let’s get to work!</h1>
    </div>
    
    </>
  )
}

export default Adminheader