import Chip from "../../components/chip/chip.tsx"
import SectionWrapper from "../../components/hoc/section-wrapper.tsx"
import PollutionTypesImage from "../../assets/images/pollution-types.png"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'

const PollutionTypes = () => {
  return (
    <SectionWrapper id="pollution-types" direction="vertical" styles="w-3/5">
      <Chip>قوة النظام</Chip>
      <h2 className="mt-5 text-center leading-relaxed">
        أنواع التشوه التي يتعرف عليها النظام
      </h2>
      <p className="mt-5 w-3/5 text-center text-xs leading-relaxed text-paragraphs_primary/70 md:text-lg">
        يتعرف النظام على 12 نوعًا من التشوهات البصرية التي تعاني منها المجمعات
        العمرانية الحديثة ، مما يساهم في قوة وكفاءة النظام
      </p>

      <div className="relative my-12 h-[380px] w-[380px] md:mx-auto md:h-[580px] md:w-[580px]">
        <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slowest rounded-full border border-slate-300/25 opacity-50 md:h-[540px] md:w-[540px]"></div>
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow rounded-full border border-slate-400/25 opacity-50 md:h-[480px] md:w-[480px]"></div>
        <div className="blurry-light absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-slate-400/25 opacity-50 md:h-[440px] md:w-[440px]"></div>
        
        <div  className="absolute left-1/2 top-1/2 z-10 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full  md:h-[480px] md:w-[480px]">
        <LazyLoadImage
         effect="blur"
         wrapperProps={{
             style: {transitionDelay: "0.2s"},
         }}
         className="object-cover"
          src={PollutionTypesImage}
        />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default PollutionTypes
