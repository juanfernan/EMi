import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListPhoneModel } from '../models/entities/list-phone-model';
import { UserFulPhonesRequest } from '../models/requests/usefulphones-request';

@Injectable({
  providedIn: 'root'
})
export class UsefulPhonesServices {

  constructor(private http: HttpClient) { }

  getPhones (usePhonesRequest : UserFulPhonesRequest): Observable<ListPhoneModel> {
    return this.http.post<ListPhoneModel>(`${environment.API_URL}DataLists/GetUsefulPhones`, usePhonesRequest);
  }
}
