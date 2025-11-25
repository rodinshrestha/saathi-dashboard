"use client";
import { JSONTree } from "react-json-tree";

import { useDebuggerStore } from "@/store/useDebuggerStore";

type Props = {
  data: unknown;
};

export default function ApiDebugger({ data }: Props) {
  const { apiDebugger } = useDebuggerStore();

  if (!apiDebugger) {
    return null;
  }

  return <JSONTree data={data} theme="monokai" invertTheme={false} />;
}
