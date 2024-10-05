
type TProps = {
    color: "blue"|"red"|"yellow", 
    styles:string
    
}
const blueMarkerClasses = ["bg-[#66D1FF]/10 border border-[#66D1FF]/20  ","bg-[#66D1FF]/40 border border-[#66D1FF]"]
const redMarkerClasses = ["bg-[#BD181B66]/10 border border-[#BD181B66]/20","bg-[#BD181B66]/40 border border-[#BD181B66]"]
const yellowMarkerClasses = ["bg-[#FFE766]/10 border border-[#FFE766]/20","bg-[#FFE766]/40 border border-[#FFE766] "]

const markerClasses = {
    blue: blueMarkerClasses, 
    yellow: yellowMarkerClasses, 
    red: redMarkerClasses
    
}
const MarkerCircle = ({color, styles}:TProps)=>{

    return <div className={`${markerClasses[color][0]}  ${styles} w-8 h-8 rounded-full absolute transition-all
    flex flex-row justify-center items-center`}>
    <div className={`${markerClasses[color][1]} w-4 h-4 rounded-full  `}/>

    </div>
}

export default MarkerCircle