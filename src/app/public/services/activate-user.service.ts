import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivateUserService {

  constructor(private http: HttpClient) { }

  activateUser(verifyCode: any): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}Registration/ActivateUser`, JSON.stringify(verifyCode))
  }

  revertSpecialistRegistration(verifyCode: any): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}Registration/RevertSpecialistRegistration`, JSON.stringify(verifyCode))
  }
}