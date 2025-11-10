import React from "react";

import { Calendar, Home, Mail, MapPin, Phone, User } from "lucide-react";

import DataBlock from "@/components/DataBlock";

import { StyledDiv } from "./style";

const PersonalInformation = () => {
  return (
    <StyledDiv>
      <DataBlock icon={User} labelName="Age" value="28 Years" />
      <DataBlock icon={User} labelName="Gender" value="Female" />
      <DataBlock icon={Mail} labelName="Email" value="john.doe@example.com" />
      <DataBlock icon={Phone} labelName="Phone" value="+977-9810000000" />
      <DataBlock icon={MapPin} labelName="Province" value="Madhesh Province" />
      <DataBlock icon={MapPin} labelName="District" value="Morang" />
      <DataBlock
        icon={Home}
        labelName="Address"
        value="Ward No. 1, Madhesh Province"
        className="full-width"
      />
      <DataBlock icon={User} labelName="Ethnicity" value="Hill Janajati" />
      <DataBlock
        icon={Calendar}
        labelName="Registration Date"
        value="2024-02-10"
      />
    </StyledDiv>
  );
};

export default PersonalInformation;
