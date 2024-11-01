import MarkerCircle from "../../marker-circle/marker-circle.tsx"
import Graph from "../graph.tsx"
import CardMapCircle from '../../../assets/images/card-interactive-maps-circle.png'
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
const InteractiveMaps = ()=>{


    return <Graph>
        <div className="magic-circles flex flex-row justify-center group hover:bg-[size:200%_200%] h-full w-full ">
        <LazyLoadImage
         effect="blur"
         wrapperProps={{
             style: {transitionDelay: "0.25s"},
         }}
        className=" absolute scale-150  z-20 bottom-0 h-1/3" src={CardMapCircle}/>
        <div className="absolute w-16 h-16 z-40 -bottom-1/4   bg-white/50 rounded-full   " />
        
        
        <MarkerCircle color="blue" styles="absolute bottom-[50%] right-[50%] group-hover:-bottom-10 "/>
        <MarkerCircle color="red" styles="absolute bottom-[46%] right-[16%] group-hover:-bottom-10"/>
        <MarkerCircle color="yellow" styles="absolute bottom-[38%] left-[20%] group-hover:-bottom-10"/>

        </div>
        


       

    </Graph>




}


    export default InteractiveMaps


