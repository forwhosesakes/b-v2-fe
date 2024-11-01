import { useState } from "react"
import HeatMapSideBar from "../../../../assets/images/heatmap-sidebar.svg?react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/paginated-table/table-components"
import { reportStatus } from "../../constants"
import { Chart as ChartJS, registerables } from 'chart.js';
import { Doughnut} from 'react-chartjs-2';

type ColumnData = {
  location: string
  reportType: string
  color: number
}
const headers = ["الموقع", "نوع البلاغ", "الحالة"]


const data: ColumnData[] = [
  { location: "جادة صفا", reportType: "حفر", color: 0 },
  { location: "دارة صفا", reportType: "إضاءة منخفضة", color: 1 },
  { location: "جادة صفا", reportType: "حفر", color: 0 },
  { location: "جادة صفا", reportType: "حواجز", color: 2 },
  { location: " دارة صفا", reportType: "تسرب", color: 1 },
  { location: "شاهقة", reportType: "كتابة على الجدران", color: 2 },
  { location: "  الماجدية", reportType: "رمال", color: 0 },
]
ChartJS.register(...registerables);
const LatestReports = () => {

  const [chartData] = useState({
 
        labels: [
          'حواجز',
          'نفايات',
          'تسرب مياه',
          'عشوائية',
          'حفر',
          'أعمال طرق'
        ],
        datasets: [{
          data: [20, 28, 10, 27, 5, 12],
          backgroundColor: [
            '#73BCA1',
            '#99C27D',
            '#E1C357',
            '#DCA557',
            '#57AFCE',
            "#DA9167"
          ],
          hoverOffset: 4
        }]
    }
   );

  return (
    <div className="relative w-1/4 text-center">
      <h6 className="mx-auto mt-8 font-bold text-cyanish">البلاغات الأخيرة</h6>
      <Table>
        <TableHeader>
            <TableRow>
            {headers.map(header=><TableHead key={header}>{header}</TableHead>)}
            </TableRow>


        </TableHeader>
        <TableBody>
          {data.map((row,i) => (
            <TableRow key={i} className="[&_td]:p-1 border-b-white/25 ">

              <TableCell> {row.location}</TableCell>
              <TableCell> {row.reportType}</TableCell>
              <TableCell>
                <div
                  className={`${reportStatus[row.color].className} h-4 w-4`}
                />
              </TableCell>
          

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Doughnut data={chartData} />
      <HeatMapSideBar className="absolute inset-0" />
    </div>
  )
}

export default LatestReports
