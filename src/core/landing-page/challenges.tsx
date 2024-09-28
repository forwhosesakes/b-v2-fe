import SectionWrapper from "../../components/hoc/section-wrapper";
import Electro from '../../assets/images/electro.svg?react'
import { useRef } from "react";

const Challenges = () => {


  const svgContainerRef = useRef<HTMLDivElement>(null!)

  const onStartAnimation = ()=>{
    svgContainerRef.current.classList.add("path-formation")
    
  }
  return (
    <SectionWrapper
    id="challenges"
    onSectionVisible={onStartAnimation}
    styles="relative  bg-overlay  my-48">
      <div className="absolute bottom-0 w-full bg-bottom-black-overlay h-96" />
      <div ref={svgContainerRef} className="absolute top-0 w-full bg-upper-black-overlay h-96">
    
        <Electro   className=" w-full" />
      </div>

      <div className="flex md:flex-row  flex-col md:w-2/3 w-full md:p-8 p-2 items-center rounded-2xl bg-ch-radial-gradient backdrop-blur-md ">
        <h2 className="md:w-min md:break-words leading-relaxed text-center">
          تحديات المدن الحديثة
        </h2>
        <h4 className="w-4/5 mr-5 md:text-lg text-xs leading-relaxed">
          في السنوات الماضية ومع نمو النهضة العمرانية و توجه المجتمعات العمرانية الحديثة نشأت الحاجة الماسة لردع
          التشوه البصري ومعالجته بشكل آلي متطور , لتقليل التكاليف وتوفير بيئة
          جاذبة آمنة تتواكب مع تطلعات وتوجه المدن الحديثة لتحقيق بيــوت
          ذكيــة معــاصرة وحلــول ســكنية مســتدامة ترفـع من جـودة الحيـاة
          للسكان  بتأثير إيجابي طويل الأمد على مستقبل المجتمعات العمرانية ,
          وتكمن التحديات في السيطرة على هذه الظاهرة بسرعة وكفاءة عالية بالسعي لإيجاد طرق وحلول عملية لحلها وتطوير أساليب
          الحد منها.
        </h4>
      </div>
    </SectionWrapper>
  );
};

export default Challenges;
