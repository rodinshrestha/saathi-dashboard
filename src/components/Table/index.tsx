"use client";

import React from "react";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { useSearchParams } from "next/navigation";
import styled from "styled-components";

import { PER_PAGE } from "@/constant/pagination.constant";
import { usePagination } from "@/hooks/usePagination";
import { MetaType } from "@/types/api-respone.types";

import TableSkeleton from "../Loader/TableSkeletonLoading";
import { Select } from "../Select";
import Typography from "../Typography";

import TableSearch from "./components/TableSearch";
import { StyledDiv, TableHeader } from "./style";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading?: boolean;
  pageMeta?: MetaType;
}

const Table = <T,>({ data, columns, isLoading, pageMeta }: TableProps<T>) => {
  const { setPage, setPerPage } = usePagination();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const currentPerPage = Number(searchParams.get("per_page")) || PER_PAGE;

  const { total = 0, last_page = 0 } = pageMeta || {};

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
    manualPagination: true,
  });

  React.useEffect(() => {
    table.setPageIndex(currentPage);
  }, [currentPage, table]);

  // Limit number buttons (like 1...5 or current±2)
  const pageNumbers = Array.from({ length: last_page }, (_, i) => i + 1).filter(
    (page) =>
      page === 1 ||
      page === last_page ||
      (page >= currentPage - 2 && page <= currentPage + 2)
  );

  const handleOnPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setPerPage(value);
  };

  return (
    <StyledDiv className="table-wrapper">
      <div className="table-title-wrapper">
        <Typography as="p" className="table-title">
          All Projects
        </Typography>
        <TableSearch />
      </div>
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
      {!isLoading && (
        <div className="pagination-wrapper">
          <div className="page-index-wrapper">
            {currentPage} - {last_page} of {total}
          </div>
          <div className="per-page-wrapper">
            <select
              onChange={handleOnPerPageChange}
              defaultValue={5}
              value={currentPerPage}
            >
              <option value={5}>5</option>
              <option value={15}>15</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>

          <PageButton
            disabled={currentPage <= 1}
            onClick={() => {
              table.previousPage();
              setPage(currentPage - 1);
            }}
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
                  onClick={() => {
                    setPage(page);
                    table.setPageIndex(page - 1);
                  }}
                >
                  {page}
                </PageButton>
              </React.Fragment>
            );
          })}

          <PageButton
            disabled={currentPage === last_page}
            onClick={() => {
              table.nextPage();
              setPage(currentPage + 1);
            }}
          >
            ›
          </PageButton>
        </div>
      )}
    </StyledDiv>
  );
};

export default Table;

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
