import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataLists } from '../models/dataLists';
import { DetailListInvoices } from '../models/detail-list-invoices';
import { ListInvoicesFactures } from '../models/list-invoices-factures';

@Injectable({
  providedIn: 'root'
})
export class MyInvoicesService {
  listInvoices: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }

  //Get List Facture
  getListInvoices(listInvoicesFacures: ListInvoicesFactures): Observable<any> {
    let params = {
      DocumentType: listInvoicesFacures.DocumentType,
      Document: listInvoicesFacures.Document,
      IdStatusInvoice: listInvoicesFacures.IdStatusInvoice,
      StartDate: listInvoicesFacures.StartDate,
      Enddate: listInvoicesFacures.Enddate
    }
    return this.http.post<Array<DocumentType>>(`${environment.API_URL}Invoices/GetListInvoices`, params);
  }

  //Get Detail Facture
  getDetailInvoice(detailListInvoices: DetailListInvoices): Observable<any> {
    let params = {
      InternalSerie: detailListInvoices.InternalSeries,
      InternalNumber: detailListInvoices.InternalNumber
    }
    return this.http.post<Array<DocumentType>>(`${environment.API_URL}Invoices/GetDetailInvoice`, params);
  }

  //Get Status Facture
  getListStatusInvoice(): Observable<DataLists> {
    return this.http.post<DataLists>(`${environment.API_URL}Invoices/GetListStatusInvoice`, null);
  }

  //Set List Invoices
  setListInvoices(listInvoices: any) {
    this.listInvoices.next(listInvoices);
  }

  //Get List Invoices
  getListInvoices$(): Observable<any> {
    return this.listInvoices.asObservable();
  }

}
