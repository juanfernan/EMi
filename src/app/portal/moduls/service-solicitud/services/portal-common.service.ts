import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/shared/models/user-login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortalCommonService {

  constructor(private http: HttpClient) { }

  getPersons(userLogin: UserLogin): Observable<any> {
    let url = environment.API_URL + 'Affiliate/GetPersons';
    let params = {
      IdReference: userLogin.idReference,
      DocumentType: userLogin.documentType,
      Document: userLogin.document,
    }

    return this.http.post(url, params)
  }
}
