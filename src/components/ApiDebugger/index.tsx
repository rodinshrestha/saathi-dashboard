"use client";
import { useSearchParams } from "next/navigation";
import { JSONTree } from "react-json-tree";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ApiDebugger({ data }: any) {
  const params = useSearchParams();

  const isDebugger = params.get("debugger");

  if (!data.length || isDebugger !== "true") {
    return null;
  }

  return <JSONTree data={data} theme="monokai" invertTheme={false} />;
}
