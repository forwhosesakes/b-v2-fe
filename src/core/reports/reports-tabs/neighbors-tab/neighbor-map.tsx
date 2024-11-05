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

  const selectedReports = [reports[13],reports[36],reports[9] ]

  return (
    <div className="relative max-h-[90vh] p-5 flex-1">
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
        <img src={ReportMapControl} className="absolute left-0 bottom-6"/>
      <img className="h-full w-full object-fill   rounded-xl" src={NormalMap} />
    </div>
  )
}

export default NeighborMap
