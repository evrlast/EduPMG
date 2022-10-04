import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {AuthorisationService} from "../services/authorisation.service";

@Injectable({
  providedIn: 'root'
})
export class RedirectResolver implements Resolve<boolean> {
  constructor(private router: Router, private authService: AuthorisationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    if (this.authService.isLoggedIn) {
      this.router.navigate([this.authService.userType])
    }
    else {
      this.router.navigate(['login'])
    }

    return of(true);
  }
}
