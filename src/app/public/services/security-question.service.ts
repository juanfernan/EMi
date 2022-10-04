import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SecurityQuestions } from '../models/entities/security-questions';
import { SecurityQuestionRequest } from '../models/requests/security-question-request';

@Injectable({
  providedIn: 'root'
})
export class SecurityQuestionService {

  constructor(private http: HttpClient) { }

  getSecurityQuestion (requesSecurityQuestion: SecurityQuestionRequest): Observable<SecurityQuestions> {
    return this.http.post<SecurityQuestions>(`${environment.API_URL}Affiliate/GetSecurityQuestions`, requesSecurityQuestion);
  }
}
