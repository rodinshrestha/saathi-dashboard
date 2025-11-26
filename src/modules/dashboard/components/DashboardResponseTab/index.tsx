"use client";
import React from "react";

import { Clock, FileText, House } from "lucide-react";
import useSWR from "swr";

import BarChart from "@/components/BarChart";
import BarGraph from "@/components/BarGraph";
import MiniCard from "@/components/MiniCard";
import PieChart from "@/components/PieChart";
import { getMetrixData } from "@/utils/get-metrix-data";

import ReferalSummary from "../ReferalSummary";

import InformationByProject from "./components/InformationByProject";
import { DashboardResponseType } from "./dashboard-response.types";
import { StyledDiv } from "./style";

const DashboardResponseTab = () => {
  const { data, isLoading } = useSWR<DashboardResponseType>(
    "/dashboard?program=response"
  );

  const { response } = data?.data || {};

  return (
    <StyledDiv>
      <div className="response-tab-card-wrapper">
        <MiniCard
          label="No. of Registrations"
          value={response?.kpis?.total_registrations || 0}
          icon={<FileText />}
          variant="orange"
          isLoading={isLoading}
        />
        <MiniCard
          label="Total Number of Shelters"
          value={response?.kpis?.saathi_shelters || 0}
          icon={<House />}
          variant="orange"
          isLoading={isLoading}
        />
        <MiniCard
          label="UNFPA Supported Shelters"
          value={response?.kpis?.unfpa_supported_shelters || 0}
          icon={<House />}
          variant="orange"
          isLoading={isLoading}
        />
        <MiniCard
          label="Avg. Duration of Stay(days)"
          value={response?.kpis?.duration_of_stay || 0}
          icon={<Clock />}
          variant="orange"
          isLoading={isLoading}
        />
      </div>
      <BarGraph
        label="Services and Support Provided"
        data={getMetrixData(response?.services_and_support_provided)}
        isLoading={isLoading}
        variant="cyan"
      />
      <div className="two-graph-wrapper">
        <PieChart
          type="doughnut"
          data={getMetrixData(response?.sheltered_vs_non_sheltered)}
          chartTitle="Sheltered vs Non-Sheltered"
          isLoading={isLoading}
          className="flex-1"
        />

        <PieChart
          type="doughnut"
          data={getMetrixData(response?.dependent_vs_non_dependent)}
          chartTitle="Dependent Vs Non-Dependent"
          isLoading={isLoading}
          className="flex-1"
        />

        <BarChart
          label="Age Range Distribution"
          data={getMetrixData(response?.age_range_distribution)}
          isLoading={isLoading}
          className="flex-1"
        />

        <PieChart
          type="pie"
          data={getMetrixData(response?.marital_status)}
          chartTitle="Marital Status"
          isLoading={isLoading}
          className="flex-1"
        />
        <BarChart
          label="Types of Violence"
          data={getMetrixData(response?.types_of_violence)}
          isLoading={isLoading}
          className="flex-1"
        />
        <BarChart
          label="Ethnicity Distribution"
          data={getMetrixData(response?.ethnicity_distribution)}
          isLoading={isLoading}
          className="flex-1"
        />
        <PieChart
          type="doughnut"
          data={getMetrixData(response?.pregnancy_status)}
          chartTitle="Pregnancy Status"
          isLoading={isLoading}
          className="flex-1"
        />

        <PieChart
          type="doughnut"
          data={getMetrixData(response?.disability_status)}
          chartTitle="Disability Status"
          isLoading={isLoading}
          className="flex-1"
        />
        <InformationByProject data={response} isLoading={isLoading} />

        <ReferalSummary
          className="flex-1"
          referrals_from={response?.referral_summary?.referrals_from || []}
          referrals_to={response?.referral_summary?.referrals_to || []}
          isLoading={isLoading}
          showDivider
        />
      </div>
    </StyledDiv>
  );
};

export default React.memo(DashboardResponseTab);
