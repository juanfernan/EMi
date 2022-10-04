import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortalValidatorService {

  constructor() { }

  static numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  static validateNumberCellPhone(cellNumber: string): boolean {
    let startNumber = environment.startNumberCell;
    let lengthCell = environment.lengthCell;
    if (environment.country == 'co') {
      if (cellNumber.charAt(0) === startNumber) {
        if (cellNumber.length === Number(lengthCell))
          return true;
      }
      else
        return false;
    }
    else {
      if (cellNumber.charAt(0) === "0" && cellNumber.charAt(1) == "9") {
        if (cellNumber.length === Number(lengthCell))
          return true;
        else
          return false;
      }
      else return false;
    }
    return false
  }
}
