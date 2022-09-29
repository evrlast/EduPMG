import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeacherPageComponent} from "./components/teacher-page/teacher-page.component";
import {MainComponent} from "../shared/components/main/main.component";
import {AuthGuard} from "../guard/auth.guard";

const routes: Routes = [
  {
    path: 'teacher',
    component: TeacherPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        component: MainComponent,
        canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
