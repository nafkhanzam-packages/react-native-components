import {formats} from "@nafkhanzam/react-architecture";
import DateTimePicker from "@react-native-community/datetimepicker";
import {Icon, View} from "native-base";
import React, {useState} from "react";
import {TouchableWithoutFeedback} from "react-native";
import {PrimaryTextInput} from "./PrimaryTextInput";
import {CompFC} from "../../types";

export const PrimaryDateInput: CompFC<{
  title?: string;
  date: Date;
  setDate: (date: Date) => void;
}> = (props) => {
  const [visible, setVisible] = useState(false);
  const {date, setDate, theme} = props;
  const {colors} = theme;

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View>
          <PrimaryTextInput
            theme={theme}
            editable={false}
            title={props.title}
            value={formats.toDateString(date)}
          />
          <Icon
            name="calendar-sharp"
            type="Ionicons"
            style={{
              position: "absolute",
              bottom: 8,
              right: 12,
              color: colors.darkGrey,
              fontSize: 24,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      {visible && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={(_, selectedDate) => {
            setVisible(false);
            setDate(selectedDate || date);
          }}
        />
      )}
    </>
  );
};
