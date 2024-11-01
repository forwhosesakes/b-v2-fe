import Chip from "../../chip/chip"
import SectionWrapper from "../../hoc/section-wrapper"
import { useRef } from "react"
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
      <div className="w-full">
        <div className="flex w-full justify-center">
          <Chip>عمل النظام</Chip>
        </div>
        <h1 className="leading-loose gradient-text mx-auto w-full  text-center">كيف يعمل نظام بصير؟</h1>
        <p className="text-center text-xs leading-relaxed text-paragraphs_primary/70  mx-auto md:text-lg md:w-2/3">
          تعمل كاميرا النظام (هاتف - كاميرا مثبتة ) على تسجيل جميع الصور
          والمشاهد ثم إرسالها إلى وحدة التحليل بشكل آلي ومعالجتها في نفس الوقت
        </p>
      </div>

      <div ref={svgContainerRef} className=" flex justify-center w-full">
        <LazyLoadImage
          effect="blur"
          src={'/assets/images/detection-process.webp'}
        />
      </div>
    </SectionWrapper>
  )
}

export default SystemPreview
