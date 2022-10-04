import { ButtonType } from "src/app/shared/enums/enumerations";
import { ButtonConfiguration } from "src/app/shared/models/button-configuration";

const restoreButtonConfig = new ButtonConfiguration();

restoreButtonConfig.buttonType = ButtonType.Primary;
restoreButtonConfig.text = 'Restaurar filtros';
restoreButtonConfig.width = "180px";

export const restoreButtonConfigExport = restoreButtonConfig;
