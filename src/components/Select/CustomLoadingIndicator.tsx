import React from "react";

import { GroupBase, LoadingIndicatorProps } from "react-select";

const CustomLoadingIndicator = <
  Option,
  TMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: LoadingIndicatorProps<Option, TMulti, Group>
) => {
  return (
    <div className="react-select-loader-wrapper" {...props.innerProps}>
      <div className="react-select-custom-loader" />
    </div>
  );
};

export default CustomLoadingIndicator;
