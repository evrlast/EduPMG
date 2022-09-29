import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StudentData} from "../../resolvers/student.resolver";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  student: StudentData

  constructor(private route: ActivatedRoute) {
    this.student = this.route.snapshot.data['routeData']
  }

}
