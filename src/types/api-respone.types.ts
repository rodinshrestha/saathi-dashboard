type MetaLinkType = {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
};

export type MetaType = {
  current_page: number;
  from: number;
  links: Array<MetaLinkType>;
  path: string;
  per_page: number;
  to: number;
  total: number;
  last_page: number;
};
