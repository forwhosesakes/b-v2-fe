import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js"
ChartJS.register(...registerables)
import HeatmapImage from "../../../../assets/images/heatmap.webp"





const labels = ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو","يوليو"];

const data = {
  labels: labels,
  datasets: [
  
    {
      label: 'الصفا',
      data: [98, 34,66,12,48,37,85],
      borderColor:"#5BB36B",
      backgroundColor: "#5BB36B30",
      lineTension: 0.2,
    
      fill: true
    },
    {
      label: 'الماجدية',
      data: [87, 76,56,98,68,78,45],
      lineTension: 0.2,
     
      borderColor: "#FFCF5F",
      backgroundColor: "#FFCF5F30",
      fill: true
    },
    {
      label: 'الشاهقة',
      data: [27, 56,66,18,34,78,95],
      borderColor: "#CA8F41",
      backgroundColor: "#CA8F4130",
      lineTension: 0.2,
      fill: true
    },
  
  
   
  ]
};
const options =  {
  scales: {
    yAxes: {  
     
      title: {
      display: true,
      text: 'قيمة العقار'
    }}}}
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

<Line className="mt-4 w-full " data={data} options={options}/>
    
  </div>

};

export default HeatMap;