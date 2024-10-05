import { useRef } from "react"
import Chip from "../../chip/chip"
import GridCards from "../../grid-cards/grid-cards"
import SharpCard from "../../grid-cards/sharp-card"
import SectionWrapper from "../../hoc/section-wrapper"

const AddedValue = () => {
  const gridRef = useRef<HTMLDivElement>(null!)
  const svgContainerRef = useRef<HTMLDivElement>(null!)

  const onEnteringSection = () => {
    svgContainerRef.current?.classList.add("path-formation")
  }
  return (
    <SectionWrapper
      id="added-value"
      direction="vertical"
      styles="relative overflow-hidden"
      onSectionVisible={onEnteringSection}
    >
      <Chip>القيمة المضافة للنظام </Chip>
      <h2 className="leading-loose">ماذا يقدم بصير ؟</h2>
      <p className="mb-20 hidden w-3/5 text-center leading-relaxed text-paragraphs_primary/70 md:block">
        يتكون النظام من منصة وتطبيق يساعدان المستخدم في تحديد وإبلاغ أماكن
        التشوه البصري بشكل فوري عبر التصوير المباشر أو خانات التبليغ. يوفر
        النظام مراجعة آلية للبلاغات السابقة بناءً على الإحداثيات الزمنية
        والمكانية، ويعرض خريطة حرارية تفاعلية للمجمعات العمرانية. كما يستخدم
        الواقع الافتراضي لتحديد التشوه بدقة أكبر.
      </p>
      <div
        ref={svgContainerRef}
        className="absolute -right-20 -top-48 md:-right-10 md:-top-36"
      >
        <img src={'/assets/images/side-electro.svg'} alt="side-electro" />
      </div>

      <GridCards ref={gridRef} columns={4}>
        <SharpCard
          title={"رفع البلاغات"}
          icon={"cloud"}
          content={`يمكن من تلقي البلاغات من العملاء
والكاميرات المثبتة أو المتحركة`}
          order={"bottom"}
        />
        <SharpCard
          title={"الرصد الآلي الدقيق للمرافق العامة"}
          icon={"mesh"}
          content={`مراقبة المرافق العامة والوحدات
السكنية بشكل فعال`}
          order={"bottom"}
        />
        <SharpCard
          title={"تطبيق للعملاء"}
          icon={"ipad"}
          content={`يمكن للعملاء رفع البلاغات بشكل
سريع وسلس`}
          order={"bottom"}
        />
        <SharpCard
          title={"بيانات مشفرة"}
          icon={"encryption"}
          content={`بيانات آمنة مشفرة لجميع الأطراف`}
          order={"bottom"}
        />
        <SharpCard
          title={"جدولة  الصيانة حسب الأولوية"}
          icon={"calender"}
          content={`إتاحة خاصية الجدولة بناء على الأولوية
وبشكل آلي مؤتمت`}
          order={"upper"}
        />
        <SharpCard
          title={"إدارة المدن العقارية بشكل كامل"}
          icon={"pointer"}
          content={`منظومة مركزية متكاملة 
ومستدامة تضم حلولاً ذكية 
لإدارة عمليات المدن`}
          order={"upper"}
        />
        <SharpCard
          title={"خرائط الوحدات العقارية"}
          icon={"map"}
          content={`استعراض جميع الوحدات  
في خرائط حديثة متطورة`}
          order={"upper"}
        />
        <SharpCard
          title={"أنظمة ثابتة"}
          icon={"systems"}
          content={`تتمتع أنظمتنا باستقرار وكفاءة 
على مدار الساعة`}
          order={"upper"}
        />
      </GridCards>
    </SectionWrapper>
  )
}

export default AddedValue
