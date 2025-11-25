"use client";
import { useSearchParams } from "next/navigation";
import { JSONTree } from "react-json-tree";

type Props = {
  data: unknown;
};

export default function ApiDebugger({ data }: Props) {
  const params = useSearchParams();

  const isDebugger = params.get("debugger");

  if (!data) {
    return null;
  }

  return <JSONTree data={data} theme="monokai" invertTheme={false} />;
}
