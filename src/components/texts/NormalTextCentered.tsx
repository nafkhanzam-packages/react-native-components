import React from "react";
import {NormalText} from "./NormalText";
import {TextStyle} from "react-native";
import {CompFC} from "../../types";

const NormalTextCentered: CompFC<{style?: TextStyle}> = (props) => {
  return (
    <NormalText
      theme={props.theme}
      style={[
        {
          textAlign: "center",
          maxWidth: 320,
        },
        props.style,
      ]}>
      {props.children}
    </NormalText>
  );
};

export {NormalTextCentered};
