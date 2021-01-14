import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";

export type TimePickerType = {
  hour: number;
  minute: number;
};

export const TimePicker: React.FC<{
  time: TimePickerType;
  setTime: (time: TimePickerType) => void;
}> = (props) => {
  const {time, setTime} = props;

  const jsDate = new Date(0, 0, 0, time.hour, time.minute);

  return (
    <DateTimePicker
      value={jsDate}
      mode="date"
      is24Hour
      display="default"
      onChange={(_, selectedDate) => {
        const newDate = selectedDate || jsDate;
        setTime({
          hour: newDate.getHours(),
          minute: newDate.getMinutes(),
        });
      }}
    />
  );
};
