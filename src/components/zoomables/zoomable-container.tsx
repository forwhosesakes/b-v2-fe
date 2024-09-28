import { ReactNode } from "react"
import PlusIcon from '../../assets/icons/plus.svg?react'
import MinusIcon from '../../assets/icons/minus.svg?react'
import FullscreenIcon from '../../assets/icons/fullscreen.svg?react'

type TProps = {
    children: ReactNode, 

}


const ZoomableContainer = (props:TProps)=>{

    return <div className="zoomable-containers relative h-full w-3/4  ">
            <div className="zoom-actions flex flex-col z-10 absolute left-2 top-1/2">
            <button className="p-3 m-1 bg-secondary/50 rounded-md" ><PlusIcon width={12} height={12} fill="#fff"/></button>
            <button className="p-3 m-1 bg-secondary/50 rounded-md" ><MinusIcon width={12} height={12} fill="#fff"/></button>
            </div>
            <button className="p-3 z-10 absolute left-2 bottom-8 bg-secondary/50 rounded-md" ><FullscreenIcon width={12} height={12} fill="#fff"/></button>



    {props.children}




    </div>

}


export default ZoomableContainer