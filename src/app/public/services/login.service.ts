import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
//import { SentryHandelError } from 'src/app/shared/services/sentry.handelerror';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private http: HttpClient,
    //private sentry: SentryHandelError
    ) { }

  getLogin(email: string, password: string): Observable<any> {
    let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('UserName', email);
        urlSearchParams.append('Password', password);
        urlSearchParams.append('grant_type', 'password');
        let body = urlSearchParams.toString();

        return this.http.post<any>(`${environment.API_URL}Login/Login`, body)
  }
}
