import RNDateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import {DatePickerType} from "./DatePicker";
import {TimePickerType} from "./TimePicker";

export type DateTimePickerType = DatePickerType & TimePickerType;

export const toDateTimePickerType = (dateTime: Date): DateTimePickerType => ({
  year: dateTime.getFullYear(),
  month: dateTime.getMonth(),
  date: dateTime.getDate(),
  hour: dateTime.getHours(),
  minute: dateTime.getMinutes(),
});

export const DateTimePicker: React.FC<{
  dateTime: DateTimePickerType;
  setDateTime: (dateTime: DateTimePickerType) => void;
}> = (props) => {
  const {dateTime, setDateTime} = props;

  const jsDate = new Date(
    dateTime.year,
    dateTime.month,
    dateTime.date,
    dateTime.hour,
    dateTime.minute,
  );

  return (
    <RNDateTimePicker
      value={jsDate}
      mode="date"
      is24Hour
      display="default"
      onChange={(_, selectedDate) => {
        const newDate = selectedDate || jsDate;
        setDateTime({
          year: newDate.getFullYear(),
          month: newDate.getMonth(),
          date: newDate.getDate(),
          hour: newDate.getHours(),
          minute: newDate.getMinutes(),
        });
      }}
    />
  );
};
