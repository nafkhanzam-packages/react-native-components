import React from "react";
import {Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback} from "react-native";

//! Buggy on scrolling, use with care!
export const TouchKeyboardDismiss: CompFC<{}> = (props) => (
  <KeyboardAvoidingView style={{flex: 1}} behavior="height">
    <TouchableWithoutFeedback style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
      {props.children}
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);
