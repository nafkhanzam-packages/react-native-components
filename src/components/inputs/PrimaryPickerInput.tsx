import {Picker, Text, View} from "native-base";
import React from "react";
import BlankSpacer from "react-native-blank-spacer";

export const PrimaryPickerInput = <T,>(
  props: CompProps<{
    title?: string;
    value: T;
    setValue: (v: T) => void;
    values: {label: string; value: T}[];
  }>,
) => {
  const {
    theme: {colors},
  } = props;

  return (
    <View>
      {props.title && (
        <>
          <Text>{props.title}</Text>
          <BlankSpacer height={4} />
        </>
      )}

      <View
        style={{
          borderColor: colors.darkGrey,
          borderWidth: 1,
          borderRadius: 5,
        }}>
        <Picker mode="dialog" selectedValue={props.value} onValueChange={props.setValue}>
          {props.values.map((v, i) => (
            <Picker.Item key={i} label={v.label} value={v.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
};
