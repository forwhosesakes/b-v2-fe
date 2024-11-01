
"use client"

import { useGetAllReports } from "@/api/queries/report.query"
import { useState } from "react"
import NeighborMap from "./neighbors-tab/neighbor-map"
import ReportDetails from "./neighbors-tab/report-details"

const NeighborsTab = () => {
  const [selectedReport, setSelectedReport] = useState<
    ReportEntity | undefined
  >(undefined)
 
  const { isLoading, data } = useGetAllReports(
    "",
    1,
    49,
  )


  return (
    <div className="flex gap-x-8">
          {selectedReport && <ReportDetails report={selectedReport} />}
      {isLoading ? (
        <p>loading</p>
      ) : (
        <NeighborMap
        reports = {data.data.reports}
          report={selectedReport}
          setSelectedReport={(rep: ReportEntity) => {
        

            setSelectedReport(rep)
          }}
        />
      )}
    
    </div>
  )
}

export default NeighborsTab
