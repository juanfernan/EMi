import { ButtonType } from "src/app/shared/enums/enumerations";
import { ButtonConfiguration } from "src/app/shared/models/button-configuration";

const cancelButtonConfig = new ButtonConfiguration();

cancelButtonConfig.buttonType = ButtonType.Tertiary;
cancelButtonConfig.text = 'CANCELAR';
cancelButtonConfig.width = "140px";

export const cancelButtonConfigExport = cancelButtonConfig;