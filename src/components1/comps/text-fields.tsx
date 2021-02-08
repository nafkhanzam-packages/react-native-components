import {formatToString} from "@nafkhanzam/common-utils";
import React, {ReactNode, useState} from "react";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import {DefaultTheme, TextInput as RNTextInput} from "react-native-paper";
import {Comp1FC, Components1} from "..";
import {DatePickerType, fromDatePickerType} from "../../common/inputs/DatePicker";

type Props = {
  value: string;
  setValue: (text: string) => void;
  label?: string;
  placeholder?: string;
  secure?: boolean;
  dense?: boolean;
  multiline?: boolean;
  leftComp?: ReactNode;
  rightComp?: ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  comp: Components1;
};

type DateProps = Omit<Props, "value" | "setValue" | "disabled"> & {
  date: DatePickerType;
  setDate: (date: DatePickerType) => void;
};

type TypeProps = {
  color?: string;
  placeholderColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  roundness?: number;
  mode?: "outlined" | "flat";
  dense?: boolean;
  fonts?: typeof DefaultTheme["fonts"];
  fontSize?: number;
  leftComp?: ReactNode;
  rightComp?: ReactNode;
  fixMarginTop?: boolean;
};

const supress = {
  accessibilityComponentType: undefined,
  accessibilityTraits: undefined,
};

const BaseTextField: React.FC<{
  props: Props;
  typeProps: TypeProps;
}> = ({props, typeProps}) => {
  const left = props.leftComp ?? typeProps.leftComp;
  const right = props.rightComp ?? typeProps.rightComp;

  return (
    <RNTextInput
      {...supress}
      disabled={props.disabled}
      label={props.label}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.setValue}
      secureTextEntry={props.secure}
      mode={typeProps.mode}
      selectionColor={typeProps.color}
      underlineColor={typeProps.borderColor}
      multiline={props.multiline}
      dense={props.dense ?? typeProps.dense}
      left={left && <RNTextInput.Icon {...supress} name={() => left} />}
      right={right && <RNTextInput.Icon {...supress} name={() => right} />}
      style={{fontSize: typeProps.fontSize, marginTop: typeProps.fixMarginTop ? -7 : undefined}}
      theme={{
        fonts: typeProps.fonts,
        colors: {
          primary: typeProps.borderColor,
          background: typeProps.backgroundColor,
          onBackground: typeProps.backgroundColor,
          text: typeProps.color,
          placeholder: typeProps.placeholderColor,
        },
        roundness: typeProps.roundness ?? 10,
      }}
    />
  );
};

type Type = "main" | "search" | "catering" | "alamat" | "alamatwhite" | TypeProps;

const typeMap = (type: Type, comp: Components1): TypeProps => {
  if (typeof type !== "string") {
    return type;
  }
  const {theme} = comp;
  const fonts = {
    light: {
      fontFamily: theme.fonts.light,
    },
    medium: {
      fontFamily: theme.fonts.medium,
    },
    regular: {
      fontFamily: theme.fonts.regular,
    },
    thin: {
      fontFamily: theme.fonts.thin,
    },
  };
  switch (type) {
    case "main":
      return {
        color: theme.colors.mainForm.text,
        placeholderColor: theme.colors.mainForm.placeholder,
        borderColor: theme.colors.mainForm.border,
        backgroundColor: theme.colors.mainForm.background,
        mode: "outlined",
        fonts,
      };
    case "alamat":
      return {
        color: theme.colors.mainForm.text,
        placeholderColor: theme.colors.mainForm.placeholder,
        borderColor: theme.colors.mainForm.border,
        backgroundColor: theme.colors.primary.light,
        mode: "flat",
        fonts,
      };
    case "alamatwhite":
      return {
        color: theme.colors.mainForm.text,
        placeholderColor: theme.colors.mainForm.placeholder,
        borderColor: theme.colors.black,
        backgroundColor: theme.colors.white,
        mode: "flat",
        dense: true,
        fonts,
      };
    case "catering":
      return {
        color: theme.colors.mainForm.text,
        placeholderColor: theme.colors.mainForm.placeholder,
        borderColor: theme.colors.mainForm.border,
        backgroundColor: theme.colors.primary.light,
        mode: "outlined",
        fonts,
      };
    case "search":
      return {
        leftComp: <comp.icons.MaterialIcons name="search" color={theme.colors.black} size={20} />,
        color: theme.colors.mainForm.text,
        placeholderColor: theme.colors.mainForm.placeholder,
        borderColor: theme.colors.mainForm.border,
        backgroundColor: theme.colors.mainForm.background,
        mode: "outlined",
        roundness: 999,
        dense: true,
        fonts,
        fixMarginTop: true,
      };
  }
};

export const TextField: Comp1FC<{type?: Type} & Props> = (props) => {
  return <BaseTextField props={props} typeProps={typeMap(props.type ?? "main", props.comp)} />;
};

export const DateTextField: Comp1FC<{type?: Type} & DateProps> = (props) => {
  const [visible, setVisible] = useState(false);

  if (!props.rightComp) {
    props.rightComp = <props.comp.icons.MaterialIcons name="calendar" />;
  }

  return (
    <>
      {visible && (
        <props.comp.DatePicker
          date={props.date}
          setDate={(newDate) => {
            setVisible(false);
            props.setDate(newDate);
          }}
        />
      )}
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <BaseTextField
          props={{
            ...props,
            disabled: true,
            value: formatToString.toDate(fromDatePickerType(props.date)),
            setValue: () => {},
          }}
          typeProps={typeMap(props.type ?? "main", props.comp)}
        />
      </TouchableWithoutFeedback>
    </>
  );
};
