import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseData} from "../../resolvers/courses.resolver";


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: CourseData[]

  constructor(private route: ActivatedRoute) {
    this.courses = this.route.snapshot.data['routeData']
  }

  ngOnInit(): void {

  }
}
