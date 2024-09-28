import SvgIcon from "../icon/icon"
type TProps = {
title:string, 
icon:string, 
content:string, 
order: "bottom" | "upper"
}
const SharpCard = (props:TProps)=>{
    return <div className={`relative p-6 group border bottom-border-gradient`} >
        <div className={`absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 ${props.order==="bottom"?"bg-card-effect-bottom":"bg-card-effect-upper" } transition-opacity duration-700`}/>
        <div className="absolute top-1/2 right-0 bg-white/25 w-[1px] h-4"/>
        {/* <div className="absolute top-1/2 left-0 bg-white/25 w-[1px] h-4"/> */}
        <SvgIcon iconName={props.icon} />
        <p className="my-3 font-medium text-[#F4F0FF]">{props.title}</p>
        <p className="text-paragraphs_primary/70 text-sm">{props.content}</p>
    </div>




}

export default SharpCard