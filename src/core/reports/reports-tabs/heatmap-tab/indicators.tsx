import HeatMapSideBar from "../../../../assets/images/heatmap-sidebar.svg?react"
import { Chart as ChartJS, registerables } from "chart.js"
import CicrularProgress from "../../../../components/skeleton/circular-progress"
import RadarChart from "../../../../components/charts/radar"
ChartJS.register(...registerables)
ChartJS.defaults.font.family="Saudia-sans"
ChartJS.defaults.color="white"

const Indicators = () => {
  return (
    <div className="relative w-1/4 text-center bg-[url('/src/assets/images/bg-heatmap.webp')] bg-cover bg-center ">
      <h6 className="mx-auto mt-8 font-bold text-cyanish"> المؤشرات</h6>
     
      <div className="flex flex-col justify-between  h-3/5">
      <div key="bar" className="bg-primary-400 rounded p-4 shadow">
      <RadarChart/>
      </div>
      <div className=" flex flex-row gap-x-4 mx-auto">
        <div>
          <h6>تمت معالجتها</h6>
          <p className="mt-2 font-bold text-4xl text-cyanish">90</p>
          <CicrularProgress<"DISCERETE">
            progress={68}
            fill={"text-[#FFCF5F]"}
          />
        </div>

        <div>
          <h6> قيد التنفيذ</h6>
          <p className="mt-2 font-bold text-4xl text-cyanish ">19</p>
   

          <CicrularProgress<"DISCERETE">
            progress={87}
            fill={"text-[#99C27D]"}
          />
        </div>
      </div>

      </div>

      <HeatMapSideBar className="absolute inset-0 scale-x-[-1]" />
    </div>
  )
}

export default Indicators
