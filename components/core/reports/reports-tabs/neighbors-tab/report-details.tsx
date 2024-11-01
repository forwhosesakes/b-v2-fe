
"use client"
import moment from 'moment'
import { pollutionCategoriesMap } from '../../constants'

type TProps = {
  report: ReportEntity
}

const ReportDetails = ({ report }: TProps) => {
  return (
    <div className='flex-1'>
      <h3 className='my-8 font-bold'>بلاغ: {report.title}</h3>

      <div className="grid grid-cols-2 gap-8">

        <div className='flex items-center gap-x-2'><img src={"/assets/icons/house-rounded.svg"} height={16} width={16}/> <span>فـيـلا : {report.id%10}</span> </div>

        <div className='flex  items-center gap-x-2'><img width={16} height={16} src={"/assets/icons/location.svg"}/> <span>الموقع :  C{Math.floor(report.id / 10)}-
        {Math.floor(report.id % 10)}</span> </div>

        <div className='flex items-center gap-x-2'><img src={"/assets/icons/calender.svg"} height={16} width={16}/> <span>التاريخ : {moment(report.createdAt).format('DD/MM/YYYY')}</span> </div>

        <div className='flex items-center gap-x-2'><img src={"/assets/icons/alert.svg"} height={16} width={16}/> <span>نوع البلاغ : {report.categories.map((c)=>pollutionCategoriesMap.get(c.name).label).join(",")}</span> </div>
        <div className='flex items-center gap-x-2'><img src={"/assets/icons/settings-error.svg"} height={16} width={16}/> <span>الحالة : {report.id%10}</span> </div>
        

        <div className='flex items-center gap-x-2'><img src={"/assets/icons/clock.svg"} height={16} width={16}/> <span>الوقت : {moment(report.createdAt).format('LTS')}</span> </div>

        


      </div>

      <div className='img-report mt-8'>
        <img width={"600px"} height={"200px"} src={"/assets/images/sample.webp"}/>
      </div>
    </div>
  )
}

export default ReportDetails
