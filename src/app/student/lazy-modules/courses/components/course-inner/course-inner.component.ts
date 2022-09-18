import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TopicData} from "../../resolvers/course-inner.resolver";

@Component({
  selector: 'app-course-inner',
  templateUrl: './course-inner.component.html',
  styleUrls: ['./course-inner.component.css'],
})
export class CourseInnerComponent implements OnInit {
  topics: TopicData[]

  constructor(private route: ActivatedRoute) {
    this.topics = this.route.snapshot.data['routeData']
  }

  ngOnInit(): void {
  }

}
