import { ButtonType } from "src/app/shared/enums/enumerations";
import { ButtonConfiguration } from "src/app/shared/models/button-configuration";

const continueButtonConfig = new ButtonConfiguration();

continueButtonConfig.buttonType = ButtonType.Primary;
continueButtonConfig.text = 'Continuar';
continueButtonConfig.width = "140px";

export const continueButtonConfigExport = continueButtonConfig;

const PayButtonConfig = new ButtonConfiguration();

PayButtonConfig.buttonType = ButtonType.Primary;
PayButtonConfig.text = 'Pagar';
PayButtonConfig.width = "140px";

export const PayButtonConfigExport = PayButtonConfig;

const PayCoordinationButtonConfig = new ButtonConfiguration();

PayCoordinationButtonConfig.buttonType = ButtonType.Primary;
PayCoordinationButtonConfig.text = 'Pagar Coordinación';
PayCoordinationButtonConfig.width = "200px";

export const PayCoordinationButtonConfigExport = PayCoordinationButtonConfig;
