import {Text, View} from "native-base";
import React from "react";
import {TextInput} from "react-native";
import BlankSpacer from "react-native-blank-spacer";

export const PrimaryTextInput: CompFC<{
  title?: string;
  value?: string;
  editable?: boolean;
  multiline?: boolean;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
}> = (props) => {
  const {
    title,
    value,
    onChangeText,
    multiline,
    theme: {colors},
  } = props;

  return (
    <View>
      {title && (
        <>
          <Text>{title}</Text>
          <BlankSpacer height={4} />
        </>
      )}
      <TextInput
        style={{
          borderColor: colors.darkGrey,
          borderWidth: 1,
          borderRadius: 5,
          paddingVertical: 6,
          paddingHorizontal: 16,
          color: colors.black,
        }}
        multiline={multiline}
        placeholder={title}
        value={value}
        onChangeText={onChangeText}
        editable={props.editable ?? true}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};
