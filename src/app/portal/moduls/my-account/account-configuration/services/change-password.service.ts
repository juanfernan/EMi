import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChangePassword } from '../models/changePassword.model';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http: HttpClient
  ) {
  }

  changePasssword(paramsPassword: ChangePassword) {
    let url = environment.API_URL + 'Registration/ChangePassword';

    let params = {
      OldPassword: paramsPassword.oldPassword,
      NewPassword: paramsPassword.newPassword,
      UserName: paramsPassword.userName
    }
    return this.http.post(url, params)
  }

}
