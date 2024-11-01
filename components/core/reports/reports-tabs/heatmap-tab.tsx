"use client"
import HeatMap from "./heatmap-tab/heatmap"
import Indicators from "./heatmap-tab/indicators"
import LatestReports from "./heatmap-tab/latest-reports"

const HeatMapTab = () => {
  return (
    <div className="mx-auto mt-12 flex w-4/5 flex-col items-center">
      <h4 className="mx-auto">مؤشر التلوث</h4>
      <div className="flex w-full justify-between">
        <LatestReports />
        <HeatMap/>
        <Indicators />
      </div>
    </div>
  )
}

export default HeatMapTab
