import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestEventTypesService {

  constructor(private http: HttpClient) { }

  getEventType(): Observable<any> {
    return this.http.get<Array<DocumentType>>(`${environment.API_URL}/DataLists/GetEventType`);
  }

  getDocumentTypes(url: string): Observable<any> {
    return this.http.post<Array<DocumentType>>(`${environment.API_URL}/${url}`, null);
  } postValidateActive(documentType: any, document: any): Observable<any> {
    let params = {
      DocumentType: documentType,
      Document: document
    }
    return this.http.post<Array<DocumentType>>(`${environment.API_URL}/pqrs/ValidateActive`, params);
  }

}
