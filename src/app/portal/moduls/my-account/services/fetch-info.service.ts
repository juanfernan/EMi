import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { docType } from '../my-afiliates/models/docType';
import { getBeneficiariesPayload } from '../my-afiliates/models/getBeneficiaries';

@Injectable({
  providedIn: 'root'
})
export class FetchInfoService {

  constructor(private http: HttpClient) { }

  public getBeneficiaries(payload: getBeneficiariesPayload) {
    return this.http.post(environment.API_URL + 'Affiliate/GetBeneficiaries', payload);
  }

  public getAllDocumentTypes(): Observable<Array<docType>> {
    return this.http.post<Array<docType>>(`${environment.API_URL}DataLists/GetDocumentTypesRegister`, null)
      .pipe(
        map((response: any) => response.DataList as docType[])
      )
  }

  public searchFamilyMember(payload: any): Observable<any> {
    return this.http.post(`${environment.API_URL}Family/SearchMember`, payload);
  }

}