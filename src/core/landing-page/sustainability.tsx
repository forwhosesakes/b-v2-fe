import SectionWrapper from "../../components/hoc/section-wrapper.tsx"
import sustailabilityImage from '../../assets/images/sustailability.png'
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'

const Sustainability = ()=>{

return    <SectionWrapper styles="md:flex w-full  justify-center  mt-24  hidden" id="sustainability">
<LazyLoadImage  effect="blur"
        wrapperProps={{
            style: {transitionDelay: "0.25s", justifyContent:"center", display:"flex"},
        }} className="w-3/4" src={sustailabilityImage}/>
    </SectionWrapper>


}


export default Sustainability