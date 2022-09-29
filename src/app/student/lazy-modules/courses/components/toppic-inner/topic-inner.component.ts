import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TopicInnerData} from "../../resolvers/topic-inner.resolver";

@Component({
  selector: 'app-topic-inner',
  templateUrl: './topic-inner.component.html',
  styleUrls: ['./topic-inner.component.css']
})
export class TopicInnerComponent implements OnInit {

  topic: TopicInnerData

  constructor(private route: ActivatedRoute) {
    this.topic = this.route.snapshot.data['routeData']
  }

  ngOnInit(): void {
  }

}
