import {Component, OnInit} from '@angular/core';
import {AuthorisationService} from "../../../services/authorisation.service";

export type Profile = {
  login: string,
  name: string,
  surname: string,
  email: string,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  $name = this.authService.$name
  $surname = this.authService.$surname
  $login = this.authService.$login
  $email = this.authService.$email


  constructor(private authService: AuthorisationService) {
  }

  ngOnInit(): void {
  }

}
