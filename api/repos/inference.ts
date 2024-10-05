import httpClient from "./httpClient";

export const performImageInfernce = async (formData:any) => {
  
    return await httpClient({
      method: 'post',
      url: "/inference/image/",
      data: formData, 
      headers: {
        'Content-Type': `multipart/form-data`,
      }
    })
 
    
    
  }


  export const performVideoInfernece = async (videoFormData:FormData) => {

    return await httpClient({
      method: 'post',
      url: "/inference/video/",
      data:  videoFormData, 
      headers: {
        'Content-Type': `multipart/form-data`,
      }
    })


  }

  export const performGeneralInference = async (formData:FormData) =>{
    return await httpClient({
      method: 'post',
      url: "/inference/general/",
      data:  formData, 
      headers: {
        'Content-Type': `multipart/form-data`,
      }
    })

  }
  



