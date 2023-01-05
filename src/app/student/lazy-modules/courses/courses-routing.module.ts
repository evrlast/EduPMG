import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CoursesComponent} from "./components/courses-page/courses.component";
import {CourseInnerComponent} from "./components/course-inner/course-inner.component";
import {CourseInnerResolver} from "./resolvers/course-inner.resolver";
import {TopicInnerComponent} from "./components/toppic-inner/topic-inner.component";
import {TopicInnerResolver} from "./resolvers/topic-inner.resolver";
import {CoursesResolver} from "./resolvers/courses.resolver";

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    resolve: {routeData: CoursesResolver}
  },
  {
    path: ':courseId',
    component: CourseInnerComponent,
    resolve: {routeData: CourseInnerResolver}
  },
  {
    path: 'topic/:topicId',
    component: TopicInnerComponent,
    resolve: {routeData: TopicInnerResolver}
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
}
