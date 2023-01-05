import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs';
import {ServerRequestService} from "../../../../services/server-request.service";
import {AuthorisationService} from "../../../../services/authorisation.service";

export type ProfileData = {
  name: string,
  surname: string,
  login: string,
  email: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver {
  constructor(private server: ServerRequestService, private authService: AuthorisationService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ProfileData> {
    return this.server.get<[any]>(this.authService.userType + '/profile').pipe(map((data: any) => {
      return data
    })).toPromise()
  }
}
