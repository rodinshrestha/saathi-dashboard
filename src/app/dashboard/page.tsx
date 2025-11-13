import { Suspense } from "react";

import Dasbhoard from "@/modules/dashboard";

const DashboardPage = () => {
  return (
    <Suspense>
      <Dasbhoard />
    </Suspense>
  );
};

export default DashboardPage;
