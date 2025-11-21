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

  return { updateQueryParams };
};

export default useUpdateParams;
