import {Alert, PermissionsAndroid, TextStyle} from "react-native";
import {formatToGql} from "@nafkhanzam/common-utils";

export const fontWeights = {
  thin: "100" as TextStyle["fontWeight"],
  ultraLight: "200" as TextStyle["fontWeight"],
  light: "300" as TextStyle["fontWeight"],
  regular: "400" as TextStyle["fontWeight"],
  medium: "500" as TextStyle["fontWeight"],
  semibold: "600" as TextStyle["fontWeight"],
  bold: "700" as TextStyle["fontWeight"],
  heavy: "800" as TextStyle["fontWeight"],
  black: "900" as TextStyle["fontWeight"],
};

const formatError = (err: unknown) => {
  const {status: title = "Error!", message: msg} = formatToGql.toError(err);
  return {title, msg};
};

const errExitAnyway = (
  err: unknown,
  onExitAnyway: () => void,
  onCancel?: () => void,
  printError = true,
) => {
  if (printError) {
    console.error(err);
  }
  const {title, msg} = formatError(err);
  Alert.alert(
    title,
    msg,
    [
      {
        text: "Cancel",
        onPress: onCancel,
      },
      {
        text: "Exit Anyway",
        onPress: onExitAnyway,
      },
    ],
    {onDismiss: onCancel},
  );
};

const confirm = (title: string, message: string, onConfirm: () => void, onCancel?: () => void) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: "Cancel",
        onPress: onCancel,
        style: "cancel",
      },
      {text: "OK", onPress: onConfirm},
    ],
    {cancelable: false},
  );
};

export const alerts = {
  error: (err: unknown) => {
    console.error(err);
    const {title, msg} = formatError(err);
    if (msg === "Network request failed") {
      Alert.alert(
        title,
        "Anda sepertinya tidak terhubung dengan internet / sinyal anda lemah, Mohon coba kembali dengan jaringan yang lebih stabil",
      );
    } else {
      Alert.alert(title, msg);
    }
  },
  info: (title: string, message: string) => {
    Alert.alert(title, message);
  },
  errExitAnyway,
  getErrExitAnyway: (onExitAnyway: () => void, onCancel?: () => void) => (err: unknown) =>
    errExitAnyway(err, onExitAnyway, onCancel),
  confirm,
};

export const permissions = {
  requestCameraAndAudio: async () => {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ]);
    return (
      granted["android.permission.RECORD_AUDIO"] === PermissionsAndroid.RESULTS.GRANTED &&
      granted["android.permission.CAMERA"] === PermissionsAndroid.RESULTS.GRANTED
    );
  },
};
