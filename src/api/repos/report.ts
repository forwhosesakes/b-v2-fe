import httpClient from "./httpClient.ts";

export const getAllReports = async (searchTerm:string,page:number=1, limit:number=10 ) => {
  
    return await httpClient({
      method: 'get',
      url: `/report?search=${searchTerm}&limit=${limit}&page=${page}`,
    
    })
 
    
    
  }


  export const createNewReport = async (reportFormData:FormData) => {

    return await httpClient({
      method: 'post',
      url: "/report/",
      data:  reportFormData, 
      headers: {
        'Content-Type': `application/json`,
      }
    })


  }

  export const getSingleReport = async (id:any) =>{
    return await httpClient({
      method: 'get',
      url: `/report/${id}`,    
    })

  }
  



