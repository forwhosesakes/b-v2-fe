import SectionWrapper from "../../components/hoc/section-wrapper";
import About from "./about";
import AddedValue from "./added-value";
import Challenges from "./challenges";
import Features from "./features";
import Hero from "./hero";
import Outro from "./outro";
import PollutionTypes from "./pollution-types";
import SmartSolutions from "./smart-solutions";
import Sustainability from "./sustainability";
import SystemPreview from "./system-preview";
import MockupImage from '../../assets/images/mockup.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

const LandingPage = () => {
  return ( <div className="flex flex-col">
  
  <Hero/>

  <div className="p-12 m-12"/>
  <Challenges/>
  <About/>
  <PollutionTypes/>
  <SystemPreview/>
  <Sustainability/>
  <AddedValue/>
  <SectionWrapper styles="md:flex md:flex-row hidden" id="mockup" ><LazyLoadImage className="w-3/5" src={MockupImage} loading="lazy" /></SectionWrapper>
  <Features/>
  <SmartSolutions/>
  
  <Outro/>

  
  
  </div>
  );
};

export default LandingPage;
