import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterChildService {

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    /* */
  }

  sendDocuments(params: any) {
    let url = environment.API_URL + 'Family/GetRegistrationResponsible';
    return this.http.post(url, params)
  }

}
