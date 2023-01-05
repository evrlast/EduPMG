import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherPageComponent} from "./components/teacher-page/teacher-page.component";
import {MainComponent} from "../shared/components/main/main.component";
import {TeacherResolver} from "./components/resolver/teacher.resolver";

const routes: Routes = [
  {
    path: 'teacher',
    component: TeacherPageComponent,
    resolve: {routeData: TeacherResolver},
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
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
        loadChildren: () => import('./lazy-modules/courses/courses.module').then(m => m.CoursesModule)
      },
      {
        path: 'groups',
        loadChildren: () => import('./lazy-modules/groups/groups.module').then(m => m.GroupsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {
}
