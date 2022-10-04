import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeacherRoutingModule} from './teacher-routing.module';
import {TeacherPageComponent} from './components/teacher-page/teacher-page.component';
import {TeacherNavBarComponent} from './components/teacher-nav-bar/teacher-nav-bar.component';
import {SharedModule} from "../shared/shared.module";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    TeacherPageComponent,
    TeacherNavBarComponent
  ],
  exports: [
    TeacherNavBarComponent,
    TeacherRoutingModule,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class TeacherModule {
}
