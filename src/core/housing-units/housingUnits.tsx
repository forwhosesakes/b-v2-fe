import ZoomableContainer from "../../components/zoomables/zoomable-container";
import HousesMask from "./mask";

const HousingUnits = () => {
  return (
    <div className="housing-units flex-1 border border-red-400 h-full flex flex-col content-start">
      <div className="h-full flex flex-row flex-initial relative ">


        <div className="bg-secondary w-1/4 h-full "></div>
        <ZoomableContainer>
          <img
            className="object-cover w-full absolute left-0 h-full "
            src="/src/assets/images/2048.jpg"
          />
          <HousesMask/>
        </ZoomableContainer>
      </div>
    </div>
  );
};

export default HousingUnits;
