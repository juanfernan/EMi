import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SentryHandelError } from 'src/app/shared/services/sentry.handelerror';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Gender } from '../models/entities/gender';
import { CivilStatus } from '../models/entities/civil-status';
import { Occupation } from '../models/entities/occupation';
import { MedicalCoverage } from '../models/entities/medical-coverage';
import { Neighborhood } from '../models/entities/neighborhood';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient, private sentry: SentryHandelError) { }

  getGender(): Observable<Array<Gender>> {
    return this.http.get<Array<Gender>>(`${environment.API_URL}DataLists/GetGenders`)
      .pipe(
        map((response: any) => response.DataList as Gender[])
      );
  }

  getCivilStatus(): Observable<Array<CivilStatus>> {
    return this.http.post<Array<CivilStatus>>(`${environment.API_URL}DataLists/GetMaritalStatus`, null)
      .pipe(
        map((response: any) => response.DataList as CivilStatus[])
      );
  }

  getOccupations(): Observable<Array<Occupation>> {
    return this.http.post<Array<Occupation>>(`${environment.API_URL}DataLists/GetOccupations`, null)
      .pipe(
        map((response: any) => response.DataList as Occupation[])
      );
  }

  getMedicalCoverage(): Observable<Array<MedicalCoverage>> {
    return this.http.post<Array<MedicalCoverage>>(`${environment.API_URL}DataLists/GetMedicalCoverage`, null)
      .pipe(
        map((response: any) => response.DataList as MedicalCoverage[])
      );
  }

  getNeighborhoods(cityCode: string): Observable<Array<Neighborhood>> {
    let params = {
      value: cityCode
  }
    return this.http.post<Array<Neighborhood>>(`${environment.API_URL}DataLists/GetNeighborhoods`, params)
      .pipe(
        map((response: any) => response.DataList as Neighborhood[])
      );
  }
  
}
