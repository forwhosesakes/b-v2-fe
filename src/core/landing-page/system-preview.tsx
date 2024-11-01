import Chip from "../../components/chip/chip.tsx"
import SectionWrapper from "../../components/hoc/section-wrapper.tsx"
import DetectiionProcessImage from "../../assets/images/detection-process.webp"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const SystemPreview = () => {

  return (
    <SectionWrapper
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

      <div className="w-full flex justify-center">
        <LazyLoadImage
          effect="blur"
          className="  mx-auto "
          src={DetectiionProcessImage}
        />
      </div>
    </SectionWrapper>
  )
}

export default SystemPreview
