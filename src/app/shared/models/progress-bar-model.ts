import { ColorType } from "../enums/enumerations";

export class ProgressBarModel {
    radius: number;
    space: number;
    percent: number;
    imageHeight: number;
    imageWidth: number;
    showImage: boolean;
    showBackground: boolean;
    outerStrokeColor: string;
    innerStrokeColor: string;
    outerStrokeWidth: number;
    innerStrokeWidth: number;
    imageSrc: string;
    colorType: ColorType;
}