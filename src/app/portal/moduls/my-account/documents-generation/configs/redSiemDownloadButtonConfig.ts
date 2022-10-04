import { ButtonType } from "src/app/shared/enums/enumerations";
import { ButtonConfiguration } from "src/app/shared/models/button-configuration";

const downloadButtonConfig = new ButtonConfiguration();

downloadButtonConfig.buttonType = ButtonType.Tertiary;
downloadButtonConfig.text = 'Descargar';

export const downloadButtonConfigExport = downloadButtonConfig;