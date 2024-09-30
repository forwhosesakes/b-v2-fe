import SectionWrapper from "../../components/hoc/section-wrapper.tsx"
import sustailabilityImage from '../../assets/images/sustailability.png'
import { LazyLoadImage } from "react-lazy-load-image-component"

const Sustainability = ()=>{

return    <SectionWrapper styles="md:flex mt-24  hidden" id="sustainability">
<LazyLoadImage className="w-3/4" src={sustailabilityImage}/>
    </SectionWrapper>


}


export default Sustainability