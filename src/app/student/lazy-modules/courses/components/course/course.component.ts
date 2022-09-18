import {Component, Input, OnInit} from '@angular/core';
import {CourseData} from "../../resolvers/courses.resolver";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: CourseData | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
