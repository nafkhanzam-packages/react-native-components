import React from "react";
import {DefaultButton, FunctionalDefaultButtonProps} from "./DefaultButton";
import {CompFC} from "../../types";

export const OutlinedSecondaryButton: CompFC<FunctionalDefaultButtonProps> = (props) => {
  const {theme} = props;
  const {colors} = theme;

  return (
    <DefaultButton
      theme={theme}
      fProps={props}
      sProps={{
        backgroundColor: colors.offWhite,
        disabledBackgroundColor: colors.offWhite,
        borderColor: colors.secondary,
        disabledBorderColor: colors.lighterGrey,
        textColor: colors.secondary,
        disabledTextColor: colors.lighterGrey,
      }}>
      {props.children}
    </DefaultButton>
  );
};
