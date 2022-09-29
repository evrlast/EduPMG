import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthorisationService} from "../services/authorisation.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthorisationService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (this.authService.isLoggedIn) {
      if (route.url[0]?.path == 'login' || route.url[0]?.path == 'register') {
        this.router.navigate([this.authService.userType || 'student'])
        return false
      }
      return true
    }
    else {
      if (route.url[0]?.path == 'login' || route.url[0]?.path == 'register') {
        return true
      }

      this.router.navigate([this.authService.userType])
      return false
    }
  }


}
