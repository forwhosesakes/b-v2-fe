import Graph from "../graph.tsx"

import InterfaceLight from '../../../assets/images/interfaces-lights.svg'
import demodevices from '../../../assets/images/demo-devices.webp'
import { LazyLoadImage } from "react-lazy-load-image-component"

const Interfaces = ()=>{


return <Graph >
    
    <LazyLoadImage className="absolute w-1/2 m-auto inset-0 bg-blend-darken " src ={demodevices}/>
    <LazyLoadImage className="absolute" src={InterfaceLight}/>
</Graph>
}

export default Interfaces