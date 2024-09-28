import SectionWrapper from "../../components/hoc/section-wrapper"
import sustailabilityImage from '../../assets/images/sustailability.png'

const Sustainability = ()=>{

return    <SectionWrapper styles="md:flex hidden" id="sustainability">
<img className="w-4/5" src={sustailabilityImage}/>
    </SectionWrapper>


}


export default Sustainability