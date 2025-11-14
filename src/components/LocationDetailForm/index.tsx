import React from "react";

import { FormikProps } from "formik";
import { SingleValue } from "react-select";

import InputField from "@/components/InputField";
import { Option, Select } from "@/components/Select";
import Typography from "@/components/Typography";
import useToaster from "@/hooks/useToaster";
import { PreventionProgramFormType } from "@/modules/prevention-program-form/prevention-program.types";
import { convertDistrictList } from "@/modules/projects/utils/convert-district-list";
import { convertProvinceList } from "@/modules/projects/utils/convert-province-list";
import { useGlobalStore } from "@/store/useGlobalConfigStore";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<PreventionProgramFormType>;
};

const LocationDetailForm = ({ formik }: Props) => {
  const [districtList, setDistrictList] = React.useState<Array<Option>>([]);

  const { provinceData } = useGlobalStore();
  const { errorToast } = useToaster();

  const handleProvinceChange = (item: SingleValue<Option>) => {
    const { value = "" } = item || {};

    if (!value) {
      errorToast("Province value is empty");
      return;
    }
    formik.setFieldValue("province_id", value);

    const selectedDistrict =
      provinceData.find((province) => province.id === value)?.districts || [];

    setDistrictList(convertDistrictList(selectedDistrict));
  };

  return (
    <StyledDiv className="location-details-form-wrapper">
      <Typography as="p" className="form-title">
        Location Details
      </Typography>

      <div className="location-details-form-list">
        <Select
          label="Province"
          options={convertProvinceList(provinceData)}
          value={formik.values.province_id}
          onChange={handleProvinceChange}
          className="bg-color"
        />

        <Select
          label="District"
          options={districtList}
          value={formik.values.district_id}
          onChange={(e) => formik.setFieldValue("district_id", e?.value)}
          className="bg-color"
        />

        <InputField
          name="address"
          label="Address"
          placeholder="Enter address"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.address}
        />

        <InputField
          name="ward"
          label="Ward"
          placeholder="Enter ward number"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.ward}
        />
        <InputField
          name="event_venue"
          label="Event Venue"
          placeholder="Enter venue name"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.event_venue}
        />
      </div>
    </StyledDiv>
  );
};

export default LocationDetailForm;
