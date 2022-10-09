import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeacherRoutingModule} from './teacher-routing.module';
import {TeacherPageComponent} from './components/teacher-page/teacher-page.component';
import {SharedModule} from "../shared/shared.module";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {StudentModule} from "../student/student.module";


@NgModule({
  declarations: [
    TeacherPageComponent,
  ],
  exports: [
    TeacherRoutingModule,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    StudentModule,
  ]
})
export class TeacherModule {
}
