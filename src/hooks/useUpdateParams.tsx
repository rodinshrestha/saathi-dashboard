import { useRouter, useSearchParams } from "next/navigation";

const useUpdateParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);

    router.push(`?${params.toString()}`);
  };

  return { updateQueryParams };
};

export default useUpdateParams;
