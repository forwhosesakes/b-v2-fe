import {  useRef, useState } from "react"
import PlayButton from "./play-button"

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

  const toggleVideo = ()=>{
    setIsVideoPlaying(prev=> !prev)

    return isVideoPlaying? ref.current.pause():ref.current.play()    
  }
  

  return (  <div
    
    
    onMouseEnter= {()=>setMouseHovered(true)}
    onMouseLeave={()=>setMouseHovered(false)}

    
    className={`video-player relative  ${props.styles}`}>
      

       {(!isVideoPlaying || (mouseHovered && isVideoPlaying))&&
        <PlayButton
        isPlaying={ isVideoPlaying}
        onClick={toggleVideo} styles={"top-1/2"} />
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
