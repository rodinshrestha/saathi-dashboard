export const getNavUrlPath = (slug: string) => {
  if (slug === "dashboard") {
    return "/dashboard";
  }
  return `/dashboard/${slug}`;
};
