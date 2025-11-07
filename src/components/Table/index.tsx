"use client";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";

import TableSkeleton from "../Loader/TableSkeletonLoading";
import Typography from "../Typography";

import { StyledDiv, TableHeader } from "./style";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading?: boolean;
}

const Table = <T,>({ data, columns, isLoading }: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    // onSortingChange: (sort) => setSorting(sort),
    // onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  return (
    <StyledDiv className="table-wrapper">
      <Typography as="p" className="table-title">
        All Projects
      </Typography>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeader
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  // isSorted={header.column.getIsSorted() as string}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHeader>
              ))}
            </tr>
          ))}
        </thead>
        {isLoading ? (
          <TableSkeleton columns={columns.length} />
        ) : (
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </StyledDiv>
  );
};

export default Table;
