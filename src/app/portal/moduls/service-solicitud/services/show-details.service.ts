import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailsService {
  headers: Headers;
  country = environment.country;

  constructor(private http: HttpClient,

  ) { }


  getVideoCallPetition(_addressDetail: any): Observable<any> {
    let url = environment.API_URL + 'VideoCall/Petition';
    let params = {
      Type: _addressDetail.ServiceType,
      Document: _addressDetail.PatientDocument,
      DocumentType: _addressDetail.PatientDocumentType,
      Country: _addressDetail.Country,
      Department: _addressDetail.DepartmentId,
      City: _addressDetail.CityId,
      Neighborhood: _addressDetail.NeighborhoodId,
      Street: this.country === "co" ? _addressDetail.StreetSO : _addressDetail.Street,
      // NumberStreet: _addressDetail.DoorNumber,
      NumberStreet: "",
      Bis: _addressDetail.Bis,
      Apto: _addressDetail.Apartment,
      // Corner: _addressDetail.Corner,
      Corner: "",
      Reference: `${_addressDetail.Apartment} ${_addressDetail.AddressDetails}`,
      Latitude: _addressDetail.Latitude,
      longitude: _addressDetail.Longitude,
      Cellphone: _addressDetail.IsContactNumber === true ? _addressDetail.ApplicantCellPhone : _addressDetail.PatientCellPhone,
      CoverageZona: _addressDetail.Coverage
    }

    return this.http.post(url, params);
  }

}
