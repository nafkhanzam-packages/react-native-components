import React from "react";
import {PrimarySpinner} from "../spinners/PrimarySpinner";
import {CenterWrapper} from "../wrappers/CenterWrapper";

export const LoadingFull: CompFC<{}> = (props) => {
  const {theme} = props;

  return (
    <CenterWrapper theme={theme}>
      <PrimarySpinner theme={theme} />
    </CenterWrapper>
  );
};
