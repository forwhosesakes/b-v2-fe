import Graph from "../graph"

import InterfaceLight from '../../../assets/images/interfaces-lights.svg'
import demodevices from '../../../assets/images/demo-devices.svg'

const Interfaces = ()=>{


return <Graph >
    
    <img className="absolute w-1/2 m-auto inset-0 bg-blend-darken " src ={demodevices}/>
    <img className="absolute" src={InterfaceLight}/>
</Graph>
}

export default Interfaces