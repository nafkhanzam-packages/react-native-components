import React from "react";
import Spinner from "react-native-spinkit";
import {CompFC} from "../../types";

export const PrimarySpinner: CompFC<{color?: string}> = (props) => {
  const {
    theme: {colors},
  } = props;

  return <Spinner size={28} type="ThreeBounce" color={colors.primary} />;
};
