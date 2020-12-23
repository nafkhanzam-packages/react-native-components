import React from "react";
import {DefaultButton, FunctionalDefaultButtonProps} from "./DefaultButton";

export const DangerButton: CompFC<FunctionalDefaultButtonProps> = (props) => {
  const {theme} = props;
  const {colors} = theme;

  return (
    <DefaultButton
      theme={theme}
      fProps={props}
      sProps={{
        backgroundColor: colors.red,
        disabledBackgroundColor: colors.lightGrey,
        borderColor: colors.primary,
        textColor: colors.white,
        disabledTextColor: colors.lighterGrey,
      }}>
      {props.children}
    </DefaultButton>
  );
};
