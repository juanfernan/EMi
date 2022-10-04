import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentValidationRequest } from 'src/app/public/models/requests/document-validation-request';
import { DocumentValidationResponse } from 'src/app/public/models/responses/document-validation-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonMiddService {
  constructor(private http: HttpClient) { }
  validateDocument (documentValidationRequest : DocumentValidationRequest) : Observable<DocumentValidationResponse>{
   return this.http.post<DocumentValidationResponse>(`${environment.API_URL}CommonMidd/ValidateDocument`, documentValidationRequest);
  }
}
