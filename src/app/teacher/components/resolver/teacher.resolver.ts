import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {map, Observable, of} from 'rxjs';
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
