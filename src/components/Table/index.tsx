"use client";

import React from "react";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import styled from "styled-components";

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
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
  });

  const totalPages = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;

  // Limit number buttons (like 1...5 or current±2)
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  ).filter(
    (page) =>
      page === 1 ||
      page === totalPages ||
      (page >= currentPage - 2 && page <= currentPage + 2)
  );

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
      {/* <div className="pagination-wrapper">
        <PageButton
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          ‹
        </PageButton>

        {pageNumbers.map((page, index) => {
          const isCurrent = page === currentPage;
          const isEllipsis = index > 0 && page - pageNumbers[index - 1] > 1;

          return (
            <React.Fragment key={page}>
              {isEllipsis && <span>...</span>}
              <PageButton
                $active={isCurrent}
                onClick={() => table.setPageIndex(page - 1)}
              >
                {page}
              </PageButton>
            </React.Fragment>
          );
        })}

        <PageButton
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          ›
        </PageButton>
      </div> */}
    </StyledDiv>
  );
};

export default Table;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1rem;
  font-family: ui-sans-serif, system-ui, sans-serif;

  span {
    padding: 0 0.25rem;
    color: #999;
  }
`;

const PageButton = styled.button<{ $active?: boolean }>`
  padding: 0.4rem 0.7rem;
  border: 1px solid #d3d3d3;
  background: ${({ $active }) => ($active ? "#3A86FF" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
  border-radius: 6px;
  cursor: pointer;
  min-width: 32px;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? "#2f6ce3" : "#f3f3f3")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
