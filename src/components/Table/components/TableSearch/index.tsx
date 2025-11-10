import React from "react";

import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { StyledDiv } from "./style";

type Props = {
  placeHolder?: string;
};

const TableSearch = ({ placeHolder = "Search by anything" }: Props) => {
  const [searchText, setSearchText] = React.useState("");
  const router = useRouter();
  const pathname = usePathname();

  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);

    const params = new URLSearchParams();

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      params.set("search", searchText.toString());
      router.replace(`${pathname}?${params.toString()}`);

      // API call here
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
