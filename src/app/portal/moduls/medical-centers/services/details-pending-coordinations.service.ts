import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsPendingCoordinationsService {

  constructor(private http: HttpClient) { }

  cancelCoordination(registerId: any,
    agendaType: string,
    RDACode: string,
    clinicCode: string,
    specialityCode: string,
    day: string,
    hour: string,
    document: string,
    phone: string | null,
    userEmail: string | null): Observable<any> {

    let url = environment.API_URL + 'Coordinations/CancelCoordination';
    let params = {
      "IdReference": registerId,
      "AgendaType": agendaType,
      "RDACode": RDACode,
      "ClinicCode": clinicCode,
      "SpecialityCode": specialityCode,
      "YearMonthDay": day,
      "Time": hour,
      "Document": document,
      "Phone": phone,
      "UserEmail": userEmail
    }
    return this.http
      .post(url, params)
  }
}
