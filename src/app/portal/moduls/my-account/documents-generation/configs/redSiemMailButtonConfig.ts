import { ButtonType } from "src/app/shared/enums/enumerations";
import { ButtonConfiguration } from "src/app/shared/models/button-configuration";

const emailButtonConfig = new ButtonConfiguration();

emailButtonConfig.buttonType = ButtonType.Tertiary;
emailButtonConfig.text = 'Enviar por mail';

export const emailButtonConfigExport = emailButtonConfig;