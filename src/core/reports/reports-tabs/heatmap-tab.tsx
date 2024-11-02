import HeatMap from "./heatmap-tab/heatmap"
import Indicators from "./heatmap-tab/indicators"
import LatestReports from "./heatmap-tab/latest-reports"

const HeatMapTab = () => {
  return (
    <div className="mx-auto mt-12 flex w-full flex-col items-center">
      <h4 className="mx-auto">مؤشر التلوث</h4>
      <svg xmlns="http://www.w3.org/2000/svg" width="1233" height="20" viewBox="0 0 1233 20" fill="none">
  <path d="M1232.37 1.68826C1232.37 1.68826 858.777 18.1816 616.506 18.1816C374.235 18.1816 0.64284 1.68815 0.64284 1.68815" stroke="url(#paint0_radial_394_843)" stroke-width="2"/>
  <defs>
    <radialGradient id="paint0_radial_394_843" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(616.506 9.93506) rotate(-179.965) scale(538.633 4464.68)">
      <stop stop-color="#0BF1F7"/>
      <stop offset="1" stop-color="#0BF1F7" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>
      <div className="my-10 flex w-full justify-between">
        <LatestReports />
        <HeatMap/>
        <Indicators />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" width="1233" height="19" viewBox="0 0 1233 19" fill="none">
  <path d="M1232.37 17.4934C1232.37 17.4934 858.777 1.00003 616.506 1.00005C374.235 1.00008 0.64284 17.4935 0.64284 17.4935" stroke="url(#paint0_radial_394_847)" stroke-width="2"/>
  <defs>
    <radialGradient id="paint0_radial_394_847" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(616.506 9.24658) rotate(179.965) scale(538.633 4464.68)">
      <stop stop-color="#0BF1F7"/>
      <stop offset="1" stop-color="#0BF1F7" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>
    </div>
  )
}

export default HeatMapTab
