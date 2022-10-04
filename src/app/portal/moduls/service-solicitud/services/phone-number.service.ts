import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestPhoneNumbers } from '../models/request-phone-numbers';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {


  constructor(private http: HttpClient
  ) {
  }

  getPhonesExperienceCenter(requestPhoneNumbers: RequestPhoneNumbers): any {
    let url = environment.API_URL + "DataLists/GetPhoneExperienceCenter";
    return this.http.post(url, requestPhoneNumbers)
  }
}
