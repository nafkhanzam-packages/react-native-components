import React from "react";
import {Picker as RNPicker} from "@react-native-picker/picker";

export const Picker: React.FC<{
  title?: string;
  selectedIndex: number;
  setSelectedIndex: (i: number) => void;
  labels: string[];
  mode?: "dialog" | "dropdown";
}> = (props) => {
  return (
    <RNPicker
      mode={props.mode}
      selectedValue={props.selectedIndex}
      onValueChange={(_, index) => props.setSelectedIndex(index)}>
      {props.labels.map((v, i) => (
        <RNPicker.Item key={i} label={v} value={v} />
      ))}
    </RNPicker>
  );
};
