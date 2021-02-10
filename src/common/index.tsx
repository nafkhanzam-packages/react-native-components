import * as icons from "./icons";
import {ImageCarousel} from "./ImageCarousel";
import {CoverBackground} from "./images/CoverBackground";
import {CoverImage} from "./images/CoverImage";
import {FitImage} from "./images/FitImage";
import {DatePicker} from "./inputs/DatePicker";
import {DateTimePicker} from "./inputs/DateTimePicker";
import {Picker} from "./inputs/Picker";
import {TimePicker} from "./inputs/TimePicker";
import {CenterWrapper} from "./wrappers/CenterWrapper";
import {ScreenWrapper} from "./wrappers/ScreenWrapper";
import BlankSpacer from "react-native-blank-spacer";
import {FetchFlatList} from "./FetchFlatList";
import LinearGradient from "react-native-linear-gradient";
import Modal from "react-native-modal";
import CheckBox from "@react-native-community/checkbox";
import ImageView from "react-native-image-viewing";
import {FlatList} from "react-native";
import Carousel from "react-native-snap-carousel";
export class EssentialComponents {
  icons = icons;

  Carousel = Carousel;
  ImageCarousel = ImageCarousel;
  CoverBackground = CoverBackground;
  CoverImage = CoverImage;
  FitImage = FitImage;
  DatePicker = DatePicker;
  DateTimePicker = DateTimePicker;
  Picker = Picker;
  TimePicker = TimePicker;
  CenterWrapper = CenterWrapper;
  ScreenWrapper = ScreenWrapper;
  BS = BlankSpacer;
  FList = FlatList;
  FetchFlatList = FetchFlatList;

  LinearGradient = LinearGradient;
  Modal = Modal;
  CheckBox = CheckBox;
  ImageView = ImageView;
}
