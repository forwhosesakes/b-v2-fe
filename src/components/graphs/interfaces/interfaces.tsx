import Graph from "../graph.tsx"

import InterfaceLight from '../../../assets/images/interfaces-lights.svg'
import demodevices from '../../../assets/images/demo-devices.webp'
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

const Interfaces = ()=>{


return <Graph >
    
    <LazyLoadImage  effect="blur"
        wrapperProps={{
            style: {transitionDelay: "0.25s"},
        }} className="absolute w-1/2 m-auto inset-0 bg-blend-darken " src ={demodevices}/>
    <LazyLoadImage  effect="blur"
        wrapperProps={{
            style: {transitionDelay: "0.25s"},
        }} className="absolute" src={InterfaceLight}/>
</Graph>
}

export default Interfaces