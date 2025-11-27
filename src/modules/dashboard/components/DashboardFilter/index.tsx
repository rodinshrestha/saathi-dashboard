"use client";
import React from "react";

import { X, Download, SearchIcon } from "lucide-react";
import { mutate } from "swr";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import CircleProgress from "@/components/Loader/CircleProgressBar";
import { Select } from "@/components/Select";
import { useTabStore } from "@/components/Tab/tab.store";
import Typography from "@/components/Typography";
import useToaster from "@/hooks/useToaster";
import useUpdateParams from "@/hooks/useUpdateParams";
import { convertProvinceList } from "@/modules/projects/utils/convert-province-list";
import { useGlobalStore } from "@/store/useGlobalConfigStore";
import { DashboardFilterType } from "@/types/dashboard-filter.types";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getConvertedDate, getCurrentDate } from "@/utils/get-converted-date";
import { getDownloadLink } from "@/utils/get-download-link";
import { getProgramListOption } from "@/utils/get-program-option-list";

import useDashboardApiUrl from "../../hooks/useDashboardApiUrl";

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
  setSelectedProgramTab: React.Dispatch<React.SetStateAction<string>>;
};

const DashboardFilter = ({
  dashboardFilter,
  setDashboardFilter,
  setSelectedProgramTab,
}: Props) => {
  const [progress, setProgress] = React.useState(0);
  const [isDownloading, setIsDownloading] = React.useState(false);

  const { provinceData, projectData } = useGlobalStore();
  const { updateMultipleQueryParams, clearAllQueryParams } = useUpdateParams();
  const { getDashboardAPiUrl } = useDashboardApiUrl();
  const { activeTabValue } = useTabStore();
  const { successToast } = useToaster();

  const onHandleSerach = () => {
    updateMultipleQueryParams(dashboardFilter);
    if (dashboardFilter?.program) {
      setSelectedProgramTab(dashboardFilter.program as string);
    }

    mutate(getDashboardAPiUrl(activeTabValue));
  };

  const handleReset = () => {
    setDashboardFilter({
      start_date: null,
      end_date: null,
      province: "",
      program: "all-program",
      project: "",
    });
    setSelectedProgramTab("all-program");

    clearAllQueryParams();
    mutate((key: string) => key.startsWith("/dashboard"));
  };

  const handleOnExport = () => {
    setIsDownloading(true);
    const fileName = `data-${getCurrentDate()}.pdf`;
    authAxios
      .get(`export/pdf`, {
        responseType: "blob",
        onDownloadProgress: (event) => {
          if (event.total) {
            const percent = (event.loaded / event.total) * 100;
            setProgress(percent);
          }
        },
      })
      .then((res) => {
        successToast("file has been downloaded");
        getDownloadLink(res, fileName);
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
      })
      .finally(() => {
        setProgress(0);
        setIsDownloading(false);
      });
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
        <Button variant="outline" onClick={handleReset}>
          <X size={14} />
          Clear Filter
        </Button>
        <Button
          variant="outline"
          disabled={isDownloading}
          onClick={handleOnExport}
        >
          {isDownloading ? (
            <CircleProgress progress={progress} size={30} />
          ) : (
            <>
              <Download size={14} />
              Export Data
            </>
          )}
        </Button>
      </div>
    </StyledDiv>
  );
};

export default DashboardFilter;
