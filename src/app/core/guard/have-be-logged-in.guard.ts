import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HaveBeLoggedInGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let token = localStorage.getItem("token");
    let dateExpiries = localStorage.getItem("expires")

    if (token) {

      let getdate = new Date();
      let expires = dateExpiries ? new Date(dateExpiries) : '';
      if (getdate > expires) {
        this.router.navigate(['onboarding']);
        localStorage.clear();
        return false;
      } else {
        return true;
      }
    }
    else {
      this.router.navigate(['onboarding/ini-sesion']);
      return false;
    }
  }
}
