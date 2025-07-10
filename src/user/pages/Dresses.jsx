import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import {  viewSingleCategoryApi } from '../../sevices/allApi'
import { serverurl } from '../../sevices/serverurl'

function Dresses() {


  //state for token
  const [token, settoken] = useState("")

  //state to store the data
  const [allDresses, setallDresses] = useState([])

  //size state
  const [selectedSizes, setSelectedSizes] = useState([]);
  


  // to get all dresses
  const getAllDressesUser = async(token , category)=>{

    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    const result = await viewSingleCategoryApi(category, reqHeader)
    console.log(result);

    setallDresses(result.data)
  }
  console.log(allDresses);


  //-------------------------------

  // Size checkbox
  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    // console.log(value,checked);
    // console.log("the value and checked");


    if (checked) {
      setSelectedSizes([...selectedSizes, value]);
    } else {
      setSelectedSizes(selectedSizes.filter(size => size !== value));
    }
  };


  const filteredProducts = allDresses.filter(product => {
    const sizeMatch =
      selectedSizes.length === 0 || selectedSizes.includes(product.size);

    return sizeMatch;
  });
  //console.log('filtered' , filteredProducts);
  




  useEffect( ()=>{
    if(sessionStorage.getItem("token")){
      const tok = sessionStorage.getItem("token")
      settoken(tok)
      getAllDressesUser(tok , "Dresses")
    }
  },[])




  return (
    <>
      <Header />

      {/* filter dress  */}

      <h1 className='my-10 text-center font-bold md:text-xl text-lg'>DRESSES/ WESTERN DRESS FOR WOMEN</h1>

      {token? <div className="md:grid grid-cols-[1fr_4fr] md:px-10 px-5 mb-30 ">

        {/* first filter grid portion */}
        <div className='md:mb-0 mb-10'>

          <h1 className='font-bold text-lg my-2'>SHOPPING BY :</h1>
          <button className='p-2 bg-emerald-700 rounded text-sm font-semibold text-white'>Women Clothing Dresses</button>

          <h1 className='font-bold text-lg my-6'>Filter By Categories :</h1>

          <div className='my-2 flex'>
            <input type="checkbox" id='Dresses' name='filter' className="w-5 h-5 accent-emerald-700" checked={true} readOnly/>
            <label htmlFor="Dresses" className='ms-3'>Dresses</label>
          </div>

          {/* size */}

          <h1 className='font-bold text-lg my-6'>Size :</h1>

          <div className='my-2 flex'>
            <input type="checkbox" id='XS' name='filter' className="w-5 h-5 accent-emerald-700" value="XS" onChange={handleSizeChange}/>
            <label htmlFor="XS" className='ms-3'>XS</label>
          </div>

          <div className='my-2 flex'>
            <input type="checkbox" id='S' name='filter' className="w-5 h-5 accent-emerald-700" value="S" onChange={handleSizeChange}/>
            <label htmlFor="S" className='ms-3'>S</label>
          </div>

          <div className='my-2 flex'>
            <input type="checkbox" id='M' name='filter' className="w-5 h-5 accent-emerald-700" value="M" onChange={handleSizeChange}/>
            <label htmlFor="M" className='ms-3'>M</label>
          </div>

          <div className='my-2 flex'>
            <input type="checkbox" id='L' name='filter' className="w-5 h-5 accent-emerald-700" value="L" onChange={handleSizeChange}/>
            <label htmlFor="L" className='ms-3'>L</label>
          </div>

          <div className='my-2 flex'>
            <input type="checkbox" id='XL' name='filter' className="w-5 h-5 accent-emerald-700" value="XL" onChange={handleSizeChange}/>
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

          {filteredProducts?.length > 0 ?
          filteredProducts?.map( (item , index) => (
            <div className='p-5 flex justify-center items-center flex-col md:mb-5 mb-10 shadow-lg/30' key={index}>

            <img src={`${serverurl}/imgUpload/${item?.uploadImages?.[0]?.filename}`} alt="book image" style={{ width: '100%', height: '300px' }} />

            <h1 className='font-bold mt-5'>{item?.title.slice(0,20)}...</h1>
            <p className='text-sm '>Size {item?.size}</p>

            <p><s>$ {item?.price} </s><span className='text-red-500 ms-5'>$ {item?.dprice}</span></p>

            <Link to={`/view-product/${item._id}`} className='w-full'><button className='bg-emerald-700 w-full p-2 text-white mt-3 hover:bg-white hover:border hover:border-emerald-700 hover:text-emerald-800'>View</button></Link>

          </div>
          )) 
                    
           :
          <p className='text-center text-xl'>Loading Content.....</p>}


        </div>

      </div>

      //{/* if not login */}
            :
      <div className="md:grid grid-cols-3 md:px-10 px-5 my-10  flex justify-center items-center">
          <div></div>
          <div className='flex justify-center items-center flex-col'>
            <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="no image" style={{ width: '200px', height: '200px' }} />
            <h1 className='text-center md:text-3xl text-xl mt-10'>Please <Link to={'/login'} className='text-blue-500 underline'>Login</Link> to Explore More...</h1>
          </div>
          <div></div>
        </div>}






      <Footer />
    </>
  )
}

export default Dresses