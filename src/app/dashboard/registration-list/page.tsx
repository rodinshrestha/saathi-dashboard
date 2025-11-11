import React, { Suspense } from "react";

import RegistrationList from "@/modules/registration-list";

const RegistrationListPage = () => {
  return (
    <Suspense>
      <RegistrationList />
    </Suspense>
  );
};

export default RegistrationListPage;
