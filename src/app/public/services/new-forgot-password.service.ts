import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from 'src/app/shared/models/response/base-response';
import { environment } from 'src/environments/environment';
import { ForgotPass } from '../models/entities/forgot-pass';
import { SetPassword } from '../models/entities/setPassword';
import { NewForgotPassword } from '../models/requests/new-forgot-password';
import { VerifyCodeRequest } from '../models/requests/verify-code-request';

@Injectable({
  providedIn: 'root'
})

export class NewForgotPasswordService {

  headers: HttpHeaders;

  constructor(
    private http: HttpClient
    ) { }

  sendCodeForgotPassword (forgotPassword : NewForgotPassword): Observable<ForgotPass> {
    return this.http.post<ForgotPass>(`${environment.API_URL}Login/NewForgotPassword`, forgotPassword);
  }

  verifyCode (codeUser : VerifyCodeRequest): Observable<any> {
    return this.http.post<ForgotPass>(`${environment.API_URL}Login/VerifyCodeForgortPassword`, codeUser);
  }

  setPassword (password: SetPassword): Observable<any> {
    return this.http.post<BaseResponse>(`${environment.API_URL}Login/SetPassword`, password);
  }

  activationMail (user: any, profile: string): Observable<any> {
    this.headers = new HttpHeaders({
      'Profile': profile
  });

  let params = {
    User: user
  }
    return this.http.post<BaseResponse>(`${environment.API_URL}Registration/SendActivationEmail`, params, { headers: this.headers });
  }






}
