import React from "react";
import {DefaultButton, FunctionalDefaultButtonProps} from "./DefaultButton";

export const SecondaryButton: CompFC<FunctionalDefaultButtonProps> = (props) => {
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
        textColor: colors.secondary,
        disabledTextColor: colors.lighterGrey,
      }}>
      {props.children}
    </DefaultButton>
  );
};
