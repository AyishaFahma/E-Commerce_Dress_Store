import React, { useState } from 'react'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../sevices/allApi';
import { toast, ToastContainer } from 'react-toastify'


function Auth({ register }) {

  //register state for storing userdetails
  const [userDetails, setuserDetails] = useState({

    username: "",
    email: "",
    password: ""

  })
  //console.log(userDetails);

  //to navigate
  const navigate = useNavigate()


  //register function
  const handleRegister = async () => {
    const { username, email, password } = userDetails
    console.log(username, email, password);

    if (!username || !email || !password) {
      toast.info("Please Fill the Form!!!")
    }
    else {
      const result = await registerApi({ username, email, password })
      console.log(result);

      if (result.status == 200) {
        toast.success("Successfully Registered")
        setuserDetails({
          username: "",
          email: "",
          password: ""
        })
        navigate('/login')
      }
      else if(result.status == 406) {
        toast.warning(result.response.data)

        setuserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
      else {
        toast.error('Something went wrong')
        setuserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
    }

  }


  //login function
  const handleLogin = async()=>{
    const {email, password} = userDetails
    console.log(email,password);

    if( !email || !password ){
      toast.info('Pease fill the form completely')
    }
    else{
      const result = await loginApi( {email , password} )
      console.log(result);

      if(result.status == 200){
        toast.success("Login Successfull")

        //store the data and token to session storage
        sessionStorage.setItem( "existingUser" , JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token" , result.data.token)

        setuserDetails({
          username: "",
          email: "",
          password: ""
        })

        if(result.data.existingUser.email == 'admin@gmail.com'){

          setTimeout( ()=>{
          navigate('/admin-home')
        },2003)

        }
        else{
          setTimeout( ()=>{
          navigate('/')
        },2003)
        }  

      }

      else if(result.status == 406 || result.status == 401){
        toast.warning(result.response.data)

        setuserDetails({
          username: "",
          email: "",
          password: ""
        })

      }
      else{
        toast.error('Somthing went wrong')
        setuserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
      
    }
    
  }



  return (
    <>

      <div className='md:p-20 p-2 mb-10'>
        <div className='md:grid grid-cols-[2fr_3fr] gap-x-10 md:p-10 p-5 bg-slate-50 rounded-lg shadow-lg/30'>

          <div className='rounded-lg mb-5 md:mb-0'>
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/online-discount-shopping-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--offer-e-commerce-illustrations-4322922.png" alt="" className='rounded-lg h-full' />
          </div>


          <div className='rounded-lg bg-slate-200 flex justify-center items-center flex-col'>
            {register ? <h1 className='text-center md:text-2xl text-xl font-bold my-10'>REGISTER</h1>
              :
              <h1 className='text-center md:text-2xl text-xl font-bold my-10'>LOGIN</h1>}

            {register && <input value={userDetails.username} onChange={(e) => setuserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='User Name' className='p-2 bg-white rounded md:w-3/5 w-5/6 outline-0 border border-stone-300 mb-4' />}

            <input value={userDetails.email} onChange={(e) => setuserDetails({ ...userDetails, email: e.target.value })} type="text" placeholder='Email' className='p-2 bg-white rounded md:w-3/5 w-5/6 outline-0 border border-stone-300 mb-4' />

            <input value={userDetails.password} onChange={(e) => setuserDetails({ ...userDetails, password: e.target.value })} type="password" placeholder='Password' className='p-2 bg-white rounded md:w-3/5 w-5/6 outline-0 border border-stone-300 mb-5' />

            {register ? <button type='button' onClick={handleRegister} className='my-5 bg-emerald-800 text-white md:px-8 px-3 py-2 text-lg hover:bg-emerald-700  hover:border hover:border-emerald-800'>SIGN UP</button>
              :
              <button type='button' onClick={handleLogin} className='my-5 bg-emerald-800 text-white md:px-8 px-3 py-2 text-lg hover:bg-emerald-700  hover:border hover:border-emerald-800'>SIGN IN</button>}

            {register ? <p className='my-5 font-semibold md:text-base text-sm text-center'>If you already have an account with us,<br /> please <Link to={'/login'} className='underline text-blue-500'>LOGIN</Link></p>
              :
              <p className='my-5 font-semibold md:text-base text-sm text-center'>Are you a New User? <Link to={'/register'} className='underline text-blue-500'>Register</Link></p>}


          </div>
        </div>
      </div>


      <Footer />

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </>
  )
}

export default Auth