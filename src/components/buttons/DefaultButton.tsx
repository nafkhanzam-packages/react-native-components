import {Icon, Text, View} from "native-base";
import React from "react";
import {GestureResponderEvent, TextStyle, TouchableOpacity} from "react-native";
import {PrimarySpinner} from "../spinners/PrimarySpinner";
import {CenterWrapper} from "../wrappers/CenterWrapper";
import {CompFC} from "../../types";

export type FunctionalDefaultButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: {
    name: string;
    iconStyle:
      | "AntDesign"
      | "Entypo"
      | "EvilIcons"
      | "Feather"
      | "FontAwesome"
      | "FontAwesome5"
      | "Foundation"
      | "Ionicons"
      | "MaterialCommunityIcons"
      | "MaterialIcons"
      | "Octicons"
      | "SimpleLineIcons"
      | "Zocial";
  };
};

type Color = string;

export type StyleDefaultButtonProps = {
  backgroundColor?: Color;
  disabledBackgroundColor?: Color;
  borderColor?: Color;
  textColor?: Color;
  disabledTextColor?: Color;
  loadingTextColor?: Color;
  shadowColor?: Color;
  textDecorationLine?: TextStyle["textDecorationLine"];
};

export const DefaultButton: CompFC<{
  fProps: FunctionalDefaultButtonProps;
  sProps: StyleDefaultButtonProps;
}> = (props) => {
  const {fProps, sProps, theme} = props;
  const {disabled, loading} = fProps;

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={{
        backgroundColor: disabled ? sProps.disabledBackgroundColor : sProps.backgroundColor,
        borderColor: sProps.borderColor,
        borderRadius: 5,
        elevation: 2,
        height: 48,
        justifyContent: "center",
        marginTop: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        shadowColor: sProps.shadowColor,
        alignItems: "center",
        shadowOffset: {
          height: 6,
          width: 3,
        },
        shadowOpacity: 0.16,
        shadowRadius: 10,
      }}
      onPress={fProps.onPress}>
      <CenterWrapper theme={theme}>
        <View style={{flexDirection: "row"}}>
          {fProps.loading ? (
            <PrimarySpinner
              theme={theme}
              color={sProps.loadingTextColor ?? sProps.disabledTextColor}
            />
          ) : (
            <>
              {fProps.icon && (
                <Icon
                  name={fProps.icon.name}
                  type={fProps.icon.iconStyle}
                  style={{marginRight: 8, color: "white", fontSize: 20}}
                />
              )}
              <Text
                style={{
                  color: disabled ? sProps.disabledTextColor : sProps.textColor,
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                  textDecorationLine: sProps.textDecorationLine,
                }}>
                {props.children}
              </Text>
            </>
          )}
        </View>
      </CenterWrapper>
    </TouchableOpacity>
  );
};
