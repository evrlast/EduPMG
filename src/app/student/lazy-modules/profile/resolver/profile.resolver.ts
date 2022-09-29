import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs';
import {ServerRequestService} from "../../../../services/server-request.service";

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
  constructor(private server: ServerRequestService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ProfileData> {
    return this.server.get<[any]>('student/profile').pipe(map((data: any) => {
      return data
    })).toPromise()
  }
}
