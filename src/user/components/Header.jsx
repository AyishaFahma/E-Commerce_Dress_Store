import { faBagShopping, faBars,  faChevronDown, faMultiply,  faPlus, faSearch, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'


function Header() {

    // for banner closing 
    const [banner, setbanner] = useState(true)
    const [dropDown, setdropDown] = useState(false)
    const [bars, setbars] = useState(false)

    return (
        <>

            {/* banner */}

            {banner && <div className='bg-gray-950 text-white p-3 md:flex hidden justify-evenly items-center' >
                <h1 className='text-xs'>🚀FREE shipping on Prepaid Orders.</h1>
                <h1 className='text-xs'>COD available in select States @Rs.99/-</h1>
                <h1 className='text-xs'>Use Code EXTRA10 to get 🚀10% off on your first Order</h1>

                <FontAwesomeIcon className='cursor-pointer' icon={faMultiply} onClick={() => setbanner(false)} />

            </div>}

            <div className='md:grid md:grid-cols-[2fr_5fr_2fr] flex items-center justify-between bg-emerald-950 text-white md:px-10 px-5 md:py-2'>


                <div className='flex md:hidden' onClick={() => setbars(!bars)} >
                    <FontAwesomeIcon icon={faBars} className='fa-2x' />
                </div>


                <div className='flex flex-col items-center' style={{marginTop:'-10px'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4596/4596668.png" alt="no logo image" className="w-20 h-20 md:w-[60px] md:h-[60px]" />
                    <h1 className='font-bold md:text-xl text-sm md:mb-0 mb-2 text-center'>SWAP FASHIONS</h1>
                </div>

                {/* smaller screen navigate content on small screen */}

                {bars && (

                    <div className="fixed top-0 left-0 w-70 h-full bg-emerald-950 text-white z-50 ">
                        <div className="flex justify-between items-center p-4 border-b border-white">
                            <h2 className="text-lg font-bold">MENU</h2>
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="text-xl cursor-pointer p-1 bg-white text-black rounded"
                                onClick={() => setbars(false)}
                            />
                        </div>
                        <ul className="flex flex-col p-4 space-y-4 font-semibold">

                            <Link to={'/'}><li className="hover:text-yellow-300 cursor-pointer">HOME</li></Link>

                            <Link to={'/about'}><li className="hover:text-yellow-300 cursor-pointer">ABOUT</li></Link>

                            <Link to={'collection-all'}><li className="hover:text-yellow-300 cursor-pointer">SHOP ALL</li></Link>

                            <li className="relative group hover:text-yellow-300 font-semibold" >
                            WOMEN
                            <FontAwesomeIcon icon={faPlus} className="text-lg ms-4 cursor-pointer" onClick={() => setdropDown(!dropDown)} />

                            {dropDown && <ul className="absolute top-full left-0 bg-white text-black  w-60 mt-2">

                                <Link to={'/collection-dresses'}><li className="px-4 py-2 hover:bg-gray-200">Dresses</li></Link>

                                <Link to={'/collection-tops'}><li className="px-4 py-2 hover:bg-gray-200">Tops</li></Link>

                                <Link to={'/collection-bottoms'}><li className="px-4 py-2 hover:bg-gray-200">Bottoms</li></Link>
                                
                            </ul>}
                        </li>

                            <Link to={'/sell-item'}><li className="hover:text-yellow-300 cursor-pointer">SELL</li></Link>

                            <Link to={'/login'}><li className="hover:text-yellow-300 cursor-pointer mt-5">LOGIN</li></Link>

                            <Link to={'/register'}><li className="hover:text-yellow-300 cursor-pointer">REGISTER</li></Link>

                            <Link to={'/profile'}><li className="hover:text-yellow-300 cursor-pointer mt-5"> <FontAwesomeIcon icon={faUser} className='me-3'/>PROFILE</li></Link>
                        </ul>
                    </div>
                )
                }


                {/* navigate contents for medium screen */}
                <div className='md:flex hidden justify-center items-center cursor-pointer'>
                    <ul className='flex justify-between w-full'>

                        <Link to={'/'}><li className='hover:text-yellow-300 font-semibold'>HOME</li></Link>

                        <Link to={'/about'}><li className='hover:text-yellow-300 font-semibold'>ABOUT</li></Link>

                        <Link to={'/collection-all'}><li className='hover:text-yellow-300 font-semibold'>SHOP ALL</li></Link>

                        <li className="relative group hover:text-yellow-300 font-semibold" >
                            WOMEN
                            <FontAwesomeIcon icon={faChevronDown} className="text-lg ms-2 cursor-pointer" onClick={() => setdropDown((x) => !x)} />

                            {dropDown && <ul className="absolute top-full left-0 bg-white text-black  w-60 mt-2">

                                <Link to={'/collection-dresses'}><li className="px-4 py-2 hover:bg-gray-200">Dresses</li></Link>

                                <Link to={'/collection-tops'}><li className="px-4 py-2 hover:bg-gray-200">Tops</li></Link>

                                <Link to={'/collection-bottoms'}><li className="px-4 py-2 hover:bg-gray-200">Bottoms</li></Link>
                                
                            </ul>}
                        </li>

                        <Link to={'/sell-item'}><li className='hover:text-yellow-300 font-semibold'>SELL</li></Link>
                    </ul>
                </div>


                <div className='md:flex hidden items-center justify-center'>
                    <div className='flex justify-end gap-10 w-full text-2xl cursor-pointer'>
                        <FontAwesomeIcon icon={faSearch}/>

                        {/* login or profile */}

                        <Link to={'/login'}><button className='border border-emerald-600 bg-emerald-600 px-2 py-1 text-lg rounded-lg font-bold cursor-pointer'>Login</button></Link>

                        <Link to={'/profile'}><FontAwesomeIcon icon={faUser}/></Link>

                        <Link to={'/cart'}><FontAwesomeIcon icon={faBagShopping}/></Link>
                    </div>
                </div>

                <div className='flex md:hidden'>
                    <Link to={'/cart'}><FontAwesomeIcon icon={faBagShopping} className='fa-2x cursor-pointer'/></Link>
                </div>

            </div>


        </>
    )
}

export default Header