import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverURL";

// UPLOAD NEW VIDEO
export const uploadNewVideoAPI = async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

// get all videos
export const getAllVideosAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

// View single video
export const getAVideosAPI = async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

//remove video
export const removeVideoAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

// insert video to history
export const addVideoToHistoryAPI = async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

// get video from history
export const getsHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// remove history
export const removeHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

// add category
export const addCategoryAPI = async (category)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,category)
}

// get All category
export const getAllCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

//remove category
export const removeCategoryAPI = async (id) => {
    return await commonAPI("DELETE",` ${SERVER_URL}/categories/${id}`,)
}

//update category
export const updateCategoryAPI = async (id,categoryDetails) => {
    return await commonAPI("PUT", `${SERVER_URL}/categories/${id}`, categoryDetails)
}