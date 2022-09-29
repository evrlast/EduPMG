import { Component, OnInit } from '@angular/core';
import {AuthorisationService} from "../../../services/authorisation.service";
import {ProfileData} from "../../../student/lazy-modules/profile/resolver/profile.resolver";
import {ActivatedRoute} from "@angular/router";
import {StudentData} from "../../../student/resolvers/student.resolver";
import {TeacherData} from "../resolver/teacher.resolver";

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit {

  teacher: TeacherData

  constructor(private route: ActivatedRoute) {
    this.teacher = this.route.snapshot.data['routeData']
  }

  ngOnInit(): void {
  }


}
