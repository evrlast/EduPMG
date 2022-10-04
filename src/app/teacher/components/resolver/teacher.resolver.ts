import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs';
import {ServerRequestService} from "../../../services/server-request.service";

export type TeacherData = {
  name: string,
  surname: string,
}

@Injectable({
  providedIn: 'root'
})
export class TeacherResolver {
  constructor(private server: ServerRequestService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<{studentData: TeacherData}> {
    return this.server.get<[any]>('teacher').pipe(map((data: any) => {
      return data
    })).toPromise()
  }
}
