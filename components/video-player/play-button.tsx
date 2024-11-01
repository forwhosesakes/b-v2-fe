

import React ,{ useState } from 'react';


type TProps = {
  onClick:()=>void, styles:string, isPlaying: boolean,
}


const PlayButton = ({onClick, styles, isPlaying}: TProps  )=>{
    const [isActivated, setIsActivated] = useState(false);

    return <div className={`${styles} video-cont`}>
      
      
      <div
        className={`glowing-box p-5 ${isActivated ? 'glowing-box-active' : ''} `}
        onMouseEnter={() => setIsActivated(true)}
        onMouseLeave={() => setIsActivated(false)}

      >
        <div className="glowing-box-animations">
          <div className="glowing-box-glow" />
          <div className="glowing-box-stars-masker">
            <div className="glowing-box-stars">
        
            </div>
          </div>
        </div>
        <div className="glowing-box-borders-masker">
          <div className="glowing-box-borders" />
        </div>

        <button 
        onClick={onClick}
        className=' flex flex-row items-center justify-between'>
        
       {<> <span  className={`text-xs font-semibold text-white/90 transition-text-display text-nowrap ${isActivated&&' ml-4'}`}>{isActivated&&"كيفية عمل بصير"} </span> {isPlaying? <img src='/assets/icons/pause.svg' width={"20px"} height={"20px"}/>:<img src='/assets/icons/play.svg' />}</>   }
       </button>
     

      </div>
    </div>



}

export default PlayButton