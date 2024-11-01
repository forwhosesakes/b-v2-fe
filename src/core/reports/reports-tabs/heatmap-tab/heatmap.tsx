import AreaChart from "../../../../assets/images/chart-area.webp"
import HeatmapImage from "../../../../assets/images/heatmap.webp"

const HeatMap = () => {
  return <div>
    <div className="relative mt-6  md:w-[350px] md:h-[350px]  w-[380px] h-[380px] md:mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[400px] md:h-[400px] w-[340px] h-[340px] border border-slate-300/35 rounded-full opacity-50 animate-pulse-slowest"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[350px] md:h-[350px] w-[280px] h-[280px] border border-slate-400/35 rounded-full opacity-50 animate-pulse-slowest"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[300px] md:h-[300px] w-[280px] h-[280px] border border-slate-400/35 rounded-full opacity-50 animate-pulse-slowest"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[400px] md:h-[400px] w-[280px] h-[280px]   rounded-full z-50">
      <img src={HeatmapImage}/>
      </div>    
  </div>

<img src={AreaChart} className="w-11/12 mx-auto mt-6"/>
  </div>

};

export default HeatMap;