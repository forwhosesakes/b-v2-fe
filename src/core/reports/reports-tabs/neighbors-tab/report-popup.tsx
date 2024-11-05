import HouseIcon from "../../../../assets/icons/house-rounded.svg?react"
import ReportCircle from "../../../../assets/images/report-circle.png"
import { pollutionCategoriesMap } from "../../constants"
import CalenderIcon from "../../../../assets/icons/calendar.svg?react"
import SettingsIcon from "../../../../assets/icons/settings-error.svg?react"
import AlertIcon from "../../../../assets/icons/alert.svg?react"
import LocationIcon from "../../../../assets/icons/location.svg?react"
import QrIcon from "../../../../assets/icons/qr-code.svg?react"
import moment from "moment"



type TProps = {
  report: ReportEntity|undefined, 
  selectedReport:ReportEntity|undefined,
  onLocationClick : (id:number)=>void
}
const ReportMapPopup = (props: TProps) => {
  const isSelected= props.report?.id === props.selectedReport?.id
  const isThereIsAnyOtherReportSelected = props.selectedReport !== undefined&& props.report?.id !== props.selectedReport?.id
  
   
  const colors = {MODERATE:"#27B3BC", HIGH:"#B81010", LOW:"#47FF15"}

  return (

    <div className={`absolute`} style={{inset:props.report?.villa_style_loc}}>
      <div className="relative font-bold text-nowrap ">

        {props.report && !isThereIsAnyOtherReportSelected &&<><div className="popup-info absolute inset-0 flex flex-col gap-y-2  p-5 text-[8px]">
          <p className=" flex w-full items-center gap-x-2 text-xs">
            <HouseIcon />
            <span> فيلا {(props.report.id % 10) + 1} </span>{" "}


            <QrIcon width={32} height={32} className="mr-6"/>
          </p>
          <p className="flex gap-x-2" >
            <AlertIcon width={10} height={10}/>

            <span>
            البلاغ : 
                 
            {props.report.categories.length
              ? props.report.categories
                  .map((cat) => pollutionCategoriesMap.get(cat.name).label)
                  .join(",")
              : "غير متوفر"}</span>
           
           </p>
          <p className="flex gap-x-2">
            <LocationIcon width={10} height={10}/>

            <span>
            الموقع : C{Math.floor(props.report.id / 10)}-
            {Math.floor(props.report.id % 10)}

            </span>



       
          </p>
          <p className="text-nowrap flex gap-x-2"
          >
            <CalenderIcon width={10} height={10}/>
            
            
            التاريخ : {moment(props.report.createdAt).format("DD/MM/YYYY")}</p>
          <p className=" flex gap-x-2">
            <SettingsIcon  width={10} height={10}/>
            <span>
            الحالة :{" "}
            {props.report.id % 3 === 0
              ? "قيد المعالجة"
              : props.report.id % 3 === 1
                ? "فشل "
                : "مؤكد"}
            </span>


       
          </p>

          <button onClick={()=>{props.onLocationClick(props.report!.id)}} className="rounded-full w-fit px-6 text-[#058FA1] bg-white hover:bg-white/75 transition-opacity">عرض</button>
   
        </div></>}
       {props.report&&!isThereIsAnyOtherReportSelected&& <svg
          xmlns="http://www.w3.org/2000/svg"
          width="153"
          height="172"
          viewBox="0 0 153 172"
          fill="none"
        >
          <path
            d="M112.117 171.366C110.67 171.366 109.365 170.671 108.626 169.506L103.78 161.871L103.583 161.561H103.198H18.2792C15.9026 161.561 13.5974 161.126 11.4277 160.266C9.33175 159.436 7.44923 158.248 5.83246 156.734C4.21572 155.22 2.94645 153.458 2.05996 151.495C1.1423 149.464 0.677002 147.306 0.677002 145.081V17.1143C0.677002 14.8892 1.1423 12.731 2.05996 10.6997C2.94645 8.73727 4.21572 6.97469 5.83246 5.46093C7.44923 3.94716 9.33175 2.75873 11.4277 1.92869C13.5974 1.06946 15.9026 0.633789 18.2792 0.633789H134.721C137.097 0.633789 139.402 1.06946 141.572 1.92869C143.668 2.75876 145.55 3.94716 147.167 5.46095C148.784 6.97471 150.053 8.73729 150.94 10.6997C151.858 12.7311 152.323 14.8893 152.323 17.1143V145.081C152.323 147.306 151.858 149.464 150.94 151.495C150.053 153.458 148.784 155.22 147.167 156.734C145.55 158.248 143.668 159.436 141.572 160.266C139.402 161.126 137.097 161.561 134.721 161.561H121.037H120.651L120.455 161.871L115.609 169.506C114.87 170.671 113.565 171.366 112.117 171.366Z"
            fill={`url(#${colors[props.report.severity??"MODERATE"]})`}
          />
          <path
            d="M112.117 170.732C113.323 170.732 114.411 170.153 115.027 169.182L120.266 160.928H134.721C137.006 160.928 139.223 160.509 141.308 159.683C143.324 158.885 145.134 157.742 146.689 156.286C148.243 154.83 149.464 153.135 150.316 151.249C151.199 149.296 151.646 147.221 151.646 145.081V17.1144C151.646 14.9746 151.199 12.8995 150.316 10.9467C149.464 9.05985 148.243 7.365 146.689 5.90924C145.134 4.45345 143.324 3.31066 141.308 2.51255C139.223 1.68656 137.006 1.26773 134.721 1.26773H18.2792C15.9937 1.26773 13.7772 1.68656 11.6915 2.51255C9.67618 3.31066 7.86601 4.45345 6.31119 5.90921C4.75641 7.36496 3.53587 9.0598 2.68349 10.9467C1.80132 12.8995 1.35402 14.9746 1.35402 17.1144V145.081C1.35402 147.221 1.80132 149.296 2.68349 151.249C3.53587 153.135 4.75639 154.83 6.31119 156.286C7.86601 157.742 9.67618 158.885 11.6915 159.683C13.7772 160.509 15.9937 160.928 18.2792 160.928H103.968L109.208 169.182C109.824 170.153 110.911 170.732 112.117 170.732ZM112.117 172C110.54 172 108.962 171.276 108.043 169.829L103.198 162.195H18.2792C8.1836 162.195 0 154.533 0 145.081V17.1144C0 7.66269 8.1836 0 18.2792 0H134.721C144.816 0 153 7.66269 153 17.1144V145.081C153 154.533 144.816 162.195 134.721 162.195H121.037L116.191 169.829C115.273 171.276 113.695 172 112.117 172Z"
            fill={colors[props.report.severity??"MODERATE"]}
          />
          <defs>
            <linearGradient
              id="#B81010"
              x1="98.5001"
              y1="0.87207"
              x2="98.5001"
              y2="437.725"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C01010" />
              <stop offset="1" stopColor="#600808" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="#27B3BC"
              x1="98.5001"
              y1="0.87207"
              x2="98.5001"
              y2="437.725"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2AB6BE" />
              <stop offset="1" stopColor="#2AB6BE" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="#47FF15"
              x1="98.5001"
              y1="0.87207"
              x2="98.5001"
              y2="437.725"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#35C010" />
              <stop offset="1" stopColor="#1B600800" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>}

      {props.report&&  <div className="relative">
        {isSelected&& <img className="absolute left-[110px] top-8 animate-pulse" src={ReportCircle}/>}
     { !isThereIsAnyOtherReportSelected&&<svg
        onClick={()=>{
  
          props.onLocationClick(props.report!.id)}}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="30"
          viewBox="0 0 16 23"
         
          className={`absolute  ${' hover:opacity-100 hover:fill-pink-300'} right-7 top-2 cursor-pointer`}
        >
        
          <path
            d="M0 12.2523L1.52381 0L16 0.429907V23H0V15.2617V12.2523Z"
            fill={colors[props.report.severity??"MODERATE"]}
            fillOpacity="0.5"
          />
        </svg>}</div>}
      </div>
    </div>
  )
}

export default ReportMapPopup
