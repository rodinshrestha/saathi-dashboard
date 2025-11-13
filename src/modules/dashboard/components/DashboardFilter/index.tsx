"use client";
import React from "react";

import { X, Download, SearchIcon } from "lucide-react";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import { Select } from "@/components/Select";
import TableSearch from "@/components/Table/components/TableSearch";
import Typography from "@/components/Typography";

import { StyledDiv } from "./style";

const programOption = [
  { label: "All Program", value: "all-program" },
  { label: "Prevention", value: "prevention" },
  { label: "Prosecution", value: "prosecution" },
  { label: "Response", value: "response" },
  { label: "Protection", value: "protection" },
];

const DashboardFilter = () => {
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
          options={[{ label: "text", value: "text" }]}
          onChange={() => {}}
          value=""
          className="bg-color"
        />
        <Select
          label="Program"
          options={programOption}
          onChange={() => {}}
          value=""
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
