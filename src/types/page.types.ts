export type PagePropsType = {
  searchParams: Promise<SearchParamsType>;
  params: Promise<{ [key: string]: string }>;
};

export type SearchParamsType = {
  [key: string]: string | string[] | undefined;
};
