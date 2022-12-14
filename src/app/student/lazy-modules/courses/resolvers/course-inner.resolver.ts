import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs';
import {ServerRequestService} from "../../../../services/server-request.service";

export type TopicData = {
  name: string,
  _id: any
}

@Injectable({
  providedIn: 'root'
})

export class CourseInnerResolver{
  constructor(private server: ServerRequestService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<{routeData: TopicData[]}> {
    return this.server.post<[any]>('student/getTopics', {courseId: route.params['courseId']}).pipe(map((data: any) => {
      return data
    })).toPromise()
  }
}
