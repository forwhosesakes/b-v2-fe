import Chip from "../../chip/chip"
import SectionWrapper from "../../hoc/section-wrapper"
import DetectionBorders from "/assets/images/detection-process-borders.svg"
import { useRef } from "react"
import DetectiionProcessImage from "/assets/images/detection-process-v2.png"
import {LazyLoadImage} from 'react-lazy-load-image-component';

import "react-lazy-load-image-component/src/effects/blur.css"

const SystemPreview = () => {
  const svgContainerRef = useRef<HTMLDivElement>(null!)

  const onEnteringSection = () => {
    svgContainerRef?.current?.classList.add("a"); 
  }
  return (
    <SectionWrapper
      onSectionVisible={onEnteringSection}
      id="system-preview"
      direction="vertical"
    >
      <div className="md:w-2/3">
        <div className="flex w-2/3 justify-center">
          <Chip>عمل النظام</Chip>
        </div>
        <h1 className="leading-loose gradient-text">كيف يعمل نظام بصير؟</h1>
        <p className="text-center text-xs leading-relaxed text-paragraphs_primary/70 md:w-3/5 md:text-lg">
          تعمل كاميرا النظام (هاتف - كاميرا مثبتة ) على تسجيل جميع الصور
          والمشاهد ثم إرسالها إلى وحدة التحليل بشكل آلي ومعالجتها في نفس الوقت
        </p>
      </div>

      <div ref={svgContainerRef} className="relative">
        <LazyLoadImage
   
          src={'/assets/images/detection-process-borders.svg'}
     
          className="absolute left-10 z-20 w-full"
        />

        <LazyLoadImage
          effect="blur"
          className="relative z-0 w-4/5"
          src={'/assets/images/detection-process-v2.png'}
        />
      </div>
    </SectionWrapper>
  )
}

export default SystemPreview
