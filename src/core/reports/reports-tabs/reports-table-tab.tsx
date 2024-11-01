import { useState } from "react"
import { useGetAllReports } from "../../../api/queries/report.query"
import {
  ColumnDef,
} from "@tanstack/react-table"
import moment from "moment"
import StatusChip from "../../../components/status-chip/status-ship"
import ReportActionPopup from "./reports-table-tab/table-action-popup"
import IndeterminateCheckbox from "../../../components/Indeterminate-checkbox/indeterminate-checkbox"
import React from "react"
import PaginatedTableFooter from "../../../components/paginated-table/paginated-table"
import ReportsTable from "./reports-table-tab/reports-table"

const ReportsTableTab = () => {
  const [page, setPage] = useState(1)

  const { isLoading, data } = useGetAllReports(
    "",
    page,
    12,
  )

  

  const columns = React.useMemo<ColumnDef<ReportEntity, any>[]>(
    () => [
      {
        id: "select",
        header: (props) => (
          <IndeterminateCheckbox
            {...{
              checked: props.table.getIsAllRowsSelected(),
              indeterminate: props.table.getIsSomeRowsSelected(),
              onChange: props.table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        accessorKey: "title",
        cell: (info) => info.getValue(),
        header: "الوصف",
      },
      {
        accessorKey: "villa",
        cell: (info) => info.getValue(),
        header: () => "الموقع",
      },
      {
        accessorKey: "createdAt",
        id: "date",
        cell: (info) => moment(info.getValue()).format("DD/MM/YYYY"),
        header: "التاريخ",
      },
      {
        accessorKey: "createdAt",

        cell: (info) => moment(info.getValue()).format("LTS"),
        header: () => "الوقت",
      },
      {
        accessorKey: "status",
        cell: (info) => <StatusChip status={info.getValue()} />,
        header: () => <span className="flex w-28 justify-center">الحالة</span>,
      },

      {
        id: "actions",
        header: () => "الإجراء",
        cell: () => <ReportActionPopup />,
      },
    ],
    [],
  )

  

  return isLoading ? (
    <p></p>
  ) : (
    <>
      <ReportsTable data={data.data.reports} columns={columns}/>
      <PaginatedTableFooter
        currentPage={page}
        setCurrentPage={(page) => setPage(page)}
        totalPages={5}
      />
    </>
  )
}

export default ReportsTableTab
