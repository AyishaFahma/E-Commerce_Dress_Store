import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faMessage, faPaperPlane, faPlane, faScaleBalanced, faStar, faTape, faTruck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faSignalMessenger } from '@fortawesome/free-brands-svg-icons/faSignalMessenger'
import { useParams } from 'react-router-dom'
import { viewSingleProductApi } from '../../sevices/allApi'
import { toast } from 'react-toastify'
import { serverurl } from '../../sevices/serverurl'

function Viewproduct() {
    //modal clicking state for size chart
    const [modalStatus, setModalStatus] = useState(false)

    //state to store a single product
    const [viewProduct, setviewProduct] = useState([])


    const {id} = useParams()
    console.log(id);

    //to view a single product
    const getSingleProduct = async(id)=>{

        const result = await viewSingleProductApi(id)
        console.log(result);

        if(result.status == 200){
            setviewProduct(result.data)
        }
        else{
            toast.error('Something went wrong')
        }
        
    }
    console.log(viewProduct);
    


    useEffect( ()=>{
        getSingleProduct(id)
    },[])
    


    return (
        <>
            <Header />


            <div className="md:grid grid-cols-[3fr_4fr] md:p-10 p-3 my-10">
                {/* image of product */}
                <div className='md:grid grid-cols-2 gap-2'>

                    {viewProduct?.uploadImages?.map( (item, index)=> (
                        <div className='md:mb-0 mb-2 h-[450px] w-full overflow-hidden group cursor-zoom-in' key={index}>
                        <img src={`${serverurl}/imgUpload/${item.filename}`} alt="no image" className='h-full w-full  object-cover transition-transform duration-500 ease-in-out group-hover:scale-150' />
                    </div>
                    )) }

                    

                    

                </div>

                {/* details of product */}
                <div className='md:px-20 px-5'>
                    <h1 className='font-bold md:text-3xl text-xl mb-5 md:mt-0 mt-5'>{viewProduct?.title}</h1>

                    <img src="https://icon-library.com/images/icon-replace/icon-replace-25.jpg" alt="no image" className='w-[50px] h-[50px]' />

                    <button className='border border-gray-300 py-1 px-3 font-semibold text-lg my-5'>{viewProduct?.rating} <FontAwesomeIcon icon={faStar} bounce className='text-emerald-700 me-3' />| <span className='font-medium text-sm'> Rated by Swap Fashion</span> </button>

                    <h1><span className='font-bold md:text-xl text-lg me-5'>MRP  {viewProduct?.dprice}.00 </span><s className='text-gray-500 font-semibold'>MRP  {viewProduct?.price}.00</s></h1>

                    <button className='px-4 py-2 my-5 bg-stone-200 text-xs'>KNOW MORE ABOUT THE PRODUCT <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#044903" }} className='ms-2 text-xl' /></button>
                    <br />

                    <button className='bg-emerald-900 p-1 text-white text-sm'>Only 1 left !</button>

                    {/* size selecting part */}
                    <div className="space-y-3 my-6">
                        {/* Top row: label + size chart */}

                        <div className="flex justify-between items-center">
                            <label htmlFor="size" className="font-medium text-gray-800">Select Size</label>

                            <button onClick={() => setModalStatus(true)} className="text-base text-emerald-700 hover:underline flex items-center gap-1">
                                <FontAwesomeIcon icon={faTape} />
                                Size Chart
                            </button>


                            {/* modal  */}

                            {modalStatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                    <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                                        <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                                            <div className="bg-white">

                                                {/* header of modal */}

                                                <div className='bg-emerald-900 p-4 text-white flex justify-between items-center'>
                                                    <p className='text-xl'>Size Chart</p>
                                                    < FontAwesomeIcon icon={faXmark} className='fa-2x cursor-pointer' onClick={() => setModalStatus(false)} />
                                                </div>
                                                {/* body of modal */}
                                                <div className='p-4'>
                                                    <h1 className='text-emerald-500'>WOMEN'S BODY SIZING CHART</h1>

                                                    <div className='md:flex p-5'>
                                                        <table class="min-w-full border border-gray-300 text-sm text-left">
                                                            <thead class="bg-gray-100">
                                                                <tr>
                                                                    <th class="px-4 py-2 border">Size</th>
                                                                    <th class="px-4 py-2 border">Bust</th>
                                                                    <th class="px-4 py-2 border">Waist</th>
                                                                    <th class="px-4 py-2 border">Hip</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody >
                                                                <tr>
                                                                    <td class="px-4 py-2 border">XS</td>
                                                                    <td class="px-4 py-2 border">30-31</td>
                                                                    <td class="px-4 py-2 border">23-25</td>
                                                                    <td class="px-4 py-2 border">31-34</td>
                                                                </tr>
                                                                <tr >
                                                                    <td class="px-4 py-2 border">S</td>
                                                                    <td class="px-4 py-2 border">32-35</td>
                                                                    <td class="px-4 py-2 border">26-28</td>
                                                                    <td class="px-4 py-2 border">35-37</td>
                                                                </tr>
                                                                <tr >
                                                                    <td class="px-4 py-2 border">M</td>
                                                                    <td class="px-4 py-2 border">36-38</td>
                                                                    <td class="px-4 py-2 border">30-32</td>
                                                                    <td class="px-4 py-2 border">38-40</td>
                                                                </tr>
                                                                <tr >
                                                                    <td class="px-4 py-2 border">L</td>
                                                                    <td class="px-4 py-2 border">39-42</td>
                                                                    <td class="px-4 py-2 border">33-36</td>
                                                                    <td class="px-4 py-2 border">41-43</td>
                                                                </tr>
                                                                <tr >
                                                                    <td class="px-4 py-2 border">XL</td>
                                                                    <td class="px-4 py-2 border">43-46</td>
                                                                    <td class="px-4 py-2 border">37-40</td>
                                                                    <td class="px-4 py-2 border">44-46</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>

                        {/* Dropdown */}
                        <select
                            id="size"
                            name="size"
                            value={viewProduct?.size}

                            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500">
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>

                        {/* Selected size heading */}
                        <h1 className="text-sm text-gray-800 mt-5">Size <span className='font-semibold ms-3'>{viewProduct?.size}</span></h1>
                    </div>


                    {/* buttons - cart , buy */}

                    <button className='p-2 bg-stone-200 w-full text-base font-semibold hover:bg-emerald-900 hover:text-white my-5'>ADD TO CART</button>

                    <button className='p-2 hover:bg-stone-200 hover:text-black w-full text-base font-semibold bg-emerald-900 text-white '>BUY IT NOW</button>

                    <h1 className='mt-10 mb-5 text-gray-600'> <FontAwesomeIcon icon={faPaperPlane} className='me-2' />Delivery & Returns <span className='md:ms-20 ms-10'> <FontAwesomeIcon icon={faSignalMessenger} className='me-2' />Enquiry</span></h1>

                    {/* description of the product */}

                    <h1 className='text-lg text-gray-700 mb-3'>PRODUCT DETAILS</h1>
                    <h1 className='text-sm text-gray-800'>Colour: {viewProduct?.color}</h1>
                    <h1 className='text-sm text-gray-800'>Condition: {viewProduct?.condition}</h1>
                    <h1 className='text-sm text-gray-800'>Material: {viewProduct?.material}</h1>
                    <h1 className='text-sm text-gray-800'>Bust: {viewProduct?.bust}</h1>
                    <h1 className='text-sm text-gray-800'>Waist: {viewProduct?.waist}</h1>
                    <h1 className='text-sm text-gray-800'>Hip: {viewProduct?.hip}</h1>
                    <h1 className='text-sm text-gray-800'>Front Length: {viewProduct?.frontlength}</h1>
                    <h1 className='text-sm text-gray-800'>Back Length: {viewProduct?.backlength}</h1>

                    <h1 className='mt-5 text-sm text-gra-700 font-semibold'><FontAwesomeIcon icon={faTruck} className='me-3' /> You have got FREE SHIPPING</h1>


                </div>

            </div>

            <Footer />
        </>
    )
}

export default Viewproduct