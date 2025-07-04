import { commonApi } from "./commonApi"
import { serverurl } from "./serverurl"



//register api
export const registerApi = async(reqBody) => {
    return await commonApi('POST', `${serverurl}/register` , reqBody)
}

// api to login
export const loginApi = async(reqBody)=>{
    return await commonApi('POST' , `${serverurl}/login` , reqBody)
}


//api to view a specific product in both admin and user
export const viewSingleProductApi = async(id)=>{
    return await commonApi('GET', `${serverurl}/view-product/${id}`)
}


// ----------------------ADMIN----------------------

//api to add a new product
export const addProductApi = async(reqBody)=>{
    return await commonApi('POST' , `${serverurl}/add-product` , reqBody)

}

//api to view all product
export const viewAllProductApi = async()=>{
    return await commonApi('GET' , `${serverurl}/view-product`)
}

//api to delete a product
export const removeProductApi = async(id)=>{
    return await commonApi('DELETE' , `${serverurl}/delete-product/${id}`)
}