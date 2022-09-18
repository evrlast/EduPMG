import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {ServerRequestService} from "../../../../services/server-request.service";
import {map} from "rxjs";

export type CourseData = {
  name: string,
  author: string,
  topics: any,
  _id: string
}

@Injectable({
  providedIn: 'root'
})
export class CoursesResolver {
  constructor(private server: ServerRequestService) {
  }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<{routeData: CourseData[]}> {
    return this.server.get<[any]>('getCourses').pipe(map((data: any) => {
      return data.responseData
    })).toPromise()
  }
}
