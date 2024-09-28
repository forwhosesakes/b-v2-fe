import { useState } from "react"
import { useGetAllReports } from "../../api/queries/report.query"
import SearchbarIcon from "../../assets/icons/search.svg?react"
import ReportRow from "./report-row"
import LeftArrowIcon from "../../assets/icons/left-arrow.svg?react"
import RightArrowIcon from "../../assets/icons/right-arrow.svg?react"
import CicrularProgress from "../../components/skeleton/circular-progress"

// type TProps = {
//   onReportSelect: () => void
// }

const ReportsTable = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [page, setPage] = useState(3)
  const { isLoading, isError, data, isFetching } = useGetAllReports(
    searchTerm,
    page,
    10,
  )

  const onSearchTermChange = (e: any) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="flex-1 p-3">
      <div className="TableActions flex flex-row justify-between">
        <button className="button flex flex-row items-center">
          <span>بلاغ جديد</span>
        </button>
        <div className="SearchBar flex flex-row items-center">
          <input
            className="m-2 rounded-xl bg-transparent p-2"
            value={searchTerm}
            onChange={onSearchTermChange}
            placeholder="البحث"
          />
          <SearchbarIcon height={32} />
        </div>
      </div>

      <div>
        {isLoading ? (
          <div><CicrularProgress/></div>
        ) : isError ? (
          <div>Error: </div>
        ) : (
          <div className="border">
            {data.data.reports.map((report: any) => (
              <ReportRow report={report} key={report.id} selected={false} />
            ))}
          </div>
        )}
        <div className="pagination-actions flex flex-row justify-between m-3">
          <p>
            {" "}
            <span>Current Page: {page + 1}</span>
          </p>

          <div className="flex gap-x-3">
         
            <button
              className=" button hover:opacity-60 hover:bg-white/5 transition-all "
              onClick={() => {
                
                  setPage((old) => old + 1)
                
              }}
              // Disable the Next Page button until we know a next page is available
              // disabled={!data?.hasMore}
            >
              <RightArrowIcon width={24} height={24} />
            </button>
            <button
              className="button hover:opacity-60  hover:bg-white/5 transition-all "
              onClick={() => setPage((old) => Math.max(old - 1, 0))}
              disabled={page === 0}
            >
              <LeftArrowIcon width={24} height={24} />
            </button>
          </div>
        </div>
        {isFetching ? <span> Loading...</span> : null}{" "}
      </div>
    </div>
  )
}

export default ReportsTable
