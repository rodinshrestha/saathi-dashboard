export type PageType = {
  searchParams: SearchParamsType;
};

export type SearchParamsType = {
  [key: string]: string | string[] | undefined;
};
