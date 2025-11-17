"use client";
import React from "react";

import { X, Download, SearchIcon } from "lucide-react";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import { Select } from "@/components/Select";
import TableSearch from "@/components/Table/components/TableSearch";
import Typography from "@/components/Typography";
import { convertProvinceList } from "@/modules/projects/utils/convert-province-list";
import { useGlobalStore } from "@/store/useGlobalConfigStore";
import { SelectValueTypes } from "@/types/select.types";

import { StyledDiv } from "./style";

const programOption = [
  { label: "All Program", value: "all-program" },
  { label: "Prevention", value: "prevention" },
  { label: "Prosecution", value: "prosecution" },
  { label: "Response", value: "response" },
  { label: "Protection", value: "protection" },
];

type Props = {
  setSelectedProgram: React.Dispatch<React.SetStateAction<SelectValueTypes>>;
  selectedProgram: SelectValueTypes;
};

const DashboardFilter = ({ setSelectedProgram, selectedProgram }: Props) => {
  const { provinceData } = useGlobalStore();

  return (
    <StyledDiv>
      <Typography as="body2">Filter</Typography>

      <div className="dashboard-filter-wrapper">
        <TableSearch label="Search" />
        <DatePicker
          label="Time Period"
          placeholder="Select date range"
          onChange={() => {}}
          selected={null}
          className="bg-color"
        />
        <Select
          label="Province"
          options={convertProvinceList(provinceData)}
          onChange={() => {}}
          value=""
          className="bg-color"
        />
        <Select
          label="Program"
          options={programOption}
          onChange={(e) => {
            setSelectedProgram(e?.value);
          }}
          value={selectedProgram as string | number}
          className="bg-color"
        />
        <Select
          label="Project"
          options={programOption}
          onChange={() => {}}
          value=""
          className="bg-color"
        />

        <Button>
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
