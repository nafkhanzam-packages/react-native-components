import React from "react";
import {DefaultButton, FunctionalDefaultButtonProps} from "./DefaultButton";

export const PrimaryButton: CompFC<FunctionalDefaultButtonProps> = (props) => {
  const {theme} = props;
  const {colors} = theme;

  return (
    <DefaultButton
      theme={theme}
      fProps={props}
      sProps={{
        backgroundColor: colors.primary,
        disabledBackgroundColor: colors.lighterGrey,
        textColor: colors.white,
        disabledTextColor: colors.white,
      }}>
      {props.children}
    </DefaultButton>
  );
};
