
// type ProgressTypes = "DISCERETE" | "INFINTE"

// type TProps <T extends ProgressTypes>= {
//     progress?: T extends "DISCERETE"? number: never
// }

function CicrularProgress   () {
  return (
    <div className="relative z-30 h-full w-full">
        {/* <p className="absolute top-[50%] left-[45%]">{props.progress}%</p> */}
        <svg className="size-1/4 animate-spin  absolute top-[40%] left-[37.5%]" 
    viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="16" fill="none" 
    className="stroke-current text-gray-100/60 dark:text-neutral-700/60" 
    stroke-width="1.5" stroke-linecap="round">


    </circle>
  
    <circle cx="18" cy="18" r="16" fill="none" 
    className="stroke-current text-blue-600 dark:text-blue-500" 
    stroke-width="1.5" stroke-dasharray="37.5 100" stroke-linecap="round"></circle>
  </svg>


    </div>
    
  );
};

export  default CicrularProgress
