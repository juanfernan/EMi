import { ButtonType } from "src/app/shared/enums/enumerations";
import { ButtonConfiguration } from "src/app/shared/models/button-configuration";

const cancelButtonConfig = new ButtonConfiguration();

cancelButtonConfig.buttonType = ButtonType.Primary;
cancelButtonConfig.text = 'Cancelar Servicio';
cancelButtonConfig.width = "120x";

export const cancelButtonConfigExport = cancelButtonConfig;
