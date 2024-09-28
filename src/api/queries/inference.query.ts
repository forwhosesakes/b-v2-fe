import { useMutation,  } from "react-query";
import { performGeneralInference, performImageInfernce, performVideoInfernece } from "../repos/inference";

export const useGetImageMutation = () => {
  return useMutation(
    {
      mutationFn: async (imagePath:any) => {
        const response_0 = await fetch(imagePath);
        const imgBlob = await response_0.blob();
        let formData = new FormData();
        formData.append("file", imgBlob);
        formData.append("file", imgBlob, "temp_img.jpeg");
        
        const res = await performImageInfernce(formData);
        return res.data.url;
      },
    },
 
  );
};


export const useGetVideoMutation  = ()=>{
  return useMutation(
    {
      mutationFn: async (videoPath:any) => {
        const response_0 = await fetch(videoPath);
        const exampleVideo = await response_0.blob();
        let formData = new FormData();
        formData.append("video", exampleVideo);
        formData.append("video", exampleVideo, "temp.mp4");
        const res = await performVideoInfernece(formData);
    
        
        return res.data.url;
      },
    },
 
  
  );
}

  export const useGetInferenceMutation  = ()=>{
    return useMutation(
      {
        mutationFn: async ([mediaPath, ext]:string[]) => {
          const response_0 = await fetch(mediaPath);
          const blob = await response_0.blob();
          let formData = new FormData();
          formData.append("file", blob, `temp.${ext}`);
          const res = await performGeneralInference(formData);
          
          return res.data.url;
        },
      },
   
    );
  





}
