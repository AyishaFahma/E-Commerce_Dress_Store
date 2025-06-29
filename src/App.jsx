import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import About from './user/pages/About'
import Shopall from './user/pages/Shopall'
import Sell from './user/pages/Sell'
import Cart from './user/pages/Cart'
import Profile from './user/pages/Profile'

import Auth from './pages/Auth'
import Dresses from './user/pages/Dresses'
import Tops from './user/pages/Tops'
import Bottoms from './user/pages/Bottoms'
import Viewproduct from './user/pages/Viewproduct'
import Adminhome from './admin/pages/Adminhome'
import Adminproducts from './admin/pages/Adminproducts'
import Adminorders from './admin/pages/Adminorders'
import Adminapproval from './admin/pages/Adminapproval'
import Adminsettings from './admin/pages/Adminsettings'


function App() {

  return (
    <>

      {/* user path pages */}

      <Routes>
        
        <Route path='/' element={<Landingpage />} />

        <Route path='/login' element={ <Auth />} />

        <Route path='/register' element={ <Auth register/>} />

        <Route path='/about' element={ <About />} />

        <Route path='/collection-all' element={ <Shopall />} />

        <Route path='/view-product' element={ <Viewproduct />} />

        <Route path='/collection-dresses' element={ <Dresses />} />

        <Route path='/collection-tops' element={ <Tops />} />

        <Route path='/collection-bottoms' element={ <Bottoms />} />

        <Route path='/sell-item' element={ <Sell />} />

        <Route path='/cart' element={ <Cart />} />

        <Route path='/profile' element={ <Profile />} />


        {/* ADMIN */}


        <Route path='/admin-home' element={ <Adminhome />} />

        <Route path='/admin-products' element={ <Adminproducts />} />

        <Route path='/admin-orders' element={ <Adminorders />} />

        <Route path='/admin-sell-request' element={ <Adminapproval />} />

        <Route path='/admin-settings' element={ <Adminsettings/>} />







      </Routes>



      


    </>
  )
}

export default App
