/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {Theme} from "../theme";
import {CompFC} from "../types";
import {DangerButton} from "./buttons/DangerButton";
import {DefaultButton} from "./buttons/DefaultButton";
import {LinkButton} from "./buttons/LinkButton";
import {PrimaryButton} from "./buttons/PrimaryButton";
import {SecondaryButton} from "./buttons/SecondaryButton";
import {PrimaryCard} from "./cards/PrimaryCard";
import {DefaultCarousel} from "./carousels/DefaultCarousel";
import CoverBackground from "./images/CoverBackground";
import {FitImage} from "./images/FitImage";
import {ScalableImage} from "./images/ScalableImage";
import {PrimaryDateInput} from "./inputs/PrimaryDateInput";
import {PrimaryPickerInput} from "./inputs/PrimaryPickerInput";
import {PrimaryTextInput} from "./inputs/PrimaryTextInput";
import SearchBar from "./inputs/SearchBar";
import {ErrorFull} from "./screens/ErrorFull";
import {LoadingFull} from "./screens/LoadingFull";
import {LoadingOverlay} from "./screens/LoadingOverlay";
import {NotFoundFull} from "./screens/NotFoundFull";
import {PrimarySpinner} from "./spinners/PrimarySpinner";
import {BoldText} from "./texts/BoldText";
import {CardTitle} from "./texts/CardTitle";
import {NormalText} from "./texts/NormalText";
import {NormalTextCentered} from "./texts/NormalTextCentered";
import {CenterWrapper} from "./wrappers/CenterWrapper";
import {ScreenWrapper} from "./wrappers/ScreenWrapper";
import {TouchKeyboardDismiss} from "./wrappers/TouchKeyboardDismiss";

export type ClassFC<FC extends CompFC<any>> = React.FC<Omit<Parameters<FC>[0], "theme">>;

export class Components {
  constructor(public theme: Theme) {}

  // eslint-disable-next-line react/display-name
  protected _ = (Component: CompFC<any>): ClassFC<CompFC<any>> => (props) => (
    <Component theme={this.theme} {...props} />
  );

  // Buttons
  DefaultButton = this._(DefaultButton);
  PrimaryButton = this._(PrimaryButton);
  SecondaryButton = this._(SecondaryButton);
  DangerButton = this._(DangerButton);
  LinkButton = this._(LinkButton);

  // Cards
  PrimaryCard = this._(PrimaryCard);

  // Carousels
  DefaultCarousel = DefaultCarousel;

  // Images
  CoverBackground = CoverBackground;
  FitImage = FitImage;
  ScalableImage = ScalableImage;

  // Inputs
  PrimaryDateInput = this._(PrimaryDateInput);
  PrimaryPickerInput = this._(PrimaryPickerInput);
  PrimaryTextInput = this._(PrimaryTextInput);
  SearchBar = this._(SearchBar);

  // Screens
  ErrorFull = this._(ErrorFull);
  LoadingFull = this._(LoadingFull);
  LoadingOverlay = this._(LoadingOverlay);
  NotFoundFull = this._(NotFoundFull);

  // Spinners
  PrimarySpinner = this._(PrimarySpinner);

  // Texts
  BoldText = this._(BoldText);
  CardTitle = this._(CardTitle);
  NormalText = this._(NormalText);
  NormalTextCentered = this._(NormalTextCentered);

  // Wrappers
  CenterWrapper = this._(CenterWrapper);
  ScreenWrapper = this._(ScreenWrapper);
  TouchKeyboardDismiss = this._(TouchKeyboardDismiss);
}
