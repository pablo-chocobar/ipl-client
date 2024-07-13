import {
    flexRender,
    getSortedRowModel,
    getCoreRowModel,
    useReactTable,
  } from "@tanstack/react-table"
  
  
  import * as React from "react"
  
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
  } from "./ui/table"
      
  export function DataTable({ columns, data }) {
  
    const [sorting, setSorting] = React.useState([])
  
    const [columnFilters, setColumnFilters] = React.useState([])
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      // getPaginationRowModel: getPaginationRowModel(),
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      state: {
        sorting,
        columnFilters,
      },
      onColumnFiltersChange: setColumnFilters,
    })
  
    return (
      <div className="mx-[3%] px-10 mt-4">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map(headerGroup => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map(header => {
                    return (
                      <TableHead key={header.id} className = "px-2">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map(row => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className = {"hover:bg-secondary/80"}
                  >
                    {row.getVisibleCells().map(cell => (
                      <TableCell key={cell.id} className = "py-3 px-1">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center ">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          </div>
        </div>
    )
  }
  