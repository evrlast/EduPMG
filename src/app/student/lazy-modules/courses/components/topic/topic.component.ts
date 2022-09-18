import {Component, Input, OnInit} from '@angular/core';
import {TopicData} from "../../resolvers/course-inner.resolver";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input() topic: TopicData | undefined

  constructor() {
  }

  ngOnInit(): void {
  }

}
