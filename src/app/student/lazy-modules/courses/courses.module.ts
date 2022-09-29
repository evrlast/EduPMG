import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesComponent} from './components/courses-page/courses.component';
import {CoursesRoutingModule} from "./courses-routing.module";
import {CourseComponent} from './components/course/course.component';
import {CourseInnerComponent} from './components/course-inner/course-inner.component';
import {TopicComponent} from './components/topic/topic.component';
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { TopicInnerComponent } from './components/toppic-inner/topic-inner.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CourseInnerComponent,
    TopicComponent,
    TopicInnerComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    FormsModule
  ]
})
export class CoursesModule {
}
