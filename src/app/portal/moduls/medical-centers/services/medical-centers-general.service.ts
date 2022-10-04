import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicalCentersGeneralService {

  constructor(private http: HttpClient) { }

  public getClinicsNearby(payload: any) {
    return this.http.post(environment.API_URL + '/Coordinations/MedicalCenters', payload);
  }

}
