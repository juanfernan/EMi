import { ButtonType } from "src/app/shared/enums/enumerations";
import { ButtonConfiguration } from "src/app/shared/models/button-configuration";

const searchButtonConfig = new ButtonConfiguration();

searchButtonConfig.buttonType = ButtonType.Primary;
searchButtonConfig.text = 'Buscar';
searchButtonConfig.width = "100px";
searchButtonConfig.height = "40px";

export const searchButtonConfigExport = searchButtonConfig;
