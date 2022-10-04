import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PreRegisterResponse } from '../models/responses/pre-register-response';
import { DataLifeAccountVerificationRequest } from '../models/requests/data-life-account-verification';
import { PreRegisterRequest } from '../models/requests/pre-register-request';
import { User } from '../models/entities/user';
import { AccountVerificationResponse } from '../models/responses/account-verification-response';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  preRegister(preRegisterRequest: PreRegisterRequest): Observable<PreRegisterResponse> {
    return this.http.post<PreRegisterResponse>(`${environment.API_URL}Registration/PreRegister`, preRegisterRequest);
  }

  getAccountVerification(dataLifeAccountVerificationRequest: DataLifeAccountVerificationRequest): Observable<AccountVerificationResponse> {
    return this.http.post<AccountVerificationResponse>(`${environment.API_URL}Affiliate/GetDataLifeAccountVerification`, dataLifeAccountVerificationRequest);
  }

  saveUser(user: User): Observable<any> {
    return this.http.post<PreRegisterResponse>(`${environment.API_URL}Registration/Register`, user);
  }

  cancelRegister(user: User): Observable<any> {
    return this.http.post<PreRegisterResponse>(`${environment.API_URL}Registration/CancelPreRegister`, user);
  }
}
