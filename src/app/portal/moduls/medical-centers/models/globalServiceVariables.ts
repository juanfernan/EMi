import { Injectable } from '@angular/core';

@Injectable()
export class GlobalServiceVariables {
  pageTitle: string;
  //UserYoung Service: 
  resultUserYoung: string;
  //scheduledServices Service:
  currentService: boolean;
  //validateCoverageAddress Service
  standardizedAddress: string;
  countryValidateOther: string;
  //DeactivateUserAccount
  deactivateUserCode: string;
  deactivateUserComment: string;
  //Cambio de email celular
  cellPhoneRecoveryPassword: string;
  //Tipo de dispositivo de request de pagos
  typeRequestWebOrApp: number;
}