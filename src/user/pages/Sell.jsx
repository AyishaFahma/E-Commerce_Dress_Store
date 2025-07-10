import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { addSellProductsApi } from '../../sevices/allApi'

function Sell() {


  //state for holding sell products details
  const [sellDetails, setsellDetails] = useState({

    title: "",
    size: "",
    category: "",
    color: "",
    condition: "",
    material: "",
    description: "",
    price: "",
    dprice: "",
    uploadImages: []

  })

  //console.log(sellDetails);

  //token
  const [token, settoken] = useState("")


  //state to store url of a image
  const [preview, setpreview] = useState("")

  //state to store all url of 3 images
  const [allUploadedImage, setallUploadedImage] = useState([])




  const handleUpload = (e) => {
    console.log(e.target.files);

    const fileArray = sellDetails.uploadImages
    fileArray.push(e.target.files[0])
    //console.log(fileArray); //this gives a array
    // then this all data is updated to uploadImages key
    setsellDetails({ ...sellDetails, uploadImages: fileArray })

    //to convert a file into url by using createObjectURL()

    const url = URL.createObjectURL(e.target.files[0])
    console.log(url);

    setpreview(url);
    let images = allUploadedImage
    images.push(url)
    setallUploadedImage(images)
    console.log(preview);
    console.log(allUploadedImage);

  }

  //reset function
  const handleReset = () => {
    setsellDetails({
      title: "",
      size: "",
      category: "",
      color: "",
      condition: "",
      material: "",
      description: "",
      price: "",
      dprice: "",
      uploadImages: []
    })
    setpreview("")
    setallUploadedImage([])
  }


  const handleSubmit = async () => {


    const { title, size, category, color, condition, material, description, price, dprice, uploadImages } = sellDetails

    console.log(title, size, category, color, condition, material, description, price, dprice, uploadImages);

    if (!title || !size || !category || !color || !condition || !material || !price || !dprice || !description, uploadImages.length == 0) {

      toast.info('Please fill the form completely')

    }
    else {

      const reqbody = new FormData()

      for (let key in sellDetails) {

        if (key != 'uploadImages') {
          reqbody.append(key, sellDetails[key])
        }
        //here we upload 3 images so that we need to map these items
        else {
          sellDetails.uploadImages.map((item) => {
            reqbody.append("uploadImages", item)
          })
        }
      }


      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }


      const result = await addSellProductsApi(reqbody, reqHeader)
      console.log("product added result is ",result);

      if(result.status == 200){
        toast.success("Product saved successfully")
      }
      else if(result.status == 402){
        toast.warning(result.response.data)
      }
      else{
        toast.error('Something went wrong')
      }
      handleReset()
      
    }

  }


  useEffect( ()=>{
    if(sessionStorage.getItem("token")){
      const tok = sessionStorage.getItem("token")
      settoken(tok)
    }

  })



  return (
    <>
      <Header />

      <div className='my-10'>

        <div className="grid md:grid-cols-2  md:px-30 px-2 md:mt-20">
          <div className='bg-stone-200 flex justify-center  flex-col items-center rounded'>

            <h1 className='font-semibold mb-5 mt-5 md:mt-0'>Reclaim your closet space!</h1>
            <h1 className='font-bold md:text-5xl text-2xl mb-2 text-emerald-700'>Try the easiest way to </h1>
            <h1 className='font-bold md:text-4xl text-2xl mb-5'>sell clothing online</h1>
            <h1 className='md:text-sm text-xs text-emerald-700 text-justify mb-5'>Just send in what you no longer wear and earn cash or credit.</h1>

          </div>
          <div >
            <img src="https://media.istockphoto.com/id/1307052468/photo/second-hand-wardrobe-circular-fashion-rent-swap-clothes-idea.jpg?s=612x612&w=0&k=20&c=RQWEEas5Ac1LzDyw9S-Kyz8TGoMgv4jYdNw1ed3Jp4k=" alt="no" className='w-full rounded' />
          </div>
        </div>

        <div className="md:grid grid-cols-2 md:px-30 px-2 mt-10">
          <div className='p-5 bg-stone-100 rounded'>
            <h1 className='text-emerald-700 text-3xl font-semibold'>How it Works?</h1>
          </div>

          <div className='p-5 bg-stone-100 rounded'>
            <h1 className='text-emerald-700 md:text-2xl text-xl font-semibold'>1. Submit Picture of Your Dress</h1>
            <ul className='my-4'>
              <li className='mb-2 text-sm'>Send us clear photos to help us evaluate its value.</li>
              <li className='text-sm'>Provide details about your dress (designer, condition, original price, etc.).</li>
            </ul>
            <hr />

            <h1 className='text-emerald-700 md:text-2xl text-xl font-semibold mt-5'>2. Get an Offer</h1>
            <ul className='my-4'>
              <li className='mb-2 text-sm'>Our team will review your dress and provide an offer.</li>
              <li className='text-sm'>If accepted, you’ll have to send your dress to us for physical inspection.</li>
            </ul>
            <hr />

            <h1 className='text-emerald-700 md:text-2xl text-xl font-semibold mt-5'>3. Dress Inspection & Approval</h1>
            <ul className='my-4'>
              <li className='mb-2 text-sm'>Once we receive your dress, we’ll inspect it for quality, authenticity, and selling potential.</li>
              <li className='text-sm'>If it meets our criteria, we finalize the Offer.</li>
            </ul>
            <hr />

            <h1 className='text-emerald-700 md:text-2xl text-xl font-semibold mt-5'>4. Your Dress Keeps Earning</h1>
            <ul className='my-4'>
              <li className='mb-2 text-sm'>We will handle all cleaning, photoshoot, ecommerce, marketing, and selling.</li>
              <li className='text-sm'>You’ll receive a revenue at a time your dress is purchased by a Customer</li>
            </ul>
            <hr />



          </div>
        </div>


        {/* sell form */}

        <div className='md:px-30 px-2 py-10 mt-5'>
          <div className='bg-stone-200 md:p-10 p-3 rounded'>
            <h1 className='text-3xl font-bold text-center text-emerald-700'>Sell Your Dress</h1>
            <p className='text-center mt-3 '>Fill out the details below to list your dress for sale. Make sure to provide clear images and accurate information!</p>

            <div className="md:grid grid-cols-2 gap-x-5">
              <div className='my-10'>

                <div className="mb-3">
                  <input type="text" placeholder='Title | eg. Elegant Floral Summer Dress' className='p-2 bg-white rounded w-full outline-0' value={sellDetails.title} onChange={(e) => setsellDetails({ ...sellDetails, title: e.target.value })} />
                </div>

                <div className="mb-3">
                  <input type="text" placeholder='Size - XS , S , M , L , XL' className='p-2 bg-white rounded w-full outline-0' value={sellDetails.size} onChange={(e) => setsellDetails({ ...sellDetails, size: e.target.value })} />
                </div>

                <div className="mb-3">
                  <input type="text" placeholder='Category' className='p-2 bg-white rounded w-full outline-0' value={sellDetails.category} onChange={(e) => setsellDetails({ ...sellDetails, category: e.target.value })} />
                </div>

                <p className='text-lg text-gray-600 mb-2 mt-10'>Product Details</p>

                <div className="mb-3">
                  <input type="text" placeholder='Colour' className='p-2 bg-white rounded w-full outline-0' value={sellDetails.color} onChange={(e) => setsellDetails({ ...sellDetails, color: e.target.value })} />
                </div>

                <div className="mb-3">
                  <input type="text" placeholder='Condition' className='p-2 bg-white rounded w-full outline-0' value={sellDetails.condition} onChange={(e) => setsellDetails({ ...sellDetails, condition: e.target.value })} />
                </div>

                <div className="mb-3">
                  <input type="text" placeholder='Material' className='p-2 bg-white rounded w-full outline-0' value={sellDetails.material} onChange={(e) => setsellDetails({ ...sellDetails, material: e.target.value })} />
                </div>

                <div className="mb-3">
                  <textarea value={sellDetails.description} onChange={(e) => setsellDetails({ ...sellDetails, description: e.target.value })} placeholder='Description' rows={'8'} className='p-2 bg-white rounded w-full outline-0'></textarea>
                </div>


              </div>


              <div className='my-10 px-2'>

                <div className="mb-3">
                  <input type="text" placeholder='$ Actual Product Price' className='p-2 bg-white rounded w-full outline-0' value={sellDetails.price} onChange={(e) => setsellDetails({ ...sellDetails, price: e.target.value })} />
                </div>

                <div className="mb-3">
                  <input type="text" placeholder='$ Expected Price' className='p-2 bg-white rounded w-full outline-0' value={sellDetails.dprice} onChange={(e) => setsellDetails({ ...sellDetails, dprice: e.target.value })} />
                </div>


                <div className='flex justify-center items-center mt-10 flex-col'>

                  {!preview ? <label htmlFor="uploadImages">

                    <input type="file" id='uploadImages' style={{ display: 'none' }} name="uploadImages" onChange={(e) => handleUpload(e)} />

                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/add-new-photo-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-picture-empty-states-vol-1-pack-seo-web-icons-9656036.png" alt="no image" style={{ width: '200px', height: '200px' }} />
                  </label>
                              :

                  <img src={preview} alt="no image" style={{ width: '200px', height: '200px' }} />}


                  {/* uploaded book images max 3 */}

                  {preview && <div className='mt-10 flex items-center'>


                    {allUploadedImage?.map( (item , index)=> (
                      <img src={item} alt="no image" style={{ width: '50px', height: '50px' }} className='mx-2' key={index}/>
                    )) }

                    {/* here max image is 3 */}


                    {allUploadedImage?.length < 3 && <label htmlFor="uploadImages">
                      <input type="file" id='uploadImages' style={{ display: 'none' }} name="uploadImages" onChange={(e) => handleUpload(e)}/>

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
        </div>
      </div>


      {/* if not login */}

      {/* <div className="md:grid grid-cols-3 md:px-10 px-5 my-10  flex justify-center items-center">
          <div></div>
          <div className='flex justify-center items-center flex-col'>
            <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="no image" style={{ width: '200px', height: '200px' }} />
            <h1 className='text-center md:text-3xl text-xl mt-10'>Please <Link to={'/login'} className='text-blue-500 underline'>Login</Link> to Explore More...</h1>
          </div>
          <div></div>
        </div> */}

      <Footer />

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </>
  )
}

export default Sell