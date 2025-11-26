import { usePathname, useSearchParams } from "next/navigation";

const useUpdateParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);

    const newURl = `${pathname}?${params.toString()}`;

    window.history.replaceState(
      { ...window.history.state, as: newURl, url: newURl },
      "",
      newURl
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateMultipleQueryParams = (newParams: any) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "") {
        params.delete(key); // optional: remove if empty
      } else {
        params.set(key, String(value));
      }
    });

    const newURL = `${pathname}?${params.toString()}`;

    window.history.replaceState(
      { ...window.history.state, as: newURL, url: newURL },
      "",
      newURL
    );
  };

  return { updateQueryParams, updateMultipleQueryParams };
};

export default useUpdateParams;
