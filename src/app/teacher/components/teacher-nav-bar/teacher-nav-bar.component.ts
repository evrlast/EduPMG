import { Component, OnInit } from '@angular/core';
import {AuthorisationService} from "../../../services/authorisation.service";

@Component({
  selector: 'app-teacher-nav-bar',
  templateUrl: './teacher-nav-bar.component.html',
  styleUrls: ['./teacher-nav-bar.component.css']
})
export class TeacherNavBarComponent implements OnInit {

  constructor(private authService: AuthorisationService) {
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void { }

  logout() {
    this.authService.logout()
  }
}
