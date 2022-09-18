import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs';
import {ServerRequestService} from "../../../../services/server-request.service";

export type TopicData = {
  name: string,
  id: any
}

@Injectable({
  providedIn: 'root'
})

export class CourseInnerResolver{
  constructor(private server: ServerRequestService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<{routeData: TopicData[]}> {
    console.log(route.params['courseId'])
    return this.server.post<[any]>('getTopics', {courseId: route.params['courseId']}).pipe(map((data: any) => {
      return data.responseData
    })).toPromise()
  }
}
