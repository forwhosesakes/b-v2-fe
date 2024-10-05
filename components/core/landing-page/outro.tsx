import Chip from "../../chip/chip"
import SectionWrapper from "../../hoc/section-wrapper"
// import Logo from '/assets/icons/vertical-logo.svg'

const Outro = ()=>{



    return <SectionWrapper styles="w-full relative" id={"#outro"}>
       
       <div className="absolute h-1/3 w-1/2 z-20 flex flex-col justify-between  items-center">
       <img src="/assets/icons/vertical-logo.svg" width={"35%"} height={"35%"}/>
       <Chip>أمان</Chip>
       <h3 className="text-paragraphs_primary font-bold ">من هنا أمان لكل مكان </h3>
       <p className="font-medium  opacity-75 text-[rgba(239, 237, 253, 0.70)]">مجتمعات آمنة على مدار اللحظة</p>
       </div>


        <video   loop
            muted
            autoPlay  className="absolute" src={'/assets/vids/encryption.mp4'}/>
       
    </SectionWrapper>
}

export default Outro