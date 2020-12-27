import React from "react";
import {DefaultButton, FunctionalDefaultButtonProps} from "./DefaultButton";
import {CompFC} from "../../types";

export const SecondaryButton: CompFC<FunctionalDefaultButtonProps> = (props) => {
  const {theme} = props;
  const {colors} = theme;

  return (
    <DefaultButton
      theme={theme}
      fProps={props}
      sProps={{
        backgroundColor: colors.secondary,
        disabledBackgroundColor: colors.lighterGrey,
        textColor: colors.white,
        disabledTextColor: colors.white,
      }}>
      {props.children}
    </DefaultButton>
  );
};
