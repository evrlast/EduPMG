import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from "./components/student-page/student.component";
import {CoursesResolver} from "./lazy-modules/courses/resolvers/courses.resolver";
import {MainComponent} from "../shared/components/main/main.component";
import {StudentResolver} from "./resolvers/student.resolver";

const routes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
    resolve: {routeData: StudentResolver},
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'profile',
        loadChildren: () => import('../shared/components/profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'courses',
        loadChildren: () => import('./lazy-modules/courses/courses.module').then(m => m.CoursesModule),
      }
    ]
  },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
