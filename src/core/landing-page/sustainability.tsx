import SectionWrapper from "../../components/hoc/section-wrapper"
import sustailabilityImage from '../../assets/images/sustailability.png'
import { LazyLoadImage } from "react-lazy-load-image-component"

const Sustainability = ()=>{

return    <SectionWrapper styles="md:flex hidden" id="sustainability">
<LazyLoadImage className="w-4/5" src={sustailabilityImage}/>
    </SectionWrapper>


}


export default Sustainability