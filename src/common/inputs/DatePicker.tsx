import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";

export type DatePickerType = {
  date: number;
  month: number;
  year: number;
};

export const DatePicker: React.FC<{
  date: DatePickerType;
  setDate: (date: DatePickerType) => void;
}> = (props) => {
  const {date, setDate} = props;

  const jsDate = new Date(date.year, date.month, date.date);

  return (
    <DateTimePicker
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
