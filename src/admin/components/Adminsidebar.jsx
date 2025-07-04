import { faProductHunt } from '@fortawesome/free-brands-svg-icons'
import { faBagShopping, faBars, faBook, faClipboardQuestion, faGear, faGears, faHome, faListCheck, faRectangleList, faShop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Adminsidebar() {

    const navigate = useNavigate()
    // to show the blue color on radio according to current page 
    const [homeStatus, sethomeStatus] = useState(false)

    const [productStatus, setproductStatus] = useState(false)

    const [orderStatus, setorderStatus] = useState(false)

    const [sellreqStatus, setsellreqStatus] = useState(false)

    const [settingStatus, setsettingStatus] = useState(false)


    const filter = (data) =>{

        if (data == 'home'){
            navigate('/admin-home')
        }
        else if(data == 'products'){
            navigate('/admin-products')
        }
        else if(data == 'orders'){
            navigate('/admin-orders')
        }
        else if(data == 'sellreq'){
            navigate('/admin-sell-request')
        }
        else if(data == 'settings'){
            navigate('/admin-settings')
        }
        else{
            navigate('*')
        }

    }

    useEffect( () => {
        if(location.pathname == '/admin-home'){
            sethomeStatus(true)
            setproductStatus(false)
            setorderStatus(false)
            setsellreqStatus(false)
            setsettingStatus(false)
        }
        else if(location.pathname == '/admin-products'){
            sethomeStatus(false)
            setproductStatus(true)
            setorderStatus(false)
            setsellreqStatus(false)
            setsettingStatus(false)
        }
        else if(location.pathname == '/admin-orders'){
            sethomeStatus(false)
            setproductStatus(false)
            setorderStatus(true)
            setsellreqStatus(false)
            setsettingStatus(false)
        }
        else if(location.pathname == '/admin-sell-request'){
            sethomeStatus(false)
            setproductStatus(false)
            setorderStatus(false)
            setsellreqStatus(true)
            setsettingStatus(false)
        }
        else if(location.pathname == '/admin-settings'){
            sethomeStatus(false)
            setproductStatus(false)
            setorderStatus(false)
            setsellreqStatus(false)
            setsettingStatus(true)
        }

    }, [])

  return (
    <>

    <div className='bg-stone-300 w-full md:h-full flex items-center flex-col'>

        <div className='my-5 bg-emerald-950 w-[180px] h-[180px] rounded-full flex justify-center items-center flex-col'>
            <img src="https://cdn-icons-png.flaticon.com/512/4596/4596668.png" alt="no image" style={{width:'120px' , height:'120px' , borderRadius:'50%', marginTop:'-40px'}} />
            <h1 className='font-bold text-white'>SWAP FASHIONS</h1>
        </div>


        <div className='mb-4' onClick={()=>filter('home')}  checked={homeStatus}>
            <button className= {homeStatus?'px-3 py-2 bg-emerald-700 text-white font-bold rounded-lg' :'bg-green-100 border border-green-200 text-emerald-900 px-3 py-2 font-bold rounded-lg' } ><FontAwesomeIcon icon={faHome} className='me-2'/>Dashboard</button>
        </div>


        <div className='mb-4' onClick={()=>filter('products')}  checked={productStatus}>
            <button className= {productStatus?'px-4 py-2 bg-emerald-700 text-white font-bold rounded-lg' :'bg-green-100 border border-green-200 text-emerald-900 px-4 py-2 font-bold rounded-lg' } ><FontAwesomeIcon icon={faShop} className='me-4'/>Products</button>
        </div>

        <div className='mb-4' onClick={()=>filter('orders')} checked={orderStatus} >
            <button className= {orderStatus?'px-7 py-2 bg-emerald-700 text-white font-bold rounded-lg' :'bg-green-100 border border-green-200 text-emerald-900 px-7 py-2 font-bold rounded-lg' } ><FontAwesomeIcon icon={faRectangleList} className='me-3'/>Orders</button>
        </div>

        <div className='mb-4' onClick={()=>filter('sellreq')} checked={sellreqStatus} >
            <button className= {sellreqStatus?'px-3 py-2 bg-emerald-700 text-white font-bold rounded-lg' :'bg-green-100 border border-green-200 text-emerald-900 px-3 py-2 font-bold rounded-lg' } ><FontAwesomeIcon icon={faClipboardQuestion} className='me-2'/>Sell Request</button>
        </div>

        <div className='mb-4' onClick={()=>filter('settings')} checked={settingStatus} >
            <button className= {settingStatus?'px-6 py-2 bg-emerald-700 text-white font-bold rounded-lg' :'bg-green-100 border border-green-200 text-emerald-900 px-6 py-2 font-bold rounded-lg' } ><FontAwesomeIcon icon={faGears} className='me-2'/>Settings</button>
        </div>

    </div>
    </>
  )
}

export default Adminsidebar