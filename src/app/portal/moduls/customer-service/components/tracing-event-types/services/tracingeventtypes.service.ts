import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TracingeventtypesService {

  constructor(
    private http: HttpClient
    ) { }

  postTracingPqrs(documentType: any, document: any): Observable<any> {
    let params = {
      DocumentType: documentType,
      Document: document
    }
    return this.http.post<Array<any>>(`${environment.API_URL}/pqrs/TracingPqrs`, params);
  }

}
