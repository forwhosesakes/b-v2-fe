import { FC } from "react";

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
        <img className="z-10 w-full h-full object-cover rounded-lg absolute inset-0" src={props.mediaSrc} />
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
