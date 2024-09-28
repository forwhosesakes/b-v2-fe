import Graph from "../graph"

const Indicator = ()=>{


    return <Graph>
        <div className="group">
        <div className="absolute mt-8  inset-0 z-50  indicator-mask-bg group-hover:bg-[position:80%_0]" ></div>
        <div className="absolute mt-8  inset-0 z-50  indicator-border-bg group-hover:bg-[position:80%_0]" ></div>
        <img className="absolute z-20 h-8 w-8 top-8 left-[42%] group-hover:top-[76%] group-hover:left-[35%] transition-all" src="/b-v2-fe/src/assets/images/indicator-point.png"/>
        <img className="absolute z-20 h-8 w-8 top-6 left-[50%] group-hover:top-[76%] group-hover:left-[54%] transition-all" src="/b-v2-fe/src/assets/images/indicator-point.png"/>
        <img className="absolute z-20 h-8 w-8 top-6 left-[35%] group-hover:top-[78%] group-hover:left-[44%] transition-all" src="/b-v2-fe/src/assets/images/indicator-point.png"/>
        </div>
        
    </Graph>

    

 






}
export default Indicator