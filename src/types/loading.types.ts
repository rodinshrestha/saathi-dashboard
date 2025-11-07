import { IDLE, PENDING, REJECTED, RESOLVED } from "@/constant/loading.state";

export type LoadingType =
  | typeof IDLE
  | typeof PENDING
  | typeof RESOLVED
  | typeof REJECTED;
