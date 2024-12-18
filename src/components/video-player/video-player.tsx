import {  useRef, useState } from "react"
import PlayButton from "./play-button.tsx"

type TProps = {
  play?: () => void
  source: string, 
  styles?:string,
  thumbnail:string,
}

const VideoPlayer = (props: TProps) => {
  const ref = useRef<HTMLVideoElement>(null!)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [mouseHovered, setMouseHovered] = useState(false)
  

  return (
    <div
    
    
    onMouseEnter= {()=>setMouseHovered(true)}
    onMouseLeave={()=>setMouseHovered(false)}
    
    className={`video-player relative  ${props.styles}`}>
      

       {(!isVideoPlaying || (mouseHovered && isVideoPlaying))&&
        <PlayButton
        isPlaying={ isVideoPlaying}
        onClick={
          ()=>{    
            isVideoPlaying? ref.current.pause():ref.current.play()    
         
           setIsVideoPlaying(prev=> !prev)
          } } styles={"top-1/2"} />
       
       
       } 
      

      <video
      poster={props.thumbnail}
      ref={ref}>
        <source src={props.source} />
      </video>
    </div>
  )
}

export default VideoPlayer
