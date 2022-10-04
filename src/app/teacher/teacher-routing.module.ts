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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
