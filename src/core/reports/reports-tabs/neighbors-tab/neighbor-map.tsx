import { LazyLoadImage } from "react-lazy-load-image-component"
import NormalMap from "../../../../assets/images/reports-bg.webp"
import ReportMapControl from "../../../../assets/images/report-control.webp"
import "react-lazy-load-image-component/src/effects/blur.css"
import ReportMapPopup from "./report-popup"

const NeighborMap = ({
  report,
  reports,
  setSelectedReport,
}: {
  report: ReportEntity | undefined
  reports: ReportEntity[]
  setSelectedReport: (r: ReportEntity) => void
}) => {

  const selectedReports = reports.slice(12,16)

  return (
    <div className="relative max-h-[90vh]  flex-1">
      {selectedReports
        .sort((a, b) => a.id - b.id)
        .map((r) => {
          return (
            <ReportMapPopup
            key={r.id}
              selectedReport={report}
              report={r}
              onLocationClick={() => {
                setSelectedReport(r)
              }}
            />
          )
        })}
        <img src={ReportMapControl} className="absolute left-0 bottom-0"/>
      <LazyLoadImage className="h-full w-full object-fill rounded-md" src={NormalMap} />
    </div>
  )
}

export default NeighborMap
