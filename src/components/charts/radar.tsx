import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js"
ChartJS.register(...registerables)
ChartJS.defaults.font.family="Saudia-sans"



const radarData = {
    labels: [
      'لوحات اعلانية',
      'كتابة على الجدران',
      'تسرب مياه',
      'مخاطر الصرف الصحي ',
      'بناء',
      'متسولين'
    ],
    datasets: [
      {
        label: 'معدل المخاطر في  دارة صفا',
        data: [40, 30, 50, 20, 40, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'معدل المخاطر في  دارة الشاهقة',
        data: [20, 40, 20, 30, 20, 40],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }
    ],
  };



  const radarOptions = {
    responsive: true,
    
    elements: {
        line: {
          borderWidth: 3
        },
        
        
      },
    plugins:{
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 10,
                 
                }
            }
        }

        
    },
    scales: {
      r: {
        angleLines: {
          display: true,
        
        
        },
        grid: {
            color: 'gray'
          },
        suggestedMin: 0,
        suggestedMax: 50,
        ticks: {
          stepSize: 10,
          mirror: true,
          backdropColor: 'transparent',
          backdropPadding: 0, // <- Adjust the box padding
          

        }
      }
    },
   
  };
  // Overall risk score data



  const RadarChart = ()=>{


    return <div className="bg-dark  rounded-lg shadow ">
    <div style={{ height: '300px' , width:"450px"}}>
      <Radar data={radarData} options={radarOptions} />
    </div>
  </div>

  }



  export default RadarChart