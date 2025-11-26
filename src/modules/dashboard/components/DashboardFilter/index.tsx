"use client";
import React from "react";

import { X, Download, SearchIcon } from "lucide-react";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import { Select } from "@/components/Select";
import Typography from "@/components/Typography";
import useUpdateParams from "@/hooks/useUpdateParams";
import { convertProvinceList } from "@/modules/projects/utils/convert-province-list";
import { useGlobalStore } from "@/store/useGlobalConfigStore";
import { DashboardFilterType } from "@/types/dashboard-filter.types";
import { getConvertedDate } from "@/utils/get-converted-date";
import { getProgramListOption } from "@/utils/get-program-option-list";

import { StyledDiv } from "./style";

const programOption = [
  { label: "All Program", value: "all-program" },
  { label: "Prevention", value: "prevention" },
  { label: "Prosecution", value: "prosecution" },
  { label: "Response", value: "response" },
  { label: "Protection", value: "protection" },
];

type Props = {
  dashboardFilter: DashboardFilterType;
  setDashboardFilter: React.Dispatch<React.SetStateAction<DashboardFilterType>>;
};

const DashboardFilter = ({ dashboardFilter, setDashboardFilter }: Props) => {
  const { provinceData, projectData } = useGlobalStore();
  const { updateMultipleQueryParams } = useUpdateParams();

  const onHandleSerach = () => {
    updateMultipleQueryParams(dashboardFilter);
  };

  return (
    <StyledDiv>
      <Typography as="body2">Filter</Typography>

      <div className="dashboard-filter-wrapper">
        <DatePicker
          label="Start Date"
          placeholder="Select date range"
          onChange={(value) =>
            setDashboardFilter((prev) => ({
              ...prev,
              start_date: getConvertedDate(value as Date),
            }))
          }
          selected={dashboardFilter.start_date as Date}
          className="bg-color"
        />
        <DatePicker
          label="End Date"
          placeholder="Select date range"
          onChange={(value) =>
            setDashboardFilter((prev) => ({
              ...prev,
              end_date: getConvertedDate(value as Date),
            }))
          }
          selected={dashboardFilter.end_date as Date}
          className="bg-color"
        />
        <Select
          label="Province"
          options={convertProvinceList(provinceData)}
          onChange={(e) =>
            setDashboardFilter((prev) => ({ ...prev, province: e?.value }))
          }
          value={dashboardFilter.province as string}
          className="bg-color"
        />
        <Select
          label="Program"
          options={programOption}
          onChange={(e) =>
            setDashboardFilter((prev) => ({ ...prev, program: e?.value }))
          }
          value={dashboardFilter.program as string}
          className="bg-color"
        />
        <Select
          label="Project"
          options={getProgramListOption(projectData)}
          onChange={(e) =>
            setDashboardFilter((prev) => ({ ...prev, project: e?.value }))
          }
          value={dashboardFilter.project as string}
          className="bg-color"
        />

        <Button onClick={onHandleSerach}>
          <SearchIcon size={18} />
          Search
        </Button>
      </div>

      <div className="dashboard-filter-btn-wrapper">
        <Button variant="outline">
          <X size={14} />
          Clear Filter
        </Button>
        <Button variant="outline">
          <Download size={14} />
          Export Data
        </Button>
      </div>
    </StyledDiv>
  );
};

export default DashboardFilter;
