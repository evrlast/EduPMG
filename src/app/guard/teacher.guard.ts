import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthorisationService} from "../services/authorisation.service";

@Injectable({
  providedIn: 'root'
})
export class TeacherGuard implements CanActivate {
  constructor(private authService: AuthorisationService) {  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.isLoggedIn && this.authService.userType === 'teacher';


  }

}
