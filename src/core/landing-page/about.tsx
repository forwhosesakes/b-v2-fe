import Chip from "../../components/chip/chip";
import SectionWrapper from "../../components/hoc/section-wrapper";
import DemoDevices from '../../assets/images/demo-devices.svg'
const About = () => {
  return (
    <SectionWrapper direction={"horzontal_to_vertical"}  id="about" styles="relative mt-16">
      <div className="m-10 flex-1 flex flex-col items-center">
        <Chip>عن بصير</Chip>
        <h2 className="my-5">
          ما هو نظام بصير ؟
        </h2>
        <p className="md:w-4/5 md:text-lg text-xs leading-loose text-paragraphs_primary">
          نظام آلي مؤتمت ذكي يعمل بأحدث تقنيات الذكاء الاصطنــاعــي والواقـــع
          المـــــعزز ، في تحليل ومعالجة مشكلات مظاهر التشوه البصري المنتشرة في
          المدن الحديثة الذكية والمجمعات العمرانية لحل مشكلات الصيانة والتعامل
          مع البلاغات بشكل آلي.
        </p>
      </div>
  
      

      <div className="relative  md:w-[580px] md:h-[580px]  w-[380px] h-[380px] md:mx-auto my-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[540px] md:h-[540px] w-[340px] h-[340px] border border-slate-300/25 rounded-full opacity-50 animate-pulse-slowest"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[480px] md:h-[480px] w-[280px] h-[280px] border border-slate-400/25 rounded-full opacity-50 animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[440px] md:h-[440px] w-[240px] h-[240px] border border-slate-400/25 rounded-full opacity-50 animate-pulse blurry-light"></div>
      <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[400px] md:h-[400px] w-[280px] h-[280px]rounded-full object-contain z-50"  src={DemoDevices}/>
     
     
    </div>
    </SectionWrapper>
  );
};

export default About;
