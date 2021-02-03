import RNDateTimePicker from "@react-native-community/datetimepicker";
import React from "react";

export type TimePickerType = {
  hour: number;
  minute: number;
};

export const toTimePickerType = (time: Date): TimePickerType => ({
  hour: time.getHours(),
  minute: time.getMinutes(),
});

export const fromTimePickerType = (time: TimePickerType): Date =>
  new Date(0, 0, 0, time.hour, time.minute);

export const TimePicker: React.FC<{
  time: TimePickerType;
  setTime: (time: TimePickerType) => void;
}> = (props) => {
  const {time, setTime} = props;

  const jsDate = new Date(0, 0, 0, time.hour, time.minute);

  return (
    <RNDateTimePicker
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
