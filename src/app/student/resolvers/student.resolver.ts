import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs';
import {ServerRequestService} from "../../services/server-request.service";

export type StudentData = {
  name: string,
  surname: string,
}

@Injectable({
  providedIn: 'root'
})
export class StudentResolver {
  constructor(private server: ServerRequestService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<{studentData: StudentData}> {
    return this.server.get<[any]>('student').pipe(map((data: any) => {
      return data
    })).toPromise()
  }
}
