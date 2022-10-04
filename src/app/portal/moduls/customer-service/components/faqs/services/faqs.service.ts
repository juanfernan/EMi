import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  constructor(private http: HttpClient) { }

  CategoriesFaqs(): Observable<any> {
    return this.http.post<Array<DocumentType>>(`${environment.API_URL}/Contents/GetCategoriesFaqs`, null);
  }

  GetAllFaqs(): Observable<any> {
    return this.http.post<Array<DocumentType>>(`${environment.API_URL}/Contents/GetAllFaqs`, null);
  }

  getFaqsById(FaqsId: any): Observable<any> {
    let params = {
      "FaqsId": FaqsId,
    }
    return this.http.post<Array<DocumentType>>(`${environment.API_URL}/Contents/GetFaqsById?FaqsId=` + FaqsId, null);
  }

  getFaqsBySubcategory(subcategoriesFaqsId: any): Observable<any> {
    return this.http.post<Array<DocumentType>>(`${environment.API_URL}/Contents/GetFaqsBySubcategory?subcategoriesFaqsId=` + subcategoriesFaqsId, null);
  }

}
