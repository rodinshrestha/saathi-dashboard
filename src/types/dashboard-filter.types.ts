import { SelectValueTypes } from "./select.types";

export type DashboardFilterType = {
  start_date: string | Date | null;
  end_date: string | Date | null;
  province_id: SelectValueTypes;
  program_id: SelectValueTypes;
  project_id: SelectValueTypes;
};
