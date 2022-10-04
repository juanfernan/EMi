import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { editUserEmail } from '../models/edit-user-email.model';

@Injectable({
  providedIn: 'root'
})
export class EditUserEmailService {

  constructor(private http: HttpClient
  ) {

  }

  //Change email
  ChangeEmail(editUserEmailParams: editUserEmail) {
    let url = environment.API_URL + 'Account/ChangeEmail';
    let params = {
      userName: editUserEmailParams.userName,
      oldEmail: editUserEmailParams.oldEmail,
      newEmail: editUserEmailParams.newEmail,
      confirmEmail: editUserEmailParams.confirmEmail
    }
    return this.http.post(url, params)
  }

}
