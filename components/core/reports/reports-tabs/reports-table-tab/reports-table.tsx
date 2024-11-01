import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
  } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/paginated-table/table-components"
import { useState } from "react"

const ReportsTable = ({data, columns}:any)=>{

  const [rowSelection, setRowSelection] = useState({})

    const table = useReactTable({
        data: data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        state: {
          rowSelection,
        },
        enableRowSelection: true, //enable row selection for all rows
        onRowSelectionChange: setRowSelection,
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable: true,
      })


      return (
        <>
          <Table className="mx-auto mt-20 w-3/5">
            <TableHeader>
              <TableRow>
                {table.getLeafHeaders().map((header,i) => (
                  <TableHead key={i}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
         
         
        </>
      )


}

export default ReportsTable