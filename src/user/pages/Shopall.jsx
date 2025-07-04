import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { viewAllProductUserApi } from '../../sevices/allApi'
import { serverurl } from '../../sevices/serverurl'

function Shopall() {

  const [token, settoken] = useState("")

  //state to store all products
  const [allProducts, setallProducts] = useState([])

  // Filters
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);


  //-------------------------------------------------

  // function to get all products
  const getAllProductsUser = async (token) => {
    //create a reqheader for storing token
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    const result = await viewAllProductUserApi(reqHeader)
    //console.log(result.data);
    setallProducts(result.data)

  }
  console.log(allProducts);



  //------------------------------------


  // Category checkbox
  //This function gets called when a checkbox (like Dresses) is checked or unchecked.

  //e is the event object from that input field.
  //value: the value of the checkbox (like "Dresses").

  //checked: true if the box is checked, false if it’s unchecked.
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    //console.log(e);

    console.log(value, checked); //Dresses true

    console.log("the value and checked");

    //Checkbox is checked → Add the value to the selectedCategories array.
    //[...selectedCategories]: makes a copy of the current array

    //value: adds the newly selected category (e.g., "Dresses")

    //If selectedCategories = ["Tops"] and user checks "Dresses",then it becomes: ["Tops", "Dresses"]
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);

    } else {
      setSelectedCategories(selectedCategories.filter(cat => cat !== value));
      //Checkbox is unchecked → Remove that value from selectedCategories.
      //.filter(cat => cat !== value): keeps all categories except the one that was unchecked🔸 Example:If selectedCategories = ["Tops", "Dresses"] and user unchecks "Dresses",it becomes: ["Tops"]
    }
  };

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




  const filteredProducts = allProducts.filter(product => {
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const sizeMatch =
      selectedSizes.length === 0 || selectedSizes.includes(product.size);

    return categoryMatch && sizeMatch;
  });


  //----------------------------------------------------

  useEffect(() => {

    if (sessionStorage.getItem("token")) {
      const tok = sessionStorage.getItem("token")
      settoken(tok)
      getAllProductsUser(tok)
    }


  }, [])

  return (
    <>
      <Header />

      {token ? <div>


        <div className="md:grid grid-cols-[1fr_4fr] md:px-10 px-5 mb-30 mt-20 ">

          {/* first filter grid portion */}
          <div className='md:mb-0 mb-10'>

            <h1 className='font-bold text-lg my-2'>SHOPPING BY :</h1>
            <button className='p-2 bg-emerald-700 rounded text-sm font-semibold text-white'>Women</button>

            <h1 className='font-bold text-lg my-6'>Filter By Categories :</h1>

            <div className='my-2 flex' >
              <input type="checkbox" id='Dresses' name='filter' className="w-5 h-5 accent-emerald-700" value="Dresses" onChange={handleCategoryChange} />
              <label htmlFor="Dresses" className='ms-3'>Dresses</label>
            </div>

            <div className='my-2 flex' >
              <input type="checkbox" id='Tops' name='filter' className="w-5 h-5 accent-emerald-700" value="Tops" onChange={handleCategoryChange} />
              <label htmlFor="Tops" className='ms-3'>Tops</label>
            </div>

            <div className='my-2 flex' >
              <input type="checkbox" id='Bottoms' name='filter' className="w-5 h-5 accent-emerald-700" value="Bottoms" onChange={handleCategoryChange} />
              <label htmlFor="Bottoms" className='ms-3'>Bottoms</label>
            </div>

            <div className='my-2 flex' >
              <input type="checkbox" id='AllCollection' name='filter' className="w-5 h-5 accent-emerald-700" value="AllCollection"
                onChange={(e) => {
                  const { checked } = e.target;
                  if (checked) {
                    // Clear category and size filters to show all
                    setSelectedCategories([]);
                    setSelectedSizes([]);
                  }
                }} />
              <label htmlFor="AllCollection" className='ms-3'>All Collection</label>
            </div>


            {/* size */}

            <h1 className='font-bold text-lg my-6'>Size :</h1>

            <div className='my-2 flex'>
              <input type="checkbox" id='XS' name='filter' className="w-5 h-5 accent-emerald-700" value="XS" onChange={handleSizeChange} />
              <label htmlFor="XS" className='ms-3'>XS</label>
            </div>

            <div className='my-2 flex'>
              <input type="checkbox" id='S' name='filter' className="w-5 h-5 accent-emerald-700" value="S" onChange={handleSizeChange} />
              <label htmlFor="S" className='ms-3'>S</label>
            </div>

            <div className='my-2 flex'>
              <input type="checkbox" id='M' name='filter' className="w-5 h-5 accent-emerald-700" value="M" onChange={handleSizeChange} />
              <label htmlFor="M" className='ms-3'>M</label>
            </div>

            <div className='my-2 flex'>
              <input type="checkbox" id='L' name='filter' className="w-5 h-5 accent-emerald-700" value="L" onChange={handleSizeChange} />
              <label htmlFor="L" className='ms-3'>L</label>
            </div>

            <div className='my-2 flex'>
              <input type="checkbox" id='XL' name='filter' className="w-5 h-5 accent-emerald-700" value="XL" onChange={handleSizeChange} />
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
              filteredProducts?.map((item, index) => (
                <div className='p-5 flex justify-center items-center flex-col md:mb-5 mb-10 shadow-lg/30' key={index}>
                  <img src={`${serverurl}/imgUpload/${item?.uploadImages?.[0]?.filename}`} alt="book image" style={{ width: '100%', height: '300px' }} />

                  <h1 className='font-bold mt-5'>{item?.title.slice(0, 20)}...</h1>
                  <p className='text-sm '>Size {item?.size}</p>

                  <p><s>$ {item?.price} </s><span className='text-red-500 ms-5'>$ {item?.dprice}</span></p>

                  <Link to={`/view-product/${item?._id}`} className='w-full'><button className='bg-emerald-700 w-full p-2 text-white mt-3 hover:bg-white hover:border hover:border-emerald-700 hover:text-emerald-800' type='button' >View</button></Link>

                </div>
              ))
              :
              <p className='text-center text-xl'>Loading Content.....</p>}


          </div>

        </div>
      </div>

        // {/* if not login */}
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

export default Shopall