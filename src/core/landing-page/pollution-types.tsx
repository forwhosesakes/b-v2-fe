import Chip from "../../components/chip/chip"
import SectionWrapper from "../../components/hoc/section-wrapper"

const PollutionTypes = () => {
  return (
    <SectionWrapper id="pollution-types" direction="vertical" styles="w-3/5">
        <Chip>قوة النظام</Chip>
        <h2 className="leading-relaxed text-center mt-5">أنواع التشوه التي يتعرف عليها النظام</h2>
        <p className="w-3/5 md:text-lg text-xs mt-5 text-paragraphs_primary/70 leading-relaxed text-center">
          يتعرف النظام على 12 نوعًا من التشوهات البصرية التي تعاني منها المجمعات
          العمرانية الحديثة ، مما يساهم في قوة وكفاءة النظام
        </p>
        
        <div className="relative  md:w-[580px] md:h-[580px]  w-[380px] h-[380px] md:mx-auto my-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[540px] md:h-[540px] w-[340px] h-[340px] border border-slate-300/25 rounded-full opacity-50 animate-pulse-slowest"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[480px] md:h-[480px] w-[280px] h-[280px] border border-slate-400/25 rounded-full opacity-50 animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[440px] md:h-[440px] w-[240px] h-[240px] border border-slate-400/25 rounded-full opacity-50 animate-pulse blurry-light"></div>
      <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[500px] md:h-[500px] w-[360px] h-[360px] rounded-full object-cover z-10" src="/src/assets/images/pollution-types.png"/>
     
     
    </div>

       

      


 
    </SectionWrapper>
  )
}

export default PollutionTypes
