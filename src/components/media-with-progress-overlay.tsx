import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

type TProps = {
  mediaType: "video" | "image";
  mediaSrc: string;
  progressComponent: FC<any>;
  overlayCondition: boolean
};

const MediaWithProgressOverlay = (props: TProps) => {
  return (
    <div className="relative w-full h-full">
        {props.overlayCondition&&<props.progressComponent/>}
      {props.mediaType === "image" ? (
        <LazyLoadImage 
        effect="blur"
        wrapperProps={{
            style: {transitionDelay: "0.25s"},
        }}
        className="z-10 w-full h-full object-cover rounded-lg absolute inset-0" src={props.mediaSrc} />
      ) : (
        <video
          className="z-10 w-full h-full object-cover rounded-lg absolute inset-0"
          controls={true}
        >
          <source src={props.mediaSrc} />
        </video>
      )}
    </div>
  );
};

export default MediaWithProgressOverlay;
