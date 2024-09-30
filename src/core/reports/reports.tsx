import { useState } from "react"
import ReportsMap from "./reports-map.tsx"
import ReportsTable from "./reports-table.tsx"

const Reports = () => {
  // const [heatmapMode, setHeatmapMode] = useState(false)

  const [selectedReport, setSelectedReport] = useState<ReportEntity|undefined>()

  return (
    <section className="p-0! mt-36 flex flex-col" id={"reports"}>
      <div className="">
        <h2></h2>
      </div>

      <div className="flex flex-row justify-between">
        <ReportsTable
          onReportSelect={(report) => setSelectedReport(report)}
          selectedReport={selectedReport}
        />
        <ReportsMap isHeatMap={false} report={selectedReport} />
      </div>
    </section>
  )
}

export default Reports
