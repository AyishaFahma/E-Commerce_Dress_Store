
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../user/components/Header'
import { faPhoneVolume, faRotateLeft, faSackDollar, faTruck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


function Landingpage() {



  return (
    <>

    <Header />

      <div>
        {/* landing image*/}
        <div>
          <img src="https://www.colorclipping.com/storage/posts/images/necessity-of-ecommerce-fashion-photography_7639.webp" alt="no image" className='w-full h-90 md:w-full md:h-[600px]' />
        </div>
        {/* contents */}
        <div className='my-10 mb-30'>
          <h1 className='font-bold md:text-2xl text-lg text-center md:mb-10 mb-5'>SHOP BY BRANDS</h1>

          <div className='md:mx-50 flex flex-wrap md:justify-between justify-center items-center gap-4 md:gap-0 md:mb-15 mb-10'>

            <div className='border border-gray-200 shadow-lg px-10 py-8'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1024px-H%26M-Logo.svg.png" alt="" className='md:w-[90px] md:h-[60px] w-[70px] h-[40px]' />
            </div>

            <div className='border border-gray-200 shadow-lg px-10 py-8'>
              <img src="https://brandlogos.net/wp-content/uploads/2022/04/zara-logo-brandlogos.net_.png" alt="" className='md:w-[90px] md:h-[60px] w-[70px] h-[40px]' />
            </div>

            <div className='border border-gray-200 shadow-lg px-10 py-8'>
              <img src="https://download.logo.wine/logo/Marks_%26_Spencer/Marks_%26_Spencer-Logo.wine.png" alt="" className='md:w-[90px] md:h-[60px] w-[70px] h-[40px]' />
            </div>

            <div className='border border-gray-200 shadow-lg px-10 py-8'>
              <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/only-logo.png" alt="" className='md:w-[90px] md:h-[60px] w-[70px] h-[40px]' />
            </div>

            <div className='md:flex hidden border border-gray-200 shadow-lg px-10 py-8'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzs-woCBbfZ3CVbtDNlajoZOO8DShPd8hcDw&s" alt="" className='md:w-[90px] md:h-[60px] w-[70px] h-[40px]' />
            </div>
          </div>

          <div className='md:grid grid-cols-4 md:px-30 px-5 py-5 gap-x-10 bg-gray-100'>
            <div className=' flex md:justify-center items-center mb-2 md:mb-0'>
              <FontAwesomeIcon icon={faTruck} className='fa-2x text-gray-800' />
              <h1 className='md:text-lg md:ms-2 ms-5'>FREE SHIPPING</h1>
            </div>
            <div className='flex md:justify-center  items-center mb-2 md:mb-0'>
              <FontAwesomeIcon icon={faRotateLeft} className='fa-2x text-gray-800' />
              <h1 className='md:text-lg md:ms-2 ms-5'>EASY RETURN</h1>
            </div>
            <div className='flex md:justify-center items-center mb-2 md:mb-0'>
              <FontAwesomeIcon icon={faSackDollar} className='fa-2x text-gray-800' />
              <h1 className='md:text-lg md:ms-2 ms-5'>ONLINE PAYMENT</h1>
            </div>
            <div className='flex md:justify-center items-center'>
              <FontAwesomeIcon icon={faPhoneVolume} className='fa-2x text-gray-800' />
              <h1 className='md:text-lg md:ms-2 ms-5'>24x7 HELP & SUPPORT</h1>
            </div>

          </div>

          {/* shop by categories */}

          <div className='my-10 md:my-20'>
            <h1 className='font-bold md:text-2xl text-lg text-center md:mb-20 mb-10'>SHOP BY CATEGORIES</h1>

            <div className='md:mx-20 flex flex-wrap md:justify-around justify-center items-center gap-8 md:gap-0 md:mb-15 mb-10'>

              <Link to={'/collection-dresses'}>
                <div className='border border-gray-200 bg-gray-200 shadow-lg md:w-[250px]  w-[300px] h-[350px] overflow-hidden group cursor-pointer'>
                  <img src="https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/6996611/1.jpg?0331" alt="dress" className='w-full h-[300px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110' />
                  <h1 className='text-center text-2xl mt-2 '>Dresses</h1>
                </div>
              </Link>

              <Link to={'/collection-tops'}>
                <div className='border border-gray-200 bg-gray-200 shadow-lg md:w-[250px] w-[300px] h-[350px] overflow-hidden group cursor-pointer'>
                  <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/24880870/2023/9/9/d7b9df81-7edc-4ed3-be24-176b9824e9ba1694258294003DressBerryMagentaCrepeStyledBackTop1.jpg" alt="" className='w-full h-[300px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110' />
                  <h1 className='text-center text-2xl mt-2'>Tops</h1>
                </div>
              </Link>

              <Link to={'/collection-bottoms'}>
                <div className='border border-gray-200 bg-gray-200 shadow-lg md:w-[250px] w-[300px] h-[350px] overflow-hidden group cursor-pointer'>
                  <img src="https://m.media-amazon.com/images/I/61EA1p1xdeL._UY1100_.jpg" alt="" className='w-full h-[300px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110' />
                  <h1 className='text-center text-2xl mt-2'>Bottoms</h1>
                </div>
              </Link>

              <Link to={'/collection-all'}>
                <div className='border border-gray-200 bg-gray-200 shadow-lg md:w-[250px] w-[300px] h-[350px] overflow-hidden group cursor-pointer'>
                  <img src="https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.jpg?s=612x612&w=0&k=20&c=UafU4a4xSbepJow4kvNu0q-LD4hFUoli7q3fvwkp79s=" alt="" className='w-full h-[300px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110' />
                  <h1 className='text-center text-2xl mt-2'>Shop All</h1>
                </div>
              </Link>


            </div>
          </div>

          {/* shop by size */}

          <div className='my-10 md:my-30 border border-white'>
            <h1 className='font-bold md:text-2xl text-lg text-center md:mb-20 mb-10'>SHOP BY SIZE</h1>

            <div className='flex flex-wrap md:justify-evenly justify-center items-center'>

              
                <div className='border border-gray-200 bg-gray-200 shadow-lg md:w-[200px] w-full mx-8 md:mx-0 mb-5 md:mb-0 h-[200px] cursor-pointer flex justify-center items-center flex-col'>

                  <h1 className='text-2xl mb-5'>XS</h1>
                  <button className='bg-emerald-950 text-white p-3 hover:bg-white hover:text-emerald-950 hover:border hover:border-emerald-950'>Shop Now</button>
                </div>
              

              
                <div className='border border-gray-200 bg-gray-200 shadow-lg md:w-[200px] w-full mx-8 md:mx-0 mb-5 md:mb-0 h-[200px] cursor-pointer flex justify-center items-center flex-col'>
                  
                  <h1 className='text-2xl mb-5'>S</h1>
                  <button className='bg-emerald-950 text-white p-3 hover:bg-white hover:text-emerald-950 hover:border hover:border-emerald-950'>Shop Now</button>
                </div>
              

              
                <div className='border border-gray-200 bg-gray-200 shadow-lg md:w-[200px] h-[200px] w-full mx-8 md:mx-0 mb-5 md:mb-0 cursor-pointer flex justify-center items-center flex-col'>
                  
                  <h1 className='text-2xl mb-5'>M</h1>
                  <button className='bg-emerald-950 text-white p-3 hover:bg-white hover:text-emerald-950 hover:border hover:border-emerald-950'>Shop Now</button>
                </div>
              

              
                <div className='border border-gray-200 bg-gray-200 shadow-lg md:w-[200px] h-[200px] w-full mx-8 md:mx-0 mb-5 md:mb-0 cursor-pointer flex justify-center items-center flex-col'>
                 
                  <h1 className='text-2xl mb-5'>L</h1>
                  <button className='bg-emerald-950 text-white p-3 hover:bg-white hover:text-emerald-950 hover:border hover:border-emerald-950'>Shop Now</button>
                </div>
              

              <div className='border border-gray-200 bg-gray-200 shadow-lg md:w-[200px] h-[200px] w-full mx-8 md:mx-0 mb-5 md:mb-0 cursor-pointer flex justify-center items-center flex-col'>
                 
                  <h1 className='text-2xl mb-5'>XL</h1>
                  <button className='bg-emerald-950 text-white p-3 hover:bg-white hover:text-emerald-950 hover:border hover:border-emerald-950'>Shop Now</button>
                </div>


            </div>
          </div>

        </div>
      </div>

    <Footer/>
    </>
  )
}

export default Landingpage