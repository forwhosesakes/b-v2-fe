import { ReactNode, useRef } from "react"

type TProps = {
  title: string
  content: string
  children: ReactNode
  mouseLocation? :{x:number, y:number}, 

}
const RoundedCard = (props: TProps) => {
  const cardRef = useRef<HTMLDivElement>(null!)
  if (props.mouseLocation) {

    document.documentElement.style.setProperty('--mouse-x', `${props.mouseLocation.x>0? props.mouseLocation.x:0}px`);
    document.documentElement.style.setProperty('--mouse-y', `${props.mouseLocation.y>0?props.mouseLocation.y:0}px`);

  }

  return (
    <div 
    ref={cardRef}      
    className="bg-brightness-gradient m-3 rounded-2xl p-[1px]">
      {/* <p>x:{props.mouseLocation?.x}, y:{props.mouseLocation?.y}</p> */}

      <div className="bg-darker flex h-72 flex-col rounded-[16px] p-6">
    
        <div className="mb-5 h-1/2"> {props.children}</div>

        <div>
          <p className="gradient-text my-2 md:text-lg text-sm font-semibold">
            {props.title}
          </p>
          <p className="text-paragraphs_primary/70 md:text-sm text-xs">{props.content}</p>
        </div>
      </div>
    </div>
  )
}

export default RoundedCard
