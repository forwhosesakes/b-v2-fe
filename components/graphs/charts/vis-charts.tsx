import Graph from "../graph"
import Image from 'next/image'; 

const VisCharts = ()=>{

return  <Graph>
    <div className="w-full h-full relative group z-20 bg-cover bg-vis-charts-before hover:bg-vis-charts-after transition-all">
        
        <Image 
        src={'/assets/images/card-ghost-box.svg'}
        alt="card ghost box"
        fill
        className="absolute bottom-10 right-[15%] group-hover:-translate-x-[60%]  group-hover:scale-150 transition-all"
        />
          <Image
              alt="card ghost box"
        src={'/assets/images/card-ghost-box.svg'}
        fill
        className="absolute bottom-10 left-[15%] group-hover:translate-x-[60%]  group-hover:scale-150 transition-all"
        />

    </div>
</Graph>


}


export default VisCharts