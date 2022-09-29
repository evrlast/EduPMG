import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs';
import {ServerRequestService} from "../../../../services/server-request.service";

export type TopicInnerData = {
  name: string,
  content: any
}

@Injectable({
  providedIn: 'root'
})
export class TopicInnerResolver{
  constructor(private server: ServerRequestService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<{routeData: TopicInnerData}> {
    return this.server.post<[any]>('student/getTopicData', {topicId: route.params['topicId']}).pipe(map((data: any) => {
      return data
    })).toPromise()
  }
}
