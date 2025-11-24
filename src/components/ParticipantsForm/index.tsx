import { FormikProps } from "formik";
import { Plus, Trash } from "lucide-react";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import Typography from "@/components/Typography";
import { AGE_RANGE_OPTIONS } from "@/constant/age-range-options.constants";
import { DISABILITY_OPTIONS } from "@/constant/disability-options.constant";
import { GENDER_OPTION_LIST } from "@/constant/gender-options.constants";
import { PreventionProgramFormType } from "@/modules/prevention-program-form/prevention-program.types";
import { useGlobalStore } from "@/store/useGlobalConfigStore";
import { getEthnicityOptionList } from "@/utils/get-ethnicity-option-list";
import { getOrganizationOptionList } from "@/utils/get-organization-option-list";

import { StyledDiv } from "./style";
type Props = {
  formik: FormikProps<PreventionProgramFormType>;
};

const ParticipantsForm = ({ formik }: Props) => {
  const { organizationData, ethnicityData } = useGlobalStore();

  const handleAddParticipants = () => {
    formik.setFieldValue("participants", [
      ...formik.values.participants,
      {
        name: "",
        organization_id: "",
        position: "",
        phone: "",
        email: "",
        age_range: "",
        sex: "",
        ethnicity_id: "",
        disability_type: "",
      },
    ]);
  };

  const handleRemoveParticipants = (index: number) => {
    const updated = [...formik.values.participants];
    updated.splice(index, 1);
    formik.setFieldValue("participants", updated);
  };

  return (
    <StyledDiv className="participant-form-wrapper">
      <div className="participant-title-wrapper">
        <Typography as="p" className="form-title">
          Participant Details
        </Typography>
        <Button variant="outline" onClick={handleAddParticipants}>
          <Plus size={18} />
          Add Participant
        </Button>
      </div>

      <div className="participants-header-wrapper">
        <Typography as="p" className="participants-header-key">
          No.
        </Typography>
        <Typography as="p" className="participants-header-key flex-2">
          Participant`s Name
        </Typography>
        <Typography as="p" className="participants-header-key flex-2">
          Organization
        </Typography>
        <Typography as="p" className="participants-header-key flex-2">
          Position
        </Typography>
        <Typography as="p" className="participants-header-key flex-2">
          Phone Number
        </Typography>
        <Typography as="p" className="participants-header-key flex-2">
          Email
        </Typography>
        <Typography as="p" className="participants-header-key flex-2">
          Age Range
        </Typography>
        <Typography as="p" className="participants-header-key flex-2">
          Sex
        </Typography>
        <Typography as="p" className="participants-header-key flex-2">
          Ethnicity
        </Typography>
        <Typography as="p" className="participants-header-key flex-2">
          Disability Type
        </Typography>
        <Typography as="p" className="participants-header-key">
          Action
        </Typography>
      </div>

      <div className="participants-table-wrapper">
        {formik.values.participants.map((x, i) => {
          return (
            <div key={i} className="participant-table-data">
              <Typography as="p" className="participant-table-index">
                {i + 1}
              </Typography>
              <InputField
                name={`participants[${i}].name`}
                placeholder="Name"
                value={x.name}
                onChange={formik.handleChange}
                className="bg-color flex-2"
              />
              <Select
                placeholder="Select org.."
                options={getOrganizationOptionList(organizationData)}
                value={x.organization_id}
                onChange={(e) =>
                  formik.setFieldValue(
                    `participants[${i}].organization_id`,
                    e?.value
                  )
                }
                className="bg-color flex-2"
              />
              <InputField
                name={`participants[${i}].position`}
                placeholder="Position"
                value={x.position}
                onChange={formik.handleChange}
                className="bg-color flex-2"
              />
              <InputField
                name={`participants[${i}].phone`}
                placeholder="Name"
                value={x.phone}
                onChange={formik.handleChange}
                className="bg-color flex-2"
              />
              <InputField
                name={`participants[${i}].email`}
                placeholder="Email"
                value={x.email}
                onChange={formik.handleChange}
                className="bg-color flex-2"
              />
              <Select
                placeholder="Age"
                options={AGE_RANGE_OPTIONS}
                value={x.age_range}
                onChange={(e) =>
                  formik.setFieldValue(`participants[${i}].age_range`, e?.value)
                }
                className="bg-color flex-2"
              />
              <Select
                placeholder="Sex"
                options={GENDER_OPTION_LIST}
                value={x.sex}
                onChange={(e) =>
                  formik.setFieldValue(`participants[${i}].sex`, e?.value)
                }
                className="bg-color flex-2"
              />
              <Select
                placeholder="Select"
                options={getEthnicityOptionList(ethnicityData)}
                value={x.ethnicity_id}
                onChange={(e) =>
                  formik.setFieldValue(
                    `participants[${i}].ethnicity_id`,
                    e?.value
                  )
                }
                className="bg-color flex-2"
              />
              <Select
                placeholder="disability_type"
                options={DISABILITY_OPTIONS}
                value={x.disability_type}
                onChange={(e) =>
                  formik.setFieldValue(
                    `participants[${i}].disability_type`,
                    e?.value
                  )
                }
                className="bg-color flex-2"
              />
              <div
                className="participant-action-wrapper"
                onClick={() => handleRemoveParticipants(i)}
              >
                {i !== 0 && <Trash size={18} />}
              </div>
            </div>
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default ParticipantsForm;
