import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useUpdateParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const shallowUpdateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);

    const newURl = `${pathname}?${params.toString()}`;

    window.history.pushState(
      { ...window.history.state, as: newURl, url: newURl },
      "",
      newURl
    );
  };

  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);

    const newURL = `${pathname}?${params.toString()}`;

    router.replace(newURL);
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
    router.replace(newURL);
  };

  const clearAllQueryParams = () => {
    const newUrl = pathname; // no ?query here
    router.replace(newUrl);
  };

  return {
    shallowUpdateQueryParams,
    updateMultipleQueryParams,
    clearAllQueryParams,
    updateQueryParams,
  };
};

export default useUpdateParams;
