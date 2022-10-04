import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) {

  }

  getEnabledServices(documentType: string, document: string, latitude: string, longitude: string): Observable<any> {
    let url = environment.API_URL + 'Services/GetEnabledServices';
    let params = {
      DocumentType: documentType,
      Document: document,
      Code: environment.mapCode,
      Latitude: latitude,
      Longitude: longitude
    }

    return this.http.post(url, params);
  }

}
