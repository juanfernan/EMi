import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MenuResponse } from '../models/response/menu-response';
import { Version } from '../models/response/version-response';
import { SidenavItem } from '../models/side-nav-item';

@Injectable({
  providedIn: 'root'
})

export class MenuItemsServices {
  private _itemsSubject: BehaviorSubject<SidenavItem[]> = new BehaviorSubject<SidenavItem[]>([]);
  private _items: SidenavItem[] = [];
  items$: Observable<SidenavItem[]> = this._itemsSubject.asObservable();

  menu: any;
  breadcrumbs: any = [];
  LogoutItem: boolean = false;

  constructor(private http: HttpClient) { }

  getListAssociatedMenus (): Observable<MenuResponse> {
    let params = {
      Email: localStorage.getItem("userName"),
      DocumentType: localStorage.getItem("documentType"),
      Document: localStorage.getItem("document")
    }
    return this.http.post<MenuResponse>(`${environment.API_URL}common/GetListAssociatedMenus`, params);
  }

  GetSoftwareVersion (): Observable<Version> {
    let params = {
      code: 'Version Web'
    }
    return this.http.post<Version>(`${environment.API_URL}Contents/GetSoftwareVersion`, params);
  }

}
