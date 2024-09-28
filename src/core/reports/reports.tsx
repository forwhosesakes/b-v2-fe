
import ReportsMap from "./reports-map"
import ReportsTable from "./reports-table"

const Reports = () => {
  // const [heatmapMode, setHeatmapMode] = useState(false)

  return (
    <section
      className="p-0! mt-36 flex flex-col "
      id={"reports"}
    >
      <div className="">
        <h2></h2>
      </div>

      <div className="flex flex-row justify-between">
        <ReportsTable />
        <ReportsMap isHeatMap={false} />
      </div>
    </section>
  )
}

export default Reports
