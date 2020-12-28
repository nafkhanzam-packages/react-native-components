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

//! Hacky with "any"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ClassFC<FC extends CompFC<any>> = React.FC<Omit<Parameters<FC>[0], "theme">>;

export class Components {
  constructor(public theme: Theme) {}

  // Buttons
  DefaultButton: ClassFC<typeof DefaultButton> = (props) => (
    <DefaultButton theme={this.theme} {...props} />
  );
  PrimaryButton: ClassFC<typeof PrimaryButton> = (props) => (
    <PrimaryButton theme={this.theme} {...props} />
  );
  SecondaryButton: ClassFC<typeof SecondaryButton> = (props) => (
    <SecondaryButton theme={this.theme} {...props} />
  );
  DangerButton: ClassFC<typeof DangerButton> = (props) => (
    <DangerButton theme={this.theme} {...props} />
  );
  LinkButton: ClassFC<typeof LinkButton> = (props) => <LinkButton theme={this.theme} {...props} />;

  // Cards
  PrimaryCard: ClassFC<typeof PrimaryCard> = (props) => (
    <PrimaryCard theme={this.theme} {...props} />
  );

  // Carousels
  DefaultCarousel = DefaultCarousel;

  // Images
  CoverBackground = CoverBackground;
  FitImage = FitImage;
  ScalableImage = ScalableImage;

  // Inputs
  PrimaryDateInput: ClassFC<typeof PrimaryDateInput> = (props) => (
    <PrimaryDateInput theme={this.theme} {...props} />
  );
  PrimaryPickerInput: ClassFC<typeof PrimaryPickerInput> = (props) => (
    <PrimaryPickerInput theme={this.theme} {...props} />
  );
  PrimaryTextInput: ClassFC<typeof PrimaryTextInput> = (props) => (
    <PrimaryTextInput theme={this.theme} {...props} />
  );
  SearchBar: ClassFC<typeof SearchBar> = (props) => <SearchBar theme={this.theme} {...props} />;

  // Screens
  ErrorFull: ClassFC<typeof ErrorFull> = (props) => <ErrorFull theme={this.theme} {...props} />;
  LoadingFull: ClassFC<typeof LoadingFull> = (props) => (
    <LoadingFull theme={this.theme} {...props} />
  );
  LoadingOverlay: ClassFC<typeof LoadingOverlay> = (props) => (
    <LoadingOverlay theme={this.theme} {...props} />
  );
  NotFoundFull: ClassFC<typeof NotFoundFull> = (props) => (
    <NotFoundFull theme={this.theme} {...props} />
  );

  // Spinners
  PrimarySpinner: ClassFC<typeof PrimarySpinner> = (props) => (
    <PrimarySpinner theme={this.theme} {...props} />
  );

  // Texts
  BoldText: ClassFC<typeof BoldText> = (props) => <BoldText theme={this.theme} {...props} />;
  CardTitle: ClassFC<typeof CardTitle> = (props) => <CardTitle theme={this.theme} {...props} />;
  NormalText: ClassFC<typeof NormalText> = (props) => <NormalText theme={this.theme} {...props} />;
  NormalTextCentered: ClassFC<typeof NormalTextCentered> = (props) => (
    <NormalTextCentered theme={this.theme} {...props} />
  );

  // Wrappers
  CenterWrapper: ClassFC<typeof CenterWrapper> = (props) => (
    <CenterWrapper theme={this.theme} {...props} />
  );
  ScreenWrapper: ClassFC<typeof ScreenWrapper> = (props) => (
    <ScreenWrapper theme={this.theme} {...props} />
  );
  TouchKeyboardDismiss: ClassFC<typeof TouchKeyboardDismiss> = (props) => (
    <TouchKeyboardDismiss theme={this.theme} {...props} />
  );
}
