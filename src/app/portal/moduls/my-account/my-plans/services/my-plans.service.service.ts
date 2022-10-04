import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { getPlansPayload } from '../models/getPlansPayload';

@Injectable({
  providedIn: 'root'
})

export class MyPlansServices {

  constructor(private http: HttpClient) { }

  public getPlans(payload: any): Observable<any> {
    return this.http.post(`${environment.API_URL}PaymentGateway/GetContractedPlans`, payload);
  }

  public checkDebt(payload: getPlansPayload): Observable<any> {
    return this.http.post(`${environment.API_URL}/Affiliate/HasDebt`, payload);
  }

}
