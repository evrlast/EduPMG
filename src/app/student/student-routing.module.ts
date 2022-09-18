import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "../guard/auth.guard";
import {StudentComponent} from "./components/student-page/student.component";
import {CoursesResolver} from "./lazy-modules/courses/resolvers/courses.resolver";

const routes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
      {
        path: 'main',
        loadChildren: () => import('./lazy-modules/main/main.module').then(m => m.MainModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('./lazy-modules/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'courses',
        loadChildren: () => import('./lazy-modules/courses/courses.module').then(m => m.CoursesModule),
        canActivate: [AuthGuard],
        resolve: {routeData: CoursesResolver}
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
