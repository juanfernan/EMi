import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SelectedChildService {

  constructor(private http: HttpClient) { }


  getYoungerEighteen(idReference: String) {
    let url = environment.API_URL + 'Family/GetYoungMembers';

    //Params
    let params = {
      IdReference: idReference
    }
    return this.http.post(url, params)

  }
}
