import HeatMapSideBar from "../../../../assets/images/heatmap-sidebar.svg?react"
import ChartImage from "../../../../assets/images/chart-pie.webp"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/paginated-table/table-components"
import { reportStatus } from "../../constants"
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
  { location: "الماجدية", reportType: "رمال", color: 0 },
]
const LatestReports = () => {



  return (
    <div className="relative w-1/4 text-center">
      <h6 className="mx-auto mt-8 mb-4 font-bold text-cyanish">البلاغات الأخيرة</h6>
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
      <img className="mt-8 mr-8" src={ChartImage} />
      <HeatMapSideBar className="absolute inset-0" />
    </div>
  )
}

export default LatestReports
