import React from "react";
import LoadingSpinnerOverlay from "react-native-loading-spinner-overlay";
import {CompFC} from "../../types";

export const LoadingOverlay: CompFC<{visible: boolean; text?: string}> = (props) => {
  return (
    <LoadingSpinnerOverlay
      visible={props.visible}
      textContent={props.text}
      textStyle={{color: props.theme.colors.offWhite}}
      cancelable={false}
      animation="fade"
    />
  );
};
