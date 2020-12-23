import {Text} from "native-base";
import React from "react";
import {CenterWrapper} from "../wrappers/CenterWrapper";

export const ErrorFull: CompFC<{}> = (props) => {
  const {theme} = props;

  return (
    <CenterWrapper theme={theme}>
      <Text>Error!</Text>
    </CenterWrapper>
  );
};
