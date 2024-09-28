import { ReactNode } from "react"

type TProps = {
    children: ReactNode
}

const Graph = (props: TProps)=>{

    return <div className="relative overflow-hidden  w-full h-full card-gridlines bg-cover z-10 ">
        {props.children}


    </div>




}

export default Graph