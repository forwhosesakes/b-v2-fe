
import ReportsHeader from "./reports-header.tsx"
import ReportsTabs from "./reports-tabs.tsx"

const Reports = () => {
 
  return (
 
      <section className="mt-36 w-11/12 mx-auto flex flex-col px-16" id={"reports"}>
        <ReportsHeader totalReports={ 49} />
        <ReportsTabs
        />
      </section>
 
  )
}

export default Reports
