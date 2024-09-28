import { LazyLoadImage } from 'react-lazy-load-image-component'
import NormalMap from '../../assets/images/reports-bg.png'

type TProps = {

    isHeatMap: boolean
}

const ReportsMap = (props:TProps)=>{
   return props.isHeatMap? <div className="heatmap"></div>:
   
   <div className="flex-1 normalMap p-0 m-0  h-[80vh] w-full">
    
    <LazyLoadImage className='object-fill h-full w-full' src={NormalMap} />
    
    
    </div>
}

export default ReportsMap