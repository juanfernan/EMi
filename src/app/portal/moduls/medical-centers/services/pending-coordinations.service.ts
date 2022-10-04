import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PendingCoordinationsService {

  constructor(private http: HttpClient) {
  }

  getPendingCoordinationsList(registerId: any): Observable<any> {
    let url = environment.API_URL + 'Coordinations/PendingCoordinations';
    let params = {
      "IdReference": registerId
    }
    return this.http
      .post(url, params)
  }

}
