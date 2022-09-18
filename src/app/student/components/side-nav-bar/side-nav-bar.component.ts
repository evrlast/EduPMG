import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {AuthorisationService} from "../../../services/authorisation.service";

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer | undefined

  constructor(private authService: AuthorisationService) {
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void { }

  logout() {
    this.authService.logout()
  }

}
