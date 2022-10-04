import { ButtonType } from "src/app/shared/enums/enumerations";
import { ButtonConfiguration } from "src/app/shared/models/button-configuration";

const addAfiliateButtonConfig = new ButtonConfiguration();

addAfiliateButtonConfig.buttonType = ButtonType.Primary;
addAfiliateButtonConfig.text = 'Agregar familiar';
addAfiliateButtonConfig.width = "240px";

export const addAfiliateButtonConfigExport = addAfiliateButtonConfig;
