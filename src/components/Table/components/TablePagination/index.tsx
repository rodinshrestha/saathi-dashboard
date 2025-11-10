import React from "react";

import { Table } from "@tanstack/react-table";
import { useSearchParams } from "next/navigation";

import { PER_PAGE } from "@/constant/pagination.constant";
import { usePagination } from "@/hooks/usePagination";
import { MetaType } from "@/types/api-respone.types";

import { StyledDiv, PageButton } from "./style";

type Props<T> = {
  table: Table<T>;
  isLoading?: boolean;
  pageMeta?: MetaType;
};

const TablePagination = <T,>({ pageMeta, table, isLoading }: Props<T>) => {
  const searchParams = useSearchParams();
  const { setPage, setPerPage } = usePagination();

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentPerPage = Number(searchParams.get("per_page")) || PER_PAGE;

  const { total = 0, last_page = 0 } = pageMeta || {};

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

  if (isLoading) return null;

  return (
    <StyledDiv className="pagination-wrapper">
      <div className="page-index-wrapper">
        {currentPage} - {last_page} of {total}
      </div>
      <div className="per-page-wrapper">
        <select
          onChange={handleOnPerPageChange}
          defaultValue={5}
          value={currentPerPage}
          className="table-per-page"
        >
          <option value={5}>5</option>
          <option value={15}>15</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>

      <PageButton
        className="table-pagination-btn"
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
    </StyledDiv>
  );
};

export default TablePagination;
