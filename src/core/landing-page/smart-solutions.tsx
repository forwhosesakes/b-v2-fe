import { useRef } from "react"
import SectionWrapper from "../../components/hoc/section-wrapper.tsx"
import Union from '../../assets/images/union.svg?react'
import SmartSolutionImage from '../../assets/images/smart-solutions.png'
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

const SmartSolutions = ()=>{
    const svgDevContainer = useRef<HTMLDivElement>(null!)


const onSectionEnter = ()=>{
    svgDevContainer.current.classList.add("path-formation")


}

    return <SectionWrapper id="solutions"
    onSectionVisible={onSectionEnter}
    direction={"horizontal"} screenSized={true} styles="justify-between p-0 my-20 md:flex hidden">
         <LazyLoadImage  effect="blur"
        wrapperProps={{
            style: {transitionDelay: "0.25s", width:"50%"},
        }} className="w-full" src={SmartSolutionImage}/>
         
        <div ref={svgDevContainer} className="ml-48  overflow-hidden h-96 w-48">
            <Union  className="h-full"/>
            </div>
    </SectionWrapper>
}


export default SmartSolutions