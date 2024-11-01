
import moment from "moment"
import AlertIcon from "../../assets/icons/alert.svg?react"
import CalenderIcon from "../../assets/icons/calendar.svg?react"
import ClockIcon from "../../assets/icons/clock.svg?react"

type TProps = {
    totalReports: number
}


const ReportsHeader = (props:TProps)=>{


    return <div className="flex flex-col w-full py-5 border-b border-b-white/25">
        <div className="flex justify-between items-center w-full ">
     
            <h2>البلاغات</h2>
            <div className="flex gap-x-6">

            <h6 className="flex items-center font-semibold r gap-x-2">
                   <AlertIcon width={18} height={18}/>
                إجمالي البلاغات <span className="text-red-800">{props.totalReports ?? 0} </span></h6>
            <h6 className="flex  items-center font-semibold gap-x-2">
                <CalenderIcon width={18} height={18}/>
                التاريخ: <span>{moment(moment.now()).format("DD/MM/YYYY")}</span>
            </h6>

            <h6 className="flex font-semibold  items-center gap-x-2">
                <ClockIcon width={18} height={18}/>
                الوقت: <span>{moment(moment.now()).format("LTS")}</span>
            </h6>


            </div>
        </div>


    </div>
}

export default ReportsHeader