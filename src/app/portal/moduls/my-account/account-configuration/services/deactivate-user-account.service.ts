import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { deactivateUserAccountModel } from '../models/deactivateUserAccount.model';

@Injectable({
  providedIn: 'root'
})
export class DeactivateUserAccountService {

  constructor(private http: HttpClient
  ) { }

  //Dropdown: preguntas de desactivación de cuenta.
  GetDeactivationType() {
    let url = environment.API_URL + 'DataLists/GetDeactivationType';
    return this.http.get(url)
  }

  //Desactivación de la cuenta
  GetDeactivateUserAccount(DeactivateUserAccountModel: deactivateUserAccountModel) {
    let url = environment.API_URL + 'Account/DeactivateUserAccount';
    let params = {
      UserAccount: DeactivateUserAccountModel.UserAccount,
      SelectedOption: {
        code: DeactivateUserAccountModel.Code,
        comment: DeactivateUserAccountModel.Comment
      }
    }

    return this.http.post(url, params)
  }

}
