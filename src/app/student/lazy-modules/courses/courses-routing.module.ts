import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CoursesComponent} from "./components/courses-page/courses.component";
import {CourseInnerComponent} from "./components/course-inner/course-inner.component";
import {CourseInnerResolver} from "./resolvers/course-inner.resolver";

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    path: ':courseId',
    component: CourseInnerComponent,
    resolve: {routeData: CourseInnerResolver}
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
}
