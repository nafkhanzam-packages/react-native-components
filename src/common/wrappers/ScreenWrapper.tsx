import {useIsFocused} from "@react-navigation/native";
import React from "react";
import {ScrollView, StatusBar, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const FocusAwareStatusBar: React.FC<StatusBar["props"]> = (props) => {
  try {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  } catch (error) {
    return null;
  }
};

export const ScreenWrapper: React.FC<{
  statusBarColor?: string;
  statusBarContentStyle?: "dark-content" | "light-content" | "default";
  noScroll?: boolean;
  bgColor?: string;
}> = (props) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: props.bgColor,
        flex: 1,
      }}>
      <FocusAwareStatusBar
        barStyle={props.statusBarContentStyle}
        backgroundColor={props.statusBarColor}
        translucent
      />
      <View style={{flex: 1, position: "relative"}}>
        {props.noScroll ? (
          props.children
        ) : (
          <ScrollView keyboardShouldPersistTaps>{props.children}</ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};