import { Suspense } from "react";

import ApprovalsModule from "@/modules/approvals";

const Approvals = () => {
  return (
    <Suspense>
      <ApprovalsModule />
    </Suspense>
  );
};

export default Approvals;
