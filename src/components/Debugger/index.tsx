"use client";
import React from "react";

import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSearchParams } from "next/navigation";

import {
  DEBUGGER,
  DEBUGGER_TABLE_PER_PAGE,
} from "@/constant/debugger.constant";
import { PER_PAGE } from "@/constant/pagination.constant";
import { useDebuggerStore } from "@/store/useDebuggerStore";
import { setCookie } from "@/utils/cookie";

import Toggle from "../ToggleThumb";
import Typography from "../Typography";

import { StyledDiv } from "./style";

type Props = {
  apiDebuggerCookieValue: boolean;
  tablePerPageCookieValue?: string;
};

const Debugger = ({
  apiDebuggerCookieValue,
  tablePerPageCookieValue = String(PER_PAGE),
}: Props) => {
  const [expand, setIsExpand] = React.useState(false);

  const { setApiDebugger, setTablePerPage, tablePerPage, apiDebugger } =
    useDebuggerStore();
  const params = useSearchParams();

  const isDebugger = params.get("debugger") === "true";

  React.useEffect(() => {
    setApiDebugger(apiDebuggerCookieValue);
    setTablePerPage(Number(tablePerPageCookieValue));
  }, [
    setApiDebugger,
    apiDebuggerCookieValue,
    tablePerPageCookieValue,
    setTablePerPage,
  ]);

  const handleOnChange = () => {
    const tempDegValue = apiDebugger;
    setCookie(DEBUGGER, String(!tempDegValue));
    setApiDebugger(!tempDegValue);
  };

  const handleOnTableChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setCookie(DEBUGGER_TABLE_PER_PAGE, String(value));
    setTablePerPage(value);
  };

  if (!isDebugger) {
    return null;
  }
  return (
    <StyledDiv>
      <div className="debugger-content">
        <Typography as="p">Debugger Mode</Typography>
        <div
          className="btn-action"
          onClick={() => setIsExpand((prev) => !prev)}
        >
          {expand ? <ChevronDown /> : <ChevronUp />}
        </div>
      </div>
      <div className={clsx("debugger-setting-wrapper", { expand })}>
        <div className="api-debugger-section">
          <Typography as="p">API Debugger Mode</Typography>
          <Toggle checked={apiDebugger} onChange={handleOnChange} />
        </div>
        <div className="api-debugger-section">
          <Typography as="p">Table List Options</Typography>
          <select onChange={handleOnTableChange} value={tablePerPage}>
            <option value={5}>5</option>
            <option value={15}>15</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Debugger;
