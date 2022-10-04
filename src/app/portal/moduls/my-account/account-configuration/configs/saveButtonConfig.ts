import { ButtonType } from "src/app/shared/enums/enumerations";
import { ButtonConfiguration } from "src/app/shared/models/button-configuration";

const saveButtonConfig = new ButtonConfiguration();

saveButtonConfig.buttonType = ButtonType.Primary;
saveButtonConfig.text = 'GUARDAR';
saveButtonConfig.width = "140px";

export const saveButtonConfigExport = saveButtonConfig;
