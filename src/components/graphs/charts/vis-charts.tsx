import Graph from "../graph.tsx"
import CardGhostBox from '../../../assets/images/card-ghost-box.svg?react'
const VisCharts = ()=>{

return  <Graph>
    <div className="w-full h-full relative group z-20 bg-cover bg-vis-charts-before hover:bg-vis-charts-after transition-all">
        
        <CardGhostBox
        className="absolute bottom-10 right-[15%] group-hover:-translate-x-[60%]  group-hover:scale-150 transition-all"
        />
          <CardGhostBox
        className="absolute bottom-10 left-[15%] group-hover:translate-x-[60%]  group-hover:scale-150 transition-all"
        />

    </div>
</Graph>


}


export default VisCharts