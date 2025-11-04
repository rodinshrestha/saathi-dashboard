import React from "react";

import { Tooltip as ReactTooltip } from "react-tooltip";

import Portal from "../Portal";

type Props = {
  id: string;
  content: string;
};

const Tooltip = ({ id, content }: Props) => {
  return (
    <Portal>
      <ReactTooltip id={id} place="right-end" content={content} />
    </Portal>
  );
};

export default Tooltip;
