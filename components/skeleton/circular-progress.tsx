
type ProgressTypes = "DISCERETE" | "INFINTE"

type TProps <T extends ProgressTypes>= {
    progress?: T extends "DISCERETE"? number: never
    fill?:string,

}

function CicrularProgress<T extends ProgressTypes>   (props:TProps<T>) {
  return (
    <div className="relative z-30 h-full w-full">
        {/* <p className="absolute top-[50%] left-[45%]">{props.progress}%</p> */}
        <svg className={`size-1/4 ${(!props.progress)&&'animate-spin' } w-full h-full absolute `}
    viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="16" fill="none" 
    className="stroke-current text-gray-100/60 dark:text-neutral-700/60" 
    strokeWidth="1.5" strokeLinecap="round">


    </circle>
  
    <circle cx="18" cy="18" r="16" fill="none" 
    className={`stroke-current ${props.fill??"text-blue-600"}`} 
    stroke-width="1.5" stroke-dasharray={`${props.progress ?? 37.5} 100`} stroke-linecap="round"></circle>
  </svg>


    </div>
    
  );
};

export  default CicrularProgress
