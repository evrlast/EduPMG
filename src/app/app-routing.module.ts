import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthGuard} from "./guard/auth.guard";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    canActivate: [AuthGuard],
    outlet: 'student'
  },
  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule),
    canActivate: [AuthGuard],
    outlet: 'teacher'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard],
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
