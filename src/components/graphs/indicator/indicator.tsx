import Graph from "../graph"
import IndicatorPoint from '../../../assets/images/indicator-point.png'
import { LazyLoadImage } from "react-lazy-load-image-component"

const Indicator = ()=>{


    return <Graph>
        <div className="group">
        <div className="absolute mt-8  inset-0 z-50  indicator-mask-bg group-hover:bg-[position:80%_0]" ></div>
        <div className="absolute mt-8  inset-0 z-50  indicator-border-bg group-hover:bg-[position:80%_0]" ></div>
        <LazyLoadImage className="absolute z-20 h-8 w-8 top-8 left-[42%] group-hover:top-[76%] group-hover:left-[35%] transition-all" src={IndicatorPoint}/>
        <LazyLoadImage className="absolute z-20 h-8 w-8 top-6 left-[50%] group-hover:top-[76%] group-hover:left-[54%] transition-all"  src={IndicatorPoint}/>
        <LazyLoadImage className="absolute z-20 h-8 w-8 top-6 left-[35%] group-hover:top-[78%] group-hover:left-[44%] transition-all"  src={IndicatorPoint}/>
        </div>
        
    </Graph>

    

 






}
export default Indicator