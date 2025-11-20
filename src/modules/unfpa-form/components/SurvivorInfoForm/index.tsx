import React from "react";

import { FormikProps } from "formik";
import { SingleValue } from "react-select";

import InputField from "@/components/InputField";
import { Option, Select } from "@/components/Select";
import Typography from "@/components/Typography";
import useToaster from "@/hooks/useToaster";
import { convertDistrictList } from "@/modules/projects/utils/convert-district-list";
import { convertProvinceList } from "@/modules/projects/utils/convert-province-list";
import { useGlobalStore } from "@/store/useGlobalConfigStore";

import { UNFPAFormType } from "../../unfpa.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<UNFPAFormType>;
};

const citizenshipOrIdTypeOption = [
  { label: "Citizenship", value: "citizenship" },
  { label: "Passport", value: "passport" },
  { label: "Other ID", value: "other_id" },
];

const SurvivorInform = ({ formik }: Props) => {
  const [districtList, setDistrictList] = React.useState<Array<Option>>([]);
  const { provinceData } = useGlobalStore();

  const { errorToast } = useToaster();

  const handleOnProvinceChange = (item: SingleValue<Option>) => {
    const { value = "" } = item || {};

    if (!value) {
      errorToast("Province value is empty");
      return;
    }
    formik.setFieldValue("permanent_province_address", value);

    const selectedDistrict =
      provinceData.find((province) => province.id === value)?.districts || [];

    setDistrictList(convertDistrictList(selectedDistrict));
  };

  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Section 2: Survivor Information
      </Typography>

      <div className="unfa-form-list">
        <InputField
          name="full_name"
          label="Fulll Name (optional)"
          placeholder="Survivor name"
          onChange={formik.handleChange}
          value={formik.values.full_name}
          className="bg-color"
        />
        <InputField
          name="contact_number"
          label="Contact Number (if safe)"
          placeholder="Phone Number"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.contact_number}
          className="bg-color"
        />

        <Select
          name="permanent_province_address"
          label="Permanent Address - Province"
          options={convertProvinceList(provinceData)}
          value={formik.values.permanent_province_address}
          onChange={handleOnProvinceChange}
          className="bg-color"
        />

        <Select
          name="permanent_district_address"
          label="Permanent Address - District"
          options={districtList}
          value={formik.values.permanent_district_address}
          onChange={(e) =>
            formik.setFieldValue("permanent_district_address", e?.value)
          }
          disabled={!formik.values.permanent_province_address}
          showTooltip={!formik.values.permanent_province_address}
          tooltipMsg="Select Province first"
          className="bg-color"
        />

        <InputField
          name="municipality_or_ward"
          label="Municipality/Ward"
          placeholder="Municipality and ward"
          onChange={formik.handleChange}
          value={formik.values.municipality_or_ward}
          className="bg-color"
        />

        <InputField
          name="temporary_address"
          label="Temporary Address"
          placeholder="Temporary address"
          onChange={formik.handleChange}
          value={formik.values.temporary_address}
          className="bg-color"
        />

        <Select
          name="citizenship_or_id_type"
          label="Citizenship / ID Type"
          options={citizenshipOrIdTypeOption}
          value={formik.values.permanent_district_address}
          onChange={(e) =>
            formik.setFieldValue("citizenship_or_id_type", e?.value)
          }
          className="bg-color"
        />

        <InputField
          name="citizenship_id_no"
          label="Citizenship / ID No"
          placeholder="ID number"
          onChange={formik.handleChange}
          value={formik.values.citizenship_id_no}
          className="bg-color"
        />

        <InputField
          name="dependent_children"
          label="Dependent Children (Number)"
          type="number"
          placeholder="Number"
          onChange={formik.handleChange}
          value={formik.values.dependent_children}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default SurvivorInform;
