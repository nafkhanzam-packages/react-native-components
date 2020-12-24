import {Text} from "native-base";
import React from "react";
import {CenterWrapper} from "../wrappers/CenterWrapper";
import {CompFC} from "../../types";

export const ErrorFull: CompFC<{}> = (props) => {
  const {theme} = props;

  return (
    <CenterWrapper theme={theme}>
      <Text>Error!</Text>
    </CenterWrapper>
  );
};
