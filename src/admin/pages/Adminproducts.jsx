import React, { useEffect, useState } from 'react'
import Adminheader from '../components/Adminheader'
import Footer from '../../components/Footer'
import Adminsidebar from '../components/Adminsidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { addProductApi, removeProductApi, viewAllProductApi, viewSingleProductApi } from '../../sevices/allApi'
import { useParams } from 'react-router-dom'
import { serverurl } from '../../sevices/serverurl'



function Adminproducts() {
  const [addproductStatus, setaddproductStatus] = useState(true)
  const [viewproductStatus, setviewproductStatus] = useState(false)

  //modal clicking state for view details button
  const [modalStatus, setModalStatus] = useState(false)


  const [productDetails, setproductDetails] = useState({

    title: "",
    size: "",
    category: "",
    color: "",
    condition: "",
    material: "",
    bust: "",
    waist: "",
    hip: "",
    sku: "",
    rating: "",
    frontlength: "",
    backlength: "",
    price: "",
    dprice: "",
    uploadImages: []

  })
  //console.log(productDetails);

  //state to store url of a image
  const [preview, setpreview] = useState("")
  //state to store all url of 3 images
  const [allUploadedImage, setallUploadedImage] = useState([])

  //state to store all products for view
  const [allProducts, setallProducts] = useState([])

  //state to view a single product
  const [viewProduct, setviewProduct] = useState([])

  //state for delete product
  const [deleteStatus, setdeleteStatus] = useState([])



  //to upload images
  const handleUpload = (e) => {
    console.log(e.target.files);

    const fileArray = productDetails.uploadImages
    fileArray.push(e.target.files[0])
    // then this all data is updated to uploadImages key
    setproductDetails({ ...productDetails, uploadImages: fileArray })

    //to convert a file into url by using createObjectURL()

    const url = URL.createObjectURL(e.target.files[0])
    //console.log(url);
    setpreview(url);
    let images = allUploadedImage
    images.push(url)
    setallUploadedImage(images)
    console.log(preview);
    console.log(allUploadedImage);

  }

  //reset button
  const handleReset = () => {
    setproductDetails({
      title: "",
      size: "",
      category: "",
      color: "",
      condition: "",
      material: "",
      bust: "",
      waist: "",
      hip: "",
      sku: "",
      rating: "",
      frontlength: "",
      backlength: "",
      price: "",
      dprice: "",
      uploadImages: []
    })
    setpreview("")
    setallUploadedImage([])
  }

  //submit function
  const handleSubmit = async() => {

    const { title,size,category,color,condition,material,bust,waist,hip,sku,rating,frontlength,backlength,price,dprice,uploadImages } = productDetails

    console.log(title,size,category,color,condition,material,bust,waist,hip,sku,rating,frontlength,backlength,price,dprice,uploadImages);

    if(!title || !size|| !category || !color || !condition || !material || !bust || !waist || !hip || !sku || !rating || !frontlength || !backlength || !price || !dprice, uploadImages.length == 0){

      toast.info('Please fill the form completely')

    }
    else{

      //if there is uploaded content data should be passed in reqbody as form data 


      // 1- create an onj for the formdata class

      const reqbody = new FormData()

      for(let key in productDetails){
        if(key != 'uploadImages'){
          reqbody.append(key , productDetails[key])
        }
        else{
          productDetails.uploadImages.map( (item)=> {
            reqbody.append("uploadImages" , item)
          })
        }
      }
      
      const result = await addProductApi(reqbody)
      console.log(result);

      if(result.status == 200){
        toast.success('Product Added Successfully')
        viewAllProducts()
      }
      else if(result.status == 401){
        toast.warning(result.response.data)
      }
      else{
        toast.error('Something went wrong')
      }
      handleReset()
      
    }
    
  }


  // api to view all product
  const viewAllProducts = async()=>{
    const result = await viewAllProductApi()
    //console.log(result);
    setallProducts(result.data)
    
  }
  console.log(allProducts);


  // view single product when viewdetails buttton click
  const {id} = useParams()
  console.log(id);
  
  const viewSingleProduct = async(id)=>{

    const result = await viewSingleProductApi(id)
    //console.log(result);
    setviewProduct(result.data)
    
  }
  console.log(viewProduct);

  //to delete single product
  const handleDeleteProduct = async(id)=>{

    const result = await removeProductApi(id)
    console.log(result);

    if(result.status == 200){
      toast.success(result.data)
      setdeleteStatus(result)
    }
    else{
      toast.error('Something went wrong')
    }
  }
  
  


  useEffect(()=>{

    viewAllProducts()
    viewSingleProduct(id)

  },[deleteStatus])





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
                    <input value={productDetails.title} onChange={(e) => setproductDetails({ ...productDetails, title: e.target.value })} type="text" placeholder='Title | eg. Elegant Floral Summer Dress' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input value={productDetails.size} onChange={(e) => setproductDetails({ ...productDetails, size: e.target.value })} type="text" placeholder='Size - XS , S , M , L , XL' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input value={productDetails.category} onChange={(e) => setproductDetails({ ...productDetails, category: e.target.value })} type="text" placeholder='Category' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <p className='text-lg text-gray-600 mb-2 mt-10'>Product Details</p>

                  <div className="mb-3">
                    <input value={productDetails.color} onChange={(e) => setproductDetails({ ...productDetails, color: e.target.value })} type="text" placeholder='Colour' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input value={productDetails.condition} onChange={(e) => setproductDetails({ ...productDetails, condition: e.target.value })} type="text" placeholder='Condition' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input value={productDetails.material} onChange={(e) => setproductDetails({ ...productDetails, material: e.target.value })} type="text" placeholder='Material' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input value={productDetails.bust} onChange={(e) => setproductDetails({ ...productDetails, bust: e.target.value })} type="text" placeholder='Bust' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input value={productDetails.waist} onChange={(e) => setproductDetails({ ...productDetails, waist: e.target.value })} type="text" placeholder='Waist' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input value={productDetails.hip} onChange={(e) => setproductDetails({ ...productDetails, hip: e.target.value })} type="text" placeholder='Hip' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input value={productDetails.sku} onChange={(e) => setproductDetails({ ...productDetails, sku: e.target.value })} type="text" placeholder='SKU' className='p-2 bg-white rounded w-full outline-0' />
                  </div>


                </div>


                <div className='my-10 px-2'>

                  <div className="mb-3">
                    <input value={productDetails.rating} onChange={(e) => setproductDetails({ ...productDetails, rating: e.target.value })} type="text" placeholder='Rating' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input value={productDetails.frontlength} onChange={(e) => setproductDetails({ ...productDetails, frontlength: e.target.value })} type="text" placeholder='Front Length' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input value={productDetails.backlength} onChange={(e) => setproductDetails({ ...productDetails, backlength: e.target.value })} type="text" placeholder='Back Length' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input value={productDetails.price} onChange={(e) => setproductDetails({ ...productDetails, price: e.target.value })} type="text" placeholder='$ Price' className='p-2 bg-white rounded w-full outline-0' />
                  </div>

                  <div className="mb-3">
                    <input value={productDetails.dprice} onChange={(e) => setproductDetails({ ...productDetails, dprice: e.target.value })} type="text" placeholder='$ Discount Price' className='p-2 bg-white rounded w-full outline-0' />
                  </div>


                  <div className='flex justify-center items-center mt-10 flex-col'>

                    {!preview ? <label htmlFor="uploadBookImg">
                      <input type="file" id='uploadBookImg' style={{ display: 'none' }} onChange={(e) => handleUpload(e)} />
                      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/add-new-photo-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-picture-empty-states-vol-1-pack-seo-web-icons-9656036.png" alt="no image" style={{ width: '200px', height: '200px' }} />
                    </label>
                      :
                      <img src={preview} alt="no image" style={{ width: '200px', height: '200px' }} />}


                    {/* uploaded book images max 3 */}

                    {preview && <div className='mt-10 flex items-center'>


                      {allUploadedImage?.map((item, index) => (
                        <img src={item} alt="no image" style={{ width: '50px', height: '50px' }} className='mx-2' key={index} />
                      ))}

                      {/* here max image is 3 */}


                      {allUploadedImage?.length < 3 && <label htmlFor="uploadBookImg">
                        <input type="file" id='uploadBookImg' style={{ display: 'none' }} onChange={(e) => handleUpload(e)} />

                        <FontAwesomeIcon icon={faPlus} className='p-2 shadow-lg/30 bg-gray-300 border border-gray-300 ms-4 cursor-pointer' />

                      </label>}

                    </div>}

                  </div>

                </div>
              </div>

              <div className="flex justify-end ">
                <button type='button' onClick={handleReset} className='bg-amber-700 text-white px-5 py-3 rounded hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white cursor-pointer'>Reset</button>

                <button type='button' onClick={handleSubmit} className='bg-emerald-800 text-white px-5 py-3 rounded hover:border hover:border-emerald-800 hover:text-emerald-800 hover:bg-white ms-4 cursor-pointer'>Submit</button>
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

              {allProducts?.length > 0 ? 
              allProducts?.map( (item , index)=> (
                <div className='mb-5 p-5 bg-stone-50 rounded-lg shadow-lg/20 border border-stone-200' key={index}>

                <div>
                  <img src={`${serverurl}/imgUpload/${item?.uploadImages?.[0]?.filename}`} alt="no image" className='w-full h-[200px] object-cover rounded-xl' />

                  <h1 className='text-xl font-bold my-3'>{item?.title}</h1>

                  <p className='text-gray-700 font-bold'>SKU : {item?.sku}</p>
                  <p className='text-gray-700 font-bold'>Category: {item?.category}</p>
                  <p className='text-gray-700 font-bold'>Price: <span className='ms-3 text-emerald-800 text-lg'>${item?.dprice}</span></p>
                </div>

                <div className='mt-5 flex justify-end gap-2'>
                  <button type='button' onClick={() => { viewSingleProduct(item._id); setModalStatus(true) }} className='bg-blue-200 px-3 py-2 rounded-lg text-blue-700'>View Details</button>

                  <button type='button' onClick={()=>handleDeleteProduct(item._id)}  className='bg-red-700 px-3 py-2 rounded-lg text-white '>Delete</button>
                </div>
              </div>
              )) 
              :
              <p className='text-xl'>Loading...</p>}

            </div>

            {modalStatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

              <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                  <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                    <div className="bg-white">

                      {/* header of modal */}

                      <div className='bg-emerald-800 p-4 text-white flex justify-between items-center'>
                        <p className='text-xl'>{viewProduct?.title}</p>
                        < FontAwesomeIcon icon={faXmark} className='fa-2x cursor-pointer' onClick={() => setModalStatus(false)} />
                      </div>
                      {/* body of modal */}
                      <div className='p-4'>

                        <div className='flex flex-col md:flex-row md:justify-between items-center gap-1'>
                          {viewProduct?.uploadImages?.map( (item) => (
                            <img src={`${serverurl}/imgUpload/${item.filename}`} alt="no image" className='w-[250px] h-[250px] object-cover' />
                          )) }

                          
                        </div>
                        <div className='p-4'>

                          <p className='text-gray-800 mt-2'>SKU: {viewProduct?.sku}</p>
                          <p className='text-gray-800 '>Category: {viewProduct?.category}</p>
                          <p className='text-gray-800 '>Size: {viewProduct?.size}</p>
                          <p className='text-gray-800 '>Material:{viewProduct?.material}</p>

                          <p className='text-gray-800'>Price:<span className='text-emerald-800 font-bold ms-5 text-lg'> $ {viewProduct?.dprice}</span></p>

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

      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>

      <Footer />
    </>
  )
}

export default Adminproducts