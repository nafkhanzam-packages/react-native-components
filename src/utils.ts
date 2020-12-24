import {getErrMessage} from "@nafkhanzam/react-architecture";
import {Alert, PermissionsAndroid} from "react-native";

const errExitAnyway = (err: unknown, onExitAnyway: () => void, onCancel?: () => void) => {
  console.error(err);
  const {title, msg} = getErrMessage(err);
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
    const {title, msg} = getErrMessage(err);
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
