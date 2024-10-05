import { LazyLoadImage } from 'react-lazy-load-image-component'
import NormalMap from '/assets/images/reports-bg.webp'
import ReportMapPopup from './report-popup'
import 'react-lazy-load-image-component/src/effects/blur.css';

type TProps = {

    isHeatMap: boolean
    report:ReportEntity|undefined
}

const combinations = [
    {y:"top-12", x:"right-8" ,},
    {y:"top-12", x:"right-20" },
    {y:"top-12", x:"right-32" },
    {y:"top-12", x:"right-48" },
    {y:"top-12", x:"right-64" },
    {y:"top-20", x:"right-8" },
    {y:"top-20", x:"right-20" },
    {y:"top-20", x:"right-32" },
    {y:"top-20", x:"right-48" },
    {y:"top-20", x:"right-64" },
    {y:"top-12", x:"left-8" },
    {y:"top-12", x:"left-20" },
    {y:"top-12", x:"left-32" },
    {y:"top-12", x:"left-48" },
    {y:"top-12", x:"left-64" },
    {y:"top-20", x:"left-8" },
    {y:"top-20", x:"left-20" },
    {y:"top-20", x:"left-32" },
    {y:"top-20", x:"left-48" },
    {y:"top-20", x:"left-64" },
    {y:"bottom-18", x:"right-8" ,},
    {y:"bottom-18", x:"right-20" },
    {y:"bottom-18", x:"right-32" },
    {y:"bottom-18", x:"right-48" },
    {y:"bottom-18", x:"right-64" },
    {y:"bottom-32", x:"right-8" },
    {y:"bottom-32", x:"right-20" },
    {y:"bottom-32", x:"right-32" },
    {y:"bottom-32", x:"right-48" },
    {y:"bottom-32", x:"right-64" },
    {y:"bottom-18", x:"left-8" },
    {y:"bottom-18", x:"left-20" },
    {y:"bottom-18", x:"left-32" },
    {y:"bottom-18", x:"left-48" },
    {y:"bottom-18", x:"left-64" },
    {y:"bottom-32", x:"left-8" },
    {y:"bottom-32", x:"left-20" },
    {y:"bottom-32", x:"left-32" },
    {y:"bottom-32", x:"left-48" },
    {y:"bottom-32", x:"left-64" },
]

const ReportsMap = (props:TProps)=>{
    const random  = Math.floor(Math.random() * combinations.length)
   return props.isHeatMap? <div className="heatmap"></div>:
   
   <div className={`flex-1 normalMap p-0 m-0  h-[80vh] w-full relative`}>
   {props.report && <ReportMapPopup y={combinations[random].y} x={combinations[random].x}  report={props.report} />} 
    
    <LazyLoadImage  className='object-fill h-full w-full' src={'/assets/images/reports-bg.webp'} />
    
    
    </div>
}

export default ReportsMap