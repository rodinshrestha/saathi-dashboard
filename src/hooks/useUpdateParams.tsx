import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useUpdateParams = () => {
  const router = useRouter();
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

    // router.push(`?${params.toString()}`);
  };

  return { updateQueryParams };
};

export default useUpdateParams;
