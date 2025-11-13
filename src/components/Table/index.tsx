"use client";

import React from "react";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";

import { MetaType } from "@/types/api-respone.types";

import TableSkeleton from "../Loader/TableSkeletonLoading";
import Typography from "../Typography";

import TablePagination from "./components/TablePagination";
import TableSearch from "./components/TableSearch";
import { StyledDiv, TableHeader } from "./style";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading?: boolean;
  pageMeta?: MetaType;
  searchable?: boolean;
  showPagination?: boolean;
  tableTitle?: string;
  showBoxShadow?: boolean;
}

const Table = <T,>({
  data,
  columns,
  isLoading,
  pageMeta,
  searchable,
  showPagination,
  tableTitle = "",
  showBoxShadow,
}: TableProps<T>) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const coreRowModel = React.useMemo(() => getCoreRowModel(), []);
  const sortedRowModel = React.useMemo(() => getSortedRowModel(), []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: coreRowModel,
    getSortedRowModel: sortedRowModel,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
    manualPagination: true,
  });

  React.useEffect(() => {
    table.setPageIndex(currentPage);
  }, [currentPage, table]);

  const showError = !isLoading && data.length === 0;

  return (
    <StyledDiv
      className={clsx("table-wrapper", { "box-shadow": showBoxShadow })}
    >
      <div className="table-title-wrapper">
        {tableTitle && (
          <Typography as="p" className="table-title">
            {tableTitle}
          </Typography>
        )}
        {searchable && <TableSearch />}
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeader
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
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
        {showError && (
          <tbody>
            <tr>
              <td colSpan={columns.length}>
                <div className="no-data-found-wrapper">
                  <Typography as="p">No Data Found</Typography>
                </div>
              </td>
            </tr>
          </tbody>
        )}

        {isLoading ? (
          <TableSkeleton columns={columns.length} />
        ) : (
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    style={{ width: cell.column.columnDef.size ?? "auto" }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {showPagination && (
        <TablePagination
          isLoading={isLoading}
          pageMeta={pageMeta}
          table={table}
        />
      )}
    </StyledDiv>
  );
};

export default Table;
