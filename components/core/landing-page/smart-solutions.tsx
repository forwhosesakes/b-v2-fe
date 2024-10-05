import { useRef } from "react"
import SectionWrapper from "../../hoc/section-wrapper"
import Union from '/assets/images/union.svg'
import SmartSolutionImage from '/assets/images/smart-solutions.png'
import {LazyLoadImage} from 'react-lazy-load-image-component';

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
            style: {transitionDelay: "0.25s"},
        }} className="w-1/2" src={'/assets/images/smart-solutions.png'}/>
         
        <div ref={svgDevContainer} className="ml-48  overflow-hidden h-96 w-48">
            <img src="/assets/images/union.svg"  className="h-full"/>
            </div>
    </SectionWrapper>
}


export default SmartSolutions