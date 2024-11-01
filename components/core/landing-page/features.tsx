import { useRef } from "react"
import Chip from "../../chip/chip"
import AdvancedIndicator from "../../graphs/advanced-indicator/advanced-indicator"
import VisCharts from "../../graphs/charts/vis-charts"
import Indicator from "../../graphs/indicator/indicator"
import InteractiveMaps from "../../graphs/interactive-maps/interactive-maps"
import Interfaces from "../../graphs/interfaces/interfaces"
import Sustainability from "../../graphs/sustainability/sustainability"
import GridCards from "../../grid-cards/grid-cards"
import RoundedCard from "../../grid-cards/rounded-card"
import SectionWrapper from "../../hoc/section-wrapper"
import useMousePosition from "../../../hooks/useMousePosition"



const Features = () => {
  const gridRef = useRef<HTMLDivElement>(null!)
  const clientLocation =  useMousePosition({relativeContainerRef:gridRef})

  return (
    <SectionWrapper id="features" direction="vertical">
      <video
        className="max-h-full w-full object-cover"
        loop
        muted
        autoPlay
        controls={false}
      >
        <source src={'/assets/vids/ball-in-hole-video.mp4'} />
      </video>

      <Chip>مزايا النظام</Chip>

      <h2 className="leading-loose">ماذا يميز بصير ؟</h2>

      <GridCards 
      ref={gridRef}
      
        columns={3} >
        <RoundedCard
          title={"مؤشر التلوث الذكي"}
          content={
            "أداة ذكية تحدد أولويات الصيانة في المناطق ذات التلوث المرتفع، لضمان تحسين معالجة الأماكن المتضررة."
          }
          mouseLocation={clientLocation}
        >
           <Indicator />
         
        </RoundedCard>
        <RoundedCard
          title={"تعزيز مفهوم الاستدامة"}
          content={ "تحسين جودة الحياة في المجمعات العمرانية ، وزيادة قيمة العقار." }
          mouseLocation={clientLocation}

        >
     <Sustainability />
        </RoundedCard>
        <RoundedCard
          title={"مؤشر الأداء المتقدم"}
          content={
            "أداة تحليلية متقدمة تقدم بيانات دقيقة لدعم القرارات الاستراتيجية في إدارة التلوث والصيانة"
          }
          mouseLocation={clientLocation}

        >
         <AdvancedIndicator/>
        </RoundedCard>
        <RoundedCard
          title={"الرسومات البيانية"}
          content={
            "تحليل البيانات الضخمة وتحويلها إلى رسوم بيانية تفاعلية يمكن اتخاذ القرارات من خلالها ذات مؤشرات دقيقة"
          }
          mouseLocation={clientLocation}

        >
         <VisCharts/>
        </RoundedCard>
        <RoundedCard
          title={"خرائط تفاعلية لرصد التشوه"}
          content={
            "خرائط حرارية متطورة ذكية  تفاعلية لتتبع حركة النظام ومستويات التلوث بدقة، لتحسين استراتيجيات الصيانة. "
          }
          mouseLocation={clientLocation}

        >
      <InteractiveMaps/>
        </RoundedCard>
        <RoundedCard
          title={"واجهات مستخدم متوافقة"}
          content={
            "واجهات مستخدم حديثة مرنة ، تحقق احتياجات العمل لضمان تجربة سلسة للعملاء وأصحاب المصلحة ."
          }
          mouseLocation={clientLocation}

        >
          <Interfaces />
        </RoundedCard>
      </GridCards>

      <h6 className="w-3/5 mt-8 text-center text-light_text md:block hidden" >نظام مؤتمت متكامل يجمع بين الكفاءة ودقة النظام يلبي احتياجات المدن الحديثة
      والمجمعات العمرانية المتقدمة في رصد التشوهات بسرعة ودقة للحد من تفاقم المشكلة</h6>
    </SectionWrapper>
  )
}

export default Features