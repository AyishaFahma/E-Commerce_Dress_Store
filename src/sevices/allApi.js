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


//api call to get all user selled products for approval
export const getAllUserProductApi = async()=>{
    return await commonApi('GET' , `${serverurl}/view-alluser-product`)
}



//api to view single items selled by the user when modal opens
export const getSingleUserItemApi = async(id)=>{
    return await commonApi('GET' , `${serverurl}/view-single-useritems/${id}`)
}


//api to approve product
export const approveProductApi = async(id)=>{
    return await commonApi('PUT' , `${serverurl}/approve-product/${id}`)
}


//api to reject product
export const rejectProductApi = async(id)=>{
    return await commonApi('PUT' , `${serverurl}/reject-product/${id}`)
}




//-----------------------USER-----------------------------------

//api to get all products in userside
export const viewAllProductUserApi = async(reqHeader)=>{
    return await commonApi('GET', `${serverurl}/view-allproduct-user` , "", reqHeader)
}

//api to get all single category - dresses , tops, bottoms
export const viewSingleCategoryApi = async(category , reqHeader)=>{
    return await commonApi('GET' , `${serverurl}/view-single-category?category=${category}` , "" , reqHeader)
}


//api to sell a product by user
export const addSellProductsApi = async(reqBody , reqHeader)=>{
    return await commonApi('POST' , `${serverurl}/addto-sell-products` , reqBody , reqHeader)
}


//api to get all selled products
export const getAllSelledProductApi = async(reqHeader)=>{
    return await commonApi('GET' , `${serverurl}/view-selled-product` , "" , reqHeader)
}


//api to delete a selled product by user
export const removeSellProductApi = async(id)=>{
    return await commonApi('DELETE' , `${serverurl}/delete-sell-product/${id}`)
}