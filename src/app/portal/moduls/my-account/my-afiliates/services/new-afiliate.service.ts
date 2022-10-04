import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import AfiliateModel from '../models/afiliateModel';

@Injectable({
  providedIn: 'root'
})
export class NewAfiliateService {

  constructor(private http: HttpClient) {
  }

  public uploadNewAfiliate(payload: AfiliateModel): Observable<any> {
    return this.http.post(`${environment.API_URL}Family/AddMember`, payload);
  }
}