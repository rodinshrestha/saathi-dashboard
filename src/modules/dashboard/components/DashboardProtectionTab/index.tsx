"use client";

import React from "react";

import { GraduationCap, House, UsersRound } from "lucide-react";
import useSWR from "swr";

import BarChart from "@/components/BarChart";
import BarGraph from "@/components/BarGraph";
import MiniCard from "@/components/MiniCard";
import PieChart from "@/components/PieChart";
import { getMetrixData } from "@/utils/get-metrix-data";

import AdditionalMetrics from "../AdditionalMetrics";
import DashboardCoverage from "../DashboardCoverage";
import ReferalSummary from "../ReferalSummary";

import { DashboardProtectionType } from "./dashboard-protection.types";
import { StyledDiv } from "./style";

const DashboardProtectionTab = () => {
  const { data, isLoading } = useSWR<DashboardProtectionType>(
    "/dashboard?program=protection"
  );

  const { protection } = data?.data || {};

  return (
    <StyledDiv>
      <div className="protection-tab-card-wrapper">
        <MiniCard
          label="No. of Children Intake"
          value={protection?.kpis?.no_of_children_intake || 0}
          icon={<UsersRound />}
          variant="yellow"
          isLoading={isLoading}
        />
        <MiniCard
          label="Children Program - Safer Home"
          value={protection?.kpis?.children_program_safer_home || 0}
          icon={<House />}
          variant="yellow"
          isLoading={isLoading}
        />
        <MiniCard
          label="Youth Settlement Program"
          value={protection?.kpis?.youth_settlement_program || 0}
          icon={<GraduationCap />}
          variant="yellow"
          isLoading={isLoading}
        />
      </div>
      <BarGraph
        label="Services and Support Provided"
        data={getMetrixData(protection?.services_and_support_provied)}
        isLoading={isLoading}
        variant="green"
      />

      <div className="two-graph-wrapper">
        <BarChart
          label="Age Range Distribution"
          data={getMetrixData(protection?.age_range_distribution)}
          isLoading={isLoading}
          className="flex-1"
        />
        <BarChart
          label="Type of Violence"
          data={getMetrixData(protection?.types_of_violence)}
          isLoading={isLoading}
          className="flex-1"
        />
        <BarChart
          label="Ethnicity Distribution"
          data={getMetrixData(protection?.ethnicity_distribution)}
          isLoading={isLoading}
          className="flex-1"
        />

        <PieChart
          type="pie"
          chartTitle="Gender Distribution"
          data={getMetrixData(protection?.gender_distribution)}
          isLoading={isLoading}
          className="flex-1"
        />

        <PieChart
          type="doughnut"
          chartTitle="Disability Status"
          data={getMetrixData(protection?.disability_status)}
          isLoading={isLoading}
          className="flex-1"
        />

        <PieChart
          type="pie"
          chartTitle="Education Status"
          data={getMetrixData(protection?.education_distribution)}
          isLoading={isLoading}
          className="flex-1"
        />

        <PieChart
          type="doughnut"
          chartTitle="Family Status"
          data={getMetrixData(protection?.family_status)}
          isLoading={isLoading}
          className="flex-1"
        />

        <AdditionalMetrics data={protection} />
      </div>
      <DashboardCoverage data={protection} />
      <ReferalSummary
        referrals_from={protection?.referral_summary?.referrals_from || []}
        referrals_to={protection?.referral_summary?.referrals_to || []}
        variant="vertical"
      />
    </StyledDiv>
  );
};

export default DashboardProtectionTab;
