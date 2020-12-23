import React from "react";
import {DefaultButton, FunctionalDefaultButtonProps} from "./DefaultButton";

export const LinkButton: CompFC<FunctionalDefaultButtonProps> = (props) => {
  const {theme} = props;
  const {colors} = theme;

  return (
    <DefaultButton
      theme={theme}
      fProps={props}
      sProps={{
        backgroundColor: colors.transparent,
        disabledBackgroundColor: colors.transparent,
        borderColor: colors.transparent,
        textColor: colors.primary,
        disabledTextColor: colors.darkGrey,
        textDecorationLine: "underline",
      }}>
      {props.children}
    </DefaultButton>
  );
};
