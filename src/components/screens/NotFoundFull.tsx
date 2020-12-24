import {Text} from "native-base";
import React from "react";
import {CenterWrapper} from "../wrappers/CenterWrapper";
import {CompFC} from "../../types";

export const NotFoundFull: CompFC<{}> = (props) => {
  const {theme} = props;

  return (
    <CenterWrapper theme={theme}>
      <Text>Not Found!</Text>
    </CenterWrapper>
  );
};
