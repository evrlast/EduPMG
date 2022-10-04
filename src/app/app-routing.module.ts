import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthGuard} from "./guard/auth.guard";
import {TeacherGuard} from "./guard/teacher.guard";
import {StudentGuard} from "./guard/student.guard";
import {ForbiddenComponent} from "./components/forbidden/forbidden.component";
import {RedirectResolver} from "./resolver/redirect.resolver";
import {NotFoundComponent} from "./components/not-found/not-found.component";


const routes: Routes = [
  {
    path: '',
    resolve: {resolveData: RedirectResolver},
    component: NotFoundComponent,
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    canActivate: [StudentGuard],
    outlet: 'student'
  },
  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule),
    canActivate: [TeacherGuard],
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
