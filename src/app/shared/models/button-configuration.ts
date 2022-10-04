import { ButtonType } from "../enums/enumerations";

export class ButtonConfiguration {
  buttonType: ButtonType;
  width?: string;
  height?: string;
  imageName: string;
  text: string;
  fontsSize: string;
  lineHeight = "20px";
  color = "#4C4C4B";
  disabled: boolean;
}
