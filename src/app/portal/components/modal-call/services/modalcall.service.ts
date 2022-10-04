import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalcallService {

  constructor(private http: HttpClient) { }

  getContactPhones(): Observable<any> {
    return this.http.post<Array<any>>(`${environment.API_URL}/DataLists/GetContactPhones`, null);
  }
}
