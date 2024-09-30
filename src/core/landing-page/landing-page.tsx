import SectionWrapper from "../../components/hoc/section-wrapper.tsx";
import About from "./about.tsx";
import AddedValue from "./added-value.tsx";
import Challenges from "./challenges.tsx";
import Features from "./features.tsx";
import Hero from "./hero.tsx";
import Outro from "./outro.tsx";
import PollutionTypes from "./pollution-types.tsx";
import SmartSolutions from "./smart-solutions.tsx";
import Sustainability from "./sustainability.tsx";
import SystemPreview from "./system-preview.tsx";
import MockupImage from '../../assets/images/mockup.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

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
  <SectionWrapper styles="md:flex md:flex-row hidden" id="mockup" ><LazyLoadImage  effect="blur"
        wrapperProps={{
            style: {transitionDelay: "0.25s",justifyContent:"center", display:"flex"},
        }} className="w-3/5" src={MockupImage} loading="lazy" /></SectionWrapper>
  <Features/>
  <SmartSolutions/>
  
  <Outro/>

  
  
  </div>
  );
};

export default LandingPage;
