import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentRoutingModule} from './student-routing.module';
import {HeaderComponent} from "./components/header/header.component";
import {SideNavBarComponent} from "./components/side-nav-bar/side-nav-bar.component";
import {StudentComponent} from "./components/student-page/student.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    StudentComponent,
    HeaderComponent,
    SideNavBarComponent,

  ],
  exports: [
    SideNavBarComponent,
    StudentRoutingModule,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class StudentModule {
}
