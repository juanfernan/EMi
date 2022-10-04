import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SentryHandelError } from 'src/app/shared/services/sentry.handelerror';
import { UserLogin } from 'src/app/shared/models/user-login';
import { MyData } from '../models/my-data';
import { String } from 'typescript-string-operations';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http: HttpClient, private sentry: SentryHandelError) { }

  getAffiliate(userLogin: UserLogin): Observable<Array<DocumentType>> {
    let params = {
        DocumentType: userLogin.documentType,
        Document: userLogin.document
      }
    return this.http.post<Array<DocumentType>>(`${environment.API_URL}Affiliate/GetAffiliate`, params);
  }

  update(user: MyData) : Observable<any>{

    let params = {
      DocumentType: user.DocumentType,
      Document: user.Document,
      Email: user.Email,
      Gender: user.Gender,
      Department: user.Department,
      City: user.City,
      Neighborhood: user.Neighborhood,
      OfficePhoneNumber: user.OfficePhoneNumber,
      HomePhoneNumber: user.HomePhoneNumber,
      CellPhoneNumber: user.CellPhoneNumber,
      MedicalCoverage: user.MedicalCoverage,
      Childrens: !String.IsNullOrWhiteSpace(user.Childrens) ? user.Childrens : "0",
      Occupation: user.Occupation,
      MaritalStatus: user.MaritalStatus,
      Stratum: user.Stratum
    }

    return this.http.post<any>(`${environment.API_URL}Affiliate/UpdateAffiliate`, params);
  }
}
