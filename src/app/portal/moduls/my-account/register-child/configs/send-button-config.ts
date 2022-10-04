import { ButtonType } from "src/app/shared/enums/enumerations";
import { ButtonConfiguration } from "src/app/shared/models/button-configuration";

const sendButtonConfig = new ButtonConfiguration();

sendButtonConfig.buttonType = ButtonType.Primary;
sendButtonConfig.text = 'Enviar';
sendButtonConfig.width = "120px";

export const sendButtonConfigExport = sendButtonConfig;
