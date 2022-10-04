import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SentryHandelError } from 'src/app/shared/services/sentry.handelerror';
import { environment } from 'src/environments/environment';
import { City } from '../models/entities/city';
import { Departament } from '../models/entities/departament';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getDepartaments (): Observable<Array<Departament>> {
    return this.http.post<Array<Departament>>(`${environment.API_URL}DataLists/GetDepartments`, null)
    .pipe(
      map((response: any) => response.DataList as Departament[])
    )
  }

  getCities (codeDepartment: string): Observable<Array<City>> {
    let params = {
      value: codeDepartment
  }
    return this.http.post<Array<City>>(`${environment.API_URL}DataLists/GetCities`,params)
    .pipe(
      map((response: any) => response.DataList as City[])
    )
  }
}
