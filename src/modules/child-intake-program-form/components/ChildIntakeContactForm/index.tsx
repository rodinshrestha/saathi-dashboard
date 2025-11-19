import React from "react";

import { FormikProps } from "formik";
import { SingleValue } from "react-select";

import InputField from "@/components/InputField";
import { Option, Select } from "@/components/Select";
import Typography from "@/components/Typography";
import { BOOLEAN_OPTIONS } from "@/constant/boolean-select-options.constants";
import useToaster from "@/hooks/useToaster";
import { convertDistrictList } from "@/modules/projects/utils/convert-district-list";
import { convertProvinceList } from "@/modules/projects/utils/convert-province-list";
import { useGlobalStore } from "@/store/useGlobalConfigStore";

import { ChildIntakeProgramFormType } from "../../child-intake-program-form.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<ChildIntakeProgramFormType>;
};

const ChildIntakeContactForm = ({ formik }: Props) => {
  const [permanentDistrictList, setPermanentDistrictList] = React.useState<
    Array<Option>
  >([]);
  const [temporaryDistrictList, setTemporaryDistrictList] = React.useState<
    Array<Option>
  >([]);

  const { provinceData } = useGlobalStore();
  const { errorToast } = useToaster();

  const handlePermanentProvinceChange = (item: SingleValue<Option>) => {
    const { value = "" } = item || {};

    if (!value) {
      errorToast("Province value is empty");
      return;
    }
    formik.setFieldValue("permanent_address_province", value);

    const selectedDistrict =
      provinceData.find((province) => province.id === value)?.districts || [];

    setPermanentDistrictList(convertDistrictList(selectedDistrict));
  };

  const handleTemporaryProvinceChange = (item: SingleValue<Option>) => {
    const { value = "" } = item || {};

    if (!value) {
      errorToast("Province value is empty");
      return;
    }
    formik.setFieldValue("temporary_address_province", value);

    const selectedDistrict =
      provinceData.find((province) => province.id === value)?.districts || [];

    setTemporaryDistrictList(convertDistrictList(selectedDistrict));
  };

  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 2: Contact & Address Information
      </Typography>
      <div className="child-intake-contact-form-wrapper">
        <div className="child-intake-contact-sub-wrapper">
          <Typography as="p" className="form-sub-title">
            Permanent Address
          </Typography>

          <div className="child-intake-contact-sub-form-list">
            <Select
              label="Province"
              placeholder="Select province"
              options={convertProvinceList(provinceData)}
              value={formik.values.permanent_address_province}
              onChange={handlePermanentProvinceChange}
              className="bg-color"
            />
            <Select
              label="District"
              placeholder="Select district"
              options={permanentDistrictList}
              value={formik.values.premanent_address_district}
              onChange={(e) =>
                formik.setFieldValue("premanent_address_district", e?.value)
              }
              disabled={!formik.values.permanent_address_province}
              showTooltip={!formik.values.permanent_address_province}
              tooltipMsg="First select the province"
              className="bg-color"
            />

            <InputField
              name="permanent_address_municipality"
              value={formik.values.permanent_address_municipality}
              onChange={formik.handleChange}
              label="Municipality"
              placeholder="Enter municipality"
              className="bg-color"
            />

            <InputField
              name="permanent_address_ward"
              value={formik.values.permanent_address_ward}
              onChange={formik.handleChange}
              label="Ward"
              placeholder="Enter ward"
              className="bg-color"
            />

            <InputField
              name="permanant_address_tole"
              value={formik.values.permanant_address_tole}
              onChange={formik.handleChange}
              label="Told/Village"
              placeholder="Enter told"
              className="bg-color"
            />
          </div>
        </div>
        <div className="child-intake-contact-sub-wrapper">
          <Typography as="p" className="form-sub-title">
            Temporary Address
          </Typography>

          <div className="child-intake-contact-sub-form-list">
            <Select
              label="Province"
              placeholder="Select province"
              options={convertProvinceList(provinceData)}
              value={formik.values.temporary_address_province}
              onChange={handleTemporaryProvinceChange}
              className="bg-color"
            />
            <Select
              label="District"
              placeholder="Select district"
              options={temporaryDistrictList}
              value={formik.values.temporary_address_district}
              onChange={(e) =>
                formik.setFieldValue("temporary_address_district", e?.value)
              }
              disabled={!formik.values.temporary_address_province}
              showTooltip={!formik.values.temporary_address_province}
              tooltipMsg="First select the province"
              className="bg-color"
            />

            <InputField
              name="temporary_address_municipality"
              value={formik.values.temporary_address_municipality}
              onChange={formik.handleChange}
              label="Municipality"
              placeholder="Enter municipality"
              className="bg-color"
            />

            <InputField
              name="temporary_address_ward"
              value={formik.values.temporary_address_ward}
              onChange={formik.handleChange}
              label="Ward"
              placeholder="Enter ward"
              className="bg-color"
            />

            <InputField
              name="temporary_address_tole"
              value={formik.values.temporary_address_tole}
              onChange={formik.handleChange}
              label="Told/Village"
              placeholder="Enter told"
              className="bg-color"
            />
          </div>
        </div>
        <div className="child-intake-contact-sub-wrapper">
          <Typography as="p" className="form-sub-title">
            Emergency Contact Person
          </Typography>
          <div className="child-intake-contact-sub-form-list">
            <InputField
              name="emergency_contact_person_name"
              value={formik.values.emergency_contact_person_name}
              onChange={formik.handleChange}
              label="Name"
              placeholder="Enter contact person name"
              className="bg-color"
            />

            <InputField
              name="emergency_contact_person_relationship"
              value={formik.values.emergency_contact_person_relationship}
              onChange={formik.handleChange}
              label="Relationship"
              placeholder="e.g Mother, Uncle"
              className="bg-color"
            />

            <InputField
              name="emergency_contact_person_phone"
              value={formik.values.emergency_contact_person_phone}
              onChange={formik.handleChange}
              label="Phone"
              placeholder="Enter phone number"
              className="bg-color"
            />

            <InputField
              name="emergency_contact_person_address"
              value={formik.values.emergency_contact_person_address}
              onChange={formik.handleChange}
              label="Address"
              placeholder="Enter address"
              className="bg-color"
            />
          </div>
        </div>

        <Select
          options={BOOLEAN_OPTIONS}
          placeholder="Select option"
          label="Has the family permanently migrated?"
          onChange={(item) =>
            formik.setFieldValue("has_family_permanently_migrated", item?.value)
          }
          value={formik.values.has_family_permanently_migrated}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default ChildIntakeContactForm;
