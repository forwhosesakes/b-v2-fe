import { useRef } from "react";

type ComparisionModalProps = {
  beforeImageUrl: string;
  afterImageUrl: string;
};

const ComparisionModal = (props: ComparisionModalProps) => {
  const slidingLineRef = useRef<HTMLDivElement>(null!);
  const parentRef = useRef<HTMLDivElement>(null!);
  const ogImageRef = useRef<HTMLImageElement>(null!);

  const blankCanvas = document.createElement("canvas");
  blankCanvas.height = 1;
  blankCanvas.width = 1;

  const onSliderDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setDragImage(blankCanvas, 0, 0);
    document.body?.appendChild(blankCanvas);
  };

  const onSliderDrag = (e: React.DragEvent<HTMLDivElement>) => {
    const movedDistancePixels =
      parentRef.current.getBoundingClientRect().width -
      (e.clientX - parentRef.current.getBoundingClientRect().left);
    if (
      movedDistancePixels > 0 &&
      movedDistancePixels < parentRef.current.getBoundingClientRect().width - 36
    ) {
      ogImageRef.current.style.clipPath = `inset(0 ${movedDistancePixels}px 0 0)`;
      ogImageRef.current.style.border = "1px solid red";
      slidingLineRef.current.style.right = movedDistancePixels + "px";
    }
  };

  return (
    <div className="flex flex-row relative h-full w-full" ref={parentRef}>
      <div
        className="sliding-line z-40 absolute w-1/12 inset-0 right-1/2"
        ref={slidingLineRef}
      >
        <div className="relative w-full h-full">
          <div className="w-1 h-full bg-white absolute left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
          <div
            // onMouseDown={(event) => event.preventDefault()}
            onDragStart={onSliderDragStart}
            draggable={true}
            onDrag={onSliderDrag}
            className="h-8 w-9 bg-orange-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          />
        </div>
      </div>
      <div className=" flex-grow ">
        <img
          draggable={false}
          ref={ogImageRef}
          className="object-cover 
        
        absolute pointer-events-none 
     
        z-10 h-full w-full "
          src={props.beforeImageUrl}
        />
        <img
          draggable={false}
          className="object-cover absolute 
      
        
        
        pointer-events-none  z-0 h-full w-full"
          src={props.afterImageUrl}
        />
      </div>
    </div>
  );
};

export default ComparisionModal;
