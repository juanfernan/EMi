import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {

  constructor(
    private http:HttpClient
    ) { }

  getLegalContent (tagCode: string): Observable<any> {
    let params = {
        Tag: tagCode
    }
    return this.http.post<Array<any>>(`${environment.API_URL}Contents/GetLegalContent`, params);
  }

}
