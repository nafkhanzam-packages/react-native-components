import RNDateTimePicker from "@react-native-community/datetimepicker";
import React from "react";

export type DatePickerType = {
  date: number;
  month: number;
  year: number;
};

export const toDatePickerType = (date: Date): DatePickerType => ({
  year: date.getFullYear(),
  month: date.getMonth(),
  date: date.getDate(),
});

export const DatePicker: React.FC<{
  date: DatePickerType;
  setDate: (date: DatePickerType) => void;
}> = (props) => {
  const {date, setDate} = props;

  const jsDate = new Date(date.year, date.month, date.date);

  return (
    <RNDateTimePicker
      value={jsDate}
      mode="date"
      is24Hour
      display="default"
      onChange={(_, selectedDate) => {
        const newDate = selectedDate || jsDate;
        setDate({
          year: newDate.getFullYear(),
          month: newDate.getMonth(),
          date: newDate.getDate(),
        });
      }}
    />
  );
};
