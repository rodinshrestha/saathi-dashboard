export const getProgramUrl = (programId: number, userId: number) => {
  const routeObj = new Map();

  routeObj.set(1, `/data-entry/prevention-program-form/${userId}`);
  routeObj.set(2, `/data-entry/prosecution-program-form/${userId}`);
  routeObj.set(
    5,
    `/data-entry/response-program-form/saathi-shelter-program-form/${userId}`
  );
  routeObj.set(
    6,
    `/data-entry/response-program-form/unfpa-shelter-program-form/${userId}`
  );
  routeObj.set(
    7,
    `/data-entry/protection-program-form/child-program-form/${userId}`
  );
  routeObj.set(
    8,
    `/data-entry/protection-program-form/youth-program-form/${userId}`
  );
  routeObj.set(
    9,
    `/data-entry/protection-program-form/child-intake-program-form/${userId}`
  );
  routeObj.set(
    10,
    `/data-entry/protection-program-form/family-reintegration-program-form/${userId}`
  );

  const route = routeObj.get(programId);

  if (!route) {
    throw new Error("Route id not found");
  }

  return route;
};
