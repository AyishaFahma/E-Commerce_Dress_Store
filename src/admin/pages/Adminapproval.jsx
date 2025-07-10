import React, { useEffect, useState } from 'react'
import Adminheader from '../components/Adminheader'
import Adminsidebar from '../components/Adminsidebar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { approveProductApi, getAllUserProductApi, getSingleUserItemApi, rejectProductApi } from '../../sevices/allApi'
import { serverurl } from '../../sevices/serverurl'

function Adminapproval() {

  //modal clicking state for view details button
  const [modalStatus, setModalStatus] = useState(false)

  //state to hold all user selled products
  const [allUserProduct, setallUserProduct] = useState([])

  //state to view single item when viewdetails button click
  const [viewItem, setviewItem] = useState([])

  //stste to hold approve products
  const [approveStatus, setapproveStatus] = useState([])

  //state to hold rejected product
  const [rejectStatus, setrejectStatus] = useState([])



  //get all selled products
  const viewAllUserProduct = async()=>{

    const result = await getAllUserProductApi()
    //console.log(result);
    setallUserProduct(result.data)
    
  }
  console.log(allUserProduct);


  //to view single item when view details modal opens
  const viewSingleItem = async(id)=>{

    const result = await getSingleUserItemApi(id)
    //console.log(result);
    setviewItem(result.data)
    
  }
  console.log(viewItem);


  //approveproduct
  const approveProduct = async(id)=>{

    const result = await approveProductApi(id)
    //console.log(result);
    if(result.status == 200){
    setapproveStatus(result.data)
    }
  }
  console.log(approveStatus);


  //reject product
  const rejectProduct = async(id)=>{

    const result = await rejectProductApi(id)
    //console.log(result);
    if(result.status == 200){
      setrejectStatus(result.data)
    }  
  }
  console.log(rejectStatus);
  

  
 

  useEffect( ()=>{

    viewAllUserProduct()

  },[approveStatus , rejectStatus])





  return (
    <>
      <Adminheader />

      <div className='md:grid grid-cols-[1fr_5fr]'>

        <div><Adminsidebar /></div>

        <div className='md:m-10 m-2 bg-slate-50 shadow-xl rounded-lg md:px-10 px-3 py-5'>

          <h1 className='md:text-2xl text-xl font-bold mb-2'>All Sell Requests</h1>
          <label className='text-gray-700 font-semibold me-5'>Sort by:</label>
          <input type="text" value='Newest First' className='border border-gray-400 p-1 rounded-lg outline-0' readOnly />

          <div className='md:grid grid-cols-2 md:my-10 my-5 gap-x-20'>
            {/* first column */}

            { allUserProduct?.length > 0 ? 
              allUserProduct?.map( (item , index) => ( 

                <div className='mb-5 p-5 bg-stone-50 rounded-lg shadow-lg/20 border border-stone-200' key={index}>
              <div className='flex justify-between items-center'>
                <h1 className='text-xl font-bold'>{item?.title.slice(0,20)}...</h1>

                {item?.status == "Pending" ? <button className=' p-3 rounded-full bg-amber-100 text-amber-900 font-bold'>Pending</button> : item?.status == "Approved" ?
                // accepted 
                <button className=' p-3 rounded-full bg-green-100 text-green-900 font-bold'>Accepted</button> :
                //  rejected  
                <button className=' p-3 rounded-full bg-red-100 text-red-900 font-bold'>Rejected</button>}

              </div>

              <div className='mt-3'>
                <img src={`${serverurl}/imgUpload/${item?.uploadImages?.[0]?.filename}`} alt="" className='w-full h-[200px] object-cover rounded-xl' />

                <p className='mt-4 mb-2 text-gray-700 font-bold'>UserMail:<span className='text-lg text-black ms-3'> {item?.userMail}</span></p>
                <p className='text-gray-700 font-bold'>Proposed Price: <span className='ms-3 text-emerald-800 text-lg'>${item?.dprice}.00</span></p>
              </div>

              <div className='mt-5 flex justify-end'>

                <button type='button' onClick={()=>{  viewSingleItem(item._id) ; setModalStatus(true) }  } className='me-5 bg-blue-200 px-3 py-2 rounded-lg text-blue-700'>View Details</button>

                { item?.status == "Pending" && <button type='button' onClick={()=>approveProduct(item._id)} className='bg-green-700 px-3 py-2 rounded-lg text-white'>Accept</button>}

              </div>

              <div className='flex justify-end mt-3'>
                { item?.status == "Pending" && <button type='button' onClick={()=>rejectProduct(item._id)}  className='bg-red-700 px-3 py-2 rounded-lg text-white '>Reject</button>}
              </div>

            </div>
              )) 

            :
            <p className='text-2xl font-bold'>Loading.....</p>  }

          </div>

          {modalStatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                  <div className="bg-white">

                    {/* header of modal */}

                    <div className='bg-emerald-800 p-4 text-white flex justify-between items-center'>
                      <p className='text-xl'>{viewItem?.title}</p>
                      < FontAwesomeIcon icon={faXmark} className='fa-2x cursor-pointer' onClick={() => setModalStatus(false)} />
                    </div>
                    {/* body of modal */}
                    <div className='p-4'>
                      
                      <div className='flex flex-col md:flex-row md:justify-between items-center gap-1'> 

                        {viewItem?.uploadImages?.map( (item , index) => ( 
                          <img src={`${serverurl}/imgUpload/${item?.filename}`} alt="no image" className='w-[250px] h-[250px] object-cover' key={index}/>
                        ))  }

                        

                           
                      </div>
                      <div className='p-4'>

                        <p className='text-gray-800'>{viewItem?.description}</p>

                        <p className='text-gray-800 mt-2'>Category: {viewItem?.category}</p>
                        <p className='text-gray-800 '>Size: {viewItem?.size}</p>
                        <p className='text-gray-800 '>Condition: {viewItem?.condition}</p>
                        <p className='text-gray-800 '>Material: {viewItem?.material}</p>
                        
                      </div>

                      <div className='p-4'>
                        <p className='text-gray-800'>UserMail: {viewItem?.userMail}</p>
                        <p className='text-gray-800'>Actual Price:<span className='text-emerald-800 font-bold ms-5 text-lg'> ${viewItem?.price}.00</span></p>
                        <p className='text-gray-800'>Proposed Price:<span className='text-emerald-800 font-bold ms-5 text-xl'> ${viewItem?.dprice}.00</span></p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>}


        </div>

      </div>

      <Footer />
    </>
  )
}

export default Adminapproval