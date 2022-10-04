import { ButtonType } from "src/app/shared/enums/enumerations";
import { ButtonConfiguration } from "src/app/shared/models/button-configuration";

const acceptButtonConfig = new ButtonConfiguration();

acceptButtonConfig.buttonType = ButtonType.Primary;
acceptButtonConfig.text = 'ACEPTAR';
acceptButtonConfig.width = "140px";

export const acceptButtonConfigExport = acceptButtonConfig;
