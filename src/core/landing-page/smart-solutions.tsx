import { useRef } from "react"
import SectionWrapper from "../../components/hoc/section-wrapper"
import Union from '../../assets/images/union.svg?react'

const SmartSolutions = ()=>{
    const svgDevContainer = useRef<HTMLDivElement>(null!)


const onSectionEnter = ()=>{
    svgDevContainer.current.classList.add("path-formation")


}

    return <SectionWrapper id="solutions"
    onSectionVisible={onSectionEnter}
    direction={"horizontal"} screenSized={true} styles="justify-between p-0 my-20 md:flex hidden">
         <img className="w-1/2" src="/src/assets/images/smart-solutions.png"/>
         
        <div ref={svgDevContainer} className="ml-48  overflow-hidden h-96 w-48">
            <Union  className="h-full"/>
            </div>
    </SectionWrapper>
}


export default SmartSolutions