import {Component, OnInit} from '@angular/core';
import {AuthorisationService} from "../../../services/authorisation.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private authService: AuthorisationService) {
  }

  ngOnInit(): void {

  }

  $name = this.authService.$name
  $surname = this.authService.$surname

}
