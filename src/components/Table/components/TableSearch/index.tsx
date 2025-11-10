import React from "react";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { StyledDiv } from "./style";

type Props = {
  placeHolder?: string;
};

const TableSearch = ({ placeHolder = "Search by anything" }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const searchterm = searchParams.get("search");

  const [searchText, setSearchText] = React.useState(searchterm || "");

  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);

    const params = new URLSearchParams();
    params.set("search", value.toString());

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      router.replace(`${pathname}?${params.toString()}`);
    }, 500);
  };

  return (
    <StyledDiv>
      <Search size={16} className="table-search-icon" />
      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder={placeHolder}
      />
    </StyledDiv>
  );
};

export default TableSearch;
