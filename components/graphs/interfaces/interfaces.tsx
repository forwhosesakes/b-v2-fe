import Graph from "../graph"


import {LazyLoadImage} from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

const Interfaces = ()=>{


return <Graph >
    
    <LazyLoadImage  effect="blur"
        wrapperProps={{
            style: {transitionDelay: "0.25s"},
        }} className="absolute w-1/2 m-auto inset-0 bg-blend-darken " src ={'/assets/images/demo-devices.webp'}/>
    <LazyLoadImage  effect="blur"
        wrapperProps={{
            style: {transitionDelay: "0.25s"},
        }} className="absolute" src={'/assets/images/interfaces-lights.svg'}/>
</Graph>
}

export default Interfaces