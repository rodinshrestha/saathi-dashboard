import { useRouter, useSearchParams, usePathname } from "next/navigation";

export function usePagination() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());

    // Shallow push — won't reload data or reset scroll
    router.replace(`${pathname}?${params.toString()}`);
  };

  const setPerPage = (perPage: number) => {
    const page = 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    params.set("per_page", perPage.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  return { setPage, setPerPage };
}
