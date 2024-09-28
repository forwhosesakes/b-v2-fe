import { ReactNode } from "react"

type TProps = {
    children: ReactNode, 

}
const MagicCard = (props:TProps)=>{

    return <div className="">
        {props.children}
    </div>
}

export default MagicCard
