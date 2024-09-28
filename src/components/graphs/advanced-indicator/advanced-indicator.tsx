import Capsule from "../../capsule/capsule"
import Graph from "../graph"

const AdvancedIndicator = ()=>{




    return <Graph>
        <img className="absolute w-full h-full z-0 " src="/src/assets/images/indicator-blur.png"/>
       
        <div className="relative group w-full h-full z-10 capsules">
            <div>
            <Capsule height="h-8" colored={false} position={"left-2 top-6"}/>
            <Capsule height="h-12" colored={true} position={"left-8 top-8"}/>
            <Capsule height="h-6" colored={true} position={"left-14 top-10"}/>
            <Capsule height="h-4" colored={true} position={"left-20 top-12"}/>
            <Capsule height="h-12" colored={true} position={"left-36 top-6"}/>
            <Capsule height="h-10" colored={true} position={"left-28 top-5"}/>
        
            <Capsule height="h-10" colored={false} position={"right-36 top-10"}/>
        
            <Capsule height="h-10" colored={false} position={"right-24 top-14"}/>
            <Capsule height="h-4" colored={true} position={"right-16 top-12"}/>
            <Capsule height="h-10" colored={true} position={"right-8 top-10"}/>

            </div>
       
         

            <div className="absolute z-40 w-fit  group-hover:-translate-y-16  left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-3 p-2 bg-textbox-gradient rounded-lg">
            <p className="text-light text-nowrap  text-sm">بيانات تساهم في اتخاذ  القرار</p>
            <p className="text-white/40  text-nowrap text-xs">فرص المستقبل تبنى بقرارات اليوم!</p>
        </div>

        </div>
    </Graph>
}
export default AdvancedIndicator