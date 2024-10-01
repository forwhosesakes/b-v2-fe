

import { useState } from 'react';
import Play from '../../assets/icons/play.svg?react'
import Pause from '../../assets/icons/pause.svg?react'


type TProps = {
  onClick:()=>void, styles:string, isPlaying: boolean,
}


const PlayButton = ({onClick, styles, isPlaying}: TProps  )=>{
    const [isActive, setIsActive] = useState(false);

    return <div className={`${styles} video-cont`}>
      
      
      <div
        className={`glowing-box p-5 ${isActive ? 'glowing-box-active' : ''} `}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}

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
        className=' flex flex-row items-center  justify-between'>
        
       {<> <span  className={`text-xs font-semibold text-white/90 transition-text-display text-nowrap ${isActive&&' ml-4'}`}>{isActive&&"كيفية عمل بصير"} </span> {isPlaying? <Pause width={"20px"} height={"20px"}/>:<Play />}</>   }
        
        
       </button>
     

      </div>
    </div>



}

export default PlayButton