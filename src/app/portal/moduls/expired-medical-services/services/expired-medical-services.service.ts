import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpiredMedicalServicesService {

  constructor(private http: HttpClient) { }

  getExpiredProducts(documentType: any, document: any) {
    let params = {
      DocumentType: documentType,
      Document: document,
      Type: 1 //Todos los resultados.
    }
    return this.http.post(environment.API_URL + 'expiredmedicalservices/GetExpiredProducts', params);
  }

  public getBeneficiaries(payload: any) {
    return this.http.post(environment.API_URL + 'Affiliate/GetBeneficiaries', payload);
  }
}
