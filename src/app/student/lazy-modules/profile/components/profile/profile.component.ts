import {Component, OnInit} from '@angular/core';
import {AuthorisationService} from "../../../../../services/authorisation.service";
import {StudentData} from "../../../../resolvers/student.resolver";
import {ActivatedRoute} from "@angular/router";
import {ProfileData} from "../../resolver/profile.resolver";

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
  profile: ProfileData

  constructor(private route: ActivatedRoute) {
    this.profile = this.route.snapshot.data['routeData']
  }

  ngOnInit(): void {
  }

}
