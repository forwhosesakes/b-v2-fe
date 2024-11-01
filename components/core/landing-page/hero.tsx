import SectionWrapper from "../../hoc/section-wrapper"
import MovingStars from "../../moving-stars/moving-stars"
import VideoPlayer from "../../video-player/video-player"
const Hero = () => {
  return (
    <SectionWrapper id="hero" styles="bg-[#000013] bg-contain bg-no-repeat ">
      <div className="md:mt-36 mt-16 flex flex-col items-center justify-center">
        <h1 className="leading-loose">بصير .. الحلول الذكية</h1>
        <h3 className="text-center text-white/60">لمجتمعات عمرانية حديثة</h3>

        <div className="relative md:w-11/12 w-full">
          <div className="absolute  cursor-pointer transition-shadow -translate-x-1/2 left-1/2 z-20 sm:mt-12 mt-6 flex w-fit flex-row items-center rounded-full border border-primary/80 md:px-5 px-2 md:py-3 py-1 shadow-[0px_-7px_11px_0px_rgba(164,143,255,0.12)_inset] hover:shadow-[0px_-7px_11px_0px_rgba(164,143,255,0.2)_inset]">
            <p className="ml-2 md:text-[1rem] text-[10px] text-nowrap  inline-block bg-glitter-note-gradient bg-clip-text text-transparent">
              مواجهة تحديات المجمعات العمرانية بحلول مبتكرة ومستدامة
            </p>
            <img src="/assets/icons/glitter.svg" />
          </div>
          <MovingStars />

          <video
            id="background-video"
            loop
            muted
            autoPlay
            className="opacity-60"
            poster={'/assets/images/black-hole.webp'}
          >
            <source src={'/assets/vids/landing-cropped.mp4'} />
          </video>

          <div className="absolute top-1/2 rounded-xl border border-white/10 p-1 flex flex-col justify-center">
           
           <VideoPlayer source={'/assets/vids/preview.mp4'} 
           styles="opacity-75"
           thumbnail={'/assets/images/landing-preview.webp'}/>
            
            
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Hero
