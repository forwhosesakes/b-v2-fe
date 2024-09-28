import { ReactNode, useEffect, useRef, useState } from "react";

type TProps = {
    id:string,
    styles?: string,
    direction?: "vertical" | "horizontal" | "vertical_to_horzontal" | "horzontal_to_vertical" ,
    screenSized?: boolean, 
    children:ReactNode, 
    onSectionVisible?:()=>void,
}

const directionToClasses = {
    vertical: "flex flex-col", 
    horizontal: "flex flex-row", 
    vertical_to_horzontal: "flex md:flex-col flex-row", 
    horzontal_to_vertical: "flex md:flex-row flex-col", 


}

const SectionWrapper = (props:TProps)=>{

    const sectionRef = useRef<HTMLElement>(null!)
    const [visible, setVisible] = useState(false)

    const callback = (entries:IntersectionObserverEntry[])=>{
        const [entry] = entries
        setVisible(entry.isIntersecting)
        if(entry.isIntersecting && props.onSectionVisible)  props.onSectionVisible()

    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(callback, options)
        if( sectionRef.current) observer.observe(sectionRef.current)
            return ()=>{
        if(sectionRef.current) observer.unobserve(sectionRef.current)
        
        
        }


    },[sectionRef,options])


    return <section 
    ref={sectionRef}
    id={props.id}
    
    className={`w-full  ${props.screenSized ?'max-h-[75vh]':'min-h-screen'}  h-max ${directionToClasses[props.direction??"horizontal"]} justify-center items-center p-10 ${props.styles}`}>
        {props.children}

    </section>




}
export default SectionWrapper