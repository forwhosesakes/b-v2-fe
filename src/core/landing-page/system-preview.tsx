import Chip from "../../components/chip/chip"
import SectionWrapper from "../../components/hoc/section-wrapper"
import DetectionBorders from '../../assets/images/detection-process-borders.svg?react'
import { useRef } from "react"

const SystemPreview = () => {
  const svgContainerRef = useRef<HTMLDivElement>(null!)

  const onEnteringSection = () => {
    svgContainerRef.current.classList.add("")
  }
  return (
    <SectionWrapper onSectionVisible={onEnteringSection} id="system-preview" direction="vertical">
      <div className="md:w-2/3">
        <div className="flex w-2/3 justify-center">
          <Chip>عمل النظام</Chip>
        </div>
        <h1 className="leading-loose gradient-text">كيف يعمل نظام بصير؟</h1>
        <p className="md:w-3/5 md:text-lg text-xs leading-relaxed text-paragraphs_primary/70">
          تعمل كاميرا النظام (هاتف - كاميرا مثبتة ) على تسجيل جميع الصور
          والمشاهد ثم إرسالها إلى وحدة التحليل بشكل آلي ومعالجتها في نفس الوقت
        </p>
      </div>

      <div ref={svgContainerRef} className="relative">


        <DetectionBorders className="absolute" />




      <img  src="/b-v2-fe/src/assets/images/detection-process-v2.png"/>

      </div>


    </SectionWrapper>
  )
}

export default SystemPreview
