"use client";
import React from "react";

import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { DEBUGGER } from "@/constant/debugger.constant";
import { useDebuggerStore } from "@/store/useDebuggerStore";
import { setCookie } from "@/utils/cookie";

import Toggle from "../ToggleThumb";
import Typography from "../Typography";

import { StyledDiv } from "./style";

type Props = {
  apiDebugger: boolean;
};

const Debugger = ({ apiDebugger }: Props) => {
  const [expand, setIsExpand] = React.useState(false);
  const [isApiDebuggerModeOn, setIsApiDebuggerModeOn] =
    React.useState(apiDebugger);

  const { setApiDebugger } = useDebuggerStore();
  const params = useSearchParams();

  const isDebugger = params.get("debugger");

  React.useEffect(() => {
    setApiDebugger(apiDebugger);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setApiDebugger]);

  const handleOnChange = () => {
    const tempDegValue = isApiDebuggerModeOn;
    setCookie(DEBUGGER, String(!tempDegValue));
    setApiDebugger(!tempDegValue);
    setIsApiDebuggerModeOn(!tempDegValue);
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
          <Toggle checked={isApiDebuggerModeOn} onChange={handleOnChange} />
        </div>
      </div>
    </StyledDiv>
  );
};

export default Debugger;
