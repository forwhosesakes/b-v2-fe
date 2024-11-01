
import VillaIcon from '../../../../assets/icons/house-rounded.svg?react'
import LocationIcon from '../../../../assets/icons/location.svg?react'
import CalenderIcon from '../../../../assets/icons/calendar.svg?react'
import AlertIcon from '../../../../assets/icons/alert.svg?react'
import ClockIcon from '../../../../assets/icons/clock.svg?react'
import SettingsIcon from '../../../../assets/icons/settings-error.svg?react'
import moment from 'moment'
import SampleImage from "../../../../assets/images/sample.webp"
import { pollutionCategoriesMap } from '../../constants'

type TProps = {
  report: ReportEntity
}

const ReportDetails = ({ report }: TProps) => {
  return (
    <div className='flex-1'>
      <h3 className='my-8 font-bold'>بلاغ: {report.title}</h3>

      <div className="grid grid-cols-2 gap-8">

        <div className='flex items-center gap-x-2'><VillaIcon/> <span>فـيـلا : {report.id%10}</span> </div>

        <div className='flex  items-center gap-x-2'><LocationIcon/> <span>الموقع :  C{Math.floor(report.id / 10)}-
        {Math.floor(report.id % 10)}</span> </div>

        <div className='flex items-center gap-x-2'><CalenderIcon/> <span>التاريخ : {moment(report.createdAt).format('DD/MM/YYYY')}</span> </div>

        <div className='flex items-center gap-x-2'><AlertIcon/> <span>نوع البلاغ : {report.categories.map((c)=>pollutionCategoriesMap.get(c.name).label).join(",")}</span> </div>
        <div className='flex items-center gap-x-2'><SettingsIcon/> <span>الحالة : {report.id%10}</span> </div>
        

        <div className='flex items-center gap-x-2'><ClockIcon/> <span>الوقت : {moment(report.createdAt).format('LTS')}</span> </div>

        


      </div>

      <div className='img-report mt-8'>
        <img width={"600px"} height={"200px"} src={SampleImage}/>
      </div>
    </div>
  )
}

export default ReportDetails
