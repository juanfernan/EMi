import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DocumentType } from '../models/entities/document-type';
import { map } from 'rxjs/operators';
import { SentryHandelError } from 'src/app/shared/services/sentry.handelerror';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient, private sentry: SentryHandelError) { }

  getAll(): Observable<Array<DocumentType>> {
    return this.http.post<Array<DocumentType>>(`${environment.API_URL}DataLists/GetDocumentTypesRegister`, null)
      .pipe(
        map((response: any) => response.DataList as DocumentType[])
      )
  }
}
