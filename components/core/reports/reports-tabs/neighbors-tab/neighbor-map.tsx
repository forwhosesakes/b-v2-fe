"use client"
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
  return (
    <div className="relative  flex-1">
      {reports
        .sort((a, b) => a.id - b.id)
        .map((r) => {
          return (
            <ReportMapPopup
            key={r.id}
              isSelected={report ? r.id === report.id : false}
              report={r}
              onLocationClick={() => {
                setSelectedReport(r)
              }}
            />
          )
        })}
      <img className="h-full w-full object-fill rounded-md" src={"/assets/images/reports-bg.webp"} />
    </div>
  )
}

export default NeighborMap
